/**
 * 自定义 Pinia uni storage 插件
 */
import type { PiniaPluginContext } from 'pinia'

export function piniaUniStoragePlugin({ store, options }: PiniaPluginContext) {
  if (options.saveLocal) {
    for (const stateKey in store.$state) {
      if (uni.getStorageSync(stateKey))
        store.$state[stateKey] = JSON.parse(uni.getStorageSync(stateKey))

      else
        uni.setStorageSync(stateKey, JSON.stringify(store.$state[stateKey]))
    }

    store.$subscribe((mutation, state) => {
      if (mutation.type === 'direct') {
        for (const stateKey in store.$state)
          uni.setStorageSync(stateKey, JSON.stringify(state[stateKey]))
      }
    })
  }
}
