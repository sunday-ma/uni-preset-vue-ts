<route lang="json5">
{
  style: {
    navigationBarTitleText: '首页',
  },
}
</route>

<script lang="ts" setup>
// const toast = useToast()
// function loadTodos() {
//   toast.text('文字提示')
// }
// import { createAlova, useRequest } from 'alova'
// import AdapterUniapp from '@alova/adapter-uniapp'

// const alovaInst = createAlova({
//   baseURL: 'https://jsonplaceholder.typicode.com',
//   ...AdapterUniapp(),
// })

// function todo() {
//   return alovaInst.Get<{ data: { completed: boolean, title: string, id: number, userId: number } }>('/todos/1', {
//     // 设置的参数将传递给uni.request
//     enableHttp2: true,
//     sslVerify: false,
//   })
// }

// const { loading, data, send } = useRequest(todo, {
//   initialData: {},
//   immediate: false,
// })
</script>

<template>
  <!-- <nut-toast /> -->
  <view class="grid gap-30rpx p-20rpx">
    <view class="i-carbon-account" />
    <view class="span">
      at-apply
    </view>
    <view
      bg="blue-400 hover:blue-500 dark:blue-500 dark:hover:blue-600"
      text="sm white"
      p="y-2 x-4"
      border="2 rounded blue-200"
      transition-all
    >
      属性化模式
    </view>
    <view class="i-fluent-scan-dash-20-filled" />
    <view class="i-fluent-multiselect-20-filled" />
    <view class="i-fluent-checkmark-circle-16-filled" />
    <view class="i-fluent-checkmark-square-20-filled" />
    <view class="i-fluent-checkbox-unchecked-20-regular" />
    <view class="i-fluent-checkmark-square-20-regular" />
    <view class="i-fluent-clock-12-regular" />
    <view class="i-fluent-dismiss-16-regular" />
    <view class="i-fluent-chevron-right-16-regular" />
    <view class="i-fluent-info-16-regular" />
    <view class="i-fluent-caret-down-20-filled" />
    <view class="i-fluent-circle-small-24-filled" />
    <view class="i-fluent-scan-camera-20-regular" />
    <view class="i-fluent-star-20-regular" />
    <view class="i-fluent-star-20-filled" />
    <view class="i-fluent-search-20-regular" />
    <view class="i-fluent-wallet-credit-card-20-regular" />
  </view>
</template>

<style lang="scss" scoped>
  .span {
    --at-apply: text-center my-0 font-medium text-40rpx;
  }
</style>
