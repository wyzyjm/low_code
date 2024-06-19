import { createApp } from 'vue';
import APP from './app.vue';
import Router from '@/router';
import pinia from '@/store';
import '@/assets/css/base.css';
import mitt from '@/utils/mitt.ts';

const app = createApp(APP);
app.use(Router).use(pinia);

app.provide('$mitt', mitt);

app.mount('#app');

// 全局变量
// app.config.globalProperties.$emit = mitt;

// 环境变量
// console.log('环境变量', import.meta.env.VITE_NAME);
