<script setup lang="ts">
import SectionHeading from './ui/SectionHeading.vue'

const pasos = [
  {
    n: '01',
    title: 'Crea tu cuenta',
    text: 'Regístrate en minutos y entra a tu panel. Sin instalaciones ni papeleo.',
  },
  {
    n: '02',
    title: 'Configura tu empresa',
    text: 'Carga tu logo, tus datos y tus credenciales SOL. Te guiamos paso a paso.',
  },
  {
    n: '03',
    title: 'Emite y crece',
    text: 'Empieza a facturar, vender en el POS y ver tus reportes en tiempo real.',
  },
]
</script>

<template>
  <section class="how section">
    <div class="container">
      <SectionHeading
        eyebrow="Cómo funciona"
        subtitle="De cero a tu primera factura en la misma tarde."
        data-reveal
      >
        Empezar es <span class="text-gradient">así de simple</span>
      </SectionHeading>

      <ol class="steps">
        <div class="steps__line" aria-hidden="true"></div>
        <li v-for="(p, i) in pasos" :key="p.n" class="step" data-reveal :style="{ '--reveal-delay': `${i * 120}ms` }">
          <div class="step__node">{{ p.n }}</div>
          <h3 class="step__title">{{ p.title }}</h3>
          <p class="step__text">{{ p.text }}</p>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.how {
  background: var(--paper);
}
.steps {
  position: relative;
  margin-top: clamp(48px, 6vw, 72px);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
}
.steps__line {
  position: absolute;
  top: 34px;
  left: 16%;
  right: 16%;
  height: 2px;
  background: repeating-linear-gradient(
    90deg,
    var(--green) 0 10px,
    transparent 10px 20px
  );
  opacity: 0.4;
}
.step {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 14px;
}
.step__node {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 68px;
  height: 68px;
  border-radius: 50%;
  background: var(--paper);
  border: 2px solid var(--green);
  color: var(--green-deep);
  font-family: var(--font-display);
  font-size: 1.35rem;
  font-weight: 800;
  box-shadow: 0 0 0 8px var(--paper), var(--shadow-green);
}
.step__title {
  font-size: 1.3rem;
}
.step__text {
  font-size: 1rem;
  color: var(--text-muted);
  max-width: 300px;
  line-height: 1.6;
}

@media (max-width: 820px) {
  .steps {
    grid-template-columns: 1fr;
    gap: 44px;
    max-width: 420px;
    margin-inline: auto;
  }
  .steps__line {
    display: none;
  }
}
</style>
