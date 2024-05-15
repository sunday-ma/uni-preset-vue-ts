<route lang="json5">
{
  style: {
    navigationBarTitleText: '验收'
  },
}
</route>

<script lang="ts" setup>
import bfModuleHead from '@/components/bf-module-head/bf-module-head.vue'
import bfSitePopup from '@/components/bf-site-popup/bf-site-popup.vue'

const { chooseImage, tempFiles, removeImage } = useChooseImage()
const { phoneCall } = useCall()

/**
 * 验收合格
 */
const qualifiedPopup = ref<InstanceType<typeof bfSitePopup> | null>(null)
function qualified() {
  qualifiedPopup.value?.onShowPopup()
}
/**
 * 验收不合格
 */
function unqualified() {

}
function qualifiedCancel() {
  console.log('稍后发放')
  qualifiedPopup.value?.onHidePopup()
}
function qualifiedConfirm() {
  console.log('立即发放')
  uni.navigateTo({
    url: '/pages-site/order/issue',
  })
  qualifiedPopup.value?.onHidePopup()
}

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
</script>

<template>
  <nut-config-provider>
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
      </view>
      <!-- #endregion -->

      <!-- #region 验收记录 -->
      <view class="record-list">
        <nut-cell>
          <view class="flex flex-col gap-30rpx w-100% text-24rpx leading-none record-item">
            <bf-module-head title="验收记录" />
            <view class="flex items-center justify-between w-100% text-24 text-#333 cell">
              <view class="flex items-center label">
                <view class="leading-none">
                  验收次数
                </view>
              </view>
              <view class="text-#999">
                2/9次
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
            <view class="flex items-center justify-between w-100% text-24 text-#333 cell">
              <view class="flex items-center label">
                <view class="leading-none">
                  验收时间
                </view>
              </view>
              <view class="text-#999">
                2024-04-27 10:50
              </view>
            </view>
            <view class="flex items-center justify-between w-100% text-24 text-#333 cell">
              <view class="flex items-center label">
                <view class="leading-none">
                  验收服务点
                </view>
              </view>
              <view class="text-#999">
                济南市天桥区和谐广场银座2号楼
              </view>
            </view>
            <view class="text-24 text-#333 cell">
              <view class="flex items-center label">
                <view class="leading-none">
                  上传验收照片（至少3张）
                </view>
              </view>
              <view class="mt-30rpx scroll-list">
                <view class="grid grid-cols-3 gap-12rpx">
                  <!-- 上传块 -->
                  <view class="relative w-full h-0 pb-100% rounded-8rpx overflow-hidden" @click="chooseImage">
                    <view class="absolute top-0 left-0 flex flex-center w-full h-full bg-[#EFEFEF]">
                      <view class="i-fluent-scan-camera-20-regular text-80 text-[#B5B5B6]" />
                    </view>
                  </view>
                  <!-- 展示块 -->
                  <view v-for="item in tempFiles" :key="item.tempFilePath" class="relative w-full h-0 pb-100% rounded-8rpx overflow-hidden">
                    <view class="absolute top-0 left-0 flex flex-center w-full h-full bg-[#EFEFEF]">
                      <image
                        :src="item.tempFilePath"
                        mode="aspectFill"
                        class="w-full h-full"
                      />
                      <view class="absolute top-0 right-0 flex flex-center w-38 h-38 rounded-bl-8rpx bg-[red]" @click="removeImage(item.tempFilePath)">
                        <view class="i-fluent-dismiss-16-regular text-24 text-[#fff]" />
                      </view>
                    </view>
                  </view>
                </view>
              </view>
            </view>
          </view>
        </nut-cell>
      </view>
      <!-- #endregion -->

      <!-- #region 验收 -->
      <view class="flex justify-between mt-auto">
        <nut-button
          custom-color="#FFAA00" custom-style="--nut-button-default-border-color: #ffaa00;width: 264rpx"
          @click="qualified"
        >
          验收合格
        </nut-button>
        <nut-button
          v-if="false"
          custom-color="#FFAA00" custom-style="--nut-button-default-border-color: #ffaa00;width: 264rpx"
          @click="refund"
        >
          验收合格
        </nut-button>
        <nut-button
          custom-color="#FC3C32" custom-style="--nut-button-default-border-color: #FC3C32;width: 264rpx"
          @click="unqualified"
        >
          验收不合格
        </nut-button>
      </view>
      <!-- #endregion -->

      <!-- #region 验收合格弹窗 -->
      <bf-site-popup
        ref="qualifiedPopup"
        title="已完成验收，请选择是否立即发放"
        cancel-text="否"
        confirm-text="是"
        @cancel="qualifiedCancel"
        @confirm="qualifiedConfirm"
      />
      <!-- #endregion -->

      <!-- #region 验收合格退款弹窗 -->
      <bf-site-popup
        ref="refundPopup"
        title="已完成验收，请为客户退款"
        :show-cancel="false"
        confirm-text="退款"
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
</style>
