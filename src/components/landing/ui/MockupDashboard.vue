<script setup lang="ts">
import BrowserFrame from './BrowserFrame.vue'

const barras = [42, 58, 47, 70, 63, 88, 76]
const dias = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
const kpis = [
  { label: 'Ventas hoy', valor: 'S/ 4,820', delta: '+18%' },
  { label: 'Comprobantes', valor: '128', delta: '+9%' },
  { label: 'Ticket prom.', valor: 'S/ 37.6', delta: '+4%' },
]
const productos = [
  { n: 'Café molido 250g', v: 'S/ 1,240' },
  { n: 'Azúcar rubia 1kg', v: 'S/ 980' },
  { n: 'Aceite vegetal 1L', v: 'S/ 760' },
]
</script>

<template>
  <BrowserFrame>
    <div class="dash">
      <div class="dash__top">
        <div>
          <div class="dash__title">Panel de control</div>
          <div class="dash__sub">Resumen de hoy</div>
        </div>
        <span class="dash__pill">● En vivo</span>
      </div>

      <div class="dash__kpis">
        <div v-for="k in kpis" :key="k.label" class="kpi">
          <span class="kpi__label">{{ k.label }}</span>
          <span class="kpi__valor">{{ k.valor }}</span>
          <span class="kpi__delta">{{ k.delta }}</span>
        </div>
      </div>

      <div class="dash__grid">
        <div class="card card--chart">
          <div class="card__head">
            <span>Ventas de la semana</span>
            <span class="card__tag">S/ 28.4k</span>
          </div>
          <div class="chart">
            <div v-for="(b, i) in barras" :key="i" class="chart__col">
              <div class="chart__bar" :style="{ height: b + '%' }"></div>
              <span class="chart__day">{{ dias[i] }}</span>
            </div>
          </div>
        </div>

        <div class="card card--list">
          <div class="card__head"><span>Top productos</span></div>
          <ul class="plist">
            <li v-for="p in productos" :key="p.n" class="plist__row">
              <span class="plist__dot"></span>
              <span class="plist__name">{{ p.n }}</span>
              <span class="plist__val">{{ p.v }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </BrowserFrame>
</template>

<style scoped>
.dash {
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-family: var(--font-body);
}
.dash__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.dash__title {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.05rem;
  color: var(--text-ink);
}
.dash__sub {
  font-size: 0.78rem;
  color: var(--text-soft);
}
.dash__pill {
  font-size: 0.72rem;
  font-weight: 600;
  color: var(--green-deep);
  background: var(--green-soft);
  padding: 5px 11px;
  border-radius: var(--r-full);
}

.dash__kpis {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}
.kpi {
  display: flex;
  flex-direction: column;
  gap: 3px;
  padding: 12px;
  background: var(--paper-2);
  border: 1px solid var(--border);
  border-radius: 12px;
}
.kpi__label {
  font-size: 0.68rem;
  color: var(--text-soft);
}
.kpi__valor {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.02rem;
  color: var(--text-ink);
}
.kpi__delta {
  font-size: 0.68rem;
  font-weight: 700;
  color: var(--green);
}

.dash__grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 10px;
}
.card {
  padding: 14px;
  background: var(--paper-2);
  border: 1px solid var(--border);
  border-radius: 14px;
}
.card__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.76rem;
  font-weight: 600;
  color: var(--text-muted);
  margin-bottom: 12px;
}
.card__tag {
  color: var(--green-deep);
  background: var(--green-soft);
  padding: 2px 8px;
  border-radius: var(--r-full);
  font-size: 0.68rem;
}

.chart {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 6px;
  height: 96px;
}
.chart__col {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  height: 100%;
  justify-content: flex-end;
}
.chart__bar {
  width: 100%;
  max-width: 16px;
  border-radius: 5px 5px 3px 3px;
  background: linear-gradient(180deg, var(--green-2), var(--green));
}
.chart__col:last-child .chart__bar {
  background: linear-gradient(180deg, var(--green-bright), var(--green-2));
}
.chart__day {
  font-size: 0.62rem;
  color: var(--text-soft);
}

.plist {
  display: flex;
  flex-direction: column;
  gap: 11px;
}
.plist__row {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.76rem;
}
.plist__dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--green);
  flex-shrink: 0;
}
.plist__name {
  color: var(--text-ink);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.plist__val {
  margin-left: auto;
  font-weight: 700;
  color: var(--text-muted);
}
</style>
