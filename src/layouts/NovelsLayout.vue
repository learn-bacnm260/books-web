``
<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

import nav_menu from '@/assets/mock-data/json/NavMenu.json';
import NovelsNavItem from '@/components/novels/NovelsNavItem.vue';


const backgroundLightColor = '#FFFFFF';
const themeColor = ref(backgroundLightColor);



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
        <NovelsNavItem v-for="item in nav_menu" :key="item.path" :item="item" class="navItem" />
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

    <main class="novels-layout-main">
      <RouterView />
    </main>

    <footer>
      <h2>© 2025 Books. All rights reserved.</h2>
    </footer>

  </div>

</template>

<style lang="css" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

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

}


.main-logo {

  height: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.9);

  transition: all 0.2s ease-in-out;

}


.logo-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.menu-nav {

  height: 100%;
  padding: 0;
  margin: 0;
  margin-left: 40px;
  padding: 0 10px;
  box-sizing: inherit;

  display: flex;
  flex: 1;

  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  column-gap: 20px;


}

.navItem {
  transition: all 0.2s ease-in-out;
}

.navItem:hover {
  height: 100%;

  border-radius: 5px;
  border-bottom: 1px solid gray;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  transform: scale(1.1);

}

.search-input {
  height: 50px;
  width: 30%;
  margin-left: 10px;
  margin-right: 10px;
  padding-left: 20px;
  border-radius: 30px;
  border: solid 0.5px gray;
  outline: none;
  box-sizing: border-box;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
  font-size: 22px;
  transition: all 0.2s ease-in-out;
}

.search-input:focus {
  border: solid 1px #555;
  box-shadow: 0 0 5px rgba(81, 203, 238, 1);
  transform: scale(1.1) translateX(-10px);
}

button {

  height: 70%;
  aspect-ratio: 1 / 1;

  margin: 5px;
  margin-right: 10px;
  padding: 1px 6px;
  border-radius: 50%;
  border: solid 0.5px gray;

  background-color: rgb(226, 228, 236);
  display: flex;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);

  transition: all 0.2s ease-in-out;
}

button:hover {
  background-color: rgb(200, 200, 200);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  transform: scale(1.4);
}

footer {
  text-align: center;
}


.novels-layout-main {
  overflow-x: hidden;
  overflow-y: auto;
}

.main-logo:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transform: scale(1.2);
}
</style>
