import path from 'node:path'
import process from 'node:process'
import Uni from '@dcloudio/vite-plugin-uni'
import UniHelperComponents from '@uni-helper/vite-plugin-uni-components'
import UniHelperLayouts from '@uni-helper/vite-plugin-uni-layouts'
import UniHelperManifest from '@uni-helper/vite-plugin-uni-manifest'
import UniHelperPages from '@uni-helper/vite-plugin-uni-pages'
import { NutResolver } from 'nutui-uniapp'

import AutoImport from 'unplugin-auto-import/vite'
import { defineConfig, loadEnv } from 'vite'

// https://vitejs.dev/config/
export default async ({ command, mode }) => {
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
  const UnoCss = (await import('unocss/vite')).default

  return defineConfig({
    envDir: './env', // 自定义env目录
    build: {
      // target: 'es6',
      // cssTarget: 'chrome61', // https://cn.vitejs.dev/config/build-options.html#build-csstarget
      // terserOptions: {
      //   compress: {
      //     drop_console: env.VITE_DELETE_CONSOLE === 'true',
      //     drop_debugger: env.VITE_DELETE_CONSOLE === 'true',
      //   },
      // },
    },
    plugins: [
      // https://github.com/uni-helper/vite-plugin-uni-pages
      UniHelperPages({
        dts: 'src/typings/uni-pages.d.ts',
        minify: true,
      }),
      // https://github.com/uni-helper/vite-plugin-uni-manifest
      UniHelperManifest({
        minify: true,
      }),
      // https://github.com/uni-helper/vite-plugin-uni-components
      UniHelperComponents({
        dts: 'src/typings/vue-components.d.ts',
        directoryAsNamespace: true,
        resolvers: [NutResolver()],
        version: 3,
      }),
      // https://github.com/uni-helper/vite-plugin-uni-layouts
      UniHelperLayouts(),
      Uni(),
      // https://github.com/antfu/unplugin-auto-import
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
        dirs: ['src/stores', 'src/composables'],
        dts: 'src/typings/auto-import.d.ts',
        vueTemplate: true,
      }),
      UnoCss({
        hmrTopLevelAwait: false,
      }),
    ],
    server: {
      hmr: true,
      port: Number.parseInt(env.VITE_APP_PORT, 10),
    },
    resolve: {
      alias: {
        '@': path.join(process.cwd(), './src'),
      },
      extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern',
          silenceDeprecations: ['legacy-js-api'],
          // additionalData: '@import "nutui-uniapp/styles/variables.scss";',
        },
      },
    },
  })
}
