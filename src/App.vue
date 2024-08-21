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
@import '@/styles/reset.scss';
@import '@/styles/theme.scss';

@import 'nutui-uniapp/styles/index.scss';
</style>
