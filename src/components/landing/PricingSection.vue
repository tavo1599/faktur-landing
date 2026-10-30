<script setup lang="ts">
import { RefreshCw } from 'lucide-vue-next'
import { plans } from './data/plans'
import SectionHeading from './ui/SectionHeading.vue'
import PricingCard from './ui/PricingCard.vue'
</script>

<template>
  <section id="precios" class="pricing section">
    <div class="container">
      <SectionHeading
        eyebrow="Precios"
        subtitle="Prueba gratis 7 días con todo incluido y luego elige tu plan. Sin permanencia."
        data-reveal
      >
        Un plan para <span class="text-gradient">cada etapa</span>
      </SectionHeading>

      <div class="pricing__grid">
        <PricingCard
          v-for="(p, i) in plans"
          :key="p.nombre"
          :plan="p"
          data-reveal
          :style="{ '--reveal-delay': `${i * 90}ms` }"
        />
      </div>

      <p class="pricing__note" data-reveal>
        <RefreshCw :size="15" />
        Precios mensuales en soles, no incluyen IGV. Sucursales sin costo adicional en todos los planes.
        Cambia o cancela cuando quieras.
      </p>
    </div>
  </section>
</template>

<style scoped>
.pricing {
  background: var(--paper);
}
.pricing__grid {
  margin-top: clamp(48px, 6vw, 72px);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
  align-items: start;
}
.pricing__note {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 34px;
  font-size: 0.95rem;
  color: var(--text-muted);
}
.pricing__note :deep(svg) {
  color: var(--green);
}

@media (max-width: 940px) {
  .pricing__grid {
    grid-template-columns: 1fr;
    max-width: 440px;
    margin-inline: auto;
  }
}
</style>
