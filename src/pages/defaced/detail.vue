<route lang="json5">
{
  style: {
    navigationBarTitleText: '污损订单'
  },
}
</route>

<script lang="ts" setup>
</script>

<template>
  <view class="px-28rpx page">
    <nut-cell>
      <view class="w-full">
        <view class="tips">
          对于一些需特殊处理的污渍，我们将收取少量的特殊处理费，以确保污渍得到妥善处理，恢复床上用品的整洁度。
        </view>
        <view class="flex flex-col gap-10rpx mt-22rpx">
          <view class="flex items-center justify-between text-24 text-#333 cell">
            <view class="flex items-center label">
              <view class="leading-none">
                费用说明
              </view>
            </view>
            <view class="text-#999">
              小面积需特殊处理污损
            </view>
          </view>
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
            <view class="text-#999">
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
              <scroll-view scroll-x enable-flex class="w-full whitespace-nowrap">
                <view class="flex gap-10rpx">
                  <view class="flex-shrink-0">
                    <image
                      src="@/static/product-1.png"
                      mode="aspectFill"
                      class="w-194 h-194 rounded-18rpx"
                    />
                  </view>
                  <view class="flex-shrink-0">
                    <image
                      src="@/static/product.png"
                      mode="aspectFill"
                      class="w-194 h-194 rounded-18rpx"
                    />
                  </view>
                  <view class="flex-shrink-0">
                    <image
                      src="@/static/product-1.png"
                      mode="aspectFill"
                      class="w-194 h-194 rounded-18rpx"
                    />
                  </view>
                  <view class="flex-shrink-0">
                    <image
                      src="@/static/product.png"
                      mode="aspectFill"
                      class="w-194 h-194 rounded-18rpx"
                    />
                  </view>
                  <view class="flex-shrink-0">
                    <image
                      src="@/static/product-1.png"
                      mode="aspectFill"
                      class="w-194 h-194 rounded-18rpx"
                    />
                  </view>
                  <view class="flex-shrink-0">
                    <image
                      src="@/static/product.png"
                      mode="aspectFill"
                      class="w-194 h-194 rounded-18rpx"
                    />
                  </view>
                </view>
              </scroll-view>
            </view>
          </view>
          <view class="flex items-center justify-between text-24 text-#333 cell">
            <view class="flex items-center label">
              <view class="leading-none">
                支付金额
              </view>
            </view>
            <view class="text-#FC6565">
              &yen;10
            </view>
          </view>
          <view class="flex items-center justify-between text-24 text-#333 cell">
            <view class="flex items-center label">
              <view class="leading-none">
                备注
              </view>
            </view>
            <view class="text-#999">
              线下收款10元
            </view>
          </view>
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
              123456789876543212345 | <text class="text-#FFAA00">
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
              123456789876543212345 | <text class="text-#FFAA00">
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
      支付
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
