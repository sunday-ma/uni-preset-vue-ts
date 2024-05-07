/// <reference types='@dcloudio/types' />
import 'vue'
import type { AttributifyAttributes } from '@unocss/preset-attributify'

declare module '@vue/runtime-core' {
  type Hooks = App.AppInstance & Page.PageInstance;

  interface ComponentCustomOptions extends Hooks {

  }
}

declare module '@vue/runtime-dom' {
  interface HTMLAttributes extends AttributifyAttributes {}
}