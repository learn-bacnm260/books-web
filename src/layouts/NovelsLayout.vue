<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

import nav_menu from '@/assets/mock-data/json/NavMenu.json';
import NovelsNavItem from '@/components/novels/NovelsNavItem.vue';


const backgroundLightColor = '#FFFACD';
const themeColor = ref(backgroundLightColor);

// Dữ liệu mẫu (có thể là dữ liệu lấy từ API)
const menuItems = [
  {
    name: 'Trang Chủ',
    path: '/'
  },
  {
    name: 'Sản Phẩm',
    path: '/products',
    children: [ // Cấp 2
      { name: 'Laptop', path: '/products/laptops' },
      {
        name: 'Phụ Kiện',
        path: '/products/accessories',
        children: [ // Cấp 3
          { name: 'Chuột', path: '/accessories/mouse' },
          { name: 'Bàn Phím', path: '/accessories/keyboard' },
        ]
      },
    ]
  },
  {
    name: 'Liên Hệ',
    path: '/contact'
  },
];


</script>

<template>

  <div class="novels-layout">

    <header class="novels-layout-header">

      <div class="main-logo">
        <RouterLink to="/">
          <!-- <img alt="Books logo" class="logo" src="@/assets/logo/manga.png" /> -->
          <img alt="Books logo" class="logo-img" src="@/assets/logos/book.png" />
        </RouterLink>
      </div>

      <ul class="menu-nav">
        <NovelsNavItem v-for="item in nav_menu" :key="item.name" :item="item" />
      </ul>

      <input class="search-input" type="text" placeholder="Search..." />
      <button class="button-search">
        <img alt="Search icon" class="icon" src="@/assets/icons/search-icon.svg" />
      </button>

      <button class="button-user-profile">
        <img alt="User profile icon" class="icon" src="@/assets/icons/user-profile-icon.svg" />
      </button>
      <button class="button-settings">
        <img alt="Settings icon" class="icon" src="@/assets/icons/settings-icon.svg" />
      </button>

    </header>

    <main class="dashboard-main">
      <RouterView />
    </main>

    <footer>
      <h2>© 2024 Books. All rights reserved.</h2>
    </footer>

  </div>

</template>

<style lang="css" scoped>
.novels-layout {
  height: 100%;
  width: 100%;
  background-color: v-bind(themeColor);
  border-radius: 10px;
  overflow: hidden;

}


.novels-layout-header {
  width: 100%;
  height: 64px;
  padding: 5px 10px;
  box-sizing: border-box;
  display: flex;

  align-items: center;

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  background-color: v-bind(themeColor);

}


.main-logo {

  height: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  overflow: hidden;
}


.logo-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.menu-nav {

  height: 80%;
  padding: 0;
  margin: 0;
  padding: 0 10px;
  box-sizing: inherit;

  display: flex;
  flex: 1;

  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  column-gap: 20px;


}


.search-input {
  height: 50px;
  margin-left: 10px;
  margin-right: 10px;
  padding-left: 20px;
  border-radius: 30px;
  border: solid 0.5px gray;
  outline: none;
  box-sizing: border-box;
}

button {

  height: 70%;
  aspect-ratio: 1 / 1;

  margin: 5px;
  margin-right: 10px;
  border-radius: 50%;
  border: solid 0.5px gray;

  background-color: rgb(226, 228, 236);
  display: flex;
  align-items: center;

  transition: background-color 0.3s ease;
}


footer {
  text-align: center;
}


.dashboard-main {
  overflow-x: hidden;
  overflow-y: auto;
}




@media screen and (max-width: 400px) {}


@media screen and (max-width: 1280px) {
  .menu-nav {
    justify-content: space-between;
  }

  .menu-nav a:nth-child(n + 2) {
    display: none;
  }
}
</style>
