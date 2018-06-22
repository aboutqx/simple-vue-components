// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css'
import * as ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false
Vue.use(ElementUI, { size: 'small' })
import Component from 'vue-class-component'
Component.registerHooks([
  'beforeRouteEnter',
  'beforeRouteLeave',
  'beforeRouteUpdate' // for vue-router 2.2+
])

/* eslint-disable no-new */
const init = new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
