import Vue from 'vue'
import App from './App.vue'
import '@/assets/css/tailwind.css'
import router from '../src/router/router'
import Notifications from 'vue-notification'
import vuetify from './plugins/vuetify';

Vue.use(Notifications)
Vue.config.productionTip = false

new Vue({
  router: router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
