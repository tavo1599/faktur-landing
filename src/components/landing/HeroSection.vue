<script setup lang="ts">
import { CheckCircle2, TrendingUp } from 'lucide-vue-next'
import { site } from './data/site'
import GradientButton from './ui/GradientButton.vue'
import MockupDashboard from './ui/MockupDashboard.vue'
</script>

<template>
  <section id="top" class="hero on-dark">
    <!-- Fondos decorativos -->
    <div class="hero__aurora" aria-hidden="true"></div>
    <div class="hero__grid" aria-hidden="true"></div>

    <div class="hero__inner container">
      <div class="hero__copy">
        <span class="eyebrow eyebrow--on-dark" data-reveal>Facturación electrónica SUNAT</span>

        <h1 class="hero__title" data-reveal>
          Emite comprobantes en segundos y haz
          <span class="text-gradient">crecer</span> tu negocio
        </h1>

        <p class="hero__sub" data-reveal="80">
          Facturas, boletas, guías y punto de venta en un solo lugar. Válido ante SUNAT,
          en la nube y pensado para que vendas más rápido.
        </p>

        <div class="hero__cta" data-reveal="160">
          <GradientButton :href="site.ctaRegistro" size="lg">Empieza gratis</GradientButton>
          <GradientButton href="#caracteristicas" variant="outline" size="lg" on-dark>
            Ver características
          </GradientButton>
        </div>

        <p class="hero__micro" data-reveal="220">
          Sin tarjeta de crédito · Listo en 5 minutos
        </p>
      </div>

      <div class="hero__visual" data-reveal="120">
        <div class="hero__mockup">
          <MockupDashboard />
        </div>

        <!-- Tarjetas flotantes -->
        <div class="float float--a">
          <span class="float__icon float__icon--green"><CheckCircle2 :size="20" /></span>
          <div>
            <div class="float__title">Comprobante aceptado</div>
            <div class="float__sub">SUNAT · hace 2 seg</div>
          </div>
        </div>

        <div class="float float--b">
          <span class="float__icon float__icon--soft"><TrendingUp :size="20" /></span>
          <div>
            <div class="float__sub">Ventas del mes</div>
            <div class="float__big">+24%</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  padding-top: calc(var(--nav-h) + clamp(48px, 8vw, 96px));
  padding-bottom: clamp(64px, 9vw, 130px);
  background: var(--navy-900);
  overflow: hidden;
}
.hero__aurora {
  position: absolute;
  inset: -20% -10% auto -10%;
  height: 720px;
  background:
    radial-gradient(46% 60% at 78% 20%, rgba(12, 162, 86, 0.42), transparent 62%),
    radial-gradient(40% 55% at 15% 12%, rgba(22, 192, 106, 0.22), transparent 60%),
    radial-gradient(50% 60% at 55% 0%, rgba(31, 56, 76, 0.7), transparent 70%);
  filter: blur(6px);
  pointer-events: none;
}
.hero__grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.035) 1px, transparent 1px);
  background-size: 54px 54px;
  mask-image: radial-gradient(120% 80% at 50% 0%, #000 40%, transparent 78%);
  pointer-events: none;
}

.hero__inner {
  position: relative;
  display: grid;
  grid-template-columns: 1.05fr 1fr;
  align-items: center;
  gap: clamp(40px, 6vw, 80px);
}

.hero__copy {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
}
.hero__title {
  font-size: clamp(2.5rem, 5.4vw, 4.1rem);
  color: #fff;
  letter-spacing: -0.025em;
}
.hero__sub {
  font-size: var(--fs-lead);
  line-height: 1.62;
  color: var(--text-on-dark-muted);
  max-width: 520px;
}
.hero__cta {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 6px;
}
.hero__micro {
  font-size: 0.9rem;
  color: var(--text-on-dark-muted);
}

/* Visual */
.hero__visual {
  position: relative;
}
.hero__mockup {
  position: relative;
  z-index: 2;
  transform: perspective(1600px) rotateY(-9deg) rotateX(3deg);
  transform-origin: center;
}

.float {
  position: absolute;
  z-index: 3;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 13px 16px;
  background: rgba(255, 255, 255, 0.96);
  border-radius: 16px;
  box-shadow: var(--shadow-lg);
  animation: float-bob 5s var(--ease) infinite;
}
.float--a {
  top: 8%;
  left: -6%;
}
.float--b {
  bottom: 10%;
  right: -4%;
  animation-delay: 1.4s;
}
.float__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 12px;
}
.float__icon--green {
  background: var(--green);
  color: #fff;
}
.float__icon--soft {
  background: var(--green-soft);
  color: var(--green-deep);
}
.float__title {
  font-size: 0.86rem;
  font-weight: 700;
  color: var(--text-ink);
}
.float__sub {
  font-size: 0.72rem;
  color: var(--text-soft);
}
.float__big {
  font-family: var(--font-display);
  font-size: 1.15rem;
  font-weight: 800;
  color: var(--green-deep);
  line-height: 1.1;
}

@keyframes float-bob {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-11px);
  }
}

@media (max-width: 940px) {
  .hero__inner {
    grid-template-columns: 1fr;
    gap: 54px;
  }
  .hero__copy {
    align-items: center;
    text-align: center;
  }
  .hero__sub {
    max-width: 560px;
  }
  .hero__mockup {
    transform: none;
    max-width: 540px;
    margin-inline: auto;
  }
  .float--a {
    left: -2%;
  }
  .float--b {
    right: -2%;
  }
}
@media (max-width: 560px) {
  .float {
    display: none;
  }
}
@media (prefers-reduced-motion: reduce) {
  .float {
    animation: none;
  }
}
</style>
