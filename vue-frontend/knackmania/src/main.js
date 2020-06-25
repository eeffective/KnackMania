import Vue from "vue";
import App from "./App.vue";
import "@/assets/css/tailwind.css";
import router from "../src/router/router";
import Notifications from "vue-notification";
import vuetify from "./plugins/vuetify";
import store from './store'
import './registerServiceWorker'

Vue.use(Notifications);
Vue.config.productionTip = false;

new Vue({
  store,
  router: router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
