// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
// eslint-disable-next-line import/extensions
import 'ress';
import axios from 'axios';
import moment from 'moment';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import App from './App';
import router from './router';

// Bootstrap
Vue.use(BootstrapVue);

Vue.config.productionTip = false;

Vue.prototype.$axios = axios;

Vue.filter('moment', date => moment(date.substr(0, 19)).format('M月D日 HH:mm'));

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
