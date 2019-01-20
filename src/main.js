import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/iview.js'
import './plugins/components.js'
import './styles/index.less'

import 'swiper/dist/css/swiper.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import iviewArea from 'iview-area'

Vue.config.productionTip = false

Vue.use(VueAwesomeSwiper /* { default global options } */)
Vue.use(iviewArea)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
