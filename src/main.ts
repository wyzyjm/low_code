import { createApp } from 'vue'
import APP from './app.vue'
import Router from '@/router/index'
import pinia from '@/store/index'
import '@/assets/css/base.css'
import mitt from '@/utils/mitt'

const app = createApp(APP)
app.use(Router).use(pinia)

app.provide('$mitt', mitt) // 全局事件总线

app.mount('#app')

// 全局变量
// app.config.globalProperties.$emit = mitt;

// 环境变量
// console.log('环境变量', import.meta.env.VITE_API)
