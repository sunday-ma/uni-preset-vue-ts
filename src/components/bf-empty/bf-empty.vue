<script lang="ts" setup>
const props = withDefaults(defineProps<{
  text: string
  type: string
}>(), {
  text: '暂无数据',
  type: 'data',
})
</script>

<template>
  <view class="component-empty">
    <nut-empty :description="props.text">
      <template #image>
        <image
          v-if="props.type === 'data'"
          src="@/static/no-data.png"
          mode="widthFix"
        />
        <image
          v-if="props.type === 'notice'"
          src="@/static/no-notice.png"
          mode="widthFix"
        />
      </template>
    </nut-empty>
  </view>
</template>

<style lang="scss" scoped>

</style>
