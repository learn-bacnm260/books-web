<script setup>
import NovelsHomeUpdateItem from '@/components/novels/NovelsHomeUpdateItem.vue';

import updateList from '@/assets/mock-data/json/NovelsDescription.json';

</script>

<template>
  <div class="novels-update-list">
    <h2>CHƯƠNG MỚI CẬP NHẬT:</h2>
    <div class="update-list-component">
      <NovelsHomeUpdateItem v-for="item in updateList" :key="item.id" :item="item" />
    </div>
  </div>
</template>

<style scoped>
.novels-update-list {

  height: 100%;
  padding: 0 20px;

  display: flex;
  flex-flow: column nowrap;

}

.update-list-component {


  overflow-x: hidden;
  overflow-y: auto;
  scrollbar-width: none;

  flex: 1;

  display: flex;
  flex-flow: column nowrap;
  row-gap: 10px;

}
</style>
