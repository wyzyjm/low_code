const routes = [
  // 网站页面列表
  {
    path: '/',
    name: 'page_list',
    component: () => import('@/pages/page-list.vue')
  },
  // 编辑页面
  {
    path: '/edit/:id',
    name: 'page_edit',
    component: () => import('@/pages/page-edit.vue')
  },
  // 预览页面
  {
    path: '/edit/preview/:id',
    name: 'page_edit_preview',
    component: () => import('@/pages/page-edit-preview.vue')
  }
];

export default routes;
