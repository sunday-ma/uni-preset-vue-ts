<route lang="json5">
{
  style: {
    navigationBarTitleText: '我的'
  },
}
</route>

<script lang="ts" setup>
/**
 * 跳转设置页
 */
function handleToSettingEvent() {
  uni.navigateTo({
    url: '/pages/mine/settings',
  })
}

/**
 * 功能按钮
 */
const navigationList = ref([
  {
    id: 1,
    title: '我的订单',
    icon: 'i-fluent-clipboard-bullet-list-20-regular',
    path: '/pages/order/list',
  },
  {
    id: 2,
    title: '我的会员卡',
    icon: 'i-fluent-wallet-credit-card-20-regular',
    path: '',
  },
  {
    id: 3,
    title: '服务点查询',
    icon: 'i-fluent-search-20-regular',
    path: '/pages/site/site',
    type: 'tabbar',
  },
  {
    id: 4,
    title: '租赁服务详情',
    icon: 'i-fluent-apps-20-regular',
    path: '',
  },
  {
    id: 5,
    title: '关于我们',
    icon: 'i-fluent-chat-warning-20-regular',
    path: '',
  },
])
function handleNavigationEvent(data: {
  id: number
  title: string
  icon: string
  path: string
  type?: string
}) {
  console.log('data', data)
  if (data.path) {
    if (data.type) {
      uni.switchTab({
        url: data.path,
      })
      return false
    }

    uni.navigateTo({
      url: data.path,
    })
  }
}
</script>

<template>
  <view class="page">
    <!-- #region header -->
    <view class="relative">
      <image
        src="@/static/mine-header.jpg"
        mode="aspectFill"
        class="w-full h-300"
      />
      <view class="absolute top-0 left-0 w-full z-10 flex items-center pt-56rpx px-22rpx header-wrap">
        <image
          src="@/static/product.png"
          mode="aspectFill"
          class="w-120 h-120 rounded-full"
        />
        <view class="ml-36rpx">
          <view class="text-28 text-#66421E">
            暖阳云被用户123
          </view>
          <view class="tag">
            互信会员
          </view>
        </view>
        <view class="ml-a setting" @click="handleToSettingEvent">
          <image
            src="@/static/setting.svg"
            mode="widthFix"
            class="w-52"
          />
        </view>
      </view>
    </view>
    <!-- #endregion header -->

    <!-- #region main -->
    <view class="relative z-11 px-22rpx mt--95rpx">
      <nut-cell-group>
        <nut-cell v-for="item in navigationList" :key="item.id" is-link @click="handleNavigationEvent(item)">
          <template #icon>
            <view :class="item.icon" class="text-40rpx text-#FFAA00" />
          </template>
          <template #title>
            <view class="text-28 text-#66421E">
              {{ item.title }}
            </view>
          </template>
          <template #link>
            <nut-icon name="right" size="20rpx" custom-color="#C9CACA" />
          </template>
        </nut-cell>
      </nut-cell-group>
    </view>
    <!-- #endregion main -->
  </view>
</template>

<style lang="scss" scoped>
.tag {
  width: 130rpx;
  margin-top: 24rpx;
  border-radius: 44rpx;
  font-size: 22rpx;
  line-height: 32rpx;
  text-align: center;
  color: #fff;
  background-color: #ffaa00;
}
</style>
