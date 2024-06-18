<template>
  <div>{{ previewPageRefs }}</div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import usePreviewPageStore from '@/store/page-edit';

const previewPage = usePreviewPageStore();
const previewPageRefs = storeToRefs(previewPage);

onMounted(() => {
  window.addEventListener('message', (event) => {
    console.log('event', event.data);
  });
});
</script>

<style></style>
