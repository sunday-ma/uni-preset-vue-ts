import type { CIMpWXConfig } from 'ci-mp-wx'
import path from 'node:path'
import process from 'node:process'
import { loadEnv } from 'vite'

// 获取环境变量的范例
const {
  VITE_WX_APPID,
} = loadEnv(process.env.NODE_ENV!, path.resolve(process.cwd(), 'env'))

// 详细配置项含义参考 https://www.npmjs.com/package/miniprogram-ci
const config: CIMpWXConfig = {
  project: {
    appid: VITE_WX_APPID,
    type: 'miniProgram', // 项目类型
    projectPath: 'dist/build/mp-weixin', // 生产环境代码路径
    privateKeyPath: `conf/private.${VITE_WX_APPID}.key`, // 代码上传密钥文件路径
    ignores: ['node_modules/**/*'],
  },
  upload: {
    setting: {
      es6: true,
      minify: true,
      codeProtect: true,
      autoPrefixWXSS: true,
    },
    onProgressUpdate: console.log,
  },
}

export default config
