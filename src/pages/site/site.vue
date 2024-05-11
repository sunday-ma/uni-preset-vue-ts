<script lang="ts" setup>
const commoditySpecs = ref([
  { id: '1', specs: ['紫色', '套餐一', '64G'] },
  { id: '2', specs: ['紫色', '套餐一', '128G'] },
  { id: '3', specs: ['紫色', '套餐二', '128G'] },
  { id: '4', specs: ['黑色', '套餐三', '256G'] },
])
const specsS = ref([])

// const shopAdjoin = computed(() => {
//   return new ShopAdjoin(commoditySpecs.value, specsS.value)
// })

// const optionSpecs = computed(() => {
//   return shopAdjoin.value.querySpecsOptions(specsS.value)
// })

onLoad(() => {
  specsS.value = Array.from({
    length: commoditySpecs.value.length,
  })
})
</script>

<template>
  <view>
    123
  </view>
</template>

<style lang="scss" scoped>
</style>
