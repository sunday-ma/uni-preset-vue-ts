/**
 * # 返回状态码
 */
export enum Code {
  /**
   * # 返回正常
   */
  SUCCESS = 200,

  /**
   * # 服务器已接受请求，但尚未处理
   */
  ACCEPTED = 202,

  /**
   * # 处理成功，无返回内容
   */
  NOCONTENT = 204,

  /**
   * # 协议或者参数非法
   */
  BADREQUEST = 400,

  /**
   * # 需要跳转到登录
   */
  UNAUTHORIZED = 401,

  /**
   * # 权限异常
   */
  FORBIDDEN = 403,

  /**
   * # 请求的资源不存在
   */
  NOTFOUND = 404,

  /**
   * # 请求超过频率限制
   */
  TOOMANYREQUESTS = 429,

  /**
   * # 系统错误
   */
  ERROR = 500,

  /**
   * # 服务下线，暂时不可用
   */
  BADGATEWAY = 502,

  /**
   * # 服务不可用，过载保护
   */
  SERVICEUNAVAILABLE = 503,
}
