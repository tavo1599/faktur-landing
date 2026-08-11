<script setup lang="ts">
import { FileSpreadsheet } from 'lucide-vue-next'
import BrowserFrame from './BrowserFrame.vue'

const area = [30, 45, 38, 60, 52, 72, 66, 84]
const filas = [
  { c: 'Ventas', v: 'S/ 28,450', d: '+18%' },
  { c: 'Compras', v: 'S/ 12,180', d: '+6%' },
  { c: 'IGV por pagar', v: 'S/ 2,930', d: '' },
]
// puntos para la polilínea del área (0..100 en X, valor invertido en Y)
const pts = area
  .map((v, i) => `${(i / (area.length - 1)) * 100},${100 - v}`)
  .join(' ')
</script>

<template>
  <BrowserFrame url="app.faktur.pe/reportes">
    <div class="rep">
      <div class="rep__head">
        <div>
          <div class="rep__title">Reporte de ventas</div>
          <div class="rep__range">01 – 31 de julio</div>
        </div>
        <span class="rep__excel"><FileSpreadsheet :size="14" /> Exportar Excel</span>
      </div>

      <div class="rep__chart">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" class="rep__svg">
          <defs>
            <linearGradient id="repFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="var(--green)" stop-opacity="0.35" />
              <stop offset="100%" stop-color="var(--green)" stop-opacity="0" />
            </linearGradient>
          </defs>
          <polygon :points="`0,100 ${pts} 100,100`" fill="url(#repFill)" />
          <polyline
            :points="pts"
            fill="none"
            stroke="var(--green)"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            vector-effect="non-scaling-stroke"
          />
        </svg>
      </div>

      <table class="rep__table">
        <tbody>
          <tr v-for="f in filas" :key="f.c">
            <td class="rep__cat"><span class="rep__dot"></span>{{ f.c }}</td>
            <td class="rep__val">{{ f.v }}</td>
            <td class="rep__delta">{{ f.d }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </BrowserFrame>
</template>

<style scoped>
.rep {
  font-family: var(--font-body);
}
.rep__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
}
.rep__title {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.02rem;
  color: var(--text-ink);
}
.rep__range {
  font-size: 0.74rem;
  color: var(--text-soft);
}
.rep__excel {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 7px 12px;
  background: var(--green-soft);
  color: var(--green-deep);
  font-size: 0.74rem;
  font-weight: 700;
  border-radius: var(--r-full);
}
.rep__chart {
  height: 110px;
  padding: 6px;
  background: var(--paper-2);
  border: 1px solid var(--border);
  border-radius: 12px;
  margin-bottom: 14px;
}
.rep__svg {
  width: 100%;
  height: 100%;
}
.rep__table {
  width: 100%;
  border-collapse: collapse;
}
.rep__table td {
  padding: 10px 4px;
  border-top: 1px solid var(--border);
  font-size: 0.8rem;
}
.rep__cat {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--text-ink);
  font-weight: 600;
}
.rep__dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--green);
}
.rep__val {
  text-align: right;
  font-weight: 700;
  color: var(--text-ink);
}
.rep__delta {
  text-align: right;
  width: 48px;
  color: var(--green);
  font-weight: 700;
  font-size: 0.72rem;
}
</style>
