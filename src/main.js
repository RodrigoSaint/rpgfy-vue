import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from "vuex";
import * as validate from 'validate.js';
import configValidate from './validate-config'
import Picnic from 'picnic'

Vue.use(Vuex);
import getStore from "./store/index";

const store = getStore();

configValidate(validate);
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
