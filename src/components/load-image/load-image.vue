<!--
  # 微信小程序图片转webp展示
  # 要求图片服务器为七牛云，七牛云支持图片格式转换
-->
<script lang="ts" setup>
import type { LoadImageProps } from './load-image'
import defaultImage from './image-previewplaceholder.jpg'

const props = withDefaults(defineProps<LoadImageProps>(), {
  default: defaultImage,
  useWebp: false,
  mode: 'scaleToFill',
  lazyLoad: true,
  src: '',
})

const isLoading = ref(true)

// https://oss.hisense-syxs.com/20240229/5a32d3af-a9e6-42d8-ad0f-22f8750b8437.png?imageMogr2/format/webp
const imageUrl = computed(() => {
  let url = `${props.src}?`
  props.useWebp && (url += 'imageMogr2/format/webp')
  return url
})
</script>

<template>
  <view class="load-image-wrapper">
    <image
      v-if="isLoading"
      :src="props.defaultImage"
      :mode="props.mode"
      :lazy-load="props.lazyLoad"
    />

    <image
      :src="imageUrl"
      mode="scaleToFill"
      lazy-load
    />
  </view>
</template>

<style lang="scss" scoped>
</style>
