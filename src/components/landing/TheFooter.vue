<script setup lang="ts">
import { Mail, Phone, Facebook, Instagram, Linkedin } from 'lucide-vue-next'
import { site } from './data/site'

const anio = 2026

const columnas = [
  {
    titulo: 'Producto',
    links: [
      { label: 'Características', href: '#caracteristicas' },
      { label: 'Módulos', href: '#modulos' },
      { label: 'Precios', href: '#precios' },
      { label: 'Preguntas', href: '#faq' },
    ],
  },
  {
    titulo: 'Empresa',
    links: [
      { label: 'Contacto', href: '#contacto' },
      { label: 'Iniciar sesión', href: site.loginUrl },
    ],
  },
  {
    titulo: 'Legal',
    links: [
      { label: 'Términos y condiciones', href: '/terminos' },
      { label: 'Libro de Reclamaciones', href: '/libro-de-reclamaciones' },
    ],
  },
]

// Un enlace puede ser externo (http/mailto), un ancla del home (#) o una ruta (/)
function esExterno(href: string): boolean {
  return /^(https?:|mailto:)/.test(href)
}
function destino(href: string) {
  return href.startsWith('#') ? { path: '/', hash: href } : href
}

const redes = [
  { icon: Facebook, href: site.social.facebook },
  { icon: Instagram, href: site.social.instagram },
  { icon: Linkedin, href: site.social.linkedin },
]
</script>

<template>
  <footer class="footer on-dark">
    <div class="container footer__grid">
      <div class="footer__brand">
        <img src="/logo-sidebar.png" alt="Faktur" class="footer__logo" />
        <p class="footer__tagline">
          Facturación electrónica SUNAT para hacer crecer tu negocio.
        </p>
        <div class="footer__contact">
          <a :href="`mailto:${site.contacto.email}`"><Mail :size="16" /> {{ site.contacto.email }}</a>
          <a :href="site.contacto.whatsapp"><Phone :size="16" /> {{ site.contacto.telefono }}</a>
        </div>
        <div class="footer__social">
          <a v-for="(r, i) in redes" :key="i" :href="r.href" class="footer__soc" aria-label="Red social">
            <component :is="r.icon" :size="18" />
          </a>
        </div>
      </div>

      <nav class="footer__cols">
        <div v-for="col in columnas" :key="col.titulo" class="footer__col">
          <h4 class="footer__col-title">{{ col.titulo }}</h4>
          <template v-for="l in col.links" :key="l.label">
            <a v-if="esExterno(l.href)" :href="l.href" class="footer__link">{{ l.label }}</a>
            <RouterLink v-else :to="destino(l.href)" class="footer__link">{{ l.label }}</RouterLink>
          </template>
        </div>
      </nav>
    </div>

    <div class="footer__bottom">
      <div class="container footer__bottom-inner">
        <span>© {{ anio }} {{ site.legal.razonSocial }}. Todos los derechos reservados.</span>
        <span>RUC {{ site.legal.ruc }}</span>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--navy-900);
  color: var(--text-on-dark-muted);
  padding-top: clamp(56px, 7vw, 84px);
}
.footer__grid {
  display: grid;
  grid-template-columns: 1.2fr 1.6fr;
  gap: clamp(40px, 6vw, 90px);
  padding-bottom: 54px;
}
.footer__logo {
  height: 34px;
  width: auto;
  margin-bottom: 18px;
}
.footer__tagline {
  max-width: 300px;
  line-height: 1.6;
  margin-bottom: 20px;
}
.footer__contact {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 22px;
}
.footer__contact a {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  font-size: 0.95rem;
  transition: color 0.2s;
}
.footer__contact a:hover {
  color: var(--green-bright);
}
.footer__social {
  display: flex;
  gap: 10px;
}
.footer__soc {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.06);
  color: var(--text-on-dark);
  transition: background 0.25s, transform 0.25s;
}
.footer__soc:hover {
  background: var(--green);
  color: #fff;
  transform: translateY(-2px);
}

.footer__cols {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
.footer__col {
  display: flex;
  flex-direction: column;
  gap: 13px;
}
.footer__col-title {
  color: var(--text-on-dark);
  font-size: 0.95rem;
  font-family: var(--font-body);
  font-weight: 700;
  letter-spacing: 0.02em;
  margin-bottom: 4px;
}
.footer__link {
  font-size: 0.95rem;
  transition: color 0.2s;
}
.footer__link:hover {
  color: var(--green-bright);
}

.footer__bottom {
  border-top: 1px solid var(--border-dark);
  padding-block: 22px;
}
.footer__bottom-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  font-size: 0.85rem;
}

@media (max-width: 820px) {
  .footer__grid {
    grid-template-columns: 1fr;
    gap: 44px;
  }
}
@media (max-width: 560px) {
  .footer__cols {
    grid-template-columns: 1fr 1fr;
  }
  .footer__bottom-inner {
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
  }
}
</style>
