<script setup lang="ts">
import { ref, reactive } from 'vue'
import { CheckCircle2, ShieldCheck } from 'lucide-vue-next'
import { site } from '../components/landing/data/site'
import LegalShell from '../components/landing/ui/LegalShell.vue'

type Estado = 'idle' | 'enviando' | 'ok' | 'error'
const estado = ref<Estado>('idle')
const codigo = ref('')

const form = reactive({
  // Consumidor
  nombre: '',
  tipoDoc: 'DNI',
  numDoc: '',
  domicilio: '',
  telefono: '',
  email: '',
  esMenor: false,
  apoderado: '',
  // Bien contratado
  tipoBien: 'servicio',
  monto: '',
  descripcionBien: '',
  // Detalle
  tipo: 'reclamo',
  detalle: '',
  pedido: '',
  // Consentimiento
  acepto: false,
})

function valido(): boolean {
  return (
    form.nombre.trim().length > 1 &&
    form.numDoc.trim().length >= 6 &&
    form.domicilio.trim().length > 3 &&
    /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email) &&
    form.telefono.trim().length >= 6 &&
    form.descripcionBien.trim().length > 3 &&
    form.detalle.trim().length > 3 &&
    form.pedido.trim().length > 3 &&
    form.acepto
  )
}

function generarCodigo(): string {
  const d = new Date()
  const ymd = `${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, '0')}${String(d.getDate()).padStart(2, '0')}`
  const rand = Math.floor(1000 + Math.random() * 9000)
  return `HR-${ymd}-${rand}`
}

function cuerpoTexto(): string {
  return [
    `HOJA DE RECLAMACIÓN ${codigo.value}`,
    `Fecha: ${new Date().toLocaleString('es-PE')}`,
    '',
    '— CONSUMIDOR —',
    `Nombre: ${form.nombre}`,
    `Documento: ${form.tipoDoc} ${form.numDoc}`,
    `Domicilio: ${form.domicilio}`,
    `Teléfono: ${form.telefono}`,
    `Email: ${form.email}`,
    form.esMenor ? `Apoderado (menor de edad): ${form.apoderado}` : '',
    '',
    '— BIEN CONTRATADO —',
    `Tipo: ${form.tipoBien}`,
    form.monto ? `Monto reclamado: S/ ${form.monto}` : '',
    `Descripción: ${form.descripcionBien}`,
    '',
    '— DETALLE —',
    `Tipo: ${form.tipo === 'reclamo' ? 'Reclamo' : 'Queja'}`,
    `Detalle: ${form.detalle}`,
    `Pedido del consumidor: ${form.pedido}`,
  ]
    .filter(Boolean)
    .join('\n')
}

async function enviar() {
  if (!valido()) {
    estado.value = 'error'
    return
  }
  estado.value = 'enviando'
  codigo.value = generarCodigo()

  if (site.contacto.libroEndpoint) {
    try {
      const res = await fetch(site.contacto.libroEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ origen: 'libro-reclamaciones', codigo: codigo.value, ...form }),
      })
      if (!res.ok) throw new Error('bad status')
      estado.value = 'ok'
    } catch {
      estado.value = 'error'
    }
    return
  }

  // Fallback: abre el cliente de correo con la hoja pre-rellenada (deja registro).
  const asunto = `Libro de Reclamaciones ${codigo.value}`
  window.location.href = `mailto:${site.contacto.email}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpoTexto())}`
  estado.value = 'ok'
}
</script>

<template>
  <LegalShell
    titulo="Libro de Reclamaciones"
    subtitulo="Conforme al Código de Protección y Defensa del Consumidor (Ley N.° 29571)."
  >
    <!-- Éxito -->
    <div v-if="estado === 'ok'" class="lr-ok">
      <span class="lr-ok__ic"><CheckCircle2 :size="40" /></span>
      <h2>Reclamo registrado</h2>
      <p>
        Tu hoja de reclamación <strong>{{ codigo }}</strong> fue registrada. Recibirás una
        respuesta en un plazo no mayor a <strong>quince (15) días hábiles</strong>, conforme a ley.
      </p>
      <RouterLink to="/" class="lr-ok__link">Volver al inicio</RouterLink>
    </div>

    <form v-else class="lr" @submit.prevent="enviar">
      <p class="lr-intro">
        Completa esta hoja para registrar un <strong>reclamo</strong> (disconformidad con el
        producto o servicio) o una <strong>queja</strong> (malestar respecto a la atención).
        Los campos con * son obligatorios.
      </p>

      <!-- Consumidor -->
      <fieldset class="lr-block">
        <legend>1. Identificación del consumidor</legend>
        <div class="lr-grid">
          <label class="field"><span>Nombre completo *</span><input v-model="form.nombre" type="text" /></label>
          <div class="lr-doc">
            <label class="field field--doc">
              <span>Documento *</span>
              <select v-model="form.tipoDoc">
                <option value="DNI">DNI</option>
                <option value="CE">C. Extranjería</option>
                <option value="Pasaporte">Pasaporte</option>
                <option value="RUC">RUC</option>
              </select>
            </label>
            <label class="field field--num"><span>Número *</span><input v-model="form.numDoc" type="text" /></label>
          </div>
        </div>
        <label class="field"><span>Domicilio *</span><input v-model="form.domicilio" type="text" /></label>
        <div class="lr-grid">
          <label class="field"><span>Teléfono *</span><input v-model="form.telefono" type="tel" /></label>
          <label class="field"><span>Email *</span><input v-model="form.email" type="email" /></label>
        </div>
        <label class="lr-check">
          <input v-model="form.esMenor" type="checkbox" />
          <span>El consumidor es menor de edad</span>
        </label>
        <label v-if="form.esMenor" class="field"><span>Nombre del padre / madre / apoderado</span><input v-model="form.apoderado" type="text" /></label>
      </fieldset>

      <!-- Bien contratado -->
      <fieldset class="lr-block">
        <legend>2. Identificación del bien contratado</legend>
        <div class="lr-grid">
          <label class="field">
            <span>Tipo *</span>
            <select v-model="form.tipoBien">
              <option value="producto">Producto</option>
              <option value="servicio">Servicio</option>
            </select>
          </label>
          <label class="field"><span>Monto reclamado (S/)</span><input v-model="form.monto" type="number" step="0.01" placeholder="(opcional)" /></label>
        </div>
        <label class="field"><span>Descripción del bien / servicio *</span><textarea v-model="form.descripcionBien" rows="2"></textarea></label>
      </fieldset>

      <!-- Detalle -->
      <fieldset class="lr-block">
        <legend>3. Detalle de la reclamación</legend>
        <div class="lr-radios">
          <label class="lr-radio" :class="{ 'lr-radio--on': form.tipo === 'reclamo' }">
            <input v-model="form.tipo" type="radio" value="reclamo" />
            <strong>Reclamo</strong>
            <small>Disconformidad con el producto o servicio</small>
          </label>
          <label class="lr-radio" :class="{ 'lr-radio--on': form.tipo === 'queja' }">
            <input v-model="form.tipo" type="radio" value="queja" />
            <strong>Queja</strong>
            <small>Malestar respecto a la atención</small>
          </label>
        </div>
        <label class="field"><span>Detalle *</span><textarea v-model="form.detalle" rows="3"></textarea></label>
        <label class="field"><span>Pedido del consumidor *</span><textarea v-model="form.pedido" rows="2"></textarea></label>
      </fieldset>

      <label class="lr-check">
        <input v-model="form.acepto" type="checkbox" />
        <span>Declaro que los datos consignados son verídicos.</span>
      </label>

      <p v-if="estado === 'error'" class="lr-err">
        Faltan campos obligatorios o no aceptaste la declaración. Revisa el formulario.
      </p>

      <button type="submit" class="lr-submit" :disabled="estado === 'enviando'">
        {{ estado === 'enviando' ? 'Enviando…' : 'Enviar hoja de reclamación' }}
      </button>

      <p class="lr-legal">
        <ShieldCheck :size="15" />
        La formulación del reclamo no impide acudir a otras vías de solución de controversias
        ni es requisito previo para denunciar ante el Indecopi.
      </p>
    </form>
  </LegalShell>
</template>

<style scoped>
.lr {
  display: flex;
  flex-direction: column;
  gap: 22px;
}
.lr-intro {
  color: var(--text-muted);
  line-height: 1.7;
}
.lr-block {
  border: 1px solid var(--border);
  border-radius: var(--r-lg);
  padding: 22px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.lr-block legend {
  padding: 0 8px;
  font-family: var(--font-display);
  font-weight: 700;
  color: var(--green-deep);
  font-size: 1rem;
}
.lr-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}
.lr-doc {
  display: flex;
  gap: 10px;
}
.field--doc {
  width: 42%;
}
.field--num {
  flex: 1;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 6px;
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
  padding: 11px 13px;
  width: 100%;
  resize: vertical;
  transition: border-color 0.2s, box-shadow 0.2s;
}
.field input:focus,
.field select:focus,
.field textarea:focus {
  outline: none;
  border-color: var(--green);
  box-shadow: 0 0 0 3px var(--green-soft);
}

.lr-check {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.95rem;
  color: var(--text-muted);
  cursor: pointer;
}
.lr-check input {
  width: 18px;
  height: 18px;
  accent-color: var(--green);
}

.lr-radios {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}
.lr-radio {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 14px 16px;
  border: 1.5px solid var(--border);
  border-radius: var(--r-md);
  cursor: pointer;
  transition: border-color 0.2s, background 0.2s;
}
.lr-radio input {
  display: none;
}
.lr-radio strong {
  font-size: 1rem;
}
.lr-radio small {
  font-size: 0.8rem;
  color: var(--text-soft);
}
.lr-radio--on {
  border-color: var(--green);
  background: var(--green-soft);
}

.lr-submit {
  align-self: flex-start;
  padding: 15px 30px;
  border-radius: var(--r-full);
  background: linear-gradient(120deg, var(--green-deep), var(--green) 55%, var(--green-2));
  color: #fff;
  font-weight: 700;
  font-size: 1.02rem;
  box-shadow: var(--shadow-green);
  transition: transform 0.25s var(--ease);
}
.lr-submit:hover:not(:disabled) {
  transform: translateY(-2px);
}
.lr-submit:disabled {
  opacity: 0.7;
  cursor: wait;
}
.lr-err {
  color: #d1495b;
  background: #fdecee;
  padding: 11px 15px;
  border-radius: var(--r-sm);
  font-size: 0.92rem;
}
.lr-legal {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 0.85rem;
  color: var(--text-soft);
  line-height: 1.6;
}
.lr-legal :deep(svg) {
  flex-shrink: 0;
  margin-top: 2px;
  color: var(--green);
}

/* Éxito */
.lr-ok {
  text-align: center;
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}
.lr-ok__ic {
  color: var(--green);
}
.lr-ok h2 {
  font-size: 1.7rem;
}
.lr-ok p {
  max-width: 460px;
  color: var(--text-muted);
  line-height: 1.7;
}
.lr-ok__link {
  margin-top: 10px;
  font-weight: 700;
  color: var(--green-deep);
}

@media (max-width: 560px) {
  .lr-grid,
  .lr-radios {
    grid-template-columns: 1fr;
  }
}
</style>
