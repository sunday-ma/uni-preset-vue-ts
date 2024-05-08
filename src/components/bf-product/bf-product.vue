<script lang="ts" setup>
import type { IJson } from '@/interfaces/IJson'

const props = defineProps<{
  data: any[]
  cols: number
  gapX: number
  gapY: number
}>()

const emits = defineEmits(['click'])

const classList = computed(() => {
  const classList = []
  if (props.cols)
    classList.push(`grid-cols-${props.cols}`)

  if (props.gapX)
    classList.push(`gap-x-${props.gapX}rpx`)

  if (props.gapY)
    classList.push(`gap-y-${props.gapY}rpx`)

  return classList
})

/**
 * 产品点击事件
 */
function handleProductClick(item: IJson) {
  emits('click', item)
}
</script>

<template>
  <view class="component-product">
    <view class="grid" :class="classList">
      <view v-for="item in props.data" :key="item.id" class="item" @click="handleProductClick(item)">
        <view class="relative w-full pb-100% image-cover">
          <image
            :src="item.image"
            mode="aspectFill"
            class="absolute top-0 left-0 w-full h-full rounded-18rpx"
          />
        </view>
        <view text="26 #333" class="line-1 mt-24rpx">
          {{ item.title }}
        </view>
        <view text="24 #FFAA00" class="mt-10rpx leading-none">
          &yen;{{ item.price }}起
        </view>
      </view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
</style>
