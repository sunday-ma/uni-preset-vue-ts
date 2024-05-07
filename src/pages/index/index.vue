<route lang="json5">
{
  style: {
    navigationBarTitleText: '首页',
  },
}
</route>

<script lang="ts" setup>
const toast = useToast()
function loadTodos() {
  toast.text('文字提示')
}
</script>

<template>
  <nut-toast />
  <view class="grid gap-30rpx p-20rpx">
    <view class="i-carbon-account" />
    <button @click="loadTodos">
      请求接口
    </button>
  </view>
</template>

<style lang="scss" scoped>
  .span {
    --at-apply: text-center my-0 font-medium text-40rpx
  }
</style>
