<template>
  <div class="page_edit_header">
    <RouterLink to="/">返回</RouterLink>
    <div class="button_group">
      <div class="btn">预览</div>
      <div class="btn">保存</div>
      <div class="btn primary">发布</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<style scoped>
.page_edit_header {
  height: 58px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  background-color: #fff;
  border-bottom: 1px solid #eee;
}

.button_group {
  display: flex;
}
</style>
