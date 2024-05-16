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
            >
              获取验证码
            </nut-button>
          </template>
        </nut-input>
      </view>
      <nut-checkbox
        v-model="form.checked"
        label="用户信息协议"
        custom-style="--nut-primary-color: #ffaa00;"
      >
        用户信息协议
      </nut-checkbox>
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
  </view>
</template>

<style>
page {
  background-color: #fff;
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
