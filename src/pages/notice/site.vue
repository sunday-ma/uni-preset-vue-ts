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

const tabsList = ref([
  {
    id: 1,
    title: '全部',
    total: 1,
  },
  {
    id: 2,
    title: '未读',
    total: 2,
  },
  {
    id: 3,
    title: '已读',
    total: 3,
  },
])
const tabsState = ref(1)

onLoad(() => {
})
</script>

<template>
  <view class="page">
    <nut-tabs v-model="tabsState" background="#fff">
      <template #titles>
        <div class="title-list">
          <view
            v-for="item in tabsList" :key="item.id" class="title-item"
            :class="{ 'tabs-active': tabsState === item.id }" @click="tabsState = item.id"
          >
            <view>
              {{ item.title }} ({{ item.total }})
            </view>
            <view class="item__line" />
          </view>
        </div>
      </template>
      <nut-tab-pane
        v-for="item in tabsList"
        :key="item.id"
        :pane-key="item.id"
        custom-style="background-color: none;"
      >
        <!-- #region 消息通知列表 -->
        <view class="notice-list">
          <nut-cell>
            <view class="flex flex-col w-full">
              <view class="flex items-center justify-between pb-13px" style="border-bottom: 1px solid rgba(220, 221, 221, .75);">
                <view class="text-28 text-[#333]">
                  领用提醒
                </view>
                <view class="text-24 text-[#999]">
                  2024/6/5 9:00
                </view>
              </view>
              <view class="mt-18rpx text-24 text-[#666]">
                您有新的领用订单，花色：尺寸：领用人：领用人手机号：预约时间：
              </view>
              <view class="flex justify-end mt-26rpx">
                <nut-button
                  custom-color="#FFAA00" custom-style="--nut-button-default-border-color: #ffaa00;width: 156rpx;height: 62rpx;"
                >
                  查看
                </nut-button>
              </view>
            </view>
          </nut-cell>
          <nut-cell>
            <view class="flex flex-col w-full">
              <view class="flex items-center justify-between pb-13px" style="border-bottom: 1px solid rgba(220, 221, 221, .75);">
                <view class="text-28 text-[#333]">
                  换租提醒
                </view>
                <view class="text-24 text-[#999]">
                  2024/6/5 9:00
                </view>
              </view>
              <view class="mt-18rpx text-24 text-[#666]">
                您有新的领用订单，花色：尺寸：领用人：领用人手机号：预约时间：
              </view>
              <view class="flex justify-end mt-26rpx">
                <nut-button
                  custom-color="#FFAA00" custom-style="--nut-button-default-border-color: #ffaa00;width: 156rpx;height: 62rpx;"
                >
                  查看
                </nut-button>
              </view>
            </view>
          </nut-cell>
          <nut-cell>
            <view class="flex flex-col w-full">
              <view class="flex items-center justify-between pb-13px" style="border-bottom: 1px solid rgba(220, 221, 221, .75);">
                <view class="text-28 text-[#333]">
                  归还提醒
                </view>
                <view class="text-24 text-[#999]">
                  2024/6/5 9:00
                </view>
              </view>
              <view class="mt-18rpx text-24 text-[#666]">
                您有新的领用订单，花色：尺寸：领用人：领用人手机号：预约时间：
              </view>
              <view class="flex justify-end mt-26rpx">
                <nut-button
                  custom-color="#FFAA00" custom-style="--nut-button-default-border-color: #ffaa00;width: 156rpx;height: 62rpx;"
                >
                  查看
                </nut-button>
              </view>
            </view>
          </nut-cell>
        </view>
        <!-- <bf-empty type="notice" /> -->
        <!-- #engregion 消息通知列表 -->
      </nut-tab-pane>
    </nut-tabs>
  </view>
</template>

<style>
page {
  background-color: #F9F7F4;
}
</style>

<style lang="scss" scoped>
.title-list {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;

  .title-item {
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;
    height: 100%;
    font-size: 24rpx;
    color: #898989;
    .item__line {
      content: ' ';
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 0;
      height: 4rpx;
      background: #FFAA00;
      opacity: $tabs-titles-item-line-opacity;
      transform: translate(-50%, 0);
      transition: width 0.3s ease;
      overflow: hidden;
    }
  }

  .tabs-active {
    color: #FFAA00;
    opacity: $tabs-titles-item-line-opacity;
    transition: width 0.3s ease;
    .item__line {
      width: 38rpx;
    }
  }
}

::v-deep .nut-tabs__titles {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
}

::v-deep .nut-tabs__content {
  padding-top: var(--nut-tabs-horizontal-titles-height, 46px);
}

::v-deep .nut-tab-pane {
  padding: 0 28rpx !important;
  background-color: #F9F7F4;
}

.notice-list {
  border-radius: 16rpx;
}
</style>
