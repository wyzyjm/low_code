<template>
  <div class="page_edit_content_tools">
    <div class="tools_list">
      <div v-for="(item, index) in tools" :key="index" class="tools_item" @click="createComponent(item)">
        <img :src="item.icon" class="tools_icon" />
        <span>{{ item.title }}</span>
        <span>{{ previewPageRefs.countComponent ? previewPageRefs.countComponent[item.componentName] : 0 }} </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import { storeToRefs } from 'pinia'

import tools from './mock.js'
import usePreviewPageStore from '@/store/page-edit.js'

const mitt = inject('$mitt')
const previewPage = usePreviewPageStore()
const previewPageRefs = storeToRefs(previewPage)

const createComponent = (toolsItem) => {
  const count = previewPageRefs.countComponent ? previewPageRefs.countComponent[toolsItem.componentName] : 0
  console.log('count', count)

  // 是否符合创建条件
  if (count === toolsItem.limit) return false
  mitt.emit('createComponent', toolsItem) // 广播事件
}
</script>

<style scoped>
.page_edit_content_tools {
  width: 200px;
  flex-shrink: 0;
  padding: 5px;
  border-right: 1px solid #eee;
}
.tools_list {
  display: flex;
}
.tools_item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  padding: 6px;
  border: 1px solid #ccc;
}
.tools_icon {
  width: 32px;
  height: 32px;
}
</style>
