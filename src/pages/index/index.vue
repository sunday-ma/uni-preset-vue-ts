<route lang="json5">
{
  style: {
    navigationBarTitleText: '首页'
  },
}
</route>

<script lang="ts" setup>
import { AirDateTime } from 'airpower'

console.log(AirDateTime.getMilliTimeStamps(new Date()))
console.log(AirDateTime.formatFromMilliSecond(1717385307332))

const showBottom = ref(false)

function showPopup() {
  showBottom.value = true
}

const phone = ref('')
const code = ref('')

onLoad(() => {
})
</script>

<template>
  <view class="page">
    <view class="px-20rpx flex flex-col gap-20rpx">
      <view class="i-carbon-carbon-for-ibm-product" />
      <nut-button type="primary">
        主要按钮
      </nut-button>
      <nut-button type="primary" @click="showPopup">
        拉起手机号短信验证
      </nut-button>
    </view>

    <!-- #region 手机号短信验证 -->
    <nut-popup
      v-model:visible="showBottom"
      round
      position="bottom"
      :custom-style="{ height: '70%', background: '#F3F3F3' }"
      :close-on-click-overlay="false"
      :safe-area-inset-bottom="true"
    >
      <view class="phone-sms-verify p-58rpx">
        <view class="flex items-center">
          <image
            src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg"
            mode="aspectFill"
            class="mr-12rpx rounded-full h-50rpx w-50rpx"
          />
          <text class="text-28rpx text-#000 font-bold">
            测试小程序
          </text>
        </view>

        <view class="mt-40rpx flex flex-col">
          <text class="text-32rpx text-#000 font-bold">
            申请获取并验证你的手机号
          </text>
          <text class="mt-.5em text-24rpx text-#999">
            获取该用户相关接口数据
          </text>
        </view>

        <view class="p-20rpx mt-50rpx bg-#fff rounded-18rpx">
          <nut-input v-model="phone" :border="false" placeholder="请输入手机号" />
          <nut-input v-model="code" :border="false" placeholder="请输入验证码" />
          <view class="mt-10rpx w-100%">
            <nut-button
              type="primary"
              disabled
              :custom-style="{ width: '100%', borderRadius: '8rpx' }"
            >
              登录
            </nut-button>
          </view>
        </view>
      </view>
    </nut-popup>
    <!-- #endregion 手机号短信验证 -->
  </view>
</template>

<style lang="scss" scoped>

</style>
