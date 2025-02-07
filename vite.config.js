import { defineConfig, UserConfig } from 'vite';
import vue from '@vitejs/plugin-vue'; // 支持Vue3

export default defineConfig({
  plugins: [vue()],
  resolve: {
    // 配置别名
    alias: {
      '@': '/src'
    }
  }
});
