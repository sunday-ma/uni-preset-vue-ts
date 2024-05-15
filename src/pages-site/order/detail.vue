<route lang="json5">
{
  style: {
    navigationBarTitleText: '订单详情'
  },
}
</route>

<script lang="ts" setup>
// import { previewImage } from '@uni-helper/uni-promises'
import { ORDERSTATUS } from '@/common/orderStatus'
import bfModuleHead from '@/components/bf-module-head/bf-module-head.vue'

const { setClipboard } = useCopy()
const { phoneCall } = useCall()

/**
 * 预览图片
 * @param current 当前显示图片的链接/索引值
 * @param urls 需要预览的图片链接列表
 */
// function previewImageEvent(current: number, urls: string[]) {
//   previewImage({
//     current,
//     urls,
//   })
// }

/**
 *
 */
const collapseActive = ref('1')
function handleCollapseChange(modelValue: string | number | Array<string | number>, currName: string | number, status: boolean) {
  console.log(modelValue, currName, status)
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
                    商品总价
                  </view>
                </view>
                <view>
                  &yen;800
                </view>
              </view>
              <view class="flex items-center justify-between w-100% text-24 text-#333 cell">
                <view class="flex items-center label">
                  <view class="leading-none">
                    优惠金额
                  </view>
                </view>
                <view class="text-#FC3C32">
                  减&yen;50
                </view>
              </view>
              <view class="flex items-center justify-between w-100% text-24 text-#333 cell">
                <view class="flex items-center label">
                  <view class="leading-none">
                    实付款
                  </view>
                </view>
                <view>
                  &yen;750
                </view>
              </view>
            </view>
          </view>
        </nut-cell>
      </view>
      <!-- #endregion -->

      <!-- #region 订单信息2 -->
      <view class="mt-24rpx">
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

      <!-- #region 发放验收记录 -->
      <view
        class="mt-24rpx"
        style="--nut-collapse-wrapper-content-padding: 12px 26px 20px 26px;"
      >
        <view class="flex flex-col gap-30rpx w-100% text-24rpx leading-none">
          <bf-module-head title="发放验收记录" />
          <nut-collapse v-model="collapseActive" :accordion="true" @change="handleCollapseChange">
            <nut-collapse-item :name="1">
              <template #title>
                第1次发放验收记录
              </template>
              <view class="flex flex-col record-list">
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
                        验收照片
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
                  <view class="flex items-center justify-between w-100% text-24 text-#333 cell">
                    <view class="flex items-center label">
                      <view class="leading-none">
                        验收状态
                      </view>
                    </view>
                    <view class="text-#FC6565">
                      验收不合格
                    </view>
                  </view>
                  <view class="flex items-center justify-between w-100% text-24 text-#333 cell">
                    <view class="flex items-center label">
                      <view class="leading-none">
                        罚款原因
                      </view>
                    </view>
                    <view class="text-#999">
                      小面积需特殊处理脏污
                    </view>
                  </view>
                  <view class="flex items-center justify-between w-100% text-24 text-#333 cell">
                    <view class="flex items-center label">
                      <view class="leading-none">
                        罚款金额
                      </view>
                    </view>
                    <view class="text-#999">
                      &yen;10
                    </view>
                  </view>
                  <view class="flex items-center justify-between w-100% text-24 text-#333 cell">
                    <view class="flex items-center label">
                      <view class="leading-none">
                        罚款单支付状态
                      </view>
                    </view>
                    <view class="text-#8FC31F">
                      已支付
                    </view>
                  </view>
                </view>
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
                      发放服务点
                    </view>
                  </view>
                  <view class="text-24 text-#333 cell">
                    <view class="flex items-center label">
                      <view class="leading-none">
                        发放照片
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
                </view>
              </view>
            </nut-collapse-item>
          </nut-collapse>
        </view>
      </view>
      <!-- #endregion -->

      <!-- #region 操作栏 -->
      <view class="px-30rpx py-18rpx footer">
        <view class="flex items-center justify-end gap-20rpx">
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
      <!-- #endregion -->
    </view>
  </nut-config-provider>
</template>

<style>
.nut-collapse__item-wrapper__content {
  border-bottom-left-radius: 18rpx;
  border-bottom-right-radius: 18rpx;
}
page {
  padding-bottom: calc(env(safe-area-inset-bottom) + 140rpx);
}
</style>

<style lang="scss" scoped>
.record-list {
  .record-item + .record-item {
    padding-top: 30rpx;
    margin-top: 30rpx;
    border-top: 1px dashed #999;
  }
}
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  padding-bottom: calc(env(safe-area-inset-bottom) + 18rpx);
  background: #fff;
}
</style>
