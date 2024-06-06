<template>
  <div>预览页面</div>
</template>

<script setup lang="ts">
import usePreviewPageStore from '@/store/page-edit.js';

const previewPage = usePreviewPageStore();

console.log('previewPage', previewPage);
</script>

<style></style>
