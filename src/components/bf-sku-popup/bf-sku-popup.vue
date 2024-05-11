<script lang="ts" setup>
import bfModuleHead from '@/components/bf-module-head/bf-module-head.vue'

const showBasic = ref(false)

function onShowBasic() {
  showBasic.value = true
}

defineExpose({
  onShowBasic,
})
</script>

<template>
  <view class="component-sku-popup">
    <nut-popup
      v-model:visible="showBasic" round closeable safe-area-inset-bottom position="bottom"
      pop-class="sku-popup"
    >
      <template #closeIcon>
        <view class="i-carbon-close-large sku-icon" />
      </template>
      <view class="px-28rpx py-39rpx sku-popup-wrap">
        <view class="text-24 text-#66421E">
          已选：白色；120cm*180cm；9次
        </view>
        <view class="w-150 h-150 image-wrap">
          <image src="@/static/product.png" mode="aspectFill" class="w-full h-full" />
        </view>
        <view>
          <bf-module-head title="颜色分类" />
          <view class="sku-list">
            <view class="sku-item">
              纯白色
            </view>
            <view class="sku-item">
              奶黄色
            </view>
            <view class="sku-item">
              山茶绿
            </view>
            <view class="sku-item">
              芋泥紫
            </view>
            <view class="sku-item">
              晨雾蓝
            </view>
          </view>
        </view>
        <view>
          <bf-module-head title="尺寸" />
          <view class="sku-list">
            <view class="sku-item">
              100cm*200cm
            </view>
            <view class="sku-item">
              150cm*210cm
            </view>
          </view>
        </view>
        <view>
          <bf-module-head title="换租次数" />
          <view class="sku-list">
            <view class="sku-item">
              9次
            </view>
          </view>
        </view>
        <view>
          <bf-module-head title="会员卡" description="*将存入专用账户 本订单会员服务结束后自动退还" />
          <view class="sku-list">
            <view class="sku-item selected">
              &yen;200
            </view>
          </view>
        </view>
        <view class="flex flex-center btn">
          马上租
        </view>
      </view>
    </nut-popup>
  </view>
</template>

<style lang="scss" scoped>
.component-sku-popup {
  .sku-popup-wrap {
    display: flex;
    flex-direction: column;
    gap: 34rpx;
  }

  .image-wrap {
    border-radius: 10rpx;
    overflow: hidden;
  }

  .btn {
    width: 100%;
    height: 76rpx;
    margin-left: auto;
    border-radius: 76rpx;
    font-size: 28rpx;
    color: #fff;
    background-color: #FFAA00;
  }

  .sku-list {
    display: flex;
    flex-wrap: wrap;
    gap: 12rpx;
    margin-top: 28rpx;
  }

  .sku-item {
    min-width: 132rpx;
    padding: 12rpx 20rpx;
    border-radius: 8rpx;
    font-size: 24rpx;
    line-height: 1;
    color: #333;
    text-align: center;
    background-color: #EFEFEF;
    transition: all ease .3s;

    &.selected {
      color: #fff;
      background-color: #FFAA00;
    }
  }

  .sku-icon {
    font-size: 32rpx;
    color: #FFAA00;
  }
}

// :deep(.sku-popup .nut-popup__close-icon .nut-icon) {
//   width: 28rpx;
//   height: 28rpx;
//   font-size: 28rpx;
// }
</style>
