<script setup>
import { ref } from 'vue';

</script>


<template>

  <div class="novels-category">

    <div class="category-header">
      <h2>Category</h2>
      <button class="see-more-button">See More</button>
    </div>

    <ul class="category-list">
      <li class="category-item" v-for="n in 10" :key="n">Category {{ n }}</li>
    </ul>

  </div>
</template>


<style lang="css" scoped></style>
