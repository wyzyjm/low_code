import { defineStore } from 'pinia';

// 预览页面数据
const usePreviewPageStore = defineStore('previewPageDate', {
  state: () => {
    return {
      components: [], // 组件信息
      countComponent: {}, // 组件数量
      currentComponentId: '',
      currentComponent: null
    };
  },
  getters: {},
  actions: {}
});

export default usePreviewPageStore;
