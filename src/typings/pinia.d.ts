import 'pinia'
declare module 'pinia' {
  export interface DefineStoreOptionsInPlugin {
    saveLocal: boolean
  }

  export interface DefineSetupStoreOptions {
    saveLocal: boolean
  }
}