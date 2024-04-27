import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite';
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // Vue-i18n/config
    VueI18nPlugin({
      include: resolve(
        dirname(fileURLToPath(import.meta.url)),
        './src/lang/*.json'
      )
    })
  ],
  define: { 'process.env': {} },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    extensions: ['.js', '.json', '.jsx', '.mjs', '.ts', '.txs', '.vue']
  },
  server: {
    port: 4040
  }
});
