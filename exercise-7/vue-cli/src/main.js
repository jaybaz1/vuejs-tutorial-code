import Vue from 'vue'
import App from './App.vue'
import Home from "./Home.vue"
import Details from './ServerDetails.vue'

// Global component
Vue.component('app-server', Home);
Vue.component('app-server-details', Details);

new Vue({
  el: '#app',
  render: h => h(App)
})
