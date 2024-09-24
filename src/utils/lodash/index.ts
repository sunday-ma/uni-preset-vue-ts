/**
 * # lodash
 * @description 将 lodash 中的方法导入之后导出，减少打包体积
 * @exports {Function} debounce 防抖动函数
 * @exports {Function} round 四舍五入
 * @exports {Function} throttle 节流函数
 */
import debounce from 'lodash/debounce'
import round from 'lodash/round'
import throttle from 'lodash/throttle'

export { debounce, round, throttle }
