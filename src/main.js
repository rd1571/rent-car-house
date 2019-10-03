import Vue from 'vue'
import App from './App.vue'
// import VueRouter from 'vue-router';
import router from './router'
import store from './store'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import * as firebase from 'firebase'

const config = {
  apiKey: "AIzaSyAJzzx81okMfuTmjE6szTA3ndyUO_o_YM8",
  authDomain: "rent-car-house.firebaseapp.com",
  databaseURL: "https://rent-car-house.firebaseio.com",
  projectId: "rent-car-house",
  storageBucket: "rent-car-house.appspot.com",
  messagingSenderId: "893415156698",
  appId: "1:893415156698:web:07d3f7c440fb98668ceee3"
}

firebase.initializeApp(config);

// Vue.use(VueRouter);
// const router = new VueRouter({routes});

Vue.use(Buefy)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  firebase: firebase,
  render: h => h(App)
}).$mount('#app')
