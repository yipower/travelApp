// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = false
// js
import FastClick from 'fastclick'
FastClick.attach(document.body);
/* eslint-disable no-new */

// css
import './assets/css/reset.css'
import './assets/css/iconfont.css'
import './assets/font_2425271_pk5z35ojxqc/iconfont.css'

// swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
// import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper)

import axios from 'axios'
Vue.prototype.$http = axios



// vuex
import store from './store'

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
