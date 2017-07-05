<template>
    <div>
        <app-server-status 
            v-for="(server, index) in 7" 
            v-bind:server="server"
            v-bind:index="index"  
            v-bind:key="server">
        </app-server-status>

        
    </div>
</template>

// Local component
<script>
    import ServerStatus from './ServerStatus.vue';

    export default {
        components:{
            'app-server-status': ServerStatus
        }
    }
</script>
