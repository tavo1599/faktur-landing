<script setup lang="ts">
import { site } from './data/site'
</script>

<template>
  <a
    :href="site.contacto.whatsapp"
    class="wa"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Escríbenos por WhatsApp"
  >
    <span class="wa__pulse" aria-hidden="true"></span>
    <span class="wa__label">¿Hablamos?</span>
    <svg class="wa__icon" viewBox="0 0 32 32" aria-hidden="true">
      <path
        fill="currentColor"
        d="M16 .5C7.4.5.4 7.5.4 16.1c0 2.8.7 5.5 2.1 7.9L.3 31.7l7.9-2.1c2.3 1.3 4.9 1.9 7.6 1.9h.1c8.6 0 15.6-7 15.6-15.6C31.6 7.5 24.6.5 16 .5zm0 28.5h-.1c-2.4 0-4.8-.7-6.9-1.9l-.5-.3-4.7 1.2 1.3-4.6-.3-.5c-1.4-2.2-2.1-4.7-2.1-7.3C2.7 8.8 8.7 2.8 16 2.8c3.6 0 6.9 1.4 9.4 3.9 2.5 2.5 3.9 5.8 3.9 9.4 0 7.3-6 13.3-13.3 13.3zm7.3-9.9c-.4-.2-2.4-1.2-2.7-1.3-.4-.1-.6-.2-.9.2-.3.4-1 1.3-1.2 1.5-.2.2-.4.3-.8.1-.4-.2-1.7-.6-3.2-2-1.2-1.1-2-2.4-2.2-2.8-.2-.4 0-.6.2-.8.2-.2.4-.4.5-.6.2-.2.2-.4.4-.6.1-.2.1-.5 0-.7-.1-.2-.9-2.2-1.3-3-.3-.8-.7-.7-.9-.7h-.8c-.3 0-.7.1-1 .5-.4.4-1.3 1.3-1.3 3.2s1.4 3.7 1.5 3.9c.2.2 2.7 4.1 6.5 5.8.9.4 1.6.6 2.2.8.9.3 1.7.2 2.4.1.7-.1 2.4-1 2.7-1.9.3-.9.3-1.8.2-1.9-.1-.2-.3-.3-.7-.5z"
      />
    </svg>
  </a>
</template>

<style scoped>
.wa {
  position: fixed;
  right: clamp(16px, 3vw, 28px);
  bottom: clamp(16px, 3vw, 28px);
  z-index: 90;
  display: inline-flex;
  align-items: center;
  gap: 0;
  height: 58px;
  padding: 0;
  background: #25d366;
  color: #fff;
  border-radius: var(--r-full);
  box-shadow: 0 12px 30px -6px rgba(37, 211, 102, 0.55);
  overflow: hidden;
  transition: transform 0.28s var(--ease), box-shadow 0.28s var(--ease), padding 0.3s var(--ease);
}
.wa:hover {
  transform: translateY(-3px);
  box-shadow: 0 18px 40px -8px rgba(37, 211, 102, 0.65);
}

.wa__icon {
  flex-shrink: 0;
  width: 30px;
  height: 30px;
  margin: 0 14px;
}

/* Etiqueta que se despliega al pasar el mouse (solo en pantallas con hover) */
.wa__label {
  max-width: 0;
  white-space: nowrap;
  font-weight: 700;
  font-size: 0.95rem;
  opacity: 0;
  transition: max-width 0.32s var(--ease), opacity 0.25s var(--ease), margin 0.32s var(--ease);
}
@media (hover: hover) {
  .wa:hover .wa__label {
    max-width: 140px;
    opacity: 1;
    margin-left: 16px;
    margin-right: -4px;
  }
}

/* Anillo pulsante */
.wa__pulse {
  position: absolute;
  inset: 0;
  border-radius: inherit;
  box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.6);
  animation: wa-pulse 2.4s var(--ease) infinite;
  pointer-events: none;
}
@keyframes wa-pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.5);
  }
  70% {
    box-shadow: 0 0 0 16px rgba(37, 211, 102, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .wa__pulse {
    animation: none;
  }
}
</style>
