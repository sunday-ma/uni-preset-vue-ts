import path from 'node:path'
import process from 'node:process'
import { defineConfig, loadEnv } from 'vite'
import Uni from '@dcloudio/vite-plugin-uni'
import UniManifest from '@uni-helper/vite-plugin-uni-manifest'
import UniPages from '@uni-helper/vite-plugin-uni-pages'
import Unocss from 'unocss/vite'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NutResolver } from 'nutui-uniapp'

// https://vitejs.dev/config/
export default ({ command, mode }) => {
  // mode: 区分生产环境还是开发环境
  console.log(command, mode)
  // nr dev:h5 时得到 => serve development
  // nr build:h5 时得到 => build production
  // nr dev:mp-weixin 时得到 => build development (注意区别，command为build)
  // nr build:mp-weixin 时得到 => build production

  // process.cwd(): 获取当前文件的目录跟地址
  // loadEnv(): 返回当前环境env文件中额外定义的变量
  const env = loadEnv(mode, path.resolve(process.cwd(), 'env'))
  console.log('env', env)
  console.log('UNI_PLATFORM', process.env.UNI_PLATFORM) // 得到 mp-weixin, h5 等

  return defineConfig({
    envDir: './env', // 自定义env目录
    build: {
      target: 'es6',
      cssTarget: 'chrome61', // https://cn.vitejs.dev/config/build-options.html#build-csstarget
    },
    plugins: [
      // UniPages：https://github.com/uni-helper/vite-plugin-uni-pages
      UniPages({
        exclude: ['**/components/**/**.*', '**/my/**/**.vue'],
        routeBlockLang: 'json5', // 虽然设了默认值，但是vue文件还是要加上 lang="json5", 这样才能很好地格式化
        homePage: 'pages/index/index', // 首页路径
        dts: 'src/typings/uni-pages.d.ts',
      }),
      // UniManifest：https://github.com/uni-helper/vite-plugin-uni-manifest
      UniManifest(),
      Components({
        resolvers: [NutResolver()],
        dirs: ['src/components'],
        dts: 'src/typings/vue-components.d.ts',
        version: 3,
      }),
      Uni(),
      AutoImport({
        eslintrc: {
          enabled: true,
        },
        include: [
          /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
          /\.vue$/,
          /\.vue\?vue/, // .vue
          /\.md$/, // .md
        ],
        imports: ['vue', 'pinia', 'uni-app', {
          'nutui-uniapp/composables': [
            // 在这里添加需要自动导入的API
            'useToast',
          ],
        }],
        ignore: ['createApp'],
        dirs: ['src/stores'],
        dts: 'src/typings/auto-import.d.ts',
      }),
      Unocss(),
    ],
    resolve: {
      alias: {
        '@': path.join(process.cwd(), './src'),
      },
      extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
    },
  })
}
