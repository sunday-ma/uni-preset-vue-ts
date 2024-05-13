<route lang="json5">
{
  style: {
    navigationBarTitleText: '订单详情'
  },
}
</route>

<script lang="ts" setup>
import type { DatePickerBaseEvent, DatePickerColumnType, PickerOption } from 'nutui-uniapp'
import { AirDateTime } from '@/common/airPower/helpers/AirDateTime'
import type { IJson } from '@/common/airPower/intetface/IJson'

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

const form = ref({
  name: '',
  phone: '',
  address: '',
  date: '',
  time: '',
})

const termsStatus = ref(false)

/**
 * 预约领用年月日
 */
const collectionDate = ref<string>('')
const collectionIsVisible = ref(false)
function handleCollectionValue(param: string[] | any) {
  form.value.date = AirDateTime.formatFromDate(param[3], 'YYYY-MM-DD')
  collectionIsVisible.value = false
}
function disabledDate(date: string) {
  return getFilterDate()[date]
}

/**
 * 预约领用时间
 */
const collectionTime = ref<Date>(new Date())
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
/**
 * 复制订单编号
 */
function handleCopyNo() {
  uni.setClipboardData({
    data: '1234567890',
    success() {
      uni.showToast({
        title: '复制成功',
        icon: 'none',
      })
    },
  })
}

onLoad(() => {
})
</script>

<template>
  <view class="px-28rpx py-20rpx page">
    <!-- #region 详情 -->
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
    <nut-cell>
      <view class="flex flex-col gap-24rpx w-100% text-24rpx leading-none">
        <view class="flex">
          <image
            src="@/static/product-1.png"
            mode="aspectFill"
            class="w-136 h-136 rounded-10rpx"
          />
          <view class="flex-1 pt-18rpx pl-40rpx">
            <view class="flex items-baseline w-100%">
              <text class="text-26rpx text-#333">
                学年卡
              </text>
              <text class="ml-a text-24rpx text-#3E3A39">
                &yen;600
              </text>
            </view>
            <view class="mt-22rpx text-18rpx text-#999">
              白色；150cm*210cm；9次
            </view>
          </view>
        </view>
        <view class="flex items-center justify-between">
          <view class="tag-new">
            新用户
          </view>
          <view>赠送礼品</view>
        </view>
        <view class="flex items-center justify-between">
          <view class="tag">
            会员卡
            <text class="text-18rpx text-#9FA0A0">
              *将存入专用账户 本订单会员服务结束后自动退还
            </text>
          </view>
          <view>&yen;200</view>
        </view>
        <view class="flex items-center justify-between">
          <view class="tag">
            商品总价
          </view>
          <view>&yen;200</view>
        </view>
        <view class="flex items-center justify-between">
          <view class="tag">
            优惠金额
          </view>
          <view class="text-#FC3C32">
            减&yen;50
          </view>
        </view>
        <view class="flex items-center justify-between">
          <view class="tag">
            实付款
          </view>
          <view>&yen;200</view>
        </view>
        <view class="text-24rpx terms" style="--nut-primary-color: #ffaa00;--nut-checkbox-label-margin-left: 0;--nut-checkbox-margin-right: 14rpx;">
          <view class="flex items-center text-#FFAA00">
            <nut-checkbox v-model="termsStatus" icon-size="28rpx" />
            <view>互信会员制度</view>
          </view>
          <view class="mt-1em text-#333">
            服务点营业时间：9:00 —— 18:00
          </view>
        </view>
      </view>
    </nut-cell>
    <nut-cell>
      <view class="flex flex-col gap-14rpx w-100%">
        <view class="flex items-center justify-between w-100% text-24 text-#333 cell">
          <view class="flex items-center label">
            <view class="leading-none">
              订单编号
            </view>
          </view>
          <view class="text-#999">
            123456789876543212345 | <text class="text-#FFAA00" @click="handleCopyNo">
              复制
            </text>
          </view>
        </view>
        <view class="flex items-center justify-between w-100% text-24 text-#333 cell">
          <view class="flex items-center label">
            <view class="leading-none">
              创建时间
            </view>
          </view>
          <view class="text-#999">
            2024-03-26 18:27:46
          </view>
        </view>
        <view class="flex items-center justify-between w-100% text-24 text-#333 cell">
          <view class="flex items-center label">
            <view class="leading-none">
              付款时间
            </view>
          </view>
          <view class="text-#999">
            2024-03-26 18:29:02
          </view>
        </view>
        <view class="flex items-center justify-between w-100% text-24 text-#333 cell">
          <view class="flex items-center label">
            <view class="leading-none">
              发货时间
            </view>
          </view>
          <view class="text-#999">
            2024-04-01 05:11:46
          </view>
        </view>
        <view class="flex items-center justify-between w-100% text-24 text-#333 cell">
          <view class="flex items-center label">
            <view class="leading-none">
              成交时间
            </view>
          </view>
          <view class="text-#999">
            2024-04-27 18:27:46
          </view>
        </view>
        <view class="flex items-center justify-between w-100% text-24 text-#333 cell">
          <view class="flex items-center label">
            <view class="leading-none">
              支付方式
            </view>
          </view>
          <view class="text-#999">
            微信支付
          </view>
        </view>
      </view>
    </nut-cell>
    <!-- #endregion 详情 -->

    <!-- #region Footer -->
    <view class="flex items-center px-30rpx py-18rpx footer">
      <view class="flex flex-col home">
        <image
          src="@/static/home.svg"
          mode="widthFix"
          class="w-39rpx h-35rpx"
        />
        <view class="mt-10rpx text-20 text-#333">
          首页
        </view>
      </view>
      <view class="flex items-center btn-group">
        <nut-button plain>
          取消订单
        </nut-button>
        <view style="--nut-button-border-width: 0;" class="ml-38rpx">
          <nut-button custom-color="#FFAA00">
            立即支付
          </nut-button>
        </view>
      </view>
    </view>
    <!-- #endregion Footer -->

    <!-- #region 日期选择 -->
    <nut-calendar
      v-model:visible="collectionIsVisible"
      :default-value="collectionDate"
      :is-auto-back-fill="true"
      :disabled-date="disabledDate"
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
page {
  padding-bottom: calc(env(safe-area-inset-bottom) + 140rpx);
}
</style>

<style lang="scss" scoped>
.page {
  --nut-picker-ok-color: #FFAA00;
  --nut-input-padding: 0;
  --nut-calendar-primary-color:#FFAA00;
}

.terms {
  padding-top: 22rpx;
  border-top: 1px dotted rgba($color: #333, $alpha: .5);
}

.tag {
  --at-apply: text-#333;
}

.tag-new {
  padding: 4rpx 8rpx;
  border: 1px #FFAA00 solid;
  font-size: 24rpx;
  line-height: 1;
  color: #FFAA00;
}

.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  padding-bottom: calc(env(safe-area-inset-bottom) + 18rpx);
  background: #fff;
  .btn-group {
    margin-left: auto;
  }
}
</style>
