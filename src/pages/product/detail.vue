<route lang="json5">
{
  style: {
    navigationBarTitleText: '产品详情'
  },
}
</route>

<script lang="ts" setup>
import mpHtml from 'mp-html/dist/uni-app/components/mp-html/mp-html'
import bfSwiper from '@/components/bf-swiper/bf-swiper.vue'
import bfSkuPopup from '@/components/bf-sku-popup/bf-sku-popup.vue'

import { PRODUCT } from '@/apis'

/**
 * 轮播图
 */
const bannerData = ref<IBanner[]>([
  {
    id: 1,
    path: '',
    type: '',
    url: '/static/product-1.png',
  },
  {
    id: 2,
    path: '',
    type: '',
    url: '/static/product-1.png',
  },
  {
    id: 3,
    path: '',
    type: '',
    url: '/static/product-1.png',
  },
])

/**
 * tahs
 */
const tabsList = ref([
  {
    id: 1,
    title: '产品详情',
  },
  {
    id: 2,
    title: '赠品',
  },
  {
    id: 3,
    title: '互信会员',
  },
  {
    id: 4,
    title: '污损费',
  },
])
const tabsState = ref(1)

function handleTabEvent(data: any) {
  console.log('handleTabEvent', data)
  tabsState.value = data.id
}

/**
 * 规格弹窗
 */
const skuPopup = ref<InstanceType<typeof bfSkuPopup> | null>(null)

function showSkuPopup() {
  skuPopup.value?.onShowBasic()
}

onLoad((options) => {
  console.log('onLoad', options?.no)
  PRODUCT.detail({ no: options?.no }).then((res) => {
    console.log('PRODUCT.detail', res)
  })
})
</script>

<template>
  <view class="page">
    <!-- #region Banner -->
    <view class="banner">
      <bf-swiper :data="bannerData" height="748rpx" bottom="72rpx" />
    </view>
    <!-- #endregion Banner -->

    <!-- #region Main -->
    <view class="px-28rpx main">
      <view class="header">
        <view class="price">
          &yen;<text>55</text>.00
        </view>
        <view class="flex items-center tag">
          <view class="label">
            赠品
          </view>
          <view class="text">
            学年卡、年卡下单即送“省钱省事大礼包”
          </view>
        </view>
        <view class="title">
          学年卡
        </view>
      </view>
      <view class="tabs-list">
        <nut-tabs v-model="tabsState" background="#fff">
          <template #titles>
            <div class="title-list">
              <view
                v-for="item in tabsList" :key="item.id" class="title-item"
                :class="{ 'tabs-active': tabsState === item.id }" @click="handleTabEvent(item)"
              >
                <view>
                  {{ item.title }}
                </view>
                <view class="item__line" />
              </view>
            </div>
          </template>
        </nut-tabs>
      </view>
      <view class="rich-text">
        <mp-html content="<div>Hello World!</div>" />
      </view>
    </view>
    <!-- #endregion Main -->

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
      <view class="flex flex-center btn" @click="showSkuPopup">
        马上租
      </view>
    </view>
    <!-- #endregion Footer -->

    <!-- #region 规格选择 -->
    <bf-sku-popup ref="skuPopup" />
    <!-- #endregion 规格选择 -->
  </view>
</template>

<style>
page {
  padding-bottom: calc(env(safe-area-inset-bottom) + 140rpx);
  --nut-popup-close-icon-margin: 39rpx;
}
</style>

<style lang="scss" scoped>
.main {
  position: relative;
  z-index: 10;
  margin-top: -40rpx;

  .header {
    padding: 26rpx 30rpx 51rpx 30rpx;
    border-top-right-radius: 16rpx;
    border-top-left-radius: 16rpx;
    background-color: #fff;

    .price {
      font-size: 30rpx;
      line-height: 1;
      color: #E83828;
      text {
        font-size: 55rpx;
      }
    }

    .tag {
      padding: 16rpx;
      margin-top: 16rpx;
      border: 1px solid #FFAA00;
      border-radius: 10rpx;
      background-color: #FFF7EB;

      .label {
        padding: 2rpx 6rpx;
        margin-right: 26rpx;
        border: 1px solid #FFAA00;
        border-radius: 2rpx;
        font-size: 16rpx;
        line-height: 1;
        color: #FFAA00;
        background-color: #fff;
      }

      .text {
        font-size: 24rpx;
        line-height: 1;
        color: #FFAA00;
      }
    }

    .title {
      margin-top: 32rpx;
      font-size: 30rpx;
      line-height: 1;
      color: #333;
    }
  }
}

.tabs-list {
  margin-top: 4rpx;
  border-bottom-right-radius: 16rpx;
  border-bottom-left-radius: 16rpx;
  overflow: hidden;
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
        width: 100%;
      }
    }
  }
}

.rich-text {
  padding: 66rpx 26rpx;
  margin-top: 20rpx;
  border-radius: 16rpx;
  background-color: #fff;
}

.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  padding-bottom: calc(env(safe-area-inset-bottom) + 18rpx);
  background: #fff;

  .btn {
    width: 190rpx;
    height: 76rpx;
    margin-left: auto;
    border-radius: 76rpx;
    font-size: 28rpx;
    color: #fff;
    background-color: #FFAA00;
  }
}
</style>
