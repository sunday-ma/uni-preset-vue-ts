<route lang="json5">
{
  style: {
    navigationBarTitleText: '我的订单'
  },
}
</route>

<script lang="ts" setup>
const tabsList = ref([
  {
    id: 1,
    title: '全部',
  },
  {
    id: 2,
    title: '待付款',
  },
  {
    id: 3,
    title: '待领用',
  },
  {
    id: 4,
    title: '租用中',
  },
  {
    id: 5,
    title: '退款售后',
  },
])
const tabsState = ref(1)

const orderStatusColor = ref({
  pending: '#FFAA00',
  collected: '#09A6FF',
  renting: '#D1E503',
  refund: '#FC6565',
})

const themeVars = reactive({
  buttonDefaultPadding: '0 24rpx',
})
</script>

<template>
  <nut-config-provider :theme-vars="themeVars">
    <view class="page">
      <nut-tabs v-model="tabsState" background="#fff">
        <template #titles>
          <div class="title-list">
            <view
              v-for="item in tabsList" :key="item.id" class="title-item"
              :class="{ 'tabs-active': tabsState === item.id }" @click="tabsState = item.id"
            >
              <view>
                {{ item.title }}
              </view>
              <view class="item__line" />
            </view>
          </div>
        </template>
        <nut-tab-pane v-for="item in tabsList" :key="item.id" :pane-key="item.id">
          <!-- #region 订单列表 -->
          <!-- <nut-empty image="empty" description="无内容" /> -->
          <view class="flex flex-col gap-24rpx order-list">
            <view class="order-item">
              <view class="flex items-center justify-between text-24">
                <view class="text-#333">
                  <text>订单编号：</text>
                  <text>123456789876543212345</text>
                </view>
                <view :style="{ color: orderStatusColor.pending }">
                  待付款
                </view>
              </view>
              <view class="flex mt-28rpx">
                <image
                  src="@/static/product-1.png"
                  mode="aspectFill"
                  class="w-136 h-136 rounded-10rpx"
                />
                <view class="flex-1 pt-18rpx pl-40rpx">
                  <view class="flex items-baseline w-100%">
                    <text class="text-28rpx text-#333">
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
              <view class="flex items-center justify-end gap-20rpx mt-24rpx">
                <nut-button plain custom-style="height: 60rpx">
                  取消订单
                </nut-button>
                <nut-button custom-color="#FFAA00" custom-style="--nut-button-default-border-color: #ffaa00;height: 60rpx">
                  立即支付
                </nut-button>
              </view>
            </view>
            <view class="order-item">
              <view class="flex items-center justify-between text-24">
                <view class="text-#333">
                  <text>订单编号：</text>
                  <text>123456789876543212345</text>
                </view>
                <view :style="{ color: orderStatusColor.pending }">
                  待付款
                </view>
              </view>
              <view class="flex mt-28rpx">
                <image
                  src="@/static/product-1.png"
                  mode="aspectFill"
                  class="w-136 h-136 rounded-10rpx"
                />
                <view class="flex-1 pt-18rpx pl-40rpx">
                  <view class="flex items-baseline w-100%">
                    <text class="text-28rpx text-#333">
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
              <view class="flex items-center justify-end gap-20rpx mt-24rpx">
                <nut-button plain custom-color="#FC6565" custom-style="--nut-button-default-border-color: #FC6565;height: 60rpx">
                  污损费
                </nut-button>
                <nut-button plain custom-style="height: 60rpx">
                  申请退款
                </nut-button>
                <nut-button plain custom-style="height: 60rpx">
                  归还
                </nut-button>
                <nut-button plain custom-color="#FFAA00" custom-style="--nut-button-default-border-color: #ffaa00;height: 60rpx">
                  换租
                </nut-button>
              </view>
            </view>
          </view>
          <view class="mt-24rpx text-18 text-center text-#999">
            没有更多了，再去逛逛吧~
          </view>
          <!-- #engregion 订单列表 -->
        </nut-tab-pane>
      </nut-tabs>
    </view>
  </nut-config-provider>
</template>

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
  padding: 24rpx 28rpx;
  background-color: #F9F7F4;
}

.notice-list {
  border-radius: 16rpx;
  background-color: #fff;
}

.notice-item {
  padding: 30rpx 28rpx;
}

.notice-item + .notice-item  {
  --at-apply: border-t-solid border-1 border-#DCDDDD
}

.order {
  &-item {
    padding: 28rpx;
    border-radius: 18rpx;
    background-color: #fff;
  }
}
</style>
