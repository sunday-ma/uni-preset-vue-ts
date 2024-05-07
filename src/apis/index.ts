import type { IAwesomeInterface } from './interface'
import { Http } from '@/common/helper/http'

export const getTodos = () => new Http('/todos/1').setLoading().withAuth().get<IAwesomeInterface>()
