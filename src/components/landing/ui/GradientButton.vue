<script setup lang="ts">
withDefaults(
  defineProps<{
    href?: string
    variant?: 'primary' | 'outline' | 'white'
    size?: 'md' | 'lg'
    onDark?: boolean
  }>(),
  { variant: 'primary', size: 'md', onDark: false },
)
</script>

<template>
  <component
    :is="href ? 'a' : 'button'"
    :href="href"
    class="btn"
    :class="[`btn--${variant}`, `btn--${size}`, { 'btn--on-dark': onDark }]"
  >
    <span class="btn__label"><slot /></span>
  </component>
</template>

<style scoped>
.btn {
  --btn-py: 13px;
  --btn-px: 24px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  padding: var(--btn-py) var(--btn-px);
  border-radius: var(--r-full);
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 1rem;
  line-height: 1;
  white-space: nowrap;
  transition: transform 0.25s var(--ease), box-shadow 0.25s var(--ease),
    background 0.25s var(--ease), color 0.25s var(--ease), border-color 0.25s var(--ease);
}
.btn--lg {
  --btn-py: 17px;
  --btn-px: 32px;
  font-size: 1.0625rem;
}

/* Primario: degradado verde con glow */
.btn--primary {
  background: linear-gradient(120deg, var(--green-deep), var(--green) 55%, var(--green-2));
  color: #fff;
  box-shadow: var(--shadow-green);
}
.btn--primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 22px 50px -12px var(--green-glow);
}

/* Contorno */
.btn--outline {
  background: transparent;
  color: var(--text-ink);
  box-shadow: inset 0 0 0 1.5px var(--border-strong);
}
.btn--outline:hover {
  box-shadow: inset 0 0 0 1.5px var(--green);
  color: var(--green-deep);
  transform: translateY(-2px);
}
.btn--outline.btn--on-dark {
  color: var(--text-on-dark);
  box-shadow: inset 0 0 0 1.5px var(--border-dark);
}
.btn--outline.btn--on-dark:hover {
  box-shadow: inset 0 0 0 1.5px var(--green-bright);
  color: #fff;
}

/* Blanco (para fondos oscuros) */
.btn--white {
  background: #fff;
  color: var(--navy-900);
  box-shadow: var(--shadow-md);
}
.btn--white:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.btn:active {
  transform: translateY(0);
}
</style>
