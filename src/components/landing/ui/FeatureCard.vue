<script setup lang="ts">
import type { Component } from 'vue'

defineProps<{
  icon: Component
  title: string
  text: string
}>()
</script>

<template>
  <article class="fcard">
    <div class="fcard__icon">
      <component :is="icon" :size="22" :stroke-width="2" />
    </div>
    <h3 class="fcard__title">{{ title }}</h3>
    <p class="fcard__text">{{ text }}</p>
  </article>
</template>

<style scoped>
.fcard {
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 28px;
  background: var(--paper);
  border: 1px solid var(--border);
  border-radius: var(--r-lg);
  transition: transform 0.3s var(--ease), box-shadow 0.3s var(--ease),
    border-color 0.3s var(--ease);
}
.fcard:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
  border-color: transparent;
}
.fcard__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 14px;
  color: var(--green-deep);
  background: var(--green-soft);
}
.fcard__title {
  font-size: 1.2rem;
  font-weight: 700;
}
.fcard__text {
  font-size: 1rem;
  color: var(--text-muted);
  line-height: 1.6;
}
</style>
