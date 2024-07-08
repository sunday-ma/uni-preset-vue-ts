import { createAlova } from 'alova'
import VueHook from 'alova/vue'
import type { uniappRequestAdapter } from '@alova/adapter-uniapp'
import AdapterUniapp from '@alova/adapter-uniapp'
import { createClientTokenAuthentication } from '@alova/scene-vue'
import { Config } from '../config'

const { onAuthRequired, onResponseRefreshToken } = createClientTokenAuthentication<
  typeof VueHook,
  typeof uniappRequestAdapter
>({
  assignToken: (method) => {
    console.log('assignToken', method)
  },
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

      if (response.statusCode === Config.successCode) {
        // 上传和下载直接返回 response
        const requestType = method.config.requestType
        if (requestType === 'upload' || requestType === 'download')
          return response
        // 其他请求返回
        else
          return (response as UniApp.RequestSuccessCallbackResult).data
      }

      // 签名验证失败，重新登录
      if (response.statusCode === Config.unAuthorizeCode) {
        // code
      }

      // 权限异常
      if (response.statusCode === 403) {
        // code
      }

      // 请求的资源不存在
      if (response.statusCode === 404) {
        // code
      }

      // 请求超过频率限制
      if (response.statusCode === 429) {
        // code
      }

      return response
    },
    onError: (error, method) => {
      console.log('responded onError error', error)
      console.log('responded onError method', method)

      // 服务器内部错误
      if (error.statusCode === Config.serverErrorCode) {
        // code
      }
    },
    onComplete: (method) => {
      console.log('responded onComplete', method)
    },
  }),
})

export const request = alovaInstance
