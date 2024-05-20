<script lang="ts" setup>
const props = defineProps<{
  data: any[]
  cols: number
  gapX: number
  gapY: number
}>()

const emits = defineEmits(['click'])

const classList = computed(() => {
  return [
    'grid',
    `grid-cols-${props.cols}`,
    `gap-x-${props.gapX}rpx`,
    `gap-y-${props.gapY}rpx`,
  ]
})

/**
 * 产品点击事件
 */
function handleProductClick(item: any) {
  emits('click', item)
}
</script>

<template>
  <view class="component-product">
    <view :class="classList">
      <view v-for="item in props.data" :key="item.id" class="item" @click="handleProductClick(item)">
        <view class="relative w-full pb-100% image-cover">
          <image
            :src="item.image"
            mode="aspectFill"
            class="absolute top-0 left-0 w-full h-full rounded-18rpx"
            @error="() => { item.image = 'https://via.placeholder.com/300' }"
          />
        </view>
        <view text="26 #333" class="line-1 mt-24rpx">
          {{ item.name }}
        </view>
        <view text="24 #FFAA00" class="mt-10rpx leading-none">
          &yen;{{ item.min_price_profile }}
        </view>
      </view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
</style>
