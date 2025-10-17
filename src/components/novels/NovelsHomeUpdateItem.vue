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
    <a href="https://google.com">
      <div class="update-item-img-container">
        <img :src="item.url" alt="Novel Cover" class="update-item-img" />
      </div>
      <div class="update-item-title">
        {{ item.title }}
      </div>
      <div class="update-time">
        Cập nhật:{{ item.timestamp }}
      </div>
      <div class="update-item-last-chapter">
        Chương mới:{{ item.lastChapter }}
      </div>
      <div class="readChapter">
        Đã đọc: {{ item.readChapter }}
      </div>
    </a>
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

  width: 100%;
  min-height: 50px;
  /* min-height + flex-shrink: 1 + overlow-y:auto của component cha sẽ làm cho item co vừa đủ min-height đồng thời vẫn có thể cuộn được để xem các item ở dưới */
  flex: 0 1 auto;
  overflow: hidden;


  position: relative;
}

.novels-update-item-container:hover {
  background-color: rgb(233, 233, 233, 0.8);
}

a {

  height: 100%;
  width: 100%;
  text-decoration: none;
  color: black;

  display: flex;
  justify-content: flex-start;

}


.update-item-img-container {

  border-radius: 10px;
  height: 100%;
  aspect-ratio: 2/3;
  overflow: hidden;
  flex-shrink: 0;
  flex-grow: 0;

}

.update-item-img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.update-item-title {
  height: 100%;
  width: 30%;
  margin-left: 20px;
  white-space: nowrap;
  line-clamp: 1;
  text-overflow: ellipsis;
  overflow: hidden;
}

.update-time {

  height: 100%;
  width: 30%;
  margin-left: 20px;
  justify-self: flex-start;
  overflow: hidden;
}

.update-item-last-chapter {
  height: 100%;
  width: 20%;
  margin-left: 20px;

}

.readChapter {
  height: 100%;
  width: 15%;
  justify-self: flex-end;
  margin-left: 20px;
}
</style>
