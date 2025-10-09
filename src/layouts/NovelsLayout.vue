<script setup>
import { RouterLink } from 'vue-router';

</script>

<template>

  <div class="dashboard-layout">

    <header class="dashboard-header">

      <div class="menu-nav">
        <RouterLink to="/">
          <!-- <img alt="Books logo" class="logo" src="@/assets/logo/manga.png" /> -->
          Books
        </RouterLink>
        <RouterLink to="/">
          <!-- <img alt="Books logo" class="logo" src="@/assets/logo/manga.png" /> -->
          Mangas
        </RouterLink>
        <RouterLink to="/">
          <!-- <img alt="Books logo" class="logo" src="@/assets/logo/manga.png" /> -->
          Novels
        </RouterLink>
      </div>

      <div class="tool-bar">
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
      </div>

    </header>

    <main class="dashboard-main">
      <RouterView />
    </main>

  </div>

</template>

<style lang="css" scoped>
.dashboard-layout {
  height: 100%;
  width: 100%;
  background-color: #f7f3e8FF;
  ;

  display: grid;
  grid-template-rows: 2fr 18fr;
  grid-template-columns: 1fr;

  border-radius: 10px;
  overflow: hidden;
  /* grid-template-areas: ; */
}

.dashboard-header {
  width: 100%;
  height: 100%;

  grid-column: 1 / 2;
  grid-row: 1 / 2;
  display: flex;
  flex-direction: column;
  align-items: center;

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);


}

.menu-nav {
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

  display: grid;
  grid-template-columns: 1fr 2fr min-content min-content;
  grid-template-rows: 1fr;
  align-items: center;

}


.tool-bar .search-input {
  height: 30px;
  margin-left: 10px;
  margin-right: 10px;
  padding-left: 20px;
  border-radius: 30px;
  border: solid 0.5px gray;
  outline: none;
  box-sizing: border-box;
}

.tool-bar button {

  height: 40px;
  aspect-ratio: 1 / 1;

  margin: 5px;
  margin-right: 10px;
  border-radius: 50%;
  border: solid 0.5px gray;

  background-color: rgb(226, 228, 236);

}

.tool-bar .button-search {
  height: 30px;
}




.dashboard-main {
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  padding: 50px;
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
</style>
