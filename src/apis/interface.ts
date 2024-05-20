export interface IResponseType<P = any> {
  code: number
  msg: string
  result: P
}

export interface IAwesomeInterface {
  userId: number
  id: number
  title: string
  completed: boolean
}
