import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

// useRouter()  当前路由对象
// useRoute()   当前路由信息
