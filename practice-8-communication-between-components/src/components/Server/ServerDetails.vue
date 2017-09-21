<template>
    <div class="col-xs-12 col-sm-6">
        <div>Server Id: {{server.id}}</div>
        <button @click="resetServer">resetServer</button>
    </div>

</template>

<script>
    
    export default {
        props: ['server'],
        methods:{
            resetServer(){
                this.server.status = 'Normal';
                this.$emit('serverWasReset', this.server);
            }
        }
    }
</script>

<style>

</style>
