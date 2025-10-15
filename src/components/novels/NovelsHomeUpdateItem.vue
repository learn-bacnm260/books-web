<script setup>
defineProps({
  item: {
    type: Object,
    required: true
  }
});

</script>
<template>
  <div class="novels-update-item-container">
    <div class="update-item-img-container">
      <img :src="item.url" alt="Novel Cover" class="update-item-img" />
    </div>
    <div class="update-item-title">
      {{ item.title }}
    </div>
    <div class="upate-time">
      {{ item.timestamp }}
    </div>
    <div class="update-item-last-chapter">
      {{ item.lastChapter }}
    </div>
    <div class="readChapter">
      Đâ đọc: {{ item.readChapter }}
    </div>
  </div>
</template>
<style scoped>
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.novels-update-item-container {

  min-height: 50px;
  width: 100%;

  overflow: hidden;
  flex: 0 1 auto;

  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;

}

.update-item-img-container {

  border-radius: 10px;
  height: 100%;
  aspect-ratio: 2/3;
  overflow: hidden;

}

.update-item-img {
  height: 100%;
  width: 100%;
}
</style>
