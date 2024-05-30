export interface IResponseType<P = any> {
  code: number
  msg: string
  result: P
}
