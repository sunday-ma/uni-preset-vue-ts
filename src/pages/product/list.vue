<route lang="json5">
{
  style: {
    navigationBarTitleText: '产品列表'
  },
}
</route>

<script lang="ts" setup>
/**
 * 产品列表
 */
// const hotStyleData = ref([
//   {
//     id: 1,
//     title: '大豆纤维夏凉被',
//     price: 55,
//     image: '/static/product.png',
//   },
//   {
//     id: 2,
//     title: '3斤新疆棉春秋被',
//     price: 69,
//     image: '/static/product.png',
//   },
//   {
//     id: 3,
//     title: '7斤新疆长绒棉冬被',
//     price: 99,
//     image: '/static/product.png',
//   },
//   {
//     id: 4,
//     title: '10斤冬被加厚',
//     price: 108,
//     image: '/static/product.png',
//   },
// ])

// function handleProductClick(data: any) {
//   console.log(data)
// }

// const state = reactive({
//   tab4value: '0',
//   list4: Array.from(Array.from({ length: 10 }).keys()),
// })
</script>

<template>
  <view class="page">
    123
    <!-- <bf-product :data="hotStyleData" :cols="2" :gap-x="12" :gap-y="26" @click="handleProductClick" /> -->
    <!-- <nut-tabs v-model="state.tab4value" direction="vertical" title-scroll title-gutter="10" auto-height>
      <nut-tab-pane v-for="item in state.list4" :key="item" :title="`Tab ${item}`">
        Tab {{ item }}
      </nut-tab-pane>
    </nut-tabs> -->
  </view>
</template>

<style>
page {
  padding-bottom: 0;
}
</style>

<style lang="scss" scoped>
::v-deep .nut-tabs.vertical {
  height: 100vh;
}
</style>
