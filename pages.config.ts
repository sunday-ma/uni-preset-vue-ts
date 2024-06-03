import { defineUniPages } from '@uni-helper/vite-plugin-uni-pages'

export default defineUniPages({
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
