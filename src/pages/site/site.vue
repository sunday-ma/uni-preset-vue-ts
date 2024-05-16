<route lang="json5">
{
  style: {
    navigationBarTitleText: '服务点'
  },
}
</route>

<script lang="ts" setup>
import bfModuleHead from '@/components/bf-module-head/bf-module-head.vue'
import { ORDERSTATUS } from '@/common/orderStatus'

const { phoneCall } = useCall()

/**
 * 用户端服务点数据
 */
const userData = reactive({
  tabsList: [
    {
      id: 1,
      title: '全部服务点',
    },
    {
      id: 2,
      title: '常去',
    },
  ],
  tabsState: 1,
})

/**
 * 服务端服务点数据
 */
const serviceData = reactive({
  tabsList: [
    {
      id: 1,
      title: '全部',
    },
    {
      id: 2,
      title: '待支付',
    },
    // {
    //   id: 3,
    //   title: '待领用',
    // },
    {
      id: 4,
      title: '租用中',
    },
    {
      id: 5,
      title: '消息通知',
    },
  ],
  tabsState: 1,
  keyword: '',
  showPopup: false,
  radioVal: '1',
  checked: false,
})

function handleScanEvent() {
  uni.scanCode({
    success: (res) => {
      console.log(res)
    },
  })
}

function handleServiceTabClick(params: {
  id: number
  title: string
}) {
  if (params.id === 5) {
    uni.navigateTo({
      url: '/pages/notice/site',
    })
    return
  }
  serviceData.tabsState = params.id
}

function toDetail() {
  uni.navigateTo({
    url: '/pages-site/order/detail',
  })
}
</script>

<template>
  <view class="page">
    <!-- #region 用户端服务点 -->
    <view v-if="false" class="user">
      <view class="flex items-center header">
        <view class="flex flex-center w-34 h-34 rounded-full bg-[#ffaa00] icon">
          <image src="@/static/address.svg" mode="widthFix" class="w-14" />
        </view>
        <view class="flex-1 ml-14rpx text-24 text-[#3E3A39]">
          当前服务点：济南市槐荫区和谐广场二号楼...
        </view>
      </view>

      <view class="px-28rpx mt-32rpx main">
        <bf-module-head title="选择服务点" />
        <view class="mt-32rpx rounded-18rpx overflow-hidden wrap">
          <nut-tabs v-model="userData.tabsState" background="#fff">
            <template #titles>
              <div class="title-list">
                <view
                  v-for="item in userData.tabsList" :key="item.id" class="title-item"
                  :class="{ 'tabs-active': userData.tabsState === item.id }" @click="userData.tabsState = item.id"
                >
                  <view>
                    {{ item.title }}
                  </view>
                  <view class="item__line" />
                </view>
              </div>
            </template>
            <nut-tab-pane v-for="item in userData.tabsList" :key="item.id" :pane-key="item.id">
              <!-- #region 服务点列表 -->
              <view class="site-list">
                <view class="flex p-28rpx rounded-18rpx text-0 item">
                  <view class="relative rounded-8rpx overflow-hidden">
                    <image src="@/static/site.jpg" mode="aspectFill" class="w-150 h-150 rounded-18rpx" />
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
                      <view class="mt-10rpx text-[#000]" @click="phoneCall('114')">
                        服务点电话：0531-123 45678
                      </view>
                    </view>
                  </view>
                </view>
                <view class="flex p-28rpx rounded-18rpx text-0 item">
                  <view class="relative rounded-8rpx overflow-hidden">
                    <image src="@/static/site.jpg" mode="aspectFill" class="w-150 h-150 rounded-18rpx" />
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
                      <view class="mt-10rpx text-[#000]" @click="phoneCall('114')">
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
    <!-- #endregion -->

    <!-- #region 服务端服务点 -->
    <view v-else class="service">
      <view class="header">
        <view class="flex items-center gap-12rpx px-28rpx py-16rpx search">
          <nut-input
            v-model="serviceData.keyword" placeholder="输入手机号或订单编码" clearable
            custom-style="--nut-input-padding: 12rpx 20rpx;flex: 1;border-radius: 8rpx;font-size: 24rpx;"
          >
            <template #left>
              <nut-icon name="search" size="24rpx" />
            </template>
          </nut-input>
          <view class="flex flex-center w-66 h-66 rounded-8rpx bg-[#ffaa00]" @click="handleScanEvent">
            <view class="i-fluent-scan-dash-20-filled text-40 text-[#fff]" />
          </view>
          <view class="flex flex-center w-66 h-66 rounded-8rpx bg-[#ffaa00]" @click="serviceData.showPopup = true">
            <view class="i-fluent-multiselect-20-filled text-40 text-[#fff]" />
          </view>
        </view>
        <nut-tabs v-model="serviceData.tabsState" background="#fff">
          <template #titles>
            <div class="title-list">
              <view
                v-for="item in serviceData.tabsList" :key="item.id" class="title-item"
                :class="{ 'tabs-active': serviceData.tabsState === item.id }" @click="handleServiceTabClick(item)"
              >
                <view>
                  {{ item.title }}
                </view>
                <view class="item__line" />
              </view>
            </div>
          </template>
          <!-- <nut-tab-pane v-for="item in serviceData.tabsList" :key="item.id" :pane-key="item.id">
            {{ item.title }}
          </nut-tab-pane> -->
        </nut-tabs>
      </view>
      <view class="px-28rpx main">
        <nut-cell>
          <view class="flex flex-col gap-24rpx w-100% text-24rpx leading-none" @click="toDetail">
            <view class="flex items-center justify-between">
              <view>
                订单编号: 679485789876543212345
              </view>
              <view :style="{ color: ORDERSTATUS.COLLECTED }">
                待领用
              </view>
            </view>
            <view class="flex">
              <image
                src="@/static/product-1.png"
                mode="aspectFill"
                class="w-136 h-136 rounded-10rpx"
              />
              <view class="flex-1 pl-40rpx">
                <view class="flex items-baseline w-100%">
                  <text class="text-26rpx text-#333">
                    学年卡
                  </text>
                </view>
                <view class="mt-22rpx text-18rpx leading-1.6em text-#999">
                  <view>
                    花色：白色
                  </view>
                  <view>
                    尺寸：150cm*210cm
                  </view>
                  <view>
                    换租次数：0/9次
                  </view>
                </view>
              </view>
            </view>
            <view class="flex items-center justify-between">
              <view>
                <nut-tag plain custom-color="#ffaa00">
                  新用户
                </nut-tag>
              </view>
              <view class="text-[#ffaa00]">
                赠送礼品
              </view>
            </view>
            <view class="flex items-center justify-between">
              <view class="tag">
                领用人
              </view>
              <view>云暖阳</view>
            </view>
            <view class="flex items-center justify-between">
              <view class="tag">
                领用人手机号
              </view>
              <view @click="phoneCall('114')">
                132 1234 5678
              </view>
            </view>
            <view class="flex items-center justify-between">
              <view class="tag">
                使用地址
              </view>
              <view>
                济南市槐荫区暖阳云被中学 4栋202室
              </view>
            </view>
            <view class="flex items-center justify-between">
              <view class="tag">
                上次换租时间
              </view>
              <view>无</view>
            </view>
            <view class="flex flex-wrap justify-end gap-24rpx foot">
              <nut-button custom-color="#FFAA00" custom-style="--nut-button-default-border-color: #ffaa00;height: 60rpx">
                发放
              </nut-button>
              <nut-button plain custom-color="#FFAA00" custom-style="--nut-button-default-border-color: #ffaa00;height: 60rpx">
                换租
              </nut-button>
              <nut-button plain custom-style="height: 60rpx">
                归还
              </nut-button>
              <nut-button custom-color="#FC6565" custom-style="--nut-button-default-border-color: #FC6565;height: 60rpx">
                污损费
              </nut-button>
              <nut-button plain custom-style="height: 60rpx">
                退款
              </nut-button>
            </view>
          </view>
        </nut-cell>
        <nut-cell>
          <view class="flex flex-col gap-24rpx w-100% text-24rpx leading-none">
            <view class="flex items-center justify-between">
              <view>
                订单编号: 679485789876543212345
              </view>
              <view :style="{ color: ORDERSTATUS.COLLECTED }">
                待领用
              </view>
            </view>
            <view class="flex">
              <image
                src="@/static/product-1.png"
                mode="aspectFill"
                class="w-136 h-136 rounded-10rpx"
              />
              <view class="flex-1 pl-40rpx">
                <view class="flex items-baseline w-100%">
                  <text class="text-26rpx text-#333">
                    学年卡
                  </text>
                </view>
                <view class="mt-22rpx text-18rpx leading-1.6em text-#999">
                  <view>
                    花色：白色
                  </view>
                  <view>
                    尺寸：150cm*210cm
                  </view>
                  <view>
                    换租次数：0/9次
                  </view>
                </view>
              </view>
            </view>
            <view class="flex items-center justify-between">
              <view>
                <nut-tag plain custom-color="#ffaa00">
                  新用户
                </nut-tag>
              </view>
              <view class="text-[#ffaa00]">
                赠送礼品
              </view>
            </view>
            <view class="flex items-center justify-between">
              <view class="tag">
                领用人
              </view>
              <view>云暖阳</view>
            </view>
            <view class="flex items-center justify-between">
              <view class="tag">
                领用人手机号
              </view>
              <view @click="phoneCall('114')">
                132 1234 5678
              </view>
            </view>
            <view class="flex items-center justify-between">
              <view class="tag">
                使用地址
              </view>
              <view>
                济南市槐荫区暖阳云被中学 4栋202室
              </view>
            </view>
            <view class="flex items-center justify-between">
              <view class="tag">
                上次换租时间
              </view>
              <view>无</view>
            </view>
            <view class="flex flex-wrap justify-end gap-24rpx foot">
              <nut-button custom-color="#FFAA00" custom-style="--nut-button-default-border-color: #ffaa00;height: 60rpx">
                发放
              </nut-button>
              <nut-button plain custom-color="#FFAA00" custom-style="--nut-button-default-border-color: #ffaa00;height: 60rpx">
                换租
              </nut-button>
              <nut-button plain custom-style="height: 60rpx">
                归还
              </nut-button>
              <nut-button custom-color="#FC6565" custom-style="--nut-button-default-border-color: #FC6565;height: 60rpx">
                污损费
              </nut-button>
              <nut-button plain custom-style="height: 60rpx">
                退款
              </nut-button>
            </view>
          </view>
        </nut-cell>
        <!-- <bf-empty /> -->
      </view>

      <!-- #region 筛选 -->
      <nut-popup
        v-model:visible="serviceData.showPopup"
        position="bottom"
        closeable
        round
        safe-area-inset-bottom
        pop-class="search-popup"
      >
        <template #closeIcon>
          <view class="i-carbon-close-large search-icon" />
        </template>
        <view class="search-wrap">
          <view class="text-32 text-[#66421E] text-center">
            全部筛选
          </view>
          <view class="flex flex-col gap-24rpx">
            <view class="inline-flex flex-col items-start gap-24rpx">
              <bf-module-head title="订单时间" />
              <view class="inline-flex items-center px-18rpx py-14rpx rounded-10rpx bg-#F2F2F2 text-24">
                <image
                  src="@/static/date.svg"
                  mode="widthFix"
                  class="w-22 h-22 mr-15rpx"
                />
                <view class="text-[#B5B5B6]">
                  {{ '请选择订单时间' }}
                </view>
              </view>
            </view>
            <view class="flex flex-col gap-24rpx">
              <bf-module-head title="花色" />
              <nut-radio-group v-model="serviceData.radioVal" direction="horizontal">
                <nut-radio shape="button" label="1">
                  白色
                </nut-radio>
                <nut-radio shape="button" label="2">
                  黄色
                </nut-radio>
                <nut-radio shape="button" label="3">
                  蓝色
                </nut-radio>
                <nut-radio shape="button" label="4">
                  绿色
                </nut-radio>
              </nut-radio-group>
            </view>
            <view class="flex flex-col gap-24rpx">
              <bf-module-head title="套餐" />
              <nut-radio-group v-model="serviceData.radioVal" direction="horizontal">
                <nut-radio shape="button" label="1">
                  单次
                </nut-radio>
                <nut-radio shape="button" label="2">
                  学年卡
                </nut-radio>
                <nut-radio shape="button" label="3">
                  年卡
                </nut-radio>
                <nut-radio shape="button" label="4">
                  结业卡
                </nut-radio>
              </nut-radio-group>
            </view>
            <view class="flex flex-col gap-24rpx">
              <bf-module-head title="订单状态" />
              <nut-radio-group v-model="serviceData.radioVal" direction="horizontal">
                <nut-radio shape="button" label="1">
                  待领用
                </nut-radio>
                <nut-radio shape="button" label="2">
                  租用中
                </nut-radio>
                <nut-radio shape="button" label="3">
                  已完成
                </nut-radio>
              </nut-radio-group>
            </view>
            <view class="flex flex-col gap-24rpx">
              <nut-radio-group v-model="serviceData.radioVal">
                <nut-radio label="1">
                  <view class="text-28 text-[#66421E]">
                    无罚款订单
                  </view>
                  <template #icon>
                    <view class="i-fluent-checkbox-unchecked-20-regular text-40 text-[#B5B5B6]" />
                  </template>
                  <template #checkedIcon>
                    <view class="i-fluent-checkmark-square-20-filled text-40 text-[#ffaa00]" />
                  </template>
                </nut-radio>
                <nut-radio label="2">
                  <view class="text-28 text-[#66421E]">
                    罚款未支付订单
                  </view>
                  <template #icon>
                    <view class="i-fluent-checkbox-unchecked-20-regular text-40 text-[#B5B5B6]" />
                  </template>
                  <template #checkedIcon>
                    <view class="i-fluent-checkmark-square-20-filled text-40 text-[#ffaa00]" />
                  </template>
                </nut-radio>
                <nut-radio label="3">
                  <view class="text-28 text-[#66421E]">
                    罚款已支付订单
                  </view>
                  <template #icon>
                    <view class="i-fluent-checkbox-unchecked-20-regular text-40 text-[#B5B5B6]" />
                  </template>
                  <template #checkedIcon>
                    <view class="i-fluent-checkmark-square-20-filled text-40 text-[#ffaa00]" />
                  </template>
                </nut-radio>
              </nut-radio-group>
            </view>
            <view class="flex items-center gap-24rpx">
              <bf-module-head title="会员费是否退还" />
              <view class="flex items-center gap-24rpx text-24 text-[#333]">
                <text>否</text>
                <nut-switch v-model="serviceData.checked" active-color="#ffaa00" />
                <text>是</text>
              </view>
            </view>
            <view class="flex justify-between mt-48rpx">
              <nut-button plain custom-style="width: 264rpx">
                重置
              </nut-button>
              <nut-button custom-color="#ffaa00" custom-style="--nut-button-default-border-color: #ffaa00;width: 264rpx">
                确定
              </nut-button>
            </view>
          </view>
        </view>
      </nut-popup>
      <!-- #endregion -->
    </view>
    <!-- #endregion -->
  </view>
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

::v-deep .nut-tab-pane {
  padding: 24rpx 28rpx;
}

.user {
  .header {
    padding: 26rpx 28rpx;
    background-color: #fff;
  }

  .site-list {
    .item {
      border: 1px solid #DCDDDD;
    }

    .item+.item {
      margin-top: 24rpx;
    }
  }

  .notice-list {
    border-radius: 16rpx;
    background-color: #fff;
  }

  .notice-item {
    padding: 30rpx 28rpx;
  }

  .notice-item+.notice-item {
    --at-apply: border-t-solid border-1 border-#DCDDDD
  }
}

.service {
  .header {
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
    background-color: #F7F5F4
  }

  .tag {
    color: #333;
  }

  .tag-new {
    padding: 4rpx 8rpx;
    border: 1px #FFAA00 solid;
    font-size: 24rpx;
    line-height: 1;
    color: #FFAA00;
  }

  .foot {
    padding-top: 22rpx;
    border-top: 1px dotted #333;
  }
}

::v-deep .service .nut-input {
  align-items: center;
}

::v-deep .service .nut-input__value {
  height: 24rpx !important;
  line-height: 24rpx !important;
}

::v-deep .service .nut-input__input {
  min-height: unset;
  height: 24rpx !important;
  line-height: 24rpx !important;
}

.search-popup {
  .search-icon {
    font-size: 32rpx;
    color: #FFAA00;
  }
  .search-wrap {
    padding: 70rpx 28rpx 0;
  }
}

::v-deep .search-popup .nut-popup__close-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32rpx !important;
  height: 32rpx !important;
  font-size: 32rpx !important;
  color: #FFAA00;
}

::v-deep .search-popup .nut-radio__button {
  border-radius: 6rpx;
}

::v-deep .search-popup .nut-radio__button--active {
  background-color: #FFAA00;
  color: #fff;
  border-color: #ffaa00;
}

::v-deep .search-popup .nut-radio__label {
  margin-left: 16rpx;
}
</style>
