<script setup lang="ts">
withDefaults(
  defineProps<{
    eyebrow?: string
    subtitle?: string
    align?: 'center' | 'left'
    onDark?: boolean
  }>(),
  { align: 'center', onDark: false },
)
</script>

<template>
  <div class="heading" :class="[`heading--${align}`, { 'on-dark': onDark }]">
    <span v-if="eyebrow" class="eyebrow" :class="{ 'eyebrow--on-dark': onDark }">{{ eyebrow }}</span>
    <h2 class="heading__title"><slot /></h2>
    <p v-if="subtitle" class="heading__sub">{{ subtitle }}</p>
  </div>
</template>

<style scoped>
.heading {
  display: flex;
  flex-direction: column;
  gap: 18px;
  max-width: 720px;
}
.heading--center {
  align-items: center;
  text-align: center;
  margin-inline: auto;
}
.heading--left {
  align-items: flex-start;
  text-align: left;
}
.heading__title {
  font-size: clamp(2rem, 4.6vw, 3.15rem);
}
.heading__sub {
  font-size: var(--fs-lead);
  color: var(--text-muted);
  max-width: 620px;
  line-height: 1.6;
}
.heading.on-dark .heading__title {
  color: var(--text-on-dark);
}
.heading.on-dark .heading__sub {
  color: var(--text-on-dark-muted);
}
</style>
