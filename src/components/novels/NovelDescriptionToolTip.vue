<template>
  <teleport to="body">
    <div v-if="visible" class="popup-tooltip" :style="{ top: `${y}px`, left: `${x}px` }">
      <slot />
    </div>
  </teleport>
</template>

<script setup>
import { ref, onUnmounted } from 'vue';
const props = defineProps({
  x: Number,
  y: Number,
  visible: Boolean,
});
</script>

<style scoped>
.popup-tooltip {
  position: fixed;
  z-index: 9999;
}
</style>
