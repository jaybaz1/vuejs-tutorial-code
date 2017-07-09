import Vue from 'vue'
import App from './App.vue'
import Header from './Header.vue'
import Footer from './Footer.vue'
import Server from './Server.vue'
import ServerDetails from './ServerDetails.vue'

Vue.component('app-header', Header);
Vue.component('app-footer', Footer);
Vue.component('app-server', Server)
Vue.component('app-server-details', ServerDetails);

new Vue({ 
  el: '#app',
  render: h => h(App)
})
