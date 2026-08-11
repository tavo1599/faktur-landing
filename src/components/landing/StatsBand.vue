<script setup lang="ts">
import CountUp from './ui/CountUp.vue'

// Cifras honestas (basadas en el producto/planes), no inventadas.
const stats = [
  { to: 1000, suffix: '', label: 'comprobantes gratis al mes' },
  { to: 3, suffix: '', label: 'pasos para empezar' },
  { to: 100, suffix: '%', label: 'válido ante SUNAT' },
  { to: 5, suffix: ' min', label: 'para dejar todo listo' },
]
</script>

<template>
  <section class="stats on-dark">
    <div class="stats__aurora" aria-hidden="true"></div>
    <div class="container stats__grid">
      <div v-for="s in stats" :key="s.label" class="stat" data-reveal>
        <div class="stat__num">
          <CountUp :to="s.to" :suffix="s.suffix" />
        </div>
        <div class="stat__label">{{ s.label }}</div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.stats {
  position: relative;
  background: var(--navy-900);
  padding-block: clamp(44px, 5.5vw, 68px);
  overflow: hidden;
  /* Línea sutil que separa del hero sin cortar el fondo oscuro */
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}
.stats__aurora {
  position: absolute;
  inset: 0;
  background: radial-gradient(70% 130% at 50% 50%, rgba(12, 162, 86, 0.14), transparent 68%);
  pointer-events: none;
}
.stats__grid {
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 28px;
}
.stat {
  text-align: center;
}
.stat__num {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: clamp(2.4rem, 4.5vw, 3.4rem);
  line-height: 1;
  letter-spacing: -0.03em;
  background: linear-gradient(120deg, var(--green-bright), var(--green-2));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.stat__label {
  margin-top: 10px;
  font-size: 0.98rem;
  color: var(--text-on-dark-muted);
}

@media (max-width: 720px) {
  .stats__grid {
    grid-template-columns: 1fr 1fr;
    gap: 32px 20px;
  }
}
</style>
