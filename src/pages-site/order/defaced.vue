<route lang="json5">
{
  style: {
    navigationBarTitleText: '污损订单'
  },
}
</route>

<script lang="ts" setup>
import { ORDERSTATUS } from '@/common/orderStatus'

// function toDetail() {
//   uni.navigateTo({
//     url: '/pages-site/order/defacedDetail',
//   })
// }
</script>

<template>
  <view class="px-28rpx page">
    <view class="list">
      <nut-cell>
        <view class="w-full item">
          <view class="flex items-center justify-between text-28">
            <view class="text-#333">
              第1次换租污损罚款
            </view>
            <view :style="{ color: ORDERSTATUS.PENDING }">
              未付款
            </view>
          </view>
          <view class="flex mt-24rpx leading-1.4em">
            <image
              src="@/static/product-1.png"
              mode="aspectFill"
              class="w-136 h-136 rounded-10rpx"
            />
            <view class="flex-1 pl-40rpx">
              <view class="flex items-baseline w-100%">
                <text class="text-24rpx text-#333">
                  费用说明：小面积需特殊处理污损小面积需特殊处理污损
                </text>
                <text class="pl-12rpx ml-a text-24rpx text-#3E3A39">
                  &yen;69
                </text>
              </view>
              <view class="flex items-baseline w-100%">
                <text class="text-24rpx text-#333">
                  支付金额：&yen;10
                </text>
              </view>
              <view class="text-18rpx text-#999 leading-1.6em">
                白色；150cm*210cm；9次
              </view>
            </view>
          </view>
          <!-- <view class="flex justify-end mt-26rpx">
            <nut-button
              plain
              custom-color="#FC6565"
              @click="toDetail"
            >
              查看污损订单
            </nut-button>
          </view> -->
        </view>
      </nut-cell>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.btn {
  position: fixed;
  left: 0;
  bottom: calc(env(safe-area-inset-bottom) + 40rpx);
  width: 100%;
  padding: 0 28rpx;
  z-index: 10;
}
</style>
