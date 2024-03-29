import Vue from 'vue'
import App from './App.vue'
import router from './router'

import i18n from '@/plugins/i18n'
import '@/plugins/vue-cookies'
import '@/plugins/vue-lazyload'
import '@/plugins/vue-observe-visibility'

Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  render: (h) => h(App),
}).$mount('#app')
