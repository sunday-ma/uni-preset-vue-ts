<script lang="ts" setup>
import type { IJson } from '@/common/airPower/intetface/IJson'

/**
 * 预约领用年月日
 * @param filter {数组} 禁用的日期
 * @example [0, 6] 周一至周五可选，周六周日禁用
 */
const props = withDefaults(defineProps<{
  filter: any
}>(), {
  filter: [0, 6],
})

const emits = defineEmits(['confirm', 'cancel'])

/**
 * 获取禁用日期
 * @param filter 过滤星期几
 * @returns IJson
 */
function getFilterDate(filter: number[] = [0, 6]) {
  const filterDate = {} as IJson
  const d = new Date(new Date())
  let day = d.getDay()

  for (let i = 0; i < 365; i++) {
    if (filter.includes(day))
      filterDate[`${d.getFullYear()}-${pad(d.getMonth() + 1, 2)}-${pad(d.getDate(), 2)}`] = true

    d.setDate(d.getDate() + 1)
    day = d.getDay()
  }

  return filterDate
}

function pad(n: number, width: number) {
  const mouth = `${n}`
  return mouth.length === width ? n : '0'.repeat(width - mouth.length) + n
}

/**
 * 预约领用年月日
 */
const collectionDate = ref<string>('')
const collectionIsVisible = ref(false)
function showCollection() {
  collectionIsVisible.value = true
}
function hideCollection() {
  collectionIsVisible.value = false
  console.log('close')
  emits('cancel')
}
function handleCollectionValue(param: string[] | any) {
  emits('confirm', param[3])
  collectionIsVisible.value = false
}
function disabledDate(date: string) {
  return getFilterDate(props.filter)[date]
}

defineExpose({
  showCollection,
})
</script>

<template>
  <view class="component-calendar">
    <nut-calendar
      v-model:visible="collectionIsVisible"
      :default-value="collectionDate"
      :is-auto-back-fill="true"
      :disabled-date="disabledDate"
      @click-close-icon="hideCollection"
      @click-overlay="hideCollection"
      @choose="handleCollectionValue"
    />
  </view>
</template>

<style lang="scss" scoped>
</style>
