import { defineUniPages } from '@uni-helper/vite-plugin-uni-pages'

export default defineUniPages({
  /**
   * # 用于设置应用的状态栏、导航条、标题、窗口背景色等。
   * @link https://uniapp.dcloud.net.cn/collocation/pages.html#globalstyle
   */
  globalStyle: {
    navigationBarTitleText: '示例',
    backgroundColor: '@bgColor',
    backgroundColorBottom: '@bgColorBottom',
    backgroundColorTop: '@bgColorTop',
    backgroundTextStyle: '@bgTxtStyle',
    navigationBarBackgroundColor: '@navBgColor',
    navigationBarTextStyle: '@navTxtStyle',
  },
  easycom: {
    custom: {
      '^(?!z-paging-refresh|z-paging-load-more)z-paging(.*)': 'z-paging/components/z-paging$1/z-paging$1.vue',
      '^z-tabs': '@zxlee/z-tabs/components/z-tabs/z-tabs.vue',
    },
  },
  /**
   * # 定义 pages 字段，它具有最高的优先级。
   * @link https://uniapp.dcloud.net.cn/collocation/pages.html#pages
   */
  pages: [],
  /**
   * # 设置底部 tab
   * @link https://uniapp.dcloud.net.cn/collocation/pages.html#tabbar
   */
  tabBar: {
    color: '#7A7E83',
    selectedColor: '#01AE9B',
    backgroundColor: '#fff',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
        iconPath: 'static/tabbar/home.png',
        selectedIconPath: 'static/tabbar/home-active.png',
      },
      {
        pagePath: 'pages/icon/index',
        text: 'CSS图标',
        iconPath: 'static/tabbar/icon.png',
        selectedIconPath: 'static/tabbar/icon-active.png',

      },
    ],
  },
  /**
   * # 分包加载配置，此配置为小程序的分包加载机制。
   * @link https://uniapp.dcloud.net.cn/collocation/pages.html#subpackages
   */
  // subPackages: [],
})
