import path from 'node:path'
import process from 'node:process'
import { loadEnv } from 'vite'

import { createAlova, useRequest } from 'alova'
import VueHook from 'alova/vue'
import type { uniappRequestAdapter } from '@alova/adapter-uniapp'
import AdapterUniapp from '@alova/adapter-uniapp'
import { createClientTokenAuthentication } from '@alova/scene-vue'

// 获取环境变量的范例
const env = loadEnv(process.env.NODE_ENV!, path.resolve(process.cwd(), 'env'))

const {
  VITE_SERVER_BASEURL,
} = env
// const { onAuthRequired, onResponseRefreshToken } = createClientTokenAuthentication
//   <typeof VueHook, typeof uniappRequestAdapter> ({

//   })

const alovaInstance = createAlova({
  baseURL: VITE_SERVER_BASEURL,
  ...AdapterUniapp(),
  localCache: null,
  statesHook: VueHook,
  // 全局请求拦截器
  beforeRequest(method) {
    console.log('beforeRequest', method)
    // method.headers.Authorization = 'Bearer ' + getToken()
  },
  // 全局响应拦截器
  responded: {
    onSuccess: async (response, method) => {
      console.log('responded onSuccess', response, method)
    },
    onError: async (error, method) => {
      console.log('responded onError', error, method)
    },
    onComplete: async (method) => {
      console.log('responded onComplete', method)
    },
  },
})

/**
 * 转换组织数据结构
 * @param res
 * @teturns
 */
// function transformData(res: any) {

// }

export const request = alovaInstance
