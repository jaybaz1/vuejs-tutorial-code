<template>
    <div>
        <app-server-status 
            v-for="(server, index) in 5" 
            v-bind:server="server"
            v-bind:index="index"  
            v-bind:key="server">
        </app-server-status>
    </div>
</template>

<script>
    import ServerStatus from './ServerStatus.vue';

    export default {
        components:{
            'app-server-status': ServerStatus
        }
    }
</script>
