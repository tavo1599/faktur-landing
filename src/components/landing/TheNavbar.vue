<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { Menu, X } from 'lucide-vue-next'
import { site } from './data/site'
import GradientButton from './ui/GradientButton.vue'

const route = useRoute()
const scrolled = ref(false)
const progreso = ref(0)
const menuAbierto = ref(false)

const esHome = computed(() => route.path === '/')
// El navbar es transparente solo sobre el hero del home sin scroll.
const solido = computed(() => scrolled.value || !esHome.value)

function onScroll() {
  scrolled.value = window.scrollY > 24
  const alto = document.documentElement.scrollHeight - window.innerHeight
  progreso.value = alto > 0 ? Math.min((window.scrollY / alto) * 100, 100) : 0
}
onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onScroll, { passive: true })
})
onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', onScroll)
})

function cerrarMenu() {
  menuAbierto.value = false
}
</script>

<template>
  <header class="nav" :class="{ 'nav--scrolled': solido, 'nav--open': menuAbierto }">
    <div class="nav__inner container">
      <RouterLink to="/" class="nav__logo" @click="cerrarMenu">
        <img :src="solido ? '/logo.png' : '/logo-sidebar.png'" alt="Faktur" />
      </RouterLink>

      <nav class="nav__links">
        <RouterLink
          v-for="l in site.nav"
          :key="l.href"
          :to="{ path: '/', hash: l.href }"
          class="nav__link"
          >{{ l.label }}</RouterLink
        >
      </nav>

      <div class="nav__actions">
        <a :href="site.loginUrl" class="nav__login">Iniciar sesión</a>
        <GradientButton :href="site.ctaRegistro" size="md">Prueba gratis</GradientButton>
      </div>

      <button class="nav__burger" aria-label="Menú" @click="menuAbierto = !menuAbierto">
        <X v-if="menuAbierto" :size="24" />
        <Menu v-else :size="24" />
      </button>
    </div>

    <!-- Barra de progreso de lectura -->
    <div class="nav__progress" :style="{ transform: `scaleX(${progreso / 100})` }" aria-hidden="true"></div>

    <!-- Menú móvil -->
    <transition name="drawer">
      <div v-if="menuAbierto" class="nav__mobile">
        <RouterLink
          v-for="l in site.nav"
          :key="l.href"
          :to="{ path: '/', hash: l.href }"
          class="nav__mobile-link"
          @click="cerrarMenu"
          >{{ l.label }}</RouterLink
        >
        <div class="nav__mobile-actions">
          <a :href="site.loginUrl" class="nav__login">Iniciar sesión</a>
          <GradientButton :href="site.ctaRegistro" size="lg">Prueba gratis</GradientButton>
        </div>
      </div>
    </transition>
  </header>
</template>

<style scoped>
.nav {
  position: fixed;
  inset: 0 0 auto 0;
  z-index: 100;
  height: var(--nav-h);
  transition: background 0.35s var(--ease), box-shadow 0.35s var(--ease);
}
.nav--scrolled {
  background: rgba(255, 255, 255, 0.82);
  backdrop-filter: saturate(180%) blur(14px);
  box-shadow: 0 1px 0 var(--border), var(--shadow-sm);
}
.nav__inner {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}
.nav__logo img {
  height: 32px;
  width: auto;
}

.nav__links {
  display: flex;
  align-items: center;
  gap: 34px;
  margin-inline: auto;
}
.nav__link {
  font-size: 0.98rem;
  font-weight: 500;
  color: var(--text-on-dark);
  opacity: 0.85;
  transition: opacity 0.2s, color 0.2s;
}
.nav__link:hover {
  opacity: 1;
}
.nav--scrolled .nav__link {
  color: var(--text-ink);
  opacity: 0.75;
}
.nav--scrolled .nav__link:hover {
  opacity: 1;
  color: var(--green-deep);
}

.nav__actions {
  display: flex;
  align-items: center;
  gap: 20px;
}
.nav__login {
  font-size: 0.98rem;
  font-weight: 600;
  color: var(--text-on-dark);
  transition: color 0.2s;
}
.nav--scrolled .nav__login {
  color: var(--text-ink);
}
.nav__login:hover {
  color: var(--green);
}

.nav__burger {
  display: none;
  color: var(--text-on-dark);
}
.nav--scrolled .nav__burger,
.nav--open .nav__burger {
  color: var(--text-ink);
}

/* Barra de progreso de lectura */
.nav__progress {
  position: absolute;
  left: 0;
  bottom: 0;
  height: 3px;
  width: 100%;
  transform-origin: left;
  transform: scaleX(0);
  background: linear-gradient(90deg, var(--green), var(--green-bright));
  transition: transform 0.1s linear;
}

/* Menú móvil */
.nav__mobile {
  display: none;
  flex-direction: column;
  gap: 4px;
  padding: 16px var(--gutter) 28px;
  background: rgba(255, 255, 255, 0.96);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid var(--border);
  box-shadow: var(--shadow-md);
}
.nav__mobile-link {
  padding: 14px 4px;
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-ink);
  border-bottom: 1px solid var(--border);
}
.nav__mobile-actions {
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-top: 18px;
}
.nav__mobile-actions .nav__login {
  color: var(--text-ink);
  text-align: center;
  padding: 8px;
}

.drawer-enter-active,
.drawer-leave-active {
  transition: opacity 0.25s var(--ease), transform 0.25s var(--ease);
}
.drawer-enter-from,
.drawer-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

@media (max-width: 900px) {
  .nav__links,
  .nav__actions {
    display: none;
  }
  .nav__burger {
    display: inline-flex;
  }
  .nav--open {
    background: rgba(255, 255, 255, 0.96);
    backdrop-filter: blur(14px);
  }
  .nav--open .nav__logo img {
    content: url("/logo.png");
  }
  .nav__mobile {
    display: flex;
  }
}
</style>
