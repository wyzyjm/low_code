<template>
  <div>
    <div v-for="(item, index) in components" :key="index">
      {{ item.name }}
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import usePreviewPageStore from '@/store/page-edit.js';

const previewPage = usePreviewPageStore();
let { components } = storeToRefs(previewPage); // 解构使用

let parent = null;

function createComponent(data) {
  components.value.push(data);
}
onMounted(() => {
  window.addEventListener('message', (event) => {
    parent = event.source;
    if (event.data) {
      const { message, data } = event.data;
      if (message && message !== 'init') {
        switch (message) {
          case 'createComponent':
            createComponent(data);
            break;

          default:
            break;
        }
      }
    }
  });
});
</script>

<style></style>
