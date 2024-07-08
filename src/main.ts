import { createSSRApp } from 'vue'
import { setupStore } from './stores'

import App from './App.vue'
import 'uno.css'

export function createApp() {
  const app = createSSRApp(App)
  setupStore(app)
  return {
    app,
  }
}
