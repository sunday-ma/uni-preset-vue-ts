import type { IResponseType } from './interface'
import { request } from '@/utils/http'

/**
 * 登录相关
 */
const LOGIN = {
  sendSMS: (data: { phone: string }) => request.Post('/api/passport/send_sms', data),
  login: (data: { phone: string, code: string }) => request.Post('/api/passport/login', data),
  editInfo: (data: { nickname: string, avatar: string }) => request.Post('/api/user/edit_info', data),
}

/**
 * 公共
 */
const COMMON = {
  config: () => request.Get('/api/common/web_config'),
}

/**
 * 产品相关
 */
const PRODUCT = {
  lists: () => request.Get<IResponseType<any[]>>('/api/product/lists'),
  detail: (params: { no: string }) => request.Get('/api/product/detail', { params }),
}

export {
  LOGIN,
  COMMON,
  PRODUCT,
}
