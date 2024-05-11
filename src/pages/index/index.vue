<route lang="json5">
{
  style: {
    navigationBarTitleText: '首页',
    navigationStyle: 'custom'
  },
}
</route>

<script lang="ts" setup>
import mpHtml from 'mp-html/dist/uni-app/components/mp-html/mp-html'
import bfProduct from '@/components/bf-product/bf-product.vue'
import bfSwiper from '@/components/bf-swiper/bf-swiper.vue'
import bfModuleHead from '@/components/bf-module-head/bf-module-head.vue'

import { ProductEnum } from '@/common/router'

/**
 * 轮播图
 */
const bannerData = ref<IBanner[]>([
  {
    id: 1,
    path: '',
    type: '',
    url: '/static/banner.png',
  },
  {
    id: 2,
    path: '',
    type: '',
    url: '/static/banner.png',
  },
  {
    id: 3,
    path: '',
    type: '',
    url: '/static/banner.png',
  },
])

/**
 * 轮播图点击事件
 * @param data 点击数据
 */
function handleBannerEvent(data: IBanner) {
  console.log(data)
}

/**
 * 金刚区
 */
const kingKongData = ref([
  {
    id: 1,
    title: '领用码',
    icon: '/static/kingkong-1.png',
    path: '',
  },
  {
    id: 2,
    title: '换租码',
    icon: '/static/kingkong-2.png',
    path: '',
  },
  {
    id: 3,
    title: '归还码',
    icon: '/static/kingkong-3.png',
    path: '',
  },
])
/**
 * 金刚区点击事件
 * @param data 点击数据
 * @param data.id 点击id
 * @param data.title 标题
 * @param data.icon 图标
 * @param data.path 路由路径
 */
function handleKingKongEvent(data: {
  id: number
  title: string
  icon: string
  path: string
}) {
  console.log(data)
}

/**
 * ModuleHead 点击事件
 */
function handleModuleMoreEvent(type: string) {
  console.log(type)
  switch (type) {
    case 'notice':
      uni.navigateTo({
        url: '/pages/notice/index',
      })
      break
    case 'hot':
      uni.navigateTo({
        url: '/pages/product/list',
      })
      break
    default:
      break
  }
}

/**
 * 热销款式
 */
const hotStyleData = ref([
  {
    id: 1,
    title: '学年卡',
    price: 55,
    image: '/static/product.png',
  },
  {
    id: 2,
    title: '结业卡',
    price: 69,
    image: '/static/product.png',
  },
  {
    id: 3,
    title: '单次卡',
    price: 99,
    image: '/static/product.png',
  },
  {
    id: 4,
    title: '年卡',
    price: 108,
    image: '/static/product.png',
  },
])

function handleProductClick(data: any) {
  uni.navigateTo({
    url: `${ProductEnum.DETAIL}?id=${data.id}`,
  })
}
</script>

<template>
  <view class="page">
    <!-- #region Banner -->
    <view class="banner">
      <bf-swiper :data="bannerData" @click="handleBannerEvent" />
    </view>
    <!-- #endregion Banner -->

    <!-- #region 主体内容 -->
    <view class="relative z-10 px-28rpx mt--98rpx">
      <!-- #region 金刚区 -->
      <view class="grid grid-cols-3 gap-12rpx king-kong-district">
        <view
          v-for="item in kingKongData" :key="item.id"
          class="flex flex-col items-center h-292rpx pt-60rpx rounded-18rpx bg-#fff" @tap="handleKingKongEvent(item)"
        >
          <image :src="item.icon" mode="aspectFit" class="w-90rpx h-90rpx icon" />
          <text class="mt-32rpx">
            {{ item.title }}
          </text>
        </view>
      </view>
      <!-- #endregion 金刚区 -->

      <!-- #region 消息通知 -->
      <view class="module notice">
        <bf-module-head title="消息通知" more-text="更多" @click="handleModuleMoreEvent('notice')" />
        <view class="flex flex-col gap-20rpx mt-20rpx list">
          <view class="flex items-center item">
            <view class="i-carbon-circle-solid" text="12 #FFD880" />
            <view class="flex-1 ml-10rpx line-1" text="24 #666">
              1.领用通知：您的**订单，**年*月*日可到**服务点领取服务点领取
            </view>
          </view>
          <view class="flex items-center item">
            <view class="i-carbon-circle-solid" text="12 #FFD880" />
            <view class="flex-1 ml-10rpx line-1" text="24 #666">
              2.换租通知：您的**订单，距上一次换租已超过*天，请
            </view>
          </view>
          <view class="flex items-center item">
            <view class="i-carbon-circle-solid" text="12 #FFD880" />
            <view class="flex-1 ml-10rpx line-1" text="24 #666">
              3.归还通知：您的**订单，换租次数已使用完毕，请及时
            </view>
          </view>
        </view>
      </view>
      <!-- #endregion 消息通知 -->

      <!-- #region 热销款式 -->
      <view class="module hot">
        <bf-module-head title="热销款式" more-text="查看全部" @click="handleModuleMoreEvent('hot')" />
        <view class="mt-36rpx">
          <bf-product :data="hotStyleData" :cols="2" :gap-x="12" :gap-y="26" @click="handleProductClick" />
          <view class="grid grid-cols-2 gap-x-12rpx gap-y-26rpx" />
        </view>
      </view>
      <!-- #endregion 热销款式 -->

      <!-- #region 租赁规则 -->
      <view class="module rule">
        <bf-module-head title="租赁规则" />
        <view class="mt-36rpx">
          <mp-html content="<div>Hello World!</div>" />
        </view>
        <view class="i-fluent:scan-dash-20-filled" />
      </view>
      <!-- #endregion 租赁规则 -->
    </view>
    <!-- #endregion 主体内容 -->
  </view>
</template>

<style lang="scss" scoped>
.module {
  --at-apply: px-28rpx py-36rpx mt-24rpx bg-#fff rounded-18rpx;
}
</style>
