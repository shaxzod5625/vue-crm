import Vue from 'vue'
import Vuelidate from 'vuelidate'
import Paginate from 'vuejs-paginate'
import VueMeta from 'vue-meta'
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from './filters/date.filter'
import currencyFilter from './filters/currency.filter'
import localizeFilter from './filters/locolize.filter'
import tooltipDirective from './directives/tooltip.directive'
import messagePlugin from './utils/message.plugin'
import Loader from './components/app/Loader'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(VueMeta)
Vue.filter('date', dateFilter)
Vue.filter('currency', currencyFilter)
Vue.filter('localize', localizeFilter)
Vue.directive('tooltip', tooltipDirective)
Vue.use(Vuelidate)
Vue.component('Loader', Loader)
Vue.component('Paginate', Paginate)

firebase.initializeApp({
  apiKey: "AIzaSyB2czwyuczmkJerseqS21A6nGbmefUo9dE",
  authDomain: "vue-project-e0bd2.firebaseapp.com",
  projectId: "vue-project-e0bd2",
  storageBucket: "vue-project-e0bd2.appspot.com",
  messagingSenderId: "376912381942",
  appId: "1:376912381942:web:86b0fecf7c5fbab4e929d7",
  measurementId: "G-SEVLBHCDXX"
})

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})