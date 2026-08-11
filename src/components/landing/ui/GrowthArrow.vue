<script setup lang="ts">
// Motivo de marca: la línea de crecimiento con flecha, se "dibuja" al aparecer.
withDefaults(defineProps<{ size?: number; animate?: boolean }>(), {
  size: 120,
  animate: true,
})
</script>

<template>
  <svg
    class="growth"
    :class="{ 'growth--static': !animate }"
    :width="size"
    :height="size * 0.62"
    viewBox="0 0 120 74"
    fill="none"
    aria-hidden="true"
  >
    <polyline class="growth__line" points="8,64 40,40 62,52 104,16" pathLength="1" />
    <polyline class="growth__head" points="86,16 104,16 104,34" pathLength="1" />
  </svg>
</template>

<style scoped>
.growth__line,
.growth__head {
  stroke: currentColor;
  stroke-width: 7;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 1;
  stroke-dashoffset: 1;
  animation: growth-draw 1.3s var(--ease-out) forwards;
}
.growth__head {
  animation-delay: 0.85s;
  animation-duration: 0.5s;
}
.growth--static .growth__line,
.growth--static .growth__head {
  animation: none;
  stroke-dashoffset: 0;
}
@keyframes growth-draw {
  to {
    stroke-dashoffset: 0;
  }
}
@media (prefers-reduced-motion: reduce) {
  .growth__line,
  .growth__head {
    animation: none;
    stroke-dashoffset: 0;
  }
}
</style>
