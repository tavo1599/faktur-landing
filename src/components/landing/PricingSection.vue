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
        subtitle="Empieza gratis y sube de plan cuando tu negocio lo pida. Sin permanencia."
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
        Cambia o cancela cuando quieras. Todos los planes incluyen actualizaciones y soporte.
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
