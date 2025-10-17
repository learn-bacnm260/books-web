<script setup>
import { ref } from 'vue'
import NovelsHomeUpdateItem from '@/components/novels/NovelsHomeUpdateItem.vue';
import updateList from '@/assets/mock-data/json/NovelsDescription.json';

const item = ref(null);


</script>

<template>
  <div class="novels-update-list">
    <h2>CHƯƠNG MỚI CẬP NHẬT:</h2>
    <div class="update-list-component">
      <NovelsHomeUpdateItem v-for="item in updateList" :key="item.id" :item="item" ref="item" />
    </div>
  </div>
</template>

<style scoped>
.novels-update-list {

  height: 100%;
  padding: 0 20px 20px;

  display: flex;
  flex-flow: column nowrap;

}

.novels-update-list h2 {

  margin: 20px 20px 10px;
  padding: 0;
  width: fit-content;
  border-radius: 10px;
  border-bottom: 2px solid #ccc;

}

.update-list-component {


  overflow-x: hidden;
  overflow-y: auto;
  scrollbar-width: none;

  flex: 1;

  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: flex-start;
  row-gap: 12px;

}
</style>
