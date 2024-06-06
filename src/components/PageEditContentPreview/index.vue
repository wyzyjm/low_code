<template>
  <div class="page_edit_content_preview">
    <!-- 
    frameborder: 是否展示边框
    seamless: 集成父页面样式
   -->
    <iframe
      :src="`/edit/preview/${$route.params.id}`"
      frameborder="0"
      class="_content_preview_iframe"
    />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.page_edit_content_preview {
  flex: 1;
  background-color: #f5f5f6;
  display: flex;
  justify-content: center;
}
/* iframe {
  width: 375px;
  flex: 0;
  background-color: #fff;
} */
._content_preview_iframe {
  width: 100%;
}
</style>
