<template>
  <PageEditHeader />
  <PageEditContent />
</template>

<script setup lang="ts">
import PageEditHeader from '@/components/PageEditHeader/index.vue';
import PageEditContent from '@/components/PageEditContent/index.vue';
import { onMounted, onUnmounted, inject } from 'vue';
import { storeToRefs } from 'pinia';
import usePreviewPageStore from '@/store/page-edit';
import { Emitter } from 'mitt';
import { Events } from '@/utils/mitt';

const previewPageStore = usePreviewPageStore();
let previewPageStoreRefs = storeToRefs(previewPageStore);

const mitt = inject('$mitt') as Emitter<Events>;

/* 
  1. 更新本页面数据: 组件数据量 + 组件信息 + 组件样式
  2. 更新iframe页面数据
 */
function watchComponent(componentItem: any) {
  // 记录组件数量
  if (previewPageStoreRefs.countComponent.value[componentItem.componentName]) {
    previewPageStoreRefs.countComponent.value[componentItem.componentName]++;
  } else {
    previewPageStoreRefs.countComponent.value[componentItem.componentName] = 1;
  }
  // 添加组件信息
  const newComponent = Object.assign({}, componentItem.componentSchema);
  previewPageStoreRefs.components.value.push(newComponent);

  // 通知 预览页面更新
  mitt.emit('sendMessageToIframe', { message: 'createComponent', data: newComponent });
}

onMounted(() => {
  mitt.on('createComponent', watchComponent); // 监听创建组件事件
});
onUnmounted(() => {
  mitt.off('createComponent', watchComponent); // 取消监听
});
</script>
