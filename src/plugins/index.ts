import type { App } from 'vue'
import { piniaUniStoragePlugin } from '@/plugins/piniaUniStoragePlugin'
import { createPinia } from 'pinia'

export const pinia = createPinia()

export async function setupStore(app: App) {
  pinia.use(piniaUniStoragePlugin)
  app.use(pinia)
}
