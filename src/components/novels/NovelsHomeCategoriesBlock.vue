<script setup>
import { defineProps } from 'vue';

defineProps({
  items: {
    required: true,
    type: Array
  }
})

</script>
<template>
  <div class="category-block">
    <div class="category-block-header">
      <h3>Category</h3>
      <a href="https://google.com" style="font-size: 14px;">See more >></a>
    </div>

    <div class="category-container">
      <div v-for="item in items" class='category-item' :key="item.id">
        <a href="https://google.com">
          <div class="img-container">
            <img :src="item.url" />
          </div>
          <div class="title">
            {{ item.title ?? "Undefined" }}
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
<style lang="css" scoped>
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.category-block {

  padding: 10px;
  flex: 1;
  min-height: 0;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  overflow: hidden;
}

.category-block-header {

  display: flex;
  justify-content: space-between;
  padding: 5px 0;
  border-radius: 10px;
  border-bottom: 2px solid #ccc;
}

.category-container {

  flex: 1;
  min-height: 0;
  height: 100%;
  padding: 8px 4px;
  display: flex;
  flex-flow: column nowrap;
  overflow: hidden;
  row-gap: 5px;
}


.category-item {
  flex: 1;
  min-height: 0;
  width: 100%;


  /* Thêm khoảng cách giữa ảnh và tiêu đề */

  transition: all 0.2s ease-in-out;
}

.category-item:hover {
  background-color: rgba(218, 218, 226, 0.5);
}

.category-item a {
  height: 100%;
  text-decoration: none;

  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 10px;
}

.img-container {
  height: 100%;
  border-radius: 10px;
  aspect-ratio: 2 / 3;
  overflow: hidden;
}

.img-container img {

  height: 100%;
  width: 100%;
  object-fit: cover;
}

a .title {
  font-size: 16px;
  text-decoration: none;
  color: black;
  line-clamp: 1;
  text-overflow: ellipsis;

}
</style>
