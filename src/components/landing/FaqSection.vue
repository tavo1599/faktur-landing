<script setup lang="ts">
import { ref } from 'vue'
import { Plus } from 'lucide-vue-next'
import { faqs } from './data/faqs'
import { site } from './data/site'
import SectionHeading from './ui/SectionHeading.vue'

const abierto = ref<number | null>(0)
function toggle(i: number) {
  abierto.value = abierto.value === i ? null : i
}
</script>

<template>
  <section id="faq" class="faq section">
    <div class="container faq__inner">
      <div class="faq__aside" data-reveal>
        <SectionHeading eyebrow="Preguntas frecuentes" align="left">
          Resolvemos tus <span class="text-gradient">dudas</span>
        </SectionHeading>
        <p class="faq__help">
          ¿Te queda otra pregunta? Escríbenos y te respondemos rápido.
        </p>
        <a :href="`mailto:${site.contacto.email}`" class="faq__mail">{{ site.contacto.email }}</a>
      </div>

      <ul class="faq__list" data-reveal="120">
        <li
          v-for="(f, i) in faqs"
          :key="f.q"
          class="qa"
          :class="{ 'qa--open': abierto === i }"
        >
          <button class="qa__q" @click="toggle(i)" :aria-expanded="abierto === i">
            <span>{{ f.q }}</span>
            <span class="qa__icon"><Plus :size="20" /></span>
          </button>
          <div class="qa__wrap">
            <p class="qa__a">{{ f.a }}</p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.faq {
  background: var(--paper-2);
}
.faq__inner {
  display: grid;
  grid-template-columns: 0.85fr 1.15fr;
  gap: clamp(36px, 6vw, 80px);
  align-items: start;
}
.faq__aside {
  position: sticky;
  top: calc(var(--nav-h) + 30px);
  display: flex;
  flex-direction: column;
  gap: 18px;
}
.faq__help {
  color: var(--text-muted);
  font-size: 1rem;
}
.faq__mail {
  font-weight: 700;
  color: var(--green-deep);
  font-size: 1.05rem;
}

.faq__list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.qa {
  background: var(--paper);
  border: 1px solid var(--border);
  border-radius: var(--r-md);
  transition: border-color 0.25s var(--ease), box-shadow 0.25s var(--ease);
}
.qa--open {
  border-color: transparent;
  box-shadow: var(--shadow-md);
}
.qa__q {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 22px 24px;
  text-align: left;
  font-family: var(--font-display);
  font-size: 1.08rem;
  font-weight: 600;
  color: var(--text-ink);
}
.qa__icon {
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: var(--green-soft);
  color: var(--green-deep);
  transition: transform 0.3s var(--ease), background 0.25s;
}
.qa--open .qa__icon {
  transform: rotate(45deg);
  background: var(--green);
  color: #fff;
}
.qa__wrap {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.32s var(--ease);
}
.qa--open .qa__wrap {
  grid-template-rows: 1fr;
}
.qa__a {
  overflow: hidden;
  margin: 0 24px;
  color: var(--text-muted);
  line-height: 1.65;
  font-size: 1rem;
}
.qa--open .qa__a {
  padding-bottom: 22px;
}

@media (max-width: 860px) {
  .faq__inner {
    grid-template-columns: 1fr;
  }
  .faq__aside {
    position: static;
  }
}
</style>
