<route lang="json5">
{
  style: {
    navigationBarTitleText: '我的'
  },
}
</route>

<script lang="ts" setup>
import { chooseMedia } from '@uni-helper/uni-promises'

const form = ref({
  avatar: '',
  username: '',
})

const popupStatus = ref({
  avatar: false,
  username: false,
})
function showPopup(params: 'avatar' | 'username') {
  popupStatus.value[params] = true
}
function chooseImage() {
  chooseMedia({
    count: 1,
    mediaType: ['image'],
    sourceType: ['album', 'camera'],
    sizeType: ['original', 'compressed'],
  }).then((res) => {
    console.log('chooseImage', res)
  })
}
function handleSave(params: 'avatar' | 'username') {
  console.log('form', form.value)
  popupStatus.value[params] = false
}
</script>

<template>
  <!-- #region main -->
  <view class="px-22rpx page">
    <nut-cell-group>
      <nut-cell is-link @click="showPopup('avatar')">
        <template #title>
          <view class="flex items-center">
            <view class="text-28 text-#66421E">
              头像
            </view>
            <view class="ml-40rpx">
              <image
                src="@/static/product.png"
                mode="aspectFill"
                class="w-70 h-70 rounded-full"
              />
            </view>
          </view>
        </template>
        <template #link>
          <view class="flex items-center">
            <text class="text-24 text-#FFAA00">
              更换
            </text>
            <nut-icon name="right" size="20rpx" custom-color="#ffaa00" />
          </view>
        </template>
      </nut-cell>
      <nut-cell is-link @click="showPopup('username')">
        <template #title>
          <view class="flex items-baseline">
            <view class="text-28 text-#66421E">
              用户名
            </view>
            <view class="ml-10rpx text-24 text-#727171">
              暖阳云被用户123
            </view>
          </view>
        </template>
        <template #link>
          <view class="flex items-center">
            <text class="text-24 text-#FFAA00">
              修改
            </text>
            <nut-icon name="right" size="20rpx" custom-color="#ffaa00" />
          </view>
        </template>
      </nut-cell>
      <nut-cell is-link to="/pages/single/system">
        <template #title>
          <view class="text-28 text-#66421E">
            互信会员制度
          </view>
        </template>
        <template #link>
          <view class="flex items-center">
            <text class="text-24 text-#FFAA00">
              查看
            </text>
            <nut-icon name="right" size="20rpx" custom-color="#ffaa00" />
          </view>
        </template>
      </nut-cell>
    </nut-cell-group>
  </view>
  <!-- #endregion main -->

  <!-- #region 头像编辑弹窗 -->
  <nut-popup v-model:visible="popupStatus.avatar" position="center" :custom-style="{ width: '80%', padding: '30rpx 50rpx', borderRadius: '30rpx' }">
    <view class="flex flex-col items-center popup-wrap">
      <view class="mb-40rpx text-32 text-#333 text-center title">
        更换头像
      </view>
      <view class="relative" @click="chooseImage">
        <nut-avatar size="180rpx">
          <image
            src="@/static/product.png"
            mode="widthFix"
          />
        </nut-avatar>
        <view class="i-carbon-image-search absolute top-50% left-50% text-54 text-#fff" style="transform:translate(-50%, -50%)" />
      </view>
      <view class="w-full mt-40rpx">
        <nut-button block custom-color="#ffaa00" @click="handleSave('avatar')">
          保存
        </nut-button>
      </view>
    </view>
  </nut-popup>
  <!-- #endregion 头像编辑弹窗 -->

  <!-- #region 用户名编辑弹窗 -->
  <nut-popup v-model:visible="popupStatus.username" position="center" :custom-style="{ width: '80%', padding: '30rpx 50rpx', borderRadius: '30rpx' }">
    <view class="popup-wrap">
      <view class="mb-40rpx text-32 text-#333 text-center title">
        修改用户名
      </view>
      <nut-input v-model.trim="form.username" input-align="center" placeholder="请输入用户名" />
      <view class="mt-40rpx">
        <nut-button block custom-color="#ffaa00" @click="handleSave('username')">
          保存
        </nut-button>
      </view>
    </view>
  </nut-popup>
  <!-- #endregion 用户名编辑弹窗 -->
</template>

<style>
.popup-wrap {
  --nut-button-border-width: 0
}
</style>

<style lang="scss" scoped>

</style>
