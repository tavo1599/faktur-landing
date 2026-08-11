<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const props = withDefaults(
  defineProps<{ to: number; duration?: number; prefix?: string; suffix?: string }>(),
  { duration: 1700, prefix: '', suffix: '' },
)

const el = ref<HTMLElement | null>(null)
const display = ref(0)
let observer: IntersectionObserver | null = null
let started = false

function run() {
  const start = performance.now()
  function tick(now: number) {
    const p = Math.min((now - start) / props.duration, 1)
    const eased = 1 - Math.pow(1 - p, 3) // easeOutCubic
    display.value = Math.round(props.to * eased)
    if (p < 1) requestAnimationFrame(tick)
  }
  requestAnimationFrame(tick)
}

onMounted(() => {
  if (!el.value) return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    display.value = props.to
    return
  }
  observer = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting && !started) {
          started = true
          run()
          observer?.disconnect()
        }
      }
    },
    { threshold: 0.4 },
  )
  observer.observe(el.value)
})
onUnmounted(() => observer?.disconnect())
</script>

<template>
  <span ref="el">{{ prefix }}{{ display.toLocaleString('es-PE') }}{{ suffix }}</span>
</template>
