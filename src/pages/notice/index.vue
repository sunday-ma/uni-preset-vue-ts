<route lang="json5">
{
  style: {
    navigationBarTitleText: '消息通知'
  },
}
</route>

<script lang="ts" setup>
import { AirDateTime } from '@/common/airPower/helpers/AirDateTime'

// enum NoticeStatusEnum {
//   // 领用通知
//   COLLAR = 1,
//   // 换租通知
//   LEASE,
//   // 归还通知
//   RETURN,
//   // 消息通知
//   MSG,
// }

// const noticeStatus = ref([
//   {
//     color: '#FFAA00',
//     icon: '/static/notice/collar.svg',
//     type: 'collar',
//     name: '领用通知',
//   },
//   {
//     color: '#89D5EF',
//     icon: '/static/notice/lease.svg',
//     type: 'lease',
//     name: '换租通知',
//   },
//   {
//     color: '#D8D850',
//     icon: '/static/notice/return.svg',
//     type: 'return',
//     name: '归还通知',
//   },
//   {
//     color: '#FF886C',
//     icon: '/static/notice/msg.svg',
//     type: 'msg',
//     name: '消息通知',
//   },
// ])
// const noticeStatus = ref({
//   // 领用通知
//   collar: {
//     color: '#FFAA00',
//     icon: '/static/notice/collar.svg',
//   },
//   // 换租通知
//   lease: {
//     color: '#89D5EF',
//     icon: '/static/notice/lease.svg',
//   },
//   // 归还通知
//   return: {
//     color: '#D8D850',
//     icon: '/static/notice/return.svg',
//   },
//   // 消息通知
//   msg: {
//     color: '#FF886C',
//     icon: '/static/notice/msg.svg',
//   },
// })

// const noticeData = ref([
//   {
//     id: 1,
//     type: 1,
//     content: '您的**订单，**年*月*日可到**服务点领取您的**订单，**年*月*日可到**服务点领取您的**订单，**年*月*日可到**服务点领取您的**订单，**年*月*日可到**服务点领取',
//     time: 1715141148000,
//   },
//   {
//     id: 2,
//     type: 2,
//     content: '您的**订单，**年*月*日可到**服务点领取您的**订单，**年*月*日可到**服务点领取您的**订单，**年*月*日可到**服务点领取您的**订单，**年*月*日可到**服务点领取',
//     time: 1715141148000,
//   },
//   {
//     id: 3,
//     type: 3,
//     content: '您的**订单，**年*月*日可到**服务点领取您的**订单，**年*月*日可到**服务点领取您的**订单，**年*月*日可到**服务点领取您的**订单，**年*月*日可到**服务点领取',
//     time: 1715141148000,
//   },
//   {
//     id: 4,
//     type: 4,
//     content: '您的**订单，**年*月*日可到**服务点领取您的**订单，**年*月*日可到**服务点领取您的**订单，**年*月*日可到**服务点领取您的**订单，**年*月*日可到**服务点领取',
//     time: 1715141148000,
//   },
// ])

onLoad(() => {
})
</script>

<template>
  <view class="page px-28rpx">
    <!-- #region 消息通知列表 -->
    <view class="notice-list">
      <view class="flex items-center py-30rpx border-b-solid border-1 border-#DCDDDD notice-item">
        <view class="flex flex-center w-95 h-95 rounded-full bg-#FFAA00 icon">
          <image
            src="@/static/notice/collar.svg"
            mode="widthFix"
            class="w-50"
          />
        </view>
        <view class="flex-1 ml-24rpx wrap">
          <view class="flex items-center justify-between">
            <view class="text-26 text-#333">
              领用通知
            </view>
            <view class="text-24 text-#999">
              {{ AirDateTime.formatFromMilliSecond(1715141148000, 'YYYY/MM/DD HH:mm:ss') }}
            </view>
          </view>
          <view class="mt-12rpx text-24 text-#666 leading-1.6em line-2">
            您的**订单，**年*月*日可到**服务点领取您的**订单，**年*月*日可到**服务点领取您的**订单，**年*月*日可到**服务点领取您的**订单，**年*月*日可到**服务点领取
          </view>
        </view>
      </view>
      <view class="flex items-center py-30rpx border-b-solid border-1 border-#DCDDDD notice-item">
        <view class="flex flex-center w-95 h-95 rounded-full bg-#89D5EF icon">
          <image
            src="@/static/notice/lease.svg"
            mode="widthFix"
            class="w-50"
          />
        </view>
        <view class="flex-1 ml-24rpx wrap">
          <view class="flex items-center justify-between">
            <view class="text-26 text-#333">
              换租通知
            </view>
            <view class="text-24 text-#999">
              {{ AirDateTime.formatFromMilliSecond(1715141148000, 'YYYY/MM/DD HH:mm:ss') }}
            </view>
          </view>
          <view class="mt-12rpx text-24 text-#666 leading-1.6em line-2">
            您的**订单，**年*月*日可到**服务点领取您的**订单，**年*月*日可到**服务点领取您的**订单，**年*月*日可到**服务点领取您的**订单，**年*月*日可到**服务点领取
          </view>
        </view>
      </view>
      <view class="flex items-center py-30rpx border-b-solid border-1 border-#DCDDDD notice-item">
        <view class="flex flex-center w-95 h-95 rounded-full bg-#D8D850 icon">
          <image
            src="@/static/notice/return.svg"
            mode="widthFix"
            class="w-50"
          />
        </view>
        <view class="flex-1 ml-24rpx wrap">
          <view class="flex items-center justify-between">
            <view class="text-26 text-#333">
              归还通知
            </view>
            <view class="text-24 text-#999">
              {{ AirDateTime.formatFromMilliSecond(1715141148000, 'YYYY/MM/DD HH:mm:ss') }}
            </view>
          </view>
          <view class="mt-12rpx text-24 text-#666 leading-1.6em line-2">
            您的**订单，**年*月*日可到**服务点领取您的**订单，**年*月*日可到**服务点领取您的**订单，**年*月*日可到**服务点领取您的**订单，**年*月*日可到**服务点领取
          </view>
        </view>
      </view>
      <view class="flex items-center py-30rpx border-b-solid border-1 border-#DCDDDD notice-item">
        <view class="flex flex-center w-95 h-95 rounded-full bg-#FF886C icon">
          <image
            src="@/static/notice/msg.svg"
            mode="widthFix"
            class="w-50"
          />
        </view>
        <view class="flex-1 ml-24rpx wrap">
          <view class="flex items-center justify-between">
            <view class="text-26 text-#333">
              消息通知
            </view>
            <view class="text-24 text-#999">
              {{ AirDateTime.formatFromMilliSecond(1715141148000, 'YYYY/MM/DD HH:mm:ss') }}
            </view>
          </view>
          <view class="mt-12rpx text-24 text-#666 leading-1.6em line-2">
            您的**订单，**年*月*日可到**服务点领取您的**订单，**年*月*日可到**服务点领取您的**订单，**年*月*日可到**服务点领取您的**订单，**年*月*日可到**服务点领取
          </view>
        </view>
      </view>
    </view>
    <!-- #engregion 消息通知列表 -->
  </view>
</template>

<style>
page {
  background-color: #fff;
}
</style>

<style lang="scss" scoped>

</style>
