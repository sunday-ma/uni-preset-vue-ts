<script lang="ts" setup>
import type { DatePickerBaseEvent, DatePickerColumnType, PickerOption } from 'nutui-uniapp'

/**
 * 预约领用时间
 * @param filter {数组} 时间段
 * @example [9, 18] 9:00 - 18:59
 */
const props = withDefaults(defineProps<{
  filter: any
}>(), {
  filter: [9, 18],
})

const emits = defineEmits(['confirm', 'cancel'])

/**
 * 预约领用时间
 */
const collectionTime = ref<Date>(new Date())
const collectionTimeIsVisible = ref(false)
function showCollectionTime() {
  collectionTimeIsVisible.value = true
}
function hideCollectionTime() {
  collectionTimeIsVisible.value = false
  console.log('close')
  emits('cancel')
}
function handleCollectionTimeValue(param: DatePickerBaseEvent) {
  emits('confirm', param.selectedValue.join(':'))
  collectionTimeIsVisible.value = false
}
/**
 * 预约领用时间过滤
 * @param type 类型
 * @param options 选项
 */
function collectionTimeFilter(type: DatePickerColumnType, options: PickerOption[]) {
  // TODO 过滤时间需要根据服务点的服务时间进行调整
  if (type === 'hour')
    return options.filter(item => item?.value && +item?.value >= props.filter[0] && +item?.value <= props.filter[1])

  return options
}

defineExpose({
  showCollectionTime,
})
</script>

<template>
  <view class="component-date-picker">
    <nut-popup v-model:visible="collectionTimeIsVisible" position="bottom" safe-area-inset-bottom @click-overlay="hideCollectionTime">
      <nut-date-picker
        v-model="collectionTime"
        type="hour-minute"
        title="时间选择"
        :filter="collectionTimeFilter"
        @confirm="handleCollectionTimeValue"
        @cancel="hideCollectionTime"
      />
    </nut-popup>
  </view>
</template>

<style lang="scss" scoped>
.component-date-picker {
  --nut-picker-ok-color: #ffaa00;
  --nut-primary-color: #ffaa00;
}
</style>
