<script lang="ts" setup>
const props = withDefaults(defineProps<{
  title: string
  showCancel?: boolean
  cancelText?: string
  confirmText?: string
}>(), {
  title: '',
  showCancel: true,
  cancelText: '否',
  confirmText: '是',
})

const emits = defineEmits<{
  (event: 'confirm'): void
  (event: 'cancel'): void
}>()

const status = ref(false)

function onShowPopup() {
  status.value = true
}

function onHidePopup() {
  status.value = false
}

function handleCancelClick() {
  emits('cancel')
}

function handleConfirmClick() {
  emits('confirm')
}

defineExpose({
  onShowPopup,
  onHidePopup,
})
</script>

<template>
  <view class="component-site-popup">
    <nut-popup
      v-model:visible="status"
      :custom-style="{ width: '694rpx', padding: '78rpx 74rpx', borderRadius: '18rpx' }"
    >
      <view class="flex flex-col items-center w-full">
        <nut-animate type="ripple">
          <view class="i-fluent-checkmark-circle-16-filled text-148 text-[#ffaa00]" />
        </nut-animate>
        <view class="mt-40rpx text-28 text-[#66421E]">
          {{ props.title }}
        </view>
        <view class="flex justify-center w-full mt-65rpx">
          <nut-button
            v-if="props.showCancel"
            plain custom-color="#FFAA00"
            custom-style="--nut-button-default-border-color: #ffaa00; width: 210rpx;margin-right: auto;"
            @click="handleCancelClick"
          >
            {{ props.cancelText }}
          </nut-button>
          <nut-button
            custom-color="#FFAA00" custom-style="--nut-button-default-border-color: #FFAA00; width: 210rpx;"
            @click="handleConfirmClick"
          >
            {{ props.confirmText }}
          </nut-button>
        </view>
      </view>
    </nut-popup>
  </view>
</template>

<style lang="scss" scoped>
</style>
