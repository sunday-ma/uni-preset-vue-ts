/**
 * 订单状态
 * @enum {string} ORDERSTATUS
 * @property {string} PENDING - 待付款
 * @property {string} COLLECTED - 待领用
 * @property {string} RENTING - 租用中
 * @property {string} REFUND - 退款售后
 */
export enum ORDERSTATUS {
  PENDING = '#FFAA00', // 待付款
  COLLECTED = '#09A6FF', // 待领用
  RENTING = '#D1E503', // 租用中
  REFUND = '#FC6565', // 退款售后
}
