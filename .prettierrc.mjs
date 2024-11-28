import prettierConfigStandard from 'prettier-config-standard' with { type: 'json' }
import merge from 'lodash/merge.js'

/** @type {import("prettier").Config} */
const config = merge(
  {
    plugins: ['prettier-plugin-astro'],
    overrides: [
      {
        files: '*.astro',
        options: {
          parser: 'astro'
        }
      }
    ]
  },
  prettierConfigStandard
)

export default config
