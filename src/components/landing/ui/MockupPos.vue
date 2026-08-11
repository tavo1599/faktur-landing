<script setup lang="ts">
import { ScanBarcode, Smartphone, Banknote } from 'lucide-vue-next'
import BrowserFrame from './BrowserFrame.vue'

const productos = ['Café 250g', 'Azúcar 1kg', 'Aceite 1L', 'Arroz 5kg', 'Leche 400g', 'Fideos 500g']
const ticket = [
  { n: 'Café 250g', c: 2, v: '19.80' },
  { n: 'Arroz 5kg', c: 1, v: '24.50' },
  { n: 'Leche 400g', c: 3, v: '11.70' },
]
</script>

<template>
  <BrowserFrame url="app.faktur.pe/pos">
    <div class="pos">
      <div class="pos__left">
        <div class="pos__scan">
          <ScanBarcode :size="16" />
          <span>Escanea o busca un producto…</span>
        </div>
        <div class="pos__grid">
          <div v-for="p in productos" :key="p" class="tile">
            <span class="tile__img"></span>
            <span class="tile__name">{{ p }}</span>
          </div>
        </div>
      </div>

      <div class="pos__ticket">
        <div class="pos__ticket-head">Ticket actual</div>
        <ul class="pos__items">
          <li v-for="t in ticket" :key="t.n">
            <span class="pos__q">{{ t.c }}×</span>
            <span class="pos__n">{{ t.n }}</span>
            <span class="pos__v">{{ t.v }}</span>
          </li>
        </ul>
        <div class="pos__total">
          <span>Total</span>
          <strong>S/ 56.00</strong>
        </div>
        <button class="pos__cobrar">Cobrar S/ 56.00</button>
        <div class="pos__pays">
          <span class="pay"><Smartphone :size="13" /> Yape</span>
          <span class="pay"><Smartphone :size="13" /> Plin</span>
          <span class="pay"><Banknote :size="13" /> Efectivo</span>
        </div>
      </div>
    </div>
  </BrowserFrame>
</template>

<style scoped>
.pos {
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: 12px;
  font-family: var(--font-body);
}
.pos__scan {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 12px;
  background: var(--paper-2);
  border: 1px solid var(--border);
  border-radius: 10px;
  font-size: 0.76rem;
  color: var(--text-soft);
  margin-bottom: 12px;
}
.pos__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 9px;
}
.tile {
  display: flex;
  flex-direction: column;
  gap: 7px;
  padding: 10px;
  background: var(--paper-2);
  border: 1px solid var(--border);
  border-radius: 11px;
}
.tile__img {
  height: 34px;
  border-radius: 8px;
  background: linear-gradient(135deg, var(--green-soft), #eef4f1);
}
.tile__name {
  font-size: 0.68rem;
  font-weight: 600;
  color: var(--text-muted);
}

.pos__ticket {
  display: flex;
  flex-direction: column;
  padding: 14px;
  background: var(--paper-2);
  border: 1px solid var(--border);
  border-radius: 14px;
}
.pos__ticket-head {
  font-size: 0.74rem;
  font-weight: 700;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin-bottom: 10px;
}
.pos__items {
  display: flex;
  flex-direction: column;
  gap: 9px;
  padding-bottom: 12px;
  border-bottom: 1px dashed var(--border-strong);
}
.pos__items li {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.78rem;
}
.pos__q {
  color: var(--green-deep);
  font-weight: 700;
}
.pos__n {
  color: var(--text-ink);
}
.pos__v {
  margin-left: auto;
  font-weight: 600;
  color: var(--text-muted);
}
.pos__total {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-block: 12px;
  font-size: 0.82rem;
  color: var(--text-muted);
}
.pos__total strong {
  font-family: var(--font-display);
  font-size: 1.3rem;
  color: var(--text-ink);
}
.pos__cobrar {
  padding: 12px;
  border-radius: 11px;
  background: linear-gradient(120deg, var(--green-deep), var(--green-2));
  color: #fff;
  font-weight: 700;
  font-size: 0.9rem;
  box-shadow: var(--shadow-green);
}
.pos__pays {
  display: flex;
  gap: 6px;
  margin-top: 10px;
}
.pay {
  flex: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 7px 4px;
  background: var(--paper);
  border: 1px solid var(--border);
  border-radius: 8px;
  font-size: 0.66rem;
  font-weight: 600;
  color: var(--text-muted);
}

@media (max-width: 420px) {
  .pos {
    grid-template-columns: 1fr;
  }
}
</style>
