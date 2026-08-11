import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../views/LandingPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: LandingPage },
    {
      path: '/terminos',
      name: 'terminos',
      component: () => import('../views/TerminosPage.vue'),
    },
    {
      path: '/libro-de-reclamaciones',
      name: 'libro',
      component: () => import('../views/LibroReclamacionesPage.vue'),
    },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
  scrollBehavior(to, _from, saved) {
    if (to.hash) return { el: to.hash, top: 88, behavior: 'smooth' }
    if (saved) return saved
    return { top: 0 }
  },
})

export default router
