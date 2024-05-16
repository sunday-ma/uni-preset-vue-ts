<script lang="ts" setup>
import type { PickerBaseEvent } from 'nutui-uniapp'
import type { IJson } from '@/common/airPower/intetface/IJson'

/**
 * 服务点列表弹窗
 * @param data 服务点数据
 */
const props = withDefaults(defineProps<{
  data: Array<IJson>
}>(), {})

const emits = defineEmits(['confirm', 'cancel'])

const siteVisible = ref(false)
const siteValue = ref<string[]>([])

function showSite() {
  siteVisible.value = true
}

function onSiteHide() {
  siteVisible.value = false
  emits('cancel')
}
function onSiteConfirm({ selectedValue, selectedOptions }: PickerBaseEvent) {
  console.log('selectedValue', selectedValue)
  console.log('selectedOptions', selectedOptions)
  emits('confirm', selectedOptions)
  onSiteHide()
}

defineExpose({
  showSite,
})
</script>

<template>
  <view class="component-site">
    <nut-popup v-model:visible="siteVisible" position="bottom" safe-area-inset-bottom>
      <nut-picker
        v-model="siteValue"
        custom-style="--nut-picker-ok-color: #ffaa00;"
        title="选择服务点"
        :columns="props.data"
        @confirm="onSiteConfirm"
        @cancel="onSiteHide"
      />
    </nut-popup>
  </view>
</template>

<style lang="scss" scoped>
</style>
