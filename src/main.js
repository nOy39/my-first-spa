import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import * as fb from 'firebase'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    // Initialize Firebase
    fb.initializeApp({
      apiKey: 'AIzaSyC3JhNE3-hp0VttDlzYhV2QI5aSg5msNj4',
      authDomain: 'a2lpo-ads-project.firebaseapp.com',
      databaseURL: 'https://a2lpo-ads-project.firebaseio.com',
      projectId: 'a2lpo-ads-project',
      storageBucket: 'a2lpo-ads-project.appspot.com',
      messagingSenderId: '118020832120'
    })
  }
})
