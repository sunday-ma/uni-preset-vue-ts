<script lang="ts" setup>
import type { IJson } from '@/interfaces/IJson'

const props = defineProps<{
  data: IJson
}>()

const emits = defineEmits<{
  (event: 'click', data: IBanner): void
}>()

const swiperOptions = ref({
  current: 0,
})

/**
 * 计算轮播图切换
 * @param event 事件对象
 */
function swiperAnimationFinishEvent(event: IJson) {
  swiperOptions.value.current = event.detail.current
}

/**
 * 轮播图点击事件
 * @param data 点击数据
 */
function swiperItemClickEvent(data: IBanner) {
  emits('click', data)
}
</script>

<template>
  <view class="relative component-swiper">
    <swiper
      autoplay
      circular
      class="h-539rpx"
      @animationfinish="swiperAnimationFinishEvent"
    >
      <swiper-item v-for="item in props.data" :key="item.id">
        <image
          :src="item.url"
          mode="widthFix"
          class="w-full"
          @click="swiperItemClickEvent(item)"
        />
      </swiper-item>
    </swiper>
    <view class="absolute bottom-120rpx left-50% translate-x--50% flex items-center gap-12rpx swiper-dots">
      <view
        v-for="(item, index) in props.data"
        :key="item.id"
        class="w-24rpx h-8rpx rounded-24rpx transition bg-#fff/50 dots"
        :class="{ active: swiperOptions.current === index }"
      />
    </view>
  </view>
</template>

<style lang="scss" scoped>
.component-swiper {
  .dots {
    &.active {
      background-color: #FFAA00;
    }
  }
}
</style>
