<script setup lang="ts">
import { CheckCircle2 } from 'lucide-vue-next'
import { features } from './data/features'
import SectionHeading from './ui/SectionHeading.vue'
import FeatureCard from './ui/FeatureCard.vue'
import GrowthArrow from './ui/GrowthArrow.vue'

const spotlight = features[0]
const resto = features.slice(1)
</script>

<template>
  <section id="caracteristicas" class="feat section">
    <div class="container">
      <SectionHeading
        eyebrow="Todo lo que necesitas"
        subtitle="Una sola plataforma para emitir, vender y controlar tu negocio. Sin instalar nada, sin dolores de cabeza."
        data-reveal
      >
        Un sistema completo, <span class="text-gradient">no un parche</span>
      </SectionHeading>

      <div class="bento">
        <!-- Tarjeta protagonista -->
        <article class="spot" data-reveal>
          <div class="spot__body">
            <div class="spot__icon"><component :is="spotlight.icon" :size="24" /></div>
            <h3 class="spot__title">{{ spotlight.title }}</h3>
            <p class="spot__text">{{ spotlight.text }}</p>
          </div>
          <div class="spot__visual" aria-hidden="true">
            <div class="spot__chip">
              <CheckCircle2 :size="16" /> Aceptado por SUNAT
            </div>
            <GrowthArrow :size="150" class="spot__arrow" />
          </div>
        </article>

        <!-- Resto de features -->
        <FeatureCard
          v-for="(f, i) in resto"
          :key="f.title"
          :icon="f.icon"
          :title="f.title"
          :text="f.text"
          data-reveal
          :style="{ '--reveal-delay': `${(i % 4) * 70}ms` }"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.feat {
  background: var(--paper-2);
}
.bento {
  margin-top: clamp(40px, 5vw, 64px);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
}

/* Protagonista: 2x2 */
.spot {
  grid-column: span 2;
  grid-row: span 2;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 24px;
  padding: 34px;
  border-radius: var(--r-lg);
  background: linear-gradient(160deg, var(--navy-800), var(--navy-900));
  color: var(--text-on-dark);
  overflow: hidden;
}
.spot::after {
  content: "";
  position: absolute;
  inset: auto -20% -40% auto;
  width: 340px;
  height: 340px;
  background: radial-gradient(circle, var(--green-glow), transparent 65%);
  pointer-events: none;
}
.spot__body {
  position: relative;
  z-index: 1;
}
.spot__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 54px;
  height: 54px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.1);
  color: var(--green-bright);
  margin-bottom: 18px;
}
.spot__title {
  font-size: 1.7rem;
  color: #fff;
  margin-bottom: 12px;
}
.spot__text {
  font-size: 1.05rem;
  line-height: 1.6;
  color: var(--text-on-dark-muted);
  max-width: 380px;
}
.spot__visual {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 16px;
}
.spot__chip {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 9px 15px;
  background: rgba(255, 255, 255, 0.95);
  color: var(--green-deep);
  font-size: 0.85rem;
  font-weight: 700;
  border-radius: var(--r-full);
  box-shadow: var(--shadow-md);
}
.spot__arrow {
  color: var(--green-bright);
  opacity: 0.9;
}

@media (max-width: 1000px) {
  .bento {
    grid-template-columns: repeat(2, 1fr);
  }
  .spot {
    grid-column: span 2;
    grid-row: span 1;
    flex-direction: row;
    align-items: center;
  }
  .spot__text {
    max-width: none;
  }
  .spot__visual {
    flex-direction: column;
    align-items: flex-end;
  }
}
@media (max-width: 620px) {
  .bento {
    grid-template-columns: 1fr;
  }
  .spot {
    grid-column: span 1;
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
