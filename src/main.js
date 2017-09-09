// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';

import App from './App';
import store from './store';
import router from './router';

require('spectre.css');

Vue.config.productionTip = false;
Vue.config.devtools = true; // allow devtools in production

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  store,
});
