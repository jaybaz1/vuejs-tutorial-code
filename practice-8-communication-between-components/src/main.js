import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  methods: {
    resetServer(status){
      this.$emit('serverReset', status)
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
