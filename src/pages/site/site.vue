<route lang="json5">
{
  style: {
    navigationBarTitleText: '服务点'
  },
}
</route>

<script lang="ts" setup>
import bfModuleHead from '@/components/bf-module-head/bf-module-head.vue'

const tabsList = ref([
  {
    id: 1,
    title: '附近服务点',
  },
  {
    id: 2,
    title: '收藏/常去',
  },
])
const tabsState = ref(1)

const value = ref(1)
</script>

<template>
  <view class="page">
    <view class="flex items-center header">
      <view class="flex flex-center w-34 h-34 rounded-full bg-[#ffaa00] icon">
        <image
          src="@/static/address.svg"
          mode="widthFix"
          class="w-14"
        />
      </view>
      <view class="flex-1 ml-14rpx text-24 text-[#3E3A39]">
        当前服务点：济南市槐荫区和谐广场二号楼...
      </view>
    </view>

    <view class="px-28rpx mt-32rpx main">
      <bf-module-head title="选择服务点" />
      <view class="mt-32rpx rounded-18rpx overflow-hidden wrap">
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
            <!-- #region 服务点列表 -->
            <view class="site-list">
              <view class="flex p-28rpx rounded-18rpx text-0 item">
                <view class="relative rounded-8rpx overflow-hidden">
                  <image
                    src="@/static/site.jpg"
                    mode="aspectFill"
                    class="w-150 h-150 rounded-18rpx"
                  />
                  <view class="absolute top-0 left-0 flex flex-center w-40 h-40" style="border-top-left-radius: 8rpx; border-bottom-right-radius: 8rpx; background-color: rgba(0, 0, 0, .4);">
                    <nut-rate v-model="value" size="24rpx" active-color="#ffaa00" :count="1" />
                  </view>
                </view>
                <view class="pl-26rpx info">
                  <view class="text-28 text-[#333]">
                    <text class="mr-18rpx">
                      和谐广场店
                    </text>
                    <nut-tag custom-color="#FFAA00" round>
                      常去
                    </nut-tag>
                  </view>
                  <view class="mt-18rpx text-18">
                    <view class="text-[#999]">
                      经十路22799号银座中心经十路一侧步行街入口处F1层
                    </view>
                    <view class="mt-16rpx text-[#000]">
                      周一至周五 09:00 - 18:00
                    </view>
                    <view class="mt-10rpx text-[#000]">
                      服务点电话：0531-123 45678
                    </view>
                  </view>
                </view>
              </view>
            </view>
            <!-- #engregion 服务点列表 -->
          </nut-tab-pane>
        </nut-tabs>
      </view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.header {
  padding: 26rpx 28rpx;
  background-color: #fff;
}

.site-list {
  .item {
    border: 1px solid #DCDDDD;
  }
}

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

::v-deep .nut-tab-pane {
  padding: 24rpx 28rpx;
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
</style>
