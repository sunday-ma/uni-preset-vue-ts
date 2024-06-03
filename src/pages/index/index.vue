<route lang="json5">
{
  style: {
    navigationBarTitleText: '首页'
  },
}
</route>

<script lang="ts" setup>
import { AirDateTime } from 'airpower'

const title = ref('123')

console.log(AirDateTime.getMilliTimeStamps(new Date()))
console.log(AirDateTime.formatFromMilliSecond(1717385307332))

onLoad(() => {
})
</script>

<template>
  <view class="page">
    {{ title }}
    <view>
      百度图表
    </view>
    <view>
      ICON
    </view>
    <view>
      Airpower
    </view>
    <view class="i-carbon-carbon-for-ibm-product" />
    <nut-button type="primary">
      主要按钮
    </nut-button>
  </view>
</template>

<style lang="scss" scoped>
</style>
