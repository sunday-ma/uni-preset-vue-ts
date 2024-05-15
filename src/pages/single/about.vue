<route lang="json5">
{
  style: {
    navigationBarTitleText: '关于我们'
  },
}
</route>

<script lang="ts" setup>
import mpHtml from 'mp-html/dist/uni-app/components/mp-html/mp-html'

const { phoneCall } = useCall()
</script>

<template>
  <view class="page">
    <view class="header">
      <image
        src="@/static/about.jpg"
        mode="widthFix"
        class="w-full"
      />
    </view>
    <view class="relative z-10 px-54rpx mt--224rpx main">
      <view class="card">
        <view class="text-28 text-#66421E text-center">
          关于暖阳云被小程序
        </view>
        <view class="text-28 text-#666 mt-32rpx">
          <mp-html
            content="<div>暖阳云被床品管家服务致力于为追求高品质生活的人们提供洁净、舒适的床品服务。同时，无论是露营，住民宿，酒店或者是住亲友家还是家里来客人都可以通过我们的服务能够享受更舒适，方便的体验，我们相信，通过我们的努力，您将享受到更加健康、美好的睡眠环境。让我们一起，用暖阳云被床品管家服务，开启全新的睡眠时代！</div>"
          />
        </view>
      </view>
      <view class="card">
        <view class="text-28 text-#66421E text-center">
          联系我们
        </view>
        <view class="flex flex-col items-center mt-24rpx">
          <view class="text-28 text-#3E3A39 leading-relaxed" @click="phoneCall('114')">
            联系电话：<text class="text-#666">
              0531-1234 5678
            </text>
          </view>
          <view class="text-28 text-#3E3A39 leading-relaxed">
            联系地址：<text class="text-#666">
              山东省济南市xx区xx街道xx号
            </text>
          </view>
          <view class="text-28 text-#3E3A39 leading-relaxed">
            电子邮箱：<text class="text-#666">
              12345789@163.com
            </text>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.card {
  border: 1px solid #FFAA00;
  --at-apply: p-40rpx rounded-18rpx bg-[#fff];
}

.card + .card {
  margin-top: 24rpx;
}
</style>
