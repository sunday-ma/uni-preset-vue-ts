<route lang="json5">
{
  style: {
    navigationBarTitleText: '发放'
  },
}
</route>

<script lang="ts" setup>
import bfModuleHead from '@/components/bf-module-head/bf-module-head.vue'

const { chooseImage, tempFiles, removeImage } = useImage()
const { phoneCall } = useCall()

function handleIssue() {
  console.log('tempFiles', tempFiles.value)
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

      <!-- #region 发放记录 -->
      <view class="record-list">
        <nut-cell>
          <view class="flex flex-col gap-30rpx w-100% text-24rpx leading-none record-item">
            <bf-module-head title="发放记录" />
            <view class="flex items-center justify-between w-100% text-24 text-#333 cell">
              <view class="flex items-center label">
                <view class="leading-none">
                  发放次数
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
                  发放时间
                </view>
              </view>
              <view class="text-#999">
                2024-04-27 10:50
              </view>
            </view>
            <view class="flex items-center justify-between w-100% text-24 text-#333 cell">
              <view class="flex items-center label">
                <view class="leading-none">
                  发放服务点
                </view>
              </view>
              <view class="text-#999">
                济南市天桥区和谐广场银座2号楼
              </view>
            </view>
            <view class="text-24 text-#333 cell">
              <view class="flex items-center label">
                <view class="leading-none">
                  上传发放照片（至少3张）
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

      <!-- #region 发放 -->
      <view class="mt-auto">
        <nut-button block custom-color="#FFAA00" custom-style="--nut-button-default-border-color: #ffaa00;" @click="handleIssue">
          确认发放
        </nut-button>
      </view>
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
