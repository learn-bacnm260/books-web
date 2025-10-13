<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';


const backgroundLightColor = '#f7f3e8FF';
const backgroundDarkColor = '#202636FF';

const themeColor = ref(backgroundLightColor);

const toggleTheme = () => {
  themeColor.value = themeColor.value === backgroundLightColor ? backgroundDarkColor : backgroundLightColor;
};


</script>

<template>

  <div class="novels-layout">

    <header class="novels-layout-header">

      = <RouterLink to="/" class="main-logo">
        <!-- <img alt="Books logo" class="logo" src="@/assets/logo/manga.png" /> -->
        <img alt="Books logo" class="logo-img" src="@/assets/logos/book.png" />
      </RouterLink>

      <ul class="navigation-menu">
        <RouterLink to="/">
          <h1>Books ▼</h1>
        </RouterLink>
        <RouterLink to="/">
          <!-- <img alt="Books logo" class="logo" src="@/assets/logo/manga.png" /> -->
          <h1>Manga ▼</h1>
        </RouterLink>
        <RouterLink to="/">
          <!-- <img alt="Books logo" class="logo" src="@/assets/logo/manga.png" /> -->
          <h1>Novels ▼</h1>
        </RouterLink>
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
      <p>© 2024 Books. All rights reserved.</p>
    </footer>

  </div>

</template>

<style lang="css" scoped>
.novels-layout {
  height: 100%;
  width: 100%;
  background-color: v-bind(themeColor);
}


.novels-layout-header {
  width: 100%;
  height: 64px;


  display: flex;

  align-items: center;

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  background-color: white;

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
  object-fit: contain;
}

.navigation-menu {
  width: 100%;
  flex: 1;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: stretch;
  background-color: #202636FF;
}


.menu-nav a {
  display: flex;
  color: white;
  font-size: 1.2em;
  padding: 10px;

}

.tool-bar {
  width: 100%;
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 2fr min-content min-content;
  grid-template-rows: 1fr;
  align-items: center;

}


.tool-bar .search-input {
  height: 50px;
  margin-left: 10px;
  margin-right: 10px;
  padding-left: 20px;
  border-radius: 30px;
  border: solid 0.5px gray;
  outline: none;
  box-sizing: border-box;
}

.tool-bar button {

  height: 50px;
  aspect-ratio: 1 / 1;

  margin: 5px;
  margin-right: 10px;
  border-radius: 50%;
  border: solid 0.5px gray;

  background-color: rgb(226, 228, 236);

}




.dashboard-main {
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  /* padding: 50px; */
  overflow-y: auto;
}



@media screen and (max-width: 400px) {
  .tool-bar {
    grid-template-columns: 1fr min-content min-content;
  }

  .tool-bar .search-input {
    display: none;
  }

}


@media screen and (max-width: 1280px) {
  .menu-nav {
    justify-content: space-between;
  }

  .menu-nav a:nth-child(n + 2) {
    display: none;
  }
}
</style>
