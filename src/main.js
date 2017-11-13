import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from "vuex";
import * as validate from 'validate.js';
import configValidate from './validate-config'
import Picnic from 'picnic'
import VueSweetalert2 from 'vue-sweetalert2';

Vue.use(Vuex);
Vue.use(VueSweetalert2);

import getStore from "./store/index";

const store = getStore();

configValidate(validate);
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  alert,
  template: '<App/>',
  components: { App }
})
