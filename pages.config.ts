import { defineUniPages } from '@uni-helper/vite-plugin-uni-pages'

export default defineUniPages({
  easycom: {
    custom: {
      '^(?!z-paging-refresh|z-paging-load-more)z-paging(.*)': 'z-paging/components/z-paging$1/z-paging$1.vue',
    },
  },
  // 定义 pages 字段，它具有最高的优先级。
  pages: [],
  // 定义 subPackages 字段
  // subPackages: [],
  globalStyle: {
    navigationBarTitleText: '示例',
    navigationBarTextStyle: 'black',
    navigationBarBackgroundColor: '#fff',
    backgroundColor: '#fff',
  },
})
