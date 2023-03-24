import Vue from 'vue'
import VueRouter from 'vue-router'

import HelloLayout from '@/layouts/HelloLayout'
import HomeView from '@/views/HomeView'
import i18nView from '@/views/i18nView'
import DatetimeView from '@/views/DatetimeView'
import l10nView from '@/views/l10nView'
import AssetLazyLoadingView from '@/views/AssetLazyLoadingView'
import ParallaxScrollView from '@/views/ParallaxScrollView'
import VueTransitionView from '@/views/VueTransitionView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: HelloLayout,
    redirect: { name: 'home' },
    children: [
      { path: 'home', component: HomeView, name: 'home' },
      { path: 'i18n', component: i18nView, name: 'i18n' },
      { path: 'datetime', component: DatetimeView, name: 'datetime' },
      { path: 'l10n', component: l10nView, name: 'l10n' },
      {
        path: 'asset-lazy-loading',
        component: AssetLazyLoadingView,
        name: 'asset-lazy-loading',
      },
      {
        path: 'parallax-scroll',
        component: ParallaxScrollView,
        name: 'parallax-scroll',
      },
      {
        path: 'vue-transition',
        component: VueTransitionView,
        name: 'vue-transition',
      },
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
