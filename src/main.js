import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'font-awesome/css/font-awesome.min.css'

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
Vue.prototype.$ = $;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
