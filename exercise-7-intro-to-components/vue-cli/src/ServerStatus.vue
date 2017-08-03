<template>
    <div>
        <p>Server Status: {{ status }}</p>
        <hr>
        <button @click="changeStatus">Change Status</button>
        <app-server-details></app-server-details>
    </div>
</template>

<script>
export default {
  data: function(){
      return{
          status: 'Critical'
      }
  },
  methods: {
      changeStatus(){
          this.status = 'Normal'
      }
  }
}
</script>
