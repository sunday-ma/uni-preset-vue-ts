import { createPinia } from 'pinia'
import type { App } from 'vue'
import { piniaUniStoragePlugin } from '@/plugins/piniaUniStoragePlugin'

export const pinia = createPinia()

export async function setupStore(app: App) {
  pinia.use(piniaUniStoragePlugin)
  app.use(pinia)
}
