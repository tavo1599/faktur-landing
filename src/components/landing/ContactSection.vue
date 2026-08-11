<script setup lang="ts">
import { ref, reactive } from 'vue'
import { Mail, Phone, MessageCircle, CheckCircle2, Send } from 'lucide-vue-next'
import { site } from './data/site'
import SectionHeading from './ui/SectionHeading.vue'

type Estado = 'idle' | 'enviando' | 'ok' | 'error'
const estado = ref<Estado>('idle')

const form = reactive({
  nombre: '',
  empresa: '',
  email: '',
  telefono: '',
  motivo: 'demo',
  mensaje: '',
})

const motivos = [
  { valor: 'demo', texto: 'Quiero una demo' },
  { valor: 'consulta', texto: 'Tengo una consulta' },
  { valor: 'precios', texto: 'Información de precios' },
  { valor: 'soporte', texto: 'Soporte' },
]

function valido(): boolean {
  return (
    form.nombre.trim().length > 1 &&
    /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email) &&
    form.telefono.trim().length >= 6
  )
}

function textoResumen(): string {
  const motivo = motivos.find((m) => m.valor === form.motivo)?.texto || form.motivo
  return (
    `Hola, soy ${form.nombre}` +
    (form.empresa ? ` de ${form.empresa}` : '') +
    `.\nMotivo: ${motivo}.\n` +
    `Email: ${form.email}\nTeléfono: ${form.telefono}` +
    (form.mensaje ? `\n\n${form.mensaje}` : '')
  )
}

async function enviar() {
  if (!valido()) {
    estado.value = 'error'
    return
  }
  estado.value = 'enviando'

  // 1) Si hay endpoint configurado, inicia el registro (envía el enlace mágico).
  if (site.registroEndpoint) {
    try {
      const res = await fetch(site.registroEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('bad status')
      estado.value = 'ok'
    } catch {
      estado.value = 'error'
    }
    return
  }

  // 2) Fallback: abre WhatsApp con los datos pre-rellenados.
  const url = `https://wa.me/${site.contacto.whatsappNumero}?text=${encodeURIComponent(textoResumen())}`
  window.open(url, '_blank', 'noopener')
  estado.value = 'ok'
}
</script>

<template>
  <section id="contacto" class="contact section">
    <div class="container contact__grid">
      <div class="contact__aside" data-reveal>
        <SectionHeading eyebrow="Contacto" align="left">
          ¿Listo para <span class="text-gradient">empezar</span>?
        </SectionHeading>
        <p class="contact__lead">
          Cuéntanos de tu negocio y te mostramos cómo Faktur te ayuda a facturar y crecer.
          Te respondemos el mismo día.
        </p>

        <ul class="contact__channels">
          <li>
            <span class="contact__ic"><Mail :size="18" /></span>
            <a :href="`mailto:${site.contacto.email}`">{{ site.contacto.email }}</a>
          </li>
          <li>
            <span class="contact__ic"><Phone :size="18" /></span>
            <a :href="site.contacto.whatsapp">{{ site.contacto.telefono }}</a>
          </li>
          <li>
            <span class="contact__ic"><MessageCircle :size="18" /></span>
            <a :href="site.contacto.whatsapp" target="_blank" rel="noopener">Escríbenos por WhatsApp</a>
          </li>
        </ul>
      </div>

      <div class="contact__form-wrap" data-reveal="100">
        <!-- Éxito -->
        <div v-if="estado === 'ok'" class="contact__ok">
          <span class="contact__ok-ic"><CheckCircle2 :size="34" /></span>
          <h3>¡Revisa tu correo!</h3>
          <p>Te enviamos un enlace para activar tu prueba gratis de 7 días. Si no lo ves, revisa spam.</p>
          <button class="contact__reset" @click="estado = 'idle'">Enviar de nuevo</button>
        </div>

        <!-- Formulario -->
        <form v-else class="contact__form" @submit.prevent="enviar">
          <div class="field-grid">
            <label class="field">
              <span>Nombre *</span>
              <input v-model="form.nombre" type="text" placeholder="Tu nombre" />
            </label>
            <label class="field">
              <span>Empresa</span>
              <input v-model="form.empresa" type="text" placeholder="(opcional)" />
            </label>
          </div>
          <div class="field-grid">
            <label class="field">
              <span>Email *</span>
              <input v-model="form.email" type="email" placeholder="tu@correo.com" />
            </label>
            <label class="field">
              <span>Teléfono / WhatsApp *</span>
              <input v-model="form.telefono" type="tel" placeholder="999 999 999" />
            </label>
          </div>
          <label class="field">
            <span>¿En qué te ayudamos?</span>
            <select v-model="form.motivo">
              <option v-for="m in motivos" :key="m.valor" :value="m.valor">{{ m.texto }}</option>
            </select>
          </label>
          <label class="field">
            <span>Mensaje</span>
            <textarea v-model="form.mensaje" rows="3" placeholder="Cuéntanos brevemente…"></textarea>
          </label>

          <p v-if="estado === 'error'" class="contact__err">
            Revisa tus datos: nombre, un email válido y tu teléfono son obligatorios.
          </p>

          <button type="submit" class="contact__submit" :disabled="estado === 'enviando'">
            <Send :size="18" />
            {{ estado === 'enviando' ? 'Enviando…' : 'Empezar prueba gratis' }}
          </button>
          <p class="contact__note">Sin compromiso. No compartimos tus datos.</p>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact {
  background: var(--paper-2);
}
.contact__grid {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: clamp(36px, 6vw, 80px);
  align-items: center;
}
.contact__lead {
  font-size: var(--fs-lead);
  color: var(--text-muted);
  line-height: 1.6;
  margin-top: 4px;
}
.contact__channels {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 30px;
}
.contact__channels li {
  display: flex;
  align-items: center;
  gap: 13px;
  font-weight: 500;
}
.contact__ic {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 12px;
  background: var(--green-soft);
  color: var(--green-deep);
}
.contact__channels a:hover {
  color: var(--green-deep);
}

/* Formulario */
.contact__form-wrap {
  background: var(--paper);
  border: 1px solid var(--border);
  border-radius: var(--r-xl);
  padding: clamp(26px, 4vw, 40px);
  box-shadow: var(--shadow-md);
}
.contact__form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.field-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}
.field {
  display: flex;
  flex-direction: column;
  gap: 7px;
}
.field > span {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-muted);
}
.field input,
.field select,
.field textarea {
  font-family: inherit;
  font-size: 1rem;
  color: var(--text-ink);
  background: var(--paper-2);
  border: 1px solid var(--border);
  border-radius: var(--r-sm);
  padding: 12px 14px;
  transition: border-color 0.2s, box-shadow 0.2s;
  width: 100%;
  resize: vertical;
}
.field input:focus,
.field select:focus,
.field textarea:focus {
  outline: none;
  border-color: var(--green);
  box-shadow: 0 0 0 3px var(--green-soft);
}
.contact__submit {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  margin-top: 4px;
  padding: 15px;
  border-radius: var(--r-full);
  background: linear-gradient(120deg, var(--green-deep), var(--green) 55%, var(--green-2));
  color: #fff;
  font-weight: 700;
  font-size: 1.02rem;
  box-shadow: var(--shadow-green);
  transition: transform 0.25s var(--ease), box-shadow 0.25s var(--ease);
}
.contact__submit:hover:not(:disabled) {
  transform: translateY(-2px);
}
.contact__submit:disabled {
  opacity: 0.7;
  cursor: wait;
}
.contact__note {
  text-align: center;
  font-size: 0.82rem;
  color: var(--text-soft);
}
.contact__err {
  font-size: 0.88rem;
  color: #d1495b;
  background: #fdecee;
  padding: 10px 14px;
  border-radius: var(--r-sm);
}

/* Éxito */
.contact__ok {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 10px;
  padding: 20px 0;
}
.contact__ok-ic {
  color: var(--green);
}
.contact__ok h3 {
  font-size: 1.5rem;
}
.contact__ok p {
  color: var(--text-muted);
}
.contact__reset {
  margin-top: 10px;
  color: var(--green-deep);
  font-weight: 700;
}

@media (max-width: 860px) {
  .contact__grid {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 480px) {
  .field-grid {
    grid-template-columns: 1fr;
  }
}
</style>
