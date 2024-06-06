<template>
  <PageEditHeader />
  <PageEditContent />
</template>

<script setup>
import PageEditHeader from '@/components/PageEditHeader/index.vue';
import PageEditContent from '@/components/PageEditContent/index.vue';
import { onMounted, onUnmounted, inject } from 'vue';

const mitt = inject('$mitt');
function watchComponent(componentItem) {
  console.log('componentItem', componentItem);
}

onMounted(() => {
  console.log('this', mitt);
  mitt.on('createComponent', watchComponent);
});
onUnmounted(() => {
  mitt.off('createComponent', watchComponent);
});
</script>
