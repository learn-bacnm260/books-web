<script setup>
import NovelsHomeCategories from '@/components/novels/NovelsHomeCategories.vue';
import NovelsHomeHistory from '@/components/novels/NovelsHomeHistory.vue';
import NovelsHomeUpdateList from '@/components/novels/NovelsHomeUpdateList.vue';

</script>

<template>

  <div class="novels-home-view">

    <div class="history-container">
      <NovelsHomeHistory />
    </div>

    <!-- <NovelsDescription class="description-container" /> -->

    <div class="novel-chapter-update">
      <NovelsHomeUpdateList />
    </div>

    <div class="novel-categories">
      <NovelsHomeCategories />
    </div>

  </div>
</template>

<style lang="css" scoped>
.novels-home-view {
  min-height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;

  padding: 40px 20px;
  box-sizing: border-box;
}

.history-container {
  height: 500px;
  max-width: 90%;
  overflow: hidden;


  border-radius: 10px;
  border: 1px solid #ccc;

}

.novel-chapter-update {
  width: 90%;
  height: 500px;

  border-radius: 10px;
  border: 1px solid #ccc;
}
</style>
