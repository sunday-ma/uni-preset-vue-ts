import { presetIcons } from 'unocss'
import transformerVariantGroup from '@unocss/transformer-variant-group'
import transformerDirectives from '@unocss/transformer-directives'
import presetWeapp from 'unocss-preset-weapp'
import { extractorAttributify, transformerClass } from 'unocss-preset-weapp/transformer'

const { presetWeappAttributify, transformerAttributify } = extractorAttributify()

export default {
  presets: [
    presetWeapp(),
    presetWeappAttributify(),
    presetIcons({
      scale: 1,
      warn: true,
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
        'line-height': '1',
      },
    }),
  ],
  shortcuts: [
    {
      'flex-center': 'justify-center items-center',
    },
  ],
  transformers: [
    transformerAttributify(),
    transformerClass(),
    transformerDirectives(),
    transformerVariantGroup(),
  ],
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
}
