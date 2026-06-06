import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// Témoin — PWA local-first, offline-first.
// Le noyau protecteur (autodiagnostic, coffre-fort, fiches) doit fonctionner sans réseau (EF-X05).
// base : '/' en local et dev ; surchargée par VITE_BASE (ex. '/temoin/') au build GitHub Pages.
export default defineConfig({
  base: process.env.VITE_BASE || '/',
  build: { outDir: process.env.VITE_OUTDIR || 'dist' },
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg'],
      manifest: {
        name: 'Notes', // nom neutre par défaut (mode discret, EF-X01)
        short_name: 'Notes',
        description: 'Bloc-notes',
        theme_color: '#1f2933',
        background_color: '#1f2933',
        display: 'standalone',
        orientation: 'portrait',
        icons: [
          { src: 'icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: 'icon-512.png', sizes: '512x512', type: 'image/png' },
          { src: 'icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png,woff2}'],
        cleanupOutdatedCaches: true,
        clientsClaim: true,
        skipWaiting: true
      }
    })
  ],
  server: { port: 5183, host: true, allowedHosts: true }
})
