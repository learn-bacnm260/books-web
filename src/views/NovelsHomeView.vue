<script setup>
import NovelDescription from '@/components/novels/NovelDescription.vue';


</script>

<template>

  <div class="novels-home-view">

    <div class="history-container">
      <h2>History</h2>

      <ul class="history-list">
        <li class="history-item" v-for="n in 10" :key="n">Novel {{ n }}</li>
      </ul>

    </div>

    <NovelDescription class="description-container" />

  </div>

</template>

<style lang="css" scoped>
.novels-home-view {
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;

  padding: 20px;
  box-sizing: border-box;
}

.history-list {
  height: 400px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}

.description-container {
  height: 250px;
  max-width: 50%;
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: flex-start;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
}

@media screen and (max-width: 930px) {
  .description-container {
    display: none;
  }

}
</style>
