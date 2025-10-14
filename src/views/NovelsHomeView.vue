<script setup>
import NovelsHomeCategories from '@/components/novels/NovelsHomeCategories.vue';
import NovelsHomeHistory from '@/components/novels/NovelsHomeHistory.vue';
import NovelsHomeUpdateList from '@/components/novels/NovelsHomeUpdateList.vue';


</script>

<template>

  <div class="novels-home-view">

    <div class="history-container">
      <NovelsHomeHistory class="history-list" />
    </div>

    <!-- <NovelsDescription class="description-container" /> -->

    <div clas="novel-chapter-update">
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

  padding: 20px;
  box-sizing: border-box;
}

.history-container {
  height: 700px;
  max-width: 90%;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  border-radius: 10px;
  border: 1px solid #ccc;

}

.history-container h1 {
  margin: 40px 0 0 40px;
  padding: 0;
  font-size: 32px;
  font-weight: bold;
}

.history-list {
  height: 100%;
  max-width: 100%;
  overflow: hidden;
}

.description-container {
  height: 350px;
  max-width: 50%;
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: flex-start;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.5);
}

@media screen and (max-width: 930px) {
  .description-container {
    display: none;
  }

}
</style>
