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
        <button class="button-search"></button>
        <button class="button-user-profile"></button>
        <button class="button-settings"></button>
      </div>

    </header>

    <main class="dashboard-main">
      <slot />
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
  border-radius: 10 10 0 0;

}

.menu-nav {
  width: 100%;

  flex: 1;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: stretch;
  background-color: #202636FF;
  border-radius: 10 10 0 0;
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
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  align-items: stretch;

}

.tool-bar button {

  align-self: stretch;
  height: 100%;
  aspect-ratio: 1 / 1;

  /* margin: 5px; */
  border-radius: 50%;
  background-color: rgb(226, 228, 236);
}

.dashboard-main {
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  padding: 20px;
  overflow-y: auto;
}

/* a img {
  width: 20%;
  height: 20%;
} */
</style>
