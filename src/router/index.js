import Vue from 'vue'
import VueRouter from 'vue-router'

import HelloLayout from '@/layouts/HelloLayout'
import HomeView from '@/views/HomeView'
import i18nView from '@/views/i18nView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: HelloLayout,
    redirect: { name: 'home' },
    children: [
      { path: 'home', component: HomeView, name: 'home' },
      { path: 'i18n', component: i18nView, name: 'i18n' },
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
