import { defineStore } from 'pinia';

// 预览页面数据
const usePreviewPageStore = defineStore('previewPageDate', {
  store: () => {
    return {
      countComponent: {} // 组件数量
    };
  },
  getters: {},
  actions: {}
});

export default usePreviewPageStore;
