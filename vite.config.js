import { defineConfig,UserConfig } from 'vite' 
import vue from '@vitejs/plugin-vue'  // 支持Vue3

export default defineConfig({
  
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})

// es build

// 环境变量 VITE_ 开头
  // .env
  // .env.development
  // .env.production
// .env.test
  
  // import.meta.env.VITE_NAME 全局使用