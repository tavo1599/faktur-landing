// Anima la aparición de los elementos con [data-reveal] al entrar en viewport.
// Se llama una vez tras montar la app. Si un elemento trae un valor numérico
// (data-reveal="120") se usa como retardo en ms para escalonar la animación.
export function initReveal(): void {
  const els = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))

  for (const el of els) {
    const v = el.getAttribute('data-reveal')
    if (v && !Number.isNaN(Number(v))) {
      el.style.setProperty('--reveal-delay', `${Number(v)}ms`)
    }
  }

  // Sin soporte de IntersectionObserver: mostrar todo de una.
  if (!('IntersectionObserver' in window)) {
    els.forEach((el) => el.classList.add('is-visible'))
    return
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      }
    },
    { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
  )

  els.forEach((el) => observer.observe(el))
}
