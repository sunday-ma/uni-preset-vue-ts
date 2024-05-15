<route lang="json5">
{
  style: {
    navigationBarTitleText: '退款单'
  },
}
</route>

<script lang="ts" setup>
import { ORDERSTATUS } from '@/common/orderStatus'

import bfSitePopup from '@/components/bf-site-popup/bf-site-popup.vue'

const { setClipboard } = useCopy()
const { phoneCall } = useCall()
/**
 * 验收退款
 */
const refundPopup = ref<InstanceType<typeof bfSitePopup> | null>(null)
function refund() {
  refundPopup.value?.onShowPopup()
}
function refundConfirm() {
  console.log('退款')
  refundPopup.value?.onHidePopup()
}

const themeVars = reactive({
  buttonDefaultPadding: '0 24rpx',
})
</script>

<template>
  <nut-config-provider :theme-vars="themeVars">
    <view class="px-28rpx page">
      <!-- #region 订单信息 -->
      <view class="order-info">
        <nut-cell>
          <view class="flex flex-col gap-30rpx w-100% text-24rpx leading-none">
            <view class="flex flex-col gap-24rpx w-100%">
              <view class="flex items-center justify-between w-100% text-24 text-#333 cell">
                <view class="flex items-center label">
                  <view class="leading-none">
                    领用人: 云暖阳
                  </view>
                </view>
              </view>
            </view>
          </view>
        </nut-cell>
        <nut-cell>
          <view class="flex flex-col gap-30rpx w-100% text-24rpx leading-none">
            <view class="flex flex-col gap-24rpx w-100%">
              <view class="flex items-center justify-between w-100% text-24 text-#333 cell">
                <view class="flex items-center label">
                  <view class="leading-none" @click="phoneCall('114')">
                    领用人手机号：132 1234 5678
                  </view>
                </view>
              </view>
            </view>
          </view>
        </nut-cell>
        <nut-cell>
          <view class="flex flex-col gap-30rpx w-100% text-24rpx leading-none">
            <view class="flex flex-col gap-24rpx w-100%">
              <view class="flex items-center justify-between w-100% text-24 text-#333 cell">
                <view class="flex items-center label">
                  <view class="leading-none">
                    使用地址：济南市槐荫区暖阳云被中学 4栋202室
                  </view>
                </view>
              </view>
            </view>
          </view>
        </nut-cell>
        <nut-cell>
          <view class="flex flex-col gap-30rpx w-100% text-24rpx leading-none">
            <view class="flex">
              <image
                src="@/static/product-1.png"
                mode="aspectFill"
                class="w-136 h-136 rounded-10rpx"
              />
              <view class="flex-1 pl-40rpx">
                <view class="flex items-baseline justify-between w-100%">
                  <text class="text-26rpx text-#333">
                    学年卡
                  </text>
                  <view :style="{ color: ORDERSTATUS.COLLECTED }">
                    待领用
                  </view>
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
            <view class="flex flex-col gap-24rpx w-100%">
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
              <view class="flex items-center justify-between w-100% text-24 text-#333 cell">
                <view class="flex items-center label">
                  <view class="leading-none">
                    会员卡
                  </view>
                </view>
                <view>
                  &yen;200
                </view>
              </view>
              <view class="flex items-center justify-between w-100% text-24 text-#333 cell">
                <view class="flex items-center label">
                  <view class="leading-none">
                    剩余换租次数
                  </view>
                </view>
                <view>
                  7次
                </view>
              </view>
              <view class="flex items-center justify-between w-100% text-24 text-#333 cell">
                <view class="flex items-center label">
                  <view class="leading-none">
                    订单金额
                  </view>
                </view>
                <view>
                  &yen;600
                </view>
              </view>
              <view class="flex items-center justify-between w-100% text-24 text-#333 cell">
                <view class="flex items-center label">
                  <view class="leading-none">
                    退款金额
                  </view>
                </view>
                <view>
                  &yen;466.67
                </view>
              </view>
            </view>
          </view>
        </nut-cell>
        <nut-cell>
          <view class="flex flex-col gap-30rpx w-100% text-24rpx leading-none">
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
                2024-04-27 10:50
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
          </view>
        </nut-cell>
      </view>
      <!-- #endregion -->

      <!-- #region 底部 -->
      <view class="mt-auto">
        <view class="mb-1em text-24 text-[#FC6565] text-center">
          *有未支付的罚款订单，请联系用户支付后退款
        </view>
        <nut-button
          block
          custom-color="#FFAA00" custom-style="--nut-button-default-border-color: #FFAA00;"
          disabled
          @click="refund"
        >
          退款
        </nut-button>
      </view>
      <!-- #endregion -->

      <!-- #region 退款弹窗 -->
      <bf-site-popup
        ref="refundPopup"
        title="退款成功"
        :show-cancel="false"
        confirm-text="确认"
        @confirm="refundConfirm"
      />
      <!-- #endregion -->
    </view>
  </nut-config-provider>
</template>

<style lang="scss" scoped>
.page {
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - env(safe-area-inset-bottom) * 2 + 40rpx);
}
:deep(.nut-button--disabled) {
  background-color: #C9CACA !important;
  border-color: #C9CACA !important;
}
</style>
