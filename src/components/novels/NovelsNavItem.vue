<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const props = defineProps({
  item: {
    type: Object,
    required: true
  }
});

const isSubMenuOpen = ref(false);

const toggleSubMenu = () => {
  isSubMenuOpen.value = !isSubMenuOpen.value;
};

</script>

<template>

  <li :class="{ 'has-children': item.children }">
    <RouterLink :to="item.path">
      {{ item.name }}
    </RouterLink>


    <button v-if="item.children" @click="item.children && toggleSubMenu()">

      <span>{{ isSubMenuOpen ? '▲' : '▼' }}</span>
    </button>

    <ul v-if="item.children && isSubMenuOpen" class="sub-menu">
      <NovelsNavItem v-for="child in item.children" :key="child.name" :item="child" />
    </ul>

  </li>



</template>
<style lang="css" scoped>
ul,
li {
  list-style-type: none;
}

/* CSS cho menu con */
.has-children {
  position: relative;
}

.sub-menu {
  list-style: none;
  padding-left: 15px;
  /* Tạo độ thụt vào cho cấp con */
  margin: 5px 0;
  border-left: 2px solid #ccc;
  /* Đường viền chỉ báo cấp */
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 10;
}

/* Kiểu dáng cho liên kết và mũi tên */
li a {
  display: inline;
  padding: 8px 0;
  text-decoration: none;
  color: #333;
}

li a:hover {
  background-color: #f0f0f0;
}
</style>
