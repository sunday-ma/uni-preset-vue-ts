import axios from 'axios'
import { createUniAppAxiosAdapter } from '@uni-helper/axios-adapter'
import { Config } from '..'
import type { IJson } from '@/interfaces/IJson'

export class Http {
  /**
   * # 访问的接口URL
   */
  private url = ''

  /**
   * # Loading
   */
  private loading = ''

  /**
   * # 请求方式 默认POST
   */
  private method: 'GET' | 'POST' = 'POST'

  /**
   * # 回调失败信息
   */
  private errorCallback = false

  /**
   * # 请求头
   */
  private header: IJson = {}

  /**
   * # 操作重试次数
   */
  private triedTimes = 0

  /**
   * # 请求超时毫秒数
   */
  private timeout = 60000

  /**
   * # 创建一个HTTP实例
   * @param url (可选) 请求的地址
   */
  constructor(url?: string) {
    if (url)
      this.url = url
  }

  /**
   * # 设置请求方法
   * @param method 请求方法
   */
  setMethod(method: 'GET' | 'POST'): this {
    this.method = method
    return this
  }

  /**
   * # 编辑请求头
   * @param key KEY
   * @param value VALUE
   */
  setHeader(key: string, value: any): this {
    this.header[key] = value
    return this
  }

  /**
   * # 是否回调错误信息
   */
  callbackError(): this {
    this.errorCallback = true
    return this
  }

  /**
   * # 是否显示加载中状态
   * @param loading 加载文字
   */
  setLoading(loading: string = '加载中...'): this {
    this.loading = loading
    return this
  }

  /**
   * # 允许请求鉴权
   */
  withAuth(): this {
    this.header[Config.authorizationHeaderKey] = Config.getAccessToken()
    return this
  }

  /**
   * # 发送请求
   * @param json (可选)请求体
   * @see post() 直接发送POST
   * @see get() 直接发送GET
   */
  async send(json: any): Promise<any> {
    return new Promise((success, fail) => {
      try {
        if (this.loading)
          uni.showLoading({ title: this.loading, mask: true })

        console.warn('[HTTP HEADER]', this.header)
        console.warn('[HTTP BODY]', json)
        console.warn('[HTTP URL]', import.meta.env.VITE_BASE_URL + this.url)

        const axiosInstance = axios.create({
          baseURL: import.meta.env.VITE_BASE_URL,
          adapter: createUniAppAxiosAdapter(),
          timeout: this.timeout,
          method: 'POST',
        })

        axiosInstance({
          method: this.method,
          url: this.url,
          data: json,
          headers: this.header,
        })
          .then((res) => {
            const json = res.data as IJson

            if (this.loading)
              uni.hideLoading()

            try {
              switch (res.status) {
                case 200:
                  success(json)
                  break
                default:
                  console.warn('[HTTP ERROR]', res)

                  if (this.errorCallback)
                    fail(json)

                  uni.showModal({
                    title: '系统错误',
                    content: '系统发生了一些错误，请稍候再试',
                  })
              }
            }
            catch (error) {
              if (this.loading)
                uni.hideLoading()

              console.warn('[HTTP ERROR]', res.data, error)

              if (this.errorCallback)
                fail(error)

              uni.showModal({
                title: '系统错误',
                content: '系统发生了一些错误，请稍候再试',
              })
            }
          })
          .catch((error: IJson) => {
            if (this.loading)
              uni.hideLoading()

            console.warn('[HTTP ERROR]', error)

            this.triedTimes += 1

            if (this.errorCallback)
              fail(error)

            if (this.triedTimes <= Config.retryTimesWhenNetworkError) {
              uni.showModal({
                title: '网络错误',
                content: '请求网络出现异常, 是否重试?',
                confirmText: '重试',
                success: async (res) => {
                  if (res.confirm) {
                    try {
                      const res = await this.send(json)
                      success(res)
                    }
                    catch (e) {
                      fail(e)
                    }
                  }
                },
              })
            }
            else {
              this.triedTimes = 0
              uni.showModal({
                title: '系统错误',
                content: '系统发生了一些错误，请稍候再试',
              })
            }
          })
      }
      catch (error) {

      }
    })
  }

  /**
   * # 发送POST
   * @param body 发送的数据
   */
  async post<T = any, D = any>(body?: T): Promise<D> {
    this.setMethod('POST')
    return this.send(body)
  }

  /**
   * # 发送GET请求 只支持简单一维数据
   * @param params (可选)可携带的参数 简单对象
   */
  get<D = any>(params?: IJson): Promise<D> {
    if (params) {
      const queryArray = []

      for (const key in params)
        queryArray.push(`${key}=${encodeURIComponent(params[key])}`)

      if (this.url.includes('?'))
        this.url += `&${queryArray.join('&')}`
      else
        this.url += `?${queryArray.join('&')}`
    }
    this.setMethod('GET')
    // 不缓存get请求
    this.setHeader('Cache-Control', 'no-cache')
    return this.send({})
  }
}
