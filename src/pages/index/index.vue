<route lang="json5">
{
  style: {
    navigationBarTitleText: '首页',
  },
}
</route>

<script lang="ts" setup>
// import { getTodos } from '@/apis'

const toast = useToast()
// const id = ref()

// const alovaInstance = createAlova({
//   baseURL: import.meta.env.VITE_BASE_URL,
//   ...AdapterUniapp(),
// })

// const { loading, data, send } = useRequest(() => alovaInstance.Get('/todos/1'), {
//   immediate: false,
// })

function loadTodos() {
  // getTodos().then((res) => {
  //   id.value = res.id
  // })
  // send()
  // console.log(JSON.stringify(data))
  toast.text('文字提示')
}

// alovaInstance.Get('/todos/1').then((res) => {
//   console.log(res)
// })
</script>

<template>
  <nut-toast />
  <view class="grid gap-30rpx p-20rpx">
    <!-- <view class="span text-blue-500_50">
      {{ id }}
    </view>
    <view>
      <view v-if="loading">
        加载中...
      </view>
      <view>{{ data?.data }}</view>
    </view>
    <view class="i-carbon-account" /> -->

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
