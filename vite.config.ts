import { UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default {
  server: {
    host: '127.0.0.1',
    port: 3000,
  },
  plugins: [vue()],
} as UserConfig
