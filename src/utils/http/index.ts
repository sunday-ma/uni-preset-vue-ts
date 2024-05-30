import { createAlova } from 'alova'
import VueHook from 'alova/vue'
import type { uniappRequestAdapter } from '@alova/adapter-uniapp'
import AdapterUniapp from '@alova/adapter-uniapp'
import { createClientTokenAuthentication } from '@alova/scene-vue'

const { onAuthRequired, onResponseRefreshToken } = createClientTokenAuthentication<
  typeof VueHook,
  typeof uniappRequestAdapter
  >({

  })

const alovaInstance = createAlova({
  baseURL: import.meta.env.VITE_SERVER_BASEURL,
  ...AdapterUniapp(),
  // localCache: null,
  statesHook: VueHook,
  // 全局请求拦截器
  beforeRequest: onAuthRequired((method) => {
    console.log('beforeRequest', method)
    // 如果上一个请求返回的状态码非 200，则取消当前请求
    // if (true)
    //   method.abort()
  }),
  // 全局响应拦截器
  responded: onResponseRefreshToken({
    onSuccess: (response, method) => {
      console.log('responded onSuccess response', response)
      console.log('responded onSuccess method', method)

      if (response.statusCode === 200) {
        // 上传和下载直接返回 response
        const requestType = method.config.requestType
        if (requestType === 'upload' || requestType === 'download')
          return response
        // 其他请求返回
        else
          return (response as UniApp.RequestSuccessCallbackResult).data
      }

      return response
    },
    onError: (error, method) => {
      console.log('responded onError error', error)
      console.log('responded onError method', method)
    },
    onComplete: (method) => {
      console.log('responded onComplete', method)
    },
  }),
})

export const request = alovaInstance
