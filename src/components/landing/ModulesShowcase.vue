<script setup lang="ts">
import { Check } from 'lucide-vue-next'
import { modules } from './data/modules'
import MockupPos from './ui/MockupPos.vue'
import MockupReportes from './ui/MockupReportes.vue'
import MockupDashboard from './ui/MockupDashboard.vue'

const visuals = {
  pos: MockupPos,
  reportes: MockupReportes,
  panel: MockupDashboard,
}
</script>

<template>
  <section id="modulos" class="show section">
    <div class="container show__stack">
      <div
        v-for="(m, i) in modules"
        :key="m.id"
        class="row"
        :class="{ 'row--rev': i % 2 === 1 }"
      >
        <div class="row__copy" data-reveal>
          <span class="eyebrow">{{ m.eyebrow }}</span>
          <h3 class="row__title">{{ m.title }}</h3>
          <p class="row__text">{{ m.text }}</p>
          <ul class="row__points">
            <li v-for="pt in m.points" :key="pt">
              <span class="row__check"><Check :size="13" :stroke-width="3.5" /></span>
              {{ pt }}
            </li>
          </ul>
        </div>

        <div class="row__visual" data-reveal="120">
          <div class="row__glow" aria-hidden="true"></div>
          <component :is="visuals[m.id]" class="row__mockup" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.show {
  background: var(--paper-2);
}
.show__stack {
  display: flex;
  flex-direction: column;
  gap: clamp(72px, 9vw, 130px);
}
.row {
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  align-items: center;
  gap: clamp(32px, 6vw, 84px);
}
.row--rev .row__copy {
  order: 2;
}

.row__copy {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
}
.row__title {
  font-size: clamp(1.7rem, 3.4vw, 2.4rem);
}
.row__text {
  font-size: var(--fs-lead);
  color: var(--text-muted);
  line-height: 1.6;
}
.row__points {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 6px;
}
.row__points li {
  display: flex;
  align-items: center;
  gap: 11px;
  font-size: 1.02rem;
  font-weight: 500;
}
.row__check {
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: var(--green);
  color: #fff;
}

.row__visual {
  position: relative;
}
.row__glow {
  position: absolute;
  inset: 8% 4%;
  background: radial-gradient(circle at 50% 40%, var(--green-glow), transparent 68%);
  filter: blur(30px);
  opacity: 0.6;
  pointer-events: none;
}
.row__mockup {
  position: relative;
}

@media (max-width: 900px) {
  .row {
    grid-template-columns: 1fr;
    gap: 36px;
  }
  .row--rev .row__copy {
    order: 0;
  }
}
</style>
