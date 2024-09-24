import { Code } from '../enum/code'

export class Config {
  /**
   * # 全局http请求返回 成功状态码
   */
  static successCode: Code | number = Code.SUCCESS

  /**
   * # 全局http请求返回 登录状态码
   */
  static unAuthorizeCode: Code | number = Code.UNAUTHORIZED

  /**
   * # 全局http请求返回 权限异常
   */
  static forBiddenCode: Code | number = Code.FORBIDDEN

  /**
   * # 全局http请求返回 请求的资源不存在
   */
  static notFoundCode: Code | number = Code.NOTFOUND

  /**
   * # 全局http请求返回 请求超过频率限制
   */
  static tooManyRequestsCode: Code | number = Code.TOOMANYREQUESTS

  /**
   * # 全局http请求返回 服务器内部错误状态码
   */
  static serverErrorCode: Code | number = Code.ERROR
}
