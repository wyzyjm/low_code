<template>
  <div class="page_edit_content">
    <PageEditContentTools />
    <PageEditContentPreview />
    <PageEditContentPanel />
  </div>
</template>

<script setup lang="ts">
import PageEditContentTools from '@/components/PageEditContentTools/index.vue'
import PageEditContentPreview from '@/components/PageEditContentPreview/index.vue'
import PageEditContentPanel from '@/components/PageEditContentPanel/index.vue'
</script>

<style scoped>
.page_edit_content {
  width: 100%;
  height: 100%;
  overflow: auto;
  display: flex;
}
</style>
