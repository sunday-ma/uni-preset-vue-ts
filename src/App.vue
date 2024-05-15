<script setup lang="ts">
/// <reference types="@uni-helper/vite-plugin-uni-pages/client" />
import { pages } from 'virtual:uni-pages'

onLaunch(() => {
  console.log('App Launch')
  // #ifdef MP-WEIXIN
  // 检查微信小程序新版本
  if (wx.canIUse('getUpdateManager')) {
    const updateManager = wx.getUpdateManager()
    updateManager.onCheckForUpdate((res) => {
      console.warn('[请求完新版本信息的回调]', res.hasUpdate)
      if (res.hasUpdate) {
        updateManager.onUpdateReady(() => {
          wx.showModal({
            title: '更新提示',
            content: '新版本已经准备好，是否重启使用？',
            success(res) {
              if (res.confirm)
                updateManager.applyUpdate()
            },
          })
        })
        updateManager.onUpdateFailed(() => {
          wx.showModal({
            title: '已经有新版本了哟~',
            content: '新版本已经上线啦~，请您删除当前小程序，重新搜索打开哟~',
          })
        })
      }
    })
  }
  else {
    wx.showModal({
      title: '提示',
      content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。',
    })
  }
  // #endif
  console.log('pages', pages)
})
onShow(() => {
  console.log('App Show')
})
onHide(() => {
  console.log('App Hide')
})
</script>

<style lang="scss">
@import "nutui-uniapp/styles/index.scss";

page {
  background-color: #F9F7F4;
  --at-apply: pb-safe;
}
view {
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
.module-head {
  &-title {
    &::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 0;
      width: 8rpx;
      height: 24rpx;
      border-radius: 23rpx;
      background: #FFAA00;
      transform: translateY(-50%);
    }
  }
}

@for $i from 1 through 5 {
  .line-#{$i} {
    @if $i == '1' {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    } @else {
      display: -webkit-box!important;
      overflow: hidden;
      text-overflow: ellipsis;
      word-break: break-all;
      -webkit-line-clamp: $i;
      -webkit-box-orient: vertical!important;
    }
  }
}

.component-sku-popup .nut-popup__close-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32rpx !important;
  height: 32rpx !important;
  font-size: 32rpx !important;
  color: #FFAA00;
}

::v-deep .component-empty .nut-empty__box {
  height: auto !important;
}
</style>
