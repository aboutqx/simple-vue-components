import Vue from 'vue'
import Vuex from 'vuex'
import material from './modules/material'
import community from './modules/community'
import content from './modules/content'
import banner from './modules/banner'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    material,
    community,
    content,
    banner
  }
})
