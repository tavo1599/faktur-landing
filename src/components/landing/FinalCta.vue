<script setup lang="ts">
import { site } from './data/site'
import GradientButton from './ui/GradientButton.vue'
import GrowthArrow from './ui/GrowthArrow.vue'
</script>

<template>
  <section class="cta section">
    <div class="container">
      <div class="cta__card on-dark" data-reveal>
        <div class="cta__aurora" aria-hidden="true"></div>
        <GrowthArrow :size="120" class="cta__arrow" />

        <h2 class="cta__title">
          Empieza a facturar hoy y<br />
          haz <span class="text-gradient">crecer</span> tu negocio
        </h2>
        <p class="cta__sub">
          Crea tu cuenta gratis en minutos. Sin tarjeta, sin instalaciones, sin complicaciones.
        </p>

        <div class="cta__actions">
          <GradientButton :href="site.ctaRegistro" size="lg">Empieza gratis</GradientButton>
          <GradientButton :href="site.contacto.whatsapp" variant="outline" size="lg" on-dark>
            Habla con nosotros
          </GradientButton>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cta {
  background: var(--paper);
}
.cta__card {
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 20px;
  padding: clamp(48px, 8vw, 92px) clamp(24px, 5vw, 40px);
  border-radius: var(--r-xl);
  background: linear-gradient(150deg, var(--navy-800), var(--navy-900));
}
.cta__aurora {
  position: absolute;
  inset: -40% -10% auto -10%;
  height: 420px;
  background:
    radial-gradient(40% 60% at 30% 0%, rgba(12, 162, 86, 0.4), transparent 62%),
    radial-gradient(40% 60% at 78% 10%, rgba(22, 192, 106, 0.28), transparent 60%);
  pointer-events: none;
}
.cta__arrow {
  position: relative;
  color: var(--green-bright);
  margin-bottom: 4px;
}
.cta__title {
  position: relative;
  font-size: clamp(2rem, 4.6vw, 3.2rem);
  color: #fff;
  line-height: 1.1;
}
.cta__sub {
  position: relative;
  font-size: var(--fs-lead);
  color: var(--text-on-dark-muted);
  max-width: 520px;
}
.cta__actions {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 14px;
  margin-top: 10px;
}
</style>
