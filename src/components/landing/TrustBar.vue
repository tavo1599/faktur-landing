<script setup lang="ts">
import { ShieldCheck, Cloud, Lock, MessagesSquare } from 'lucide-vue-next'

const items = [
  { icon: ShieldCheck, label: 'Válido ante SUNAT' },
  { icon: Cloud, label: '100% en la nube' },
  { icon: Lock, label: 'Datos cifrados' },
  { icon: MessagesSquare, label: 'Soporte en español' },
]
</script>

<template>
  <section class="trust">
    <div class="trust__inner container">
      <div v-for="it in items" :key="it.label" class="trust__item" data-reveal>
        <component :is="it.icon" :size="20" :stroke-width="2" />
        <span>{{ it.label }}</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.trust {
  background: var(--paper);
  border-bottom: 1px solid var(--border);
}
.trust__inner {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 20px 40px;
  padding-block: 26px;
}
.trust__item {
  display: inline-flex;
  align-items: center;
  gap: 11px;
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-muted);
}
.trust__item :deep(svg) {
  color: var(--green);
}
@media (max-width: 720px) {
  .trust__inner {
    justify-content: center;
    gap: 16px 28px;
  }
  .trust__item {
    font-size: 0.9rem;
  }
}
</style>
