<script lang="ts" setup>
import mpHtml from 'mp-html/dist/uni-app/components/mp-html/mp-html'

onLoad((options: any) => {
  uni.setNavigationBarTitle({
    title: options.title,
  })
})
</script>

<template>
  <view class="p-22rpx">
    <view class="p-22rpx bg-#fff rounded-18rpx">
      <mp-html content="<div>Hello World!</div>" />
    </view>
  </view>
</template>

<style lang="scss" scoped>
</style>
