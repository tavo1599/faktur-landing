<script setup lang="ts">
import { ArrowLeft } from 'lucide-vue-next'

defineProps<{ titulo: string; subtitulo?: string }>()
</script>

<template>
  <main class="legal">
    <div class="container legal__inner">
      <header class="legal__head">
        <RouterLink to="/" class="legal__back"><ArrowLeft :size="16" /> Volver al inicio</RouterLink>
        <h1 class="legal__title">{{ titulo }}</h1>
        <p v-if="subtitulo" class="legal__sub">{{ subtitulo }}</p>
      </header>
      <div class="legal__content">
        <slot />
      </div>
    </div>
  </main>
</template>

<style scoped>
.legal {
  padding-top: calc(var(--nav-h) + clamp(32px, 6vw, 64px));
  padding-bottom: clamp(56px, 9vw, 120px);
  background: var(--paper);
  min-height: 70vh;
}
.legal__inner {
  max-width: var(--container-narrow);
}
.legal__back {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.92rem;
  font-weight: 600;
  color: var(--text-muted);
  transition: color 0.2s;
}
.legal__back:hover {
  color: var(--green-deep);
}
.legal__title {
  font-size: clamp(2rem, 4.5vw, 3rem);
  margin-top: 20px;
}
.legal__sub {
  margin-top: 12px;
  color: var(--text-muted);
  font-size: 1.05rem;
}
.legal__content {
  margin-top: clamp(28px, 4vw, 44px);
}

/* Estilo de lectura para el contenido (prosa o formulario) */
.legal__content :deep(h2) {
  font-size: 1.35rem;
  margin-top: 38px;
  margin-bottom: 12px;
}
.legal__content :deep(h2:first-child) {
  margin-top: 0;
}
.legal__content :deep(p),
.legal__content :deep(li) {
  color: var(--text-muted);
  line-height: 1.75;
  font-size: 1.02rem;
}
.legal__content :deep(p) {
  margin-bottom: 14px;
}
.legal__content :deep(ul),
.legal__content :deep(ol) {
  margin: 0 0 16px 22px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.legal__content :deep(ul) {
  list-style: disc;
}
.legal__content :deep(ol) {
  list-style: decimal;
}
.legal__content :deep(strong) {
  color: var(--text-ink);
}
.legal__content :deep(a) {
  color: var(--green-deep);
  font-weight: 600;
}
</style>
