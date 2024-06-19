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

import type { Emitter } from 'mitt';
import type { Events } from '@/utils/mitt';
import type { Component } from '@/types/component';

const previewPageStore = usePreviewPageStore();
let previewPageStoreRefs = storeToRefs(previewPageStore);

const mitt: Emitter<Events> | undefined = inject('$mitt');
function watchComponent(componentItem: Component) {
  // 记录组件数量
  if (previewPageStoreRefs.countComponent.value[componentItem.componentName]) {
    previewPageStoreRefs.countComponent.value[componentItem.componentName]++;
  } else {
    previewPageStoreRefs.countComponent.value[componentItem.componentName] = 1;
  }
  // 添加组件信息
  previewPageStoreRefs.components.value.push(Object.assign({}, componentItem.componentSchema));
}

onMounted(() => {
  mitt && mitt.on('createComponent', watchComponent);
});
onUnmounted(() => {
  mitt && mitt.off('createComponent', watchComponent);
});
</script>
