// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueSocketio from 'vue-socket.io';
import Buefy from 'buefy';
import 'buefy/lib/buefy.css';

import App from './App';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.use(Buefy);
Vue.use(VueSocketio, process.env.API_URL.substring(0, process.env.API_URL.length - 4));

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
