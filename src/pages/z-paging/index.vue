<script lang="ts" setup>
/// <reference types="z-paging" />
const pagingRef = ref<ZPagingInstance>()

const zList = ref<{ title: string, detail: string }[]>([

])
const tabIndex = ref(0)
const tabList = ref(['测试1', '测试2', '测试3', '测试4'])

function tabsChange(index: any) {
  tabIndex.value = index
  // 当切换tab或搜索时请调用组件的reload方法，请勿直接调用：queryList方法！！
  if (pagingRef.value)
    pagingRef.value.reload()
}

function zQuery(pageNo: any, pageSize: any) {
  console.log('zQuery', pageNo, pageSize)
  if (pagingRef.value) {
    pagingRef.value.complete([{
      title: '标题1',
      detail: '详情1',
    }])
  }

  // 组件加载时会自动触发此方法，因此默认页面加载时会自动触发，无需手动调用
  // 这里的pageNo和pageSize会自动计算好，直接传给服务器即可
  // 模拟请求服务器获取分页数据，请替换成自己的网络请求
  // const params = {
  //   pageNo,
  //   pageSize,
  //   type: tabIndex.value + 1,
  // }
  // request.queryList(params).then((res) => {
  //   // 将请求的结果数组传递给z-paging
  //   paging.value.complete(res.data.list)
  // }).catch((res) => {
  //   // 如果请求失败写paging.value.complete(false);
  //   // 注意，每次都需要在catch中写这句话很麻烦，z-paging提供了方案可以全局统一处理
  //   // 在底层的网络请求抛出异常时，写uni.$emit('z-paging-error-emit');即可
  //   paging.value.complete(false)
  // })
}

defineExpose({ zList, zQuery })
</script>

<template>
  <view class="content">
    <z-paging ref="pagingRef" v-model="zList" @query="zQuery">
      <template #top>
        <!-- 注意！此处的z-tabs为独立的组件，可替换为第三方的tabs，若需要使用z-tabs，请在插件市场搜索z-tabs并引入，否则会报插件找不到的错误 -->
        <z-tabs :list="tabList" @change="tabsChange" />
      </template>
      <!-- 如果希望其他view跟着页面滚动，可以放在z-paging标签内 -->
      <view v-for="(item, index) in zList" :key="index" class="item">
        <view class="item-title">
          {{ item.title }}
        </view>
        <view class="item-detail">
          {{ item.detail }}
        </view>
        <view class="item-line" />
      </view>
    </z-paging>
  </view>
</template>

<style lang="scss" scoped>
</style>
