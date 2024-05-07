import { createSSRApp } from 'vue'
import { pinia } from './utils/pinia'

import 'uno.css'
import App from './App.vue'

export function createApp() {
  const app = createSSRApp(App)
  app.use(pinia)

  return {
    app,
  }
}
