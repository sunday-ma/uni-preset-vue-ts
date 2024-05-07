<route lang="json5">
{
  style: {
    navigationBarTitleText: '首页',
    navigationStyle: 'custom'
  },
}
</route>

<script lang="ts" setup>
import type { IJson } from '@/interfaces/IJson'

function swiperAnimationFinishEvent(event: IJson) {
  console.log(event.detail.current)
}
</script>

<template>
  <view class="page">
    <!-- #region Banner -->
    <view class="relative banner">
      <swiper
        autoplay
        circular
        class="h-539rpx"
        @animationfinish="swiperAnimationFinishEvent"
      >
        <swiper-item>
          <image
            src="@/static/banner.png"
            mode="widthFix"
            class="w-full"
          />
        </swiper-item>
        <swiper-item>
          <image
            src="@/static/banner.png"
            mode="widthFix"
            class="w-full"
          />
        </swiper-item>
      </swiper>
      <view class="absolute bottom-120rpx left-50% translate-x--50% flex items-center gap-12rpx swiper-dots">
        <view class="dots active" />
        <view class="dots" />
        <view class="dots" />
      </view>
    </view>
    <!-- #endregion Banner -->

    <!-- #region 主体内容 -->
    <view class="relative z-10 px-28rpx mt--98rpx">
      <!-- #region 金刚区 -->
      <view class="grid grid-cols-3 gap-12rpx king-kong-district">
        <view class="flex flex-col items-center h-292rpx pt-60rpx rounded-18rpx bg-#fff">
          <image
            src="@/static/kingkong-1.png"
            mode="widthFix"
            class="w-91rpx icon"
          />
          <text class="mt-32rpx">
            领用码
          </text>
        </view>
        <view class="flex flex-col items-center h-292rpx pt-60rpx rounded-18rpx bg-#fff">
          <image
            src="@/static/kingkong-2.png"
            mode="widthFix"
            class="w-91rpx icon"
          />
          <text class="mt-32rpx">
            换租码
          </text>
        </view>
        <view class="flex flex-col items-center h-292rpx pt-60rpx rounded-18rpx bg-#fff">
          <image
            src="@/static/kingkong-3.png"
            mode="widthFix"
            class="w-91rpx icon"
          />
          <text class="mt-32rpx">
            归还码
          </text>
        </view>
      </view>
    <!-- #endregion 金刚区 -->
    </view>
    <!-- #endregion 主体内容 -->
    <!-- <view
      bg="blue-400 hover:blue-500 dark:blue-500 dark:hover:blue-600"
      text="sm white"
      p="y-2 x-4"
      border="2 rounded blue-200"
      transition-all
    >
      属性化模式
    </view> -->
  </view>
</template>

<style lang="scss" scoped>
.dots {
  width: 24rpx;
  height: 8rpx;
  background: rgba($color: #fff, $alpha: .5);
  border-radius: 24rpx;
  &.active {
    background: #FFAA00;
  }
}

// #region 金刚区
// #endregion 金刚区
</style>
