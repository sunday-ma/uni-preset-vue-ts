import { createSSRApp } from 'vue'
import { setupStore } from './stores'

import App from './App.vue'
import 'uno.css'
// import '@nutui/touch-emulator'

export function createApp() {
  const app = createSSRApp(App)
  setupStore(app)
  return {
    app,
  }
}
