import './bootstrap'
import Vue from 'vue'
import App from './App'
import store from './store'

// Css using bullma framework
import 'bulma/bulma.sass'
import 'font-awesome/css/font-awesome.css'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: { App }
})
