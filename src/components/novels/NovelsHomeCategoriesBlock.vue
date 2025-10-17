<script setup>
import { ref, defineProps } from 'vue';
import NovelDescriptionToolTip from './NovelDescriptionToolTip.vue';

import NovelsDescription from './NovelsDescription.vue';
defineProps({
  items: {
    required: true,
    type: Array
  }
})



const currentItem = ref(null);
const showTooltip = ref(false);
const mouseX = ref(0);
const mouseY = ref(0);
function handleMouseEnter(e, item) {
  showTooltip.value = true;
  currentItem.value = item;

  mouseX.value = e.clientX + 10; // lệch sang phải 10px
  mouseY.value = e.clientY + 10; // lệch xuống 10px
}
function handleMouseLeave() {
  showTooltip.value = false;

}

</script>
<template>
  <div class="category-block">
    <div class="category-block-header">
      <h3>Category</h3>
      <a href="https://google.com" style="font-size: 14px;">See more >></a>
    </div>

    <div class="category-container">
      <div v-for="item in items" class='category-item' :key="item.id">
        <a href="https://google.com" @mouseenter="e => handleMouseEnter(e, item)"
          @mousemove="e => handleMouseEnter(e, item)" @mouseleave="handleMouseLeave">
          <div class="img-container">
            <img :src="item.img_url" />
          </div>
          <div class="title">
            {{ item.title ?? "Undefined" }}
          </div>
        </a>
        <NovelDescriptionToolTip v-show="currentItem" :x="mouseX" :y="mouseY" :visible="showTooltip">
          <NovelsDescription :novel="currentItem" />
        </NovelDescriptionToolTip>
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
  background-color: rgb(233, 233, 233, 0.8);
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

  flex-shrink: 0;
  /* không cho phép co lại để vừa với text quá dài */
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
  line-clamp: 0;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

}
</style>
