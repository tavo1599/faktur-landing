<script setup lang="ts">
import { Check } from 'lucide-vue-next'
import type { Plan } from '../data/plans'
import { site } from '../data/site'
import GradientButton from './GradientButton.vue'

defineProps<{ plan: Plan }>()
</script>

<template>
  <article class="pcard" :class="{ 'pcard--featured': plan.destacado }">
    <div v-if="plan.badge" class="pcard__badge">{{ plan.badge }}</div>

    <header class="pcard__head">
      <h3 class="pcard__name">{{ plan.nombre }}</h3>
      <p class="pcard__hook">{{ plan.gancho }}</p>
    </header>

    <div class="pcard__price">
      <span class="pcard__currency">S/</span>
      <span class="pcard__amount">{{ plan.precio }}</span>
      <span class="pcard__period">{{ plan.periodo }}</span>
    </div>

    <GradientButton
      :variant="plan.destacado ? 'primary' : 'outline'"
      size="lg"
      :href="site.ctaRegistro"
      class="pcard__cta"
    >
      {{ plan.cta }}
    </GradientButton>

    <ul class="pcard__list">
      <li v-for="c in plan.caracteristicas" :key="c" class="pcard__item">
        <span class="pcard__check"><Check :size="13" :stroke-width="3.5" /></span>
        {{ c }}
      </li>
    </ul>
  </article>
</template>

<style scoped>
.pcard {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 34px 30px;
  background: var(--paper);
  border: 1px solid var(--border);
  border-radius: var(--r-xl);
  transition: transform 0.3s var(--ease), box-shadow 0.3s var(--ease);
}
.pcard--featured {
  border-color: transparent;
  box-shadow: 0 0 0 2px var(--green), var(--shadow-lg);
  transform: translateY(-8px);
}
.pcard--featured::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: radial-gradient(120% 80% at 50% 0%, var(--green-soft), transparent 60%);
  opacity: 0.7;
  pointer-events: none;
}
.pcard > * {
  position: relative;
}

.pcard__badge {
  position: absolute;
  top: -13px;
  left: 50%;
  transform: translateX(-50%);
  padding: 6px 16px;
  background: linear-gradient(120deg, var(--green-deep), var(--green-2));
  color: #fff;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  border-radius: var(--r-full);
  box-shadow: var(--shadow-green);
}

.pcard__name {
  font-size: 1.35rem;
  font-weight: 700;
}
.pcard__hook {
  margin-top: 6px;
  font-size: 0.95rem;
  color: var(--text-muted);
  line-height: 1.5;
}

.pcard__price {
  display: flex;
  align-items: baseline;
  gap: 4px;
  padding-bottom: 22px;
  border-bottom: 1px solid var(--border);
}
.pcard__currency {
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-muted);
}
.pcard__amount {
  font-family: var(--font-display);
  font-size: 3.4rem;
  font-weight: 800;
  line-height: 1;
  letter-spacing: -0.03em;
}
.pcard__period {
  font-size: 1rem;
  color: var(--text-soft);
}

.pcard__cta {
  width: 100%;
}

.pcard__list {
  display: flex;
  flex-direction: column;
  gap: 13px;
}
.pcard__item {
  display: flex;
  align-items: flex-start;
  gap: 11px;
  font-size: 0.98rem;
  color: var(--text-ink);
}
.pcard__check {
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  margin-top: 1px;
  border-radius: var(--r-full);
  background: var(--green-soft);
  color: var(--green-deep);
}
</style>
