<route lang="json5">
{
  style: {
    navigationBarTitleText: '订单详情'
  },
}
</route>

<script lang="ts" setup>
import { AirDateTime } from '@/common/airPower/helpers/AirDateTime'
import type { IJson } from '@/common/airPower/intetface/IJson'
import bfCalendar from '@/components/bf-calendar/bf-calendar.vue'
import bfDatePicker from '@/components/bf-date-picker/bf-date-picker.vue'
import bfSite from '@/components/bf-site/bf-site.vue'

const { setClipboard } = useCopy()

const form = ref({
  name: '',
  phone: '',
  address: '',
  date: '',
  time: '',
})

const termsStatus = ref(false)

/**
 * 服务点弹窗
 */
const siteRef = ref<InstanceType<typeof bfSite> | null>(null)
const siteSolumns = ref([
  {
    text: '服务点1',
    value: '1',
  },
  {
    text: '服务点2',
    value: '2',
  },
  {
    text: '服务点3',
    value: '3',
  },
  {
    text: '服务点4',
    value: '4',
  },
  {
    text: '服务点5',
    value: '5',
  },
  {
    text: '服务点6',
    value: '6',
  },
  {
    text: '服务点7',
    value: '7',
  },
  {
    text: '服务点8',
    value: '8',
  },
])
function onSiteShow() {
  siteRef.value?.showSite()
}
function onSiteConfirm(params: IJson[]) {
  console.log('params', params)
}

/**
 * 预约领用年月日
 */
const calendar = ref<InstanceType<typeof bfCalendar> | null>(null)
function onShowCalender() {
  calendar.value?.showCollection()
}
function onCalendarConfirm(date: string) {
  form.value.date = AirDateTime.formatFromDate(date, 'YYYY-MM-DD')
}

/**
 * 预约领用时间
 */
const datePicker = ref<InstanceType<typeof bfDatePicker> | null>(null)
function onShowDatePicker() {
  datePicker.value?.showCollectionTime()
}
function onDatePickerConfirm(date: string) {
  form.value.time = date
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
        <view class="ml-44rpx text-#FFAA00" @click="onSiteShow">
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
            <view class="flex items-center px-18rpx py-14rpx rounded-10rpx bg-#F2F2F2" @click="onShowCalender">
              <image
                src="@/static/date.svg"
                mode="widthFix"
                class="w-22 h-22 mr-15rpx"
              />
              <view>{{ form.date || '请选择' }}</view>
            </view>
            <view class="flex items-center px-18rpx py-14rpx rounded-10rpx bg-#F2F2F2" @click="onShowDatePicker">
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
            实付款
          </view>
          <view>&yen;200</view>
        </view>
        <view class="text-24rpx terms" style="--nut-primary-color: #ffaa00;--nut-checkbox-label-margin-left: 0;--nut-checkbox-margin-right: 14rpx;">
          <view class="flex items-center text-#FFAA00">
            <nut-checkbox v-model="termsStatus" icon-size="28rpx" />
            <view style="text-decoration: underline;">
              互信会员制度
            </view>
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
            123456789876543212345 | <text class="text-#FFAA00" @click="setClipboard('编号')">
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
          返回
        </nut-button>
        <view style="--nut-button-border-width: 0;" class="ml-38rpx">
          <nut-button custom-color="#FFAA00">
            立即支付
          </nut-button>
        </view>
      </view>
    </view>
    <!-- #endregion Footer -->

    <!-- #region 服务点弹窗 -->
    <bf-site ref="siteRef" :data="siteSolumns" @confirm="onSiteConfirm" />
    <!-- #endregion -->

    <!-- #region 日期选择 -->
    <!-- :filter="[1, 2]" -->
    <bf-calendar ref="calendar" @confirm="onCalendarConfirm" />
    <!-- #endregion -->

    <!-- #region 时间选择 -->
    <!-- :filter="[8, 20]" -->
    <bf-date-picker ref="datePicker" @confirm="onDatePickerConfirm" />
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
