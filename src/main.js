/* eslint-disable */
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'


Vue.config.productionTip = false

var configuration = {
  apiKey: "AIzaSyB8QskB2aAvzF90q68EkPRCtT8ay30NMtY",
  authDomain: "papaly-never-die.firebaseapp.com",
  databaseURL: "https://papaly-never-die.firebaseio.com",
  projectId: "papaly-never-die",
  storageBucket: "papaly-never-die.appspot.com",
  messagingSenderId: "496040267197"
};
firebase.initializeApp(configuration);

let app;
firebase.auth().onAuthStateChanged(user => {
  if(!app){
    app = new Vue({
      render: h => h(App),
      router
    }).$mount('#app')
  }
})



