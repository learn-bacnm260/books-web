<script setup>

import listItems from '@/assets/mock-data/json/NovelsDescription.json';
import { onMounted, ref } from 'vue';

// container chứa phần tử DOM của novel-list, được khai báo ref trong thẻ bên dưới phần template
const novelListContainer = ref(null);

function handleScrollOnNovelList(event) {
  event.preventDefault();
  const container = novelListContainer.value ?? event.currentTarget ?? null;

  if (container) {
    // cách 1
    // container.scrollLeft += event.deltaY * 1.5;

    // cách 2
    const scrollSpeed = 5;
    const delta = event.deltaY * scrollSpeed;
    container.scrollBy({
      left: delta,
      behavior: 'auto'
    });
  }

}

onMounted(() => {
  if (novelListContainer.value) {
    novelListContainer.value.addEventListener('wheel', handleScrollOnNovelList, { passive: false });
  }

});

</script>


<template>
  <div class="novels-history">

    <!-- <ul class="novel-list">
      <li class="novel-item" v-for="item in listItems" :key="item.id">
        <div class="novel-cover-container">
          <img :src="item.url" :alt="`Novel Cover ${item.id}`" class="novel-cover" />
        </div>
      </li>
    </ul> -->
    <h2>LỊCH SỬ ĐỌC:</h2>

    <div class="novel-list" ref="novelListContainer">
      <div class=" novel-cover-container" v-for="item in listItems" :key="item.id">
        <img :src="item.url" :alt="`Novel Cover ${item.id}`" class="novel-cover" />
      </div>
    </div>
  </div>

</template>

<style lang="css" scoped>
.novels-history {

  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 0 20px;

}

.novels-history>h2 {

  width: fit-content;

  padding: 0;
  margin: 20px 20px 10px;
  border-radius: 10px;
  border-bottom: 2px solid #ccc;
}



.novel-list {

  width: 100%;
  margin: 0;
  padding: 0;

  overflow-x: auto;
  overflow-y: hidden;
  /* Tùy chọn: Thêm hiệu ứng cuộn mượt (scroll-snap) */
  scroll-snap-type: x mandatory;
  /* Quan trọng cho việc "dính" vào item */
  -webkit-overflow-scrolling: touch;
  /* Cho trải nghiệm cuộn tốt hơn trên iOS */
  scroll-behavior: smooth;

  /* Ẩn thanh cuộn (cho Webkit) */
  scrollbar-width: none;
  /* Firefox */
  /* -ms-overflow-style: none; */
  /* IE and Edge */
  flex: 1;


  display: flex;
  flex-flow: row nowrap;
  gap: 50px;
  align-items: center;

}


/* Container cho ảnh - QUAN TRỌNG */
.novel-cover-container {
  flex: 1 0 auto;

  /* Chiều cao cố định (ratio 2:3 cho sách) */
  height: 80%;
  /* Chiều rộng cố định (ratio 2:3 cho sách) */
  aspect-ratio: 2 / 3;
  overflow: hidden;


  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;
}

.novel-cover-container:hover {
  transform: scale(1.2);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.6);
}

/* Ảnh được crop đúng cách */
.novel-cover {
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* Crop ảnh giữ tỷ lệ */
  object-position: center top;
  /* Crop từ center */
  display: block;

}
</style>
