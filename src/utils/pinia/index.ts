/**
 * Pinia 配置
 * 加载自定义插件
 */
import { createPinia } from 'pinia'
import { piniaUniStoragePlugin } from '@/plugins/piniaUniStoragePlugin'

const pinia = createPinia()
pinia.use(piniaUniStoragePlugin)

export { pinia }
