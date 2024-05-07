/**
 * # 全局配置
 * 💡 可自行在 ```main.ts``` 中覆盖此类中的配置
 */
export class Config {
  /**
   * # AccessToken对应的Key
   */
  static authorizationHeaderKey = 'authorization'

  /**
   * # 保存身份令牌
   * @param accessToken 身份令牌
   */
  static saveAccessToken(accessToken: string): void {
    uni.setStorageSync(this.authorizationHeaderKey, accessToken)
  }

  /**
   * # 获取身份令牌
   */
  static getAccessToken(): string {
    return uni.getStorageSync(this.authorizationHeaderKey) || ''
  }

  /**
   * # 移除本地存储的身份令牌
   */
  static removeAccessToken(): void {
    uni.removeStorageSync(this.authorizationHeaderKey)
  }

  /**
   * # 最近访问的路径
   */
  static lastPathKey = 'air_last_path'

  /**
   * # 设置上次访问的路径
   * @param path
   */
  static setLastPath(path: string): void {
    uni.setStorageSync(this.lastPathKey, path)
  }

  /**
   * # 获取上次访问的路径
   */
  static getLastPath(): string {
    return uni.getStorageSync(this.lastPathKey) || ''
  }

  /**
   * # 网络请求失败最大重试次数
   */
  static retryTimesWhenNetworkError = 3
}
