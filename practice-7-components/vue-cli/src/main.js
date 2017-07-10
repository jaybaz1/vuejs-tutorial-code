import Vue from 'vue'
import App from './App.vue'
import Header from './components/shared/Header.vue'
import Footer from './components/shared/Footer.vue'
import Server from './components/server/Server.vue'
import ServerDetails from './components/server/ServerDetails.vue'

Vue.component('app-header', Header);
Vue.component('app-footer', Footer);
Vue.component('app-server', Server)
Vue.component('app-server-details', ServerDetails);

new Vue({ 
  el: '#app',
  render: h => h(App)
})
