import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: '/kkjha/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.png', 'logo.png'],
      manifest: {
        name: 'KKJ Portfolio',
        short_name: 'KKJHA',
        description: 'Portfolio of Krishna Kumar Jha',
        theme_color: '#0a0a0a',
        background_color: '#0a0a0a',
        display: 'standalone',
        scope: '/kkjha/',
        start_url: '/kkjha/',
        icons: [
          {
            src: 'logo.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'logo.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
})