<script setup>
import NovelsHomeUpdateItem from '@/components/novels/NovelsHomeUpdateItem.vue';
import { ref } from 'vue';

const updateList = ref([])

</script>

<template>
  <div class="novels-update-list">
    <h2>CHƯƠNG MỚI CẬP NHẬT:</h2>
    <div class="update-list-component">
      <NovelsHomeUpdateItem v-for="item in updateList" :key="item.timepstamp" />
    </div>
  </div>
</template>

<style scoped></style>
