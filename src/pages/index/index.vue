<route lang="json5">
{
  style: {
    navigationBarTitleText: '首页'
  },
}
</route>

<script lang="ts" setup>
const title = ref('123')
</script>

<template>
  <view class="page">
    {{ title }}
    <view class="i-carbon-carbon-for-ibm-product" />
    <nut-button type="primary">
      主要按钮
    </nut-button>
    <view class="grid gap-20rpx">
      <view class="h-30vh bg-#f1f1f1" />
      <view class="h-30vh bg-#f1f1f1" />
      <view class="h-30vh bg-#f1f1f1" />
      <view class="h-30vh bg-#f1f1f1" />
      <view class="h-30vh bg-#f1f1f1" />
      <view class="h-30vh bg-#f1f1f1" />
    </view>
  </view>
</template>

<style lang="scss" scoped>

</style>
