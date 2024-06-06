<template>
  <div>
    <h2>网站列表页</h2>
    <div class="page-list">
      <div v-for="item in pageList" :key="item.id" class="page-item">
        <div class="_item-name">{{ item.name }}</div>
        <div>
          <RouterLink :to="item.url">编辑</RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { RouterLink } from 'vue-router';
import pageList from '@/mock/pageList.js';
</script>

<style scoped>
.page-list {
  width: 220px;
}
.page-item {
  display: flex;
  justify-content: space-between;
  padding: 4px 8px;
  border-bottom: 1px solid #efefef;
}
._item-name {
  margin-right: 5px;
}
</style>
