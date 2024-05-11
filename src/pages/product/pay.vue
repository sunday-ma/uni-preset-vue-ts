<route lang="json5">
{
  style: {
    navigationBarTitleText: '订单详情'
  },
}
</route>

<script lang="ts" setup>
import type { DatePickerBaseEvent, DatePickerColumnType, PickerChangeEvent, PickerOption } from 'nutui-uniapp'
import { AirDateTime } from '@/common/airPower/helpers/AirDateTime'

const form = ref({
  name: '',
  phone: '',
  address: '',
  date: '',
  time: '',
})

/**
 * 预约领用年月日
 */
const collectionDate = ref<string>('')
const collectionIsVisible = ref(false)
function handleCollectionValue(param: string[] | any) {
  form.value.date = AirDateTime.formatFromDate(param[3], 'YYYY-MM-DD')
  collectionIsVisible.value = false
}

/**
 * 预约领用时间
 */
const collectionTime = ref<Date>(new Date(2022, 4, 10, 10, 10))
const collectionTimeIsVisible = ref(false)
function handleCollectionTimeValue(param: DatePickerBaseEvent) {
  form.value.time = param.selectedValue.join(':')
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
    return options.filter(item => item?.value && +item?.value >= 9 && +item?.value <= 18)

  return options
}
</script>

<template>
  <view class="px-28rpx py-20rpx page">
    <nut-cell>
      <view class="flex items-center w-100% text-24 text-#3E3A39 cell">
        <view class="flex items-center label">
          <view class="flex flex-center w-34 h-34 rounded-full mr-14rpx bg-#FFAA00 icon">
            <image
              src="@/static/address.svg"
              mode="widthFix"
              class="w-14 h-16"
            />
          </view>
          <view class="leading-none">
            服务点：
          </view>
        </view>
        <view class="flex-1 line-1 text">
          济南市槐荫区和谐广场二号楼...
        </view>
        <view class="ml-44rpx text-#FFAA00">
          更改服务点
        </view>
      </view>
    </nut-cell>
    <nut-cell>
      <view class="flex items-center w-100% text-24 text-#3E3A39 cell">
        <view class="flex items-center label">
          <view class="leading-none">
            领用人：
          </view>
        </view>
        <view class="flex-1 line-1 text">
          <nut-input v-model="form.name" :border="false" clearable placeholder="请填写领用人" placeholder-class="placeholder" />
        </view>
      </view>
    </nut-cell>
    <nut-cell>
      <view class="flex items-center w-100% text-24 text-#3E3A39 cell">
        <view class="flex items-center label">
          <view class="leading-none">
            领用人手机号：
          </view>
        </view>
        <view class="flex-1 line-1 text">
          <nut-input v-model="form.phone" :border="false" clearable type="number" placeholder="请填写领用人手机号" placeholder-class="placeholder" />
        </view>
      </view>
    </nut-cell>
    <nut-cell>
      <view class="flex items-center w-100% text-24 text-#3E3A39 cell">
        <view class="flex items-center label">
          <view class="leading-none">
            使用地址：
          </view>
        </view>
        <view class="flex-1 line-1 text">
          <nut-input v-model="form.address" :border="false" clearable placeholder="请填写使用地址" placeholder-class="placeholder" />
        </view>
      </view>
    </nut-cell>
    <nut-cell>
      <view class="flex items-center w-100% text-24 text-#3E3A39 cell">
        <view class="flex items-center label">
          <view class="leading-none">
            预约领用时间：
          </view>
        </view>
        <view class="flex-1 line-1 text">
          <view class="flex items-center gap-30rpx ml-30rpx">
            <view class="flex items-center px-18rpx py-14rpx rounded-10rpx bg-#F2F2F2" @click="collectionIsVisible = true">
              <image
                src="@/static/date.svg"
                mode="widthFix"
                class="w-22 h-22 mr-15rpx"
              />
              <view>{{ form.date || '请选择' }}</view>
            </view>
            <view class="flex items-center px-18rpx py-14rpx rounded-10rpx bg-#F2F2F2" @click="collectionTimeIsVisible = true">
              <image
                src="@/static/time.svg"
                mode="widthFix"
                class="w-22 h-22 mr-15rpx"
              />
              <view>{{ form.time || '请选择' }}</view>
            </view>
          </view>
        </view>
      </view>
    </nut-cell>

    <!-- #region 日期选择 -->
    <nut-calendar
      v-model:visible="collectionIsVisible"
      :default-value="collectionDate"
      :is-auto-back-fill="true"
      @close="collectionIsVisible = false"
      @choose="handleCollectionValue"
    />
    <!-- #endregion -->

    <!-- #region 时间选择 -->
    <nut-popup v-model:visible="collectionTimeIsVisible" position="bottom" safe-area-inset-bottom>
      <nut-date-picker
        v-model="collectionTime"
        type="hour-minute"
        title="时间选择"
        :filter="collectionTimeFilter"
        @confirm="handleCollectionTimeValue"
        @cancel="collectionTimeIsVisible = false"
      />
    </nut-popup>
    <!-- #endregion -->
  </view>
</template>

<style>
.placeholder {
  font-size: 24rpx;
}
</style>

<style lang="scss" scoped>
.page {
  --nut-picker-ok-color: #FFAA00;
  --nut-input-padding: 0;
}
</style>
