// pages.config.ts
import { defineUniPages } from '@uni-helper/vite-plugin-uni-pages'

export default defineUniPages({
  // 你也可以定义 pages 字段，它具有最高的优先级。
  pages: [],
  globalStyle: {
    navigationBarTitleText: '暖阳云被',
    navigationBarTextStyle: 'black',
    navigationBarBackgroundColor: '#fff',
    backgroundColor: '#fff',
  },
  tabBar: {
    color: '#999',
    selectedColor: '#333',
    backgroundColor: '#fff',
    list: [
      {
        pagePath: 'pages/index/index',
        iconPath: 'static/tabbar/home.png',
        selectedIconPath: 'static/tabbar/home-sekected.png',
        text: '首页',
      },
      {
        pagePath: 'pages/site/site',
        iconPath: 'static/tabbar/site.png',
        selectedIconPath: 'static/tabbar/site-sekected.png',
        text: '服务点',
      },
      {
        pagePath: 'pages/mine/mine',
        iconPath: 'static/tabbar/mine.png',
        selectedIconPath: 'static/tabbar/mine-sekected.png',
        text: '我的',
      },
    ],
  },
})
