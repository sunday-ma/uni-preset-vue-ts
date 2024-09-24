// /** @type {import('eslint').Linter.Config} */

import uniHelper from '@uni-helper/eslint-config'

export default uniHelper({
  typescript: true,
  vue: true,
  formatters: true,
  unocss: true,
  ignores: ['dist*', 'output', 'cache', 'static', 'public', '**/node_modules/', '**/*.d.ts', '**/*.md', 'src/uni_modules'],
}, {
  rules: {
    'no-unused-vars': 'off',
    'no-console': 'off',
  },
}, {
  files: ['**/*.vue'],
  rules: {
    'import/first': 'off',
  },
})
