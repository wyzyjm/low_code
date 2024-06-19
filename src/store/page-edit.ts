import { defineStore } from 'pinia';

// 预览页面数据
const usePreviewPageStore = defineStore('previewPageDate', {
  state: () => {
    return {
      countComponent: {}, // 组件数量
      components: [] // 组件
    };
  },
  getters: {},
  actions: {}
});

export default usePreviewPageStore;
