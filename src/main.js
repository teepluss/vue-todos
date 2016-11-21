import Vue from 'vue'
import App from './App'
import store from './store'
import ElementUI from 'element-ui'

// Css using bullma framework
import 'bulma/bulma.sass'
import 'element-ui/lib/theme-default/index.css'
import 'font-awesome/css/font-awesome.css'

Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: { App }
})
