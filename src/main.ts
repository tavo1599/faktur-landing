import { createApp } from 'vue'
import './styles/tokens.css'
import './styles/base.css'
import router from './router'
import App from './App.vue'

// Marca que hay JS activo: la animación de aparición solo se aplica en ese caso,
// así el contenido nunca queda oculto si el JS falla o está deshabilitado.
document.documentElement.classList.add('js')

createApp(App).use(router).mount('#app')
