/* eslint-disable */
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

let app;
firebase.auth().onAuthStateChanged(user => {
  if(!app){
    app = new Vue({
      render: h => h(App),
      router
    }).$mount('#app')
  }
})



