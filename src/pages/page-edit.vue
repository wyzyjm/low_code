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

const previewPageStore = usePreviewPageStore();
let previewPageStoreRefs = storeToRefs(previewPageStore);

const mitt = inject('$mitt');
function watchComponent(componentItem) {
  console.log('componentItem', componentItem);
  const currentComponent = previewPageStoreRefs.countComponent[componentItem.componentName];
  if (currentComponent) {
    currentComponent++;
  } else {
    currentComponent = 1;
  }
  previewPageStoreRefs.components.push(Object.assign({}, componentItem.componentSchema));
}

onMounted(() => {
  mitt.on('createComponent', watchComponent);
});
onUnmounted(() => {
  mitt.off('createComponent', watchComponent);
});
</script>
