<route lang="json5">
{
  style: {
    navigationBarTitleText: '登录'
  },
}
</route>

<script lang="ts" setup>
const form = ref({
  phone: '',
  code: '',
  checked: false,
})

const current = ref(1)

const privacySetting = ref({
  needAuthorization: false,
  privacyContractName: '',
})
const showAuthorization = ref(false)

function onChecked() {
  showAuthorization.value = true
}

function openPrivacyContract() {
  wx.openPrivacyContract({
    success: () => {}, // 打开成功
    fail: () => {}, // 打开失败
    complete: () => {},
  })
}

function handleAgreePrivacyAuthorization() {
  form.value.checked = true
  showAuthorization.value = false
}

function handleRefusePrivacyAuthorization() {
  form.value.checked = false
  showAuthorization.value = false
}

const smsCode = ref({
  text: '获取验证码',
  loading: false,
  disabled: false,
})

const end = ref(Date.now())

function getSmsCode() {
  smsCode.value.disabled = true
  end.value = Date.now() + 60 * 1000
}

function countDownEnd() {
  smsCode.value.disabled = false
  end.value = Date.now()
}

onLoad(() => {
  wx.getPrivacySetting({
    success: (res) => {
      privacySetting.value.needAuthorization = res.needAuthorization
      privacySetting.value.privacyContractName = res.privacyContractName
    },
    fail: () => {},
    complete: () => {},
  })
})
</script>

<template>
  <view class="p-56rpx page">
    <view class="relative text-60 text-[#333] title">
      <view class="relative z-1">
        登录
      </view>
    </view>
    <view class="mt-10rpx text-32 text-[#ffaa00]">
      欢迎使用暖阳云被小程序
    </view>
    <view class="flex flex-col gap-20rpx mt-80rpx login">
      <view class="item" :class="{ active: current === 1 }">
        <nut-input
          v-model="form.phone"
          placeholder="输入手机号码"
          type="number"
          custom-style="--nut-input-padding: 30rpx 40rpx;"
          :border="false"
          clearable
          @focus="current = 1"
        >
          <template #left>
            <view class="i-fluent-phone-16-filled text-40 text-[#666]" />
          </template>
        </nut-input>
      </view>
      <view class="item" :class="{ active: current === 2 }">
        <nut-input
          v-model="form.code"
          type="number"
          placeholder="输入验证码"
          custom-style="--nut-input-padding: 30rpx 40rpx;"
          :border="false"
          clearable
          @focus="current = 2"
        >
          <template #left>
            <view class="i-fluent-password-16-filled text-40 text-[#666]" />
          </template>

          <template #right>
            <nut-button
              plain
              size="small"
              custom-color="#ffaa00"
              :loading="smsCode.loading"
              :disabled="smsCode.disabled"
              @click="getSmsCode"
            >
              <text v-if="!smsCode.disabled">
                获取验证码
              </text>
              <view v-else class="flex items-center text-12px text-[#ffaa00]">
                <nut-countdown :end-time="end" format="ss" custom-style="font-size: 12px;" @on-end="countDownEnd" />s后重新获取
              </view>
            </nut-button>
          </template>
        </nut-input>
      </view>
      <!-- <nut-checkbox
        v-model="form.checked"
        label="用户信息协议"
        custom-style="--nut-primary-color: #ffaa00;"
        @change="onChecked"
      >
        用户信息协议
      </nut-checkbox> -->
      <view class="flex items-center gap-16rpx text-28rpx text-#333" @click="onChecked">
        <view v-if="!form.checked" class="i-fluent-checkbox-unchecked-16-regular text-32rpx" />
        <view v-else class="i-fluent-checkbox-checked-16-regular text-32rpx text-[#ffaa00]" />
        <text>用户信息协议</text>
      </view>
      <view class="mt-120rpx">
        <nut-button
          block
          custom-color="#ffaa00"
          custom-style="--nut-button-default-border-color: #ffaa00;"
        >
          登录
        </nut-button>
      </view>
    </view>

    <nut-popup
      v-model:visible="showAuthorization"
      position="bottom"
      round
      safe-area-inset-bottom
      custom-style="padding: 30px 28px;"
    >
      <view class="text-32 text-#333">
        用户隐私保护提示
      </view>
      <view class="mt-2em mb-2em text-24 text-#999">
        在你使用暖阳云被服务之前，请仔细阅读 <text class="text-[#3E4F8E]" @click="openPrivacyContract">
          {{ privacySetting.privacyContractName }}
        </text> ，如你同意该指引，请点击“同意”开始使用本小程序
      </view>
      <view class="flex gap-20px">
        <button style="width: 100%;font-size: 14px;" @click="handleRefusePrivacyAuthorization">
          拒绝
        </button>
        <button style="width: 100%;font-size: 14px;" type="primary" open-type="agreePrivacyAuthorization" @agreeprivacyauthorization="handleAgreePrivacyAuthorization">
          同意
        </button>
      </view>
    </nut-popup>
  </view>
</template>

<style>
page {
  background-color: #fff;
}
button {
  margin: 0;
  padding: 0;
}
</style>

<style lang="scss" scoped>
.title {
  display: inline-block;
}
.title::after {
  content: '';
  position: absolute;
  bottom: 5rpx;
  left: 0;
  width: 100%;
  height: 12rpx;
  background-color: #ffaa00;
}
.login {
  .item {
    border-radius: 8rpx;
    overflow: hidden;
    transition: all .3s;
  }
  .active {
    box-shadow: 0 0 10rpx rgba($color: #000000, $alpha: .1);
  }
}
</style>
