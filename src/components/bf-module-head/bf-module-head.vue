<script lang="ts" setup>
const props = defineProps<{
  title: string
  moreText?: string
}>()

const emits = defineEmits<{
  (e: 'click'): void
}>()

/**
 * 模块更多点击事件
 */
function onMoreClick() {
  emits('click')
}
</script>

<template>
  <view class="flex items-center justify-between component-module-head">
    <view class="relative module-head-title" p="l-20rpx" text="32 #66421E" leading="none">
      {{ props.title }}
    </view>
    <view v-if="props.moreText" class="flex items-center" text="24 #7a542d" leading="none" @click="onMoreClick">
      <view>{{ props.moreText }}</view>
      <view class="i-carbon-chevron-right" />
    </view>
  </view>
</template>

<style lang="scss" scoped>
</style>
