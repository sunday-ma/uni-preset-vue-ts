import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/zh-cn' // 导入本地化语言

dayjs.extend(relativeTime)
dayjs.locale('zh-cn') // 使用本地化语言

/**
 * # 使用dayjs进行时间日期时间戳格式化类
 */
export class DateTime {
  /**
   * ## 格式化到`Unix`秒时间戳
   * @param date `可选` Date对象/时间字符串 (默认当前时间)
   */
  static toUnixTimeStamps(date?: Date | string): number {
    return dayjs(date).unix()
  }

  /**
   * ## 格式化到毫秒时间戳
   * @param date `可选` Date对象/时间字符串 (默认当前时间)
   */
  static toMillisecondTimeStamps(date?: Date | string): number {
    return dayjs(date).valueOf()
  }

  /**
   * ## 从秒时间戳格式化时间
   * @param timeStamp 秒时间戳
   * @param formatString `可选` 格式化模板 默认为 `YYYY-MM-DD HH:mm:ss`
   */
  static formatFormSecond(timeStamp: number, formatString?: 'YYYY-MM-DD HH:mm:ss' | string): string {
    return dayjs.unix(timeStamp).format(formatString)
  }

  /**
   * ## 从毫秒时间戳或字符串或对象格式化时间
   * @param date Date对象或字符串
   * @param formatString `可选` 格式化模板 默认为 `YYYY-MM-DD HH:mm:ss`
   */
  static format(date: Date | string, formatString?: 'YYYY-MM-DD HH:mm:ss' | string): string {
    return dayjs(date).format(formatString)
  }

  /**
   * ## 格式化到友好字符串显示
   * @param date Date对象或时间字符串
   */
  static timeFrom(date: Date | string | number): string {
    return dayjs(date).fromNow()
  }
}
