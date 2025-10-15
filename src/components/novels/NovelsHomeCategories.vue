<script setup>
import NovelsHomeCategoriesBlock from './NovelsHomeCategoriesBlock.vue';
import novel_description from '@/assets/mock-data/json/NovelsDescription.json'
</script>



<template>
  <div class="novels-category-list">
    <div class="categories-header">
      <h2>CATEGORIES:</h2>
      <a href="https://google.com" target="_self">See more >></a>
    </div>
    <div class="categories-content">
      <NovelsHomeCategoriesBlock class='category-block' :items="novel_description" />
      <NovelsHomeCategoriesBlock class='category-block' :items="novel_description" />
      <!-- <NovelsHomeCategoriesBlock class='category-block' :items="novel_description" /> -->

    </div>
  </div>
</template>

<style scoped>
.novels-category-list {
  display: flex;
  flex-flow: column nowrap;
}

.categories-header {
  display: flex;
  align-items: center;
  justify-content: space-between;

}

.categories-header h2 {
  margin: 20px 20px 10px;
}

.categories-header a {
  margin: 20px 20px 10px;
}

.categories-content {

  padding: 10px 20px;
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-flow: row nowrap;
  column-gap: 10px;
  align-items: center;
  column-gap: 20px;
  justify-content: center;

}

.category-block {
  border: 1px solid #ccc;
  border-radius: 10px;
  flex: 1;
}
</style>
