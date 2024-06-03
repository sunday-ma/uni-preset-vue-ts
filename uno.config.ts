import type { Preset, SourceCodeTransformer } from 'unocss'

import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

import { isH5, isMp } from '@uni-helper/uni-env'

import { presetApplet, presetRemRpx, transformerAttributify } from 'unocss-applet'

const presets: Preset[] = []

const transformers: SourceCodeTransformer[] = []
const darkMode = isH5 ? 'class' : 'media'

if (isMp) {
  presets.push(presetApplet({ dark: darkMode }))
  presets.push(presetRemRpx())
  transformers.push(transformerAttributify({ ignoreAttributes: ['block', 'fixed', 'align'] }))
}
else {
  presets.push(presetUno({ dark: darkMode }))
  presets.push(presetRemRpx({ mode: 'rpx2rem' }))
}

export default defineConfig({
  presets: [
    presetIcons({
      scale: 1.2,
      warn: true,
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
        'line-height': '1',
      },
    }),
    presetAttributify(),
    ...presets,
  ],
  shortcuts: [
    {
      'flex-center': 'justify-center items-center',
    },
  ],
  transformers: [transformerDirectives(), transformerVariantGroup(), ...transformers],
  theme: {
    preflightRoot: isMp ? ['page,::before,::after'] : undefined,
  },
  rules: [
    [
      'p-safe',
      {
        padding:
          'env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left)',
      },
    ],
    ['pt-safe', { 'padding-top': 'calc(env(safe-area-inset-top) + 40rpx)' }],
    ['pb-safe', { 'padding-bottom': 'calc(env(safe-area-inset-bottom) + 40rpx)' }],
  ],
})
