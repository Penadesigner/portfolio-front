import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/habilidades',
    name: 'habilidades',
    component: () => import('../views/HabilidadesView.vue')
  },
  {
    path: '/cargos-anteriores',
    name: 'cargosanteriores',
    component: () => import('../views/CargosView.vue')
  },
  {
    path: '/formacao',
    name: 'formacao',
    component: () => import('../views/FormacaoView.vue')
  },
  {
    path: '/usuarios/novo',
    name: 'novousuario',
    component: () => import('../components/CriaUser.vue')
  },
  {
    path: '/usuarios',
    name: 'usuarios',
    component: () => import('../components/Usuarios.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
