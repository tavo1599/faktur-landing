<script setup lang="ts">
withDefaults(defineProps<{ url?: string }>(), { url: 'app.faktur.pe' })
</script>

<template>
  <div class="frame" aria-hidden="true">
    <div class="frame__bar">
      <span class="frame__dots">
        <i></i><i></i><i></i>
      </span>
      <span class="frame__url">
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
          <path
            d="M6 10V8a6 6 0 1 1 12 0v2m-9 0h6a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3v-4a3 3 0 0 1 3-3Z"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
        {{ url }}
      </span>
    </div>
    <div class="frame__body">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.frame {
  background: var(--paper);
  border-radius: 18px;
  overflow: hidden;
  box-shadow: var(--shadow-lg);
  border: 1px solid rgba(255, 255, 255, 0.12);
}
.frame__bar {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 0 16px;
  height: 44px;
  background: var(--paper-2);
  border-bottom: 1px solid var(--border);
}
.frame__dots {
  display: inline-flex;
  gap: 7px;
}
.frame__dots i {
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: #d8dee2;
}
.frame__dots i:nth-child(1) {
  background: #ff5f57;
}
.frame__dots i:nth-child(2) {
  background: #febc2e;
}
.frame__dots i:nth-child(3) {
  background: #28c840;
}
.frame__url {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 5px 14px;
  margin-inline: auto;
  background: var(--paper);
  border: 1px solid var(--border);
  border-radius: var(--r-full);
  font-size: 0.78rem;
  color: var(--text-soft);
}
.frame__body {
  padding: 20px;
}
</style>
