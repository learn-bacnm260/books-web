<script setup>

import listItems from '@/assets/mock-data/json/NovelsDescription.json';
console.log(listItems);

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

    <div class="novel-list">
      <div class="novel-cover-container" v-for="item in listItems" :key="item.id">
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
  padding: 0;
  margin: 20px 20px 10px 20px;
}



.novel-list {

  width: 100%;
  margin: 0;
  padding: 0;

  flex: 1;


  display: flex;
  flex-flow: row nowrap;
  gap: 50px;
  align-items: center;


  overflow-x: auto;
  overflow-y: hidden;

  /* Tùy chọn: Thêm hiệu ứng cuộn mượt (scroll-snap) */
  scroll-snap-type: x mandatory;
  /* Quan trọng cho việc "dính" vào item */
  -webkit-overflow-scrolling: touch;
  /* Cho trải nghiệm cuộn tốt hơn trên iOS */
  scroll-behavior: smooth;

  /* Ẩn thanh cuộn (cho Webkit) */
  /* scrollbar-width: none; */
  /* Firefox */
  /* -ms-overflow-style: none; */
  /* IE and Edge */
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
  transform: scale(1.3);
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
