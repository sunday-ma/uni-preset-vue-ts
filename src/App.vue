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
@import 'nutui-uniapp/styles/index.scss';

:root,
page {
  // 主色调
  --nut-primary-color: #fa2c19;
  --nut-primary-color-end: #fa6419;

  // 辅助色
  --nut-help-color: #f5f5f5;

  // 标题常规文字
  --nut-title-color: #1a1a1a;

  // 副标题
  --nut-title-color2: #666666;

  // 次内容
  --nut-text-color: #808080;

  // 特殊禁用色
  --nut-disable-color: #cccccc;
  --nut-white: #fff;
  --nut-black: #000;
  --nut-required-color: #fa2c19;

  // 暗黑模式下颜色
  --nut-dark-background: #131313;
  --nut-dark-background2: #1b1b1b;
  --nut-dark-background3: #141414;
  --nut-dark-background4: #323233;
  --nut-dark-background5: #646566;
  --nut-dark-background6: #380e08;
  --nut-dark-background7: #707070;
  --nut-dark-color: var(--nut-white);
  --nut-dark-color2: #f2270c;
  --nut-dark-color3: rgba(232, 230, 227, 0.8);
  --nut-dark-color-gray: var(--nut-text-color);
  --nut-dark-calendar-choose-color: rgba(227, 227, 227, 0.2);
  --nut-dark-calendar-disabled: #646566;

  // 字体
  --nut-font-family: PingFang SC, Microsoft YaHei, Helvetica, Hiragino Sans GB,
    SimSun, sans-serif;

  // Font
  --nut-font-size-0: 10px;
  --nut-font-size-1: 12px;
  --nut-font-size-2: 14px;
  --nut-font-size-3: 16px;
  --nut-font-size-4: 18px;
  --nut-font-weight-bold: 400;
  --nut-font-size-small: var(--nut-font-size-1);
  --nut-font-size-base: var(--nut-font-size-2);
  --nut-font-size-large: var(--nut-font-size-3);
  --nut-line-height-base: 1.5;
}

page {
  background-color: #f9f7f4;
}

view {
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
</style>
