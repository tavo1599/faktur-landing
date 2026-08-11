<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { ArrowUp } from 'lucide-vue-next'

const visible = ref(false)

function onScroll() {
  visible.value = window.scrollY > 600
}
function subir() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <transition name="totop-fade">
    <button v-if="visible" class="totop" aria-label="Volver arriba" @click="subir">
      <ArrowUp :size="22" :stroke-width="2.5" />
    </button>
  </transition>
</template>

<style scoped>
.totop {
  position: fixed;
  left: clamp(16px, 3vw, 28px);
  bottom: clamp(16px, 3vw, 28px);
  z-index: 90;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: var(--navy-800);
  color: #fff;
  box-shadow: var(--shadow-lg);
  transition: transform 0.25s var(--ease), background 0.25s var(--ease);
}
.totop:hover {
  transform: translateY(-3px);
  background: var(--green-deep);
}

.totop-fade-enter-active,
.totop-fade-leave-active {
  transition: opacity 0.25s var(--ease), transform 0.25s var(--ease);
}
.totop-fade-enter-from,
.totop-fade-leave-to {
  opacity: 0;
  transform: translateY(12px) scale(0.9);
}
</style>
