// @ts-check
import { defineConfig } from 'astro/config'
import basicSsl from '@vitejs/plugin-basic-ssl'

import node from '@astrojs/node'

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: node({
    mode: 'standalone'
  }),
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true
    }
  }
})
