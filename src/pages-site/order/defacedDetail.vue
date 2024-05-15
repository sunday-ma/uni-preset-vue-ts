<route lang="json5">
{
  style: {
    navigationBarTitleText: '污损订单'
  },
}
</route>

<script lang="ts" setup>
const { chooseImage, tempFiles, removeImage } = useChooseImage()
const { setClipboard } = useCopy()
const { phoneCall } = useCall()

const form = ref({
  description: '', // 罚款说明
  priceNum: '', // 罚款金额
  remake: '', // 备注
})
</script>

<template>
  <view class="px-28rpx page">
    <nut-cell>
      <view class="w-full">
        <view class="tips">
          对于一些需特殊处理的污渍，我们将收取少量的特殊处理费，以确保污渍得到妥善处理，恢复床上用品的整洁度。
        </view>
        <view class="flex flex-col gap-24rpx mt-22rpx leading-none">
          <view class="flex items-center justify-between text-24 text-#333 cell">
            <view class="flex items-center label">
              <view class="leading-none">
                服务点
              </view>
            </view>
            <view class="text-#999">
              济南市天桥区和谐广场银座2号楼
            </view>
          </view>
          <view class="flex items-center justify-between text-24 text-#333 cell">
            <view class="flex items-center label">
              <view class="leading-none">
                服务点联系电话
              </view>
            </view>
            <view class="text-#999" @click="phoneCall('114')">
              132 1234 5678
            </view>
          </view>
          <view class="text-24 text-#333 cell">
            <view class="flex items-center label">
              <view class="leading-none">
                验收不合格照片
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
      </view>
    </nut-cell>
    <nut-cell>
      <view class="flex items-center justify-between text-24 text-#333 w-full">
        <view class="flex items-center label">
          <view class="leading-none">
            费用说明
          </view>
        </view>
        <view class="flex-1 pl-24rpx">
          <nut-input
            v-model="form.description"
            :border="false"
            placeholder="请输入费用说明（必填）"
            clearable
            custom-style="--nut-input-padding: 0; font-size: 24rpx;"
          />
        </view>
      </view>
    </nut-cell>
    <nut-cell>
      <view class="flex items-center justify-between text-24 text-#333 w-full">
        <view class="flex items-center label">
          <view class="leading-none">
            罚款金额
          </view>
        </view>
        <view class="flex-1 pl-24rpx">
          <nut-input
            v-model="form.priceNum"
            type="number"
            :border="false"
            placeholder="请输入罚款金额（必填）"
            clearable
            custom-style="--nut-input-padding: 0; font-size: 24rpx;"
          >
            <template #right>
              元
            </template>
          </nut-input>
        </view>
      </view>
    </nut-cell>
    <nut-cell>
      <view class="flex items-center justify-between text-24 text-#333 w-full">
        <view class="flex items-center label">
          <view class="leading-none">
            备注
          </view>
        </view>
        <view class="flex-1 pl-24rpx">
          <nut-input
            v-model="form.remake"
            :border="false"
            placeholder="请输入备注"
            clearable
            custom-style="--nut-input-padding: 0; font-size: 24rpx;"
          />
        </view>
      </view>
    </nut-cell>
    <nut-cell>
      <view class="w-full">
        <view class="flex flex-col gap-10rpx">
          <view class="flex items-center justify-between text-24 text-#333 cell">
            <view class="flex items-center label">
              <view class="leading-none">
                租赁订单编号
              </view>
            </view>
            <view class="text-#999">
              123456789876543212345 | <text class="text-#FFAA00" @click="setClipboard('编号')">
                复制
              </text>
            </view>
          </view>
          <view class="flex items-center justify-between text-24 text-#333 cell">
            <view class="flex items-center label">
              <view class="leading-none">
                罚款订单编号
              </view>
            </view>
            <view class="text-#999">
              123456789876543212345 | <text class="text-#FFAA00" @click="setClipboard('编号')">
                复制
              </text>
            </view>
          </view>
          <view class="flex items-center justify-between text-24 text-#333 cell">
            <view class="flex items-center label">
              <view class="leading-none">
                创建时间
              </view>
            </view>
            <view class="text-#999">
              2024-03-26 18:27:46
            </view>
          </view>
          <view class="flex items-center justify-between text-24 text-#333 cell">
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
      </view>
    </nut-cell>
    <nut-button block custom-color="#ffaa00" custom-style="--nut-button-default-border-color: #ffaa00;">
      提交
    </nut-button>
  </view>
</template>

<style lang="scss" scoped>
.tips {
  padding: 16rpx;
  border: 1px solid #FFAA00;
  border-radius: 18rpx;
  --at-apply: text-24rpx text-[#ffaa00] bg-[#FFF7EB];
}
</style>
