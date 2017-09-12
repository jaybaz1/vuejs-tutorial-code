<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <app-server-status v-for="server in servers" v-bind:id="server.id" v-bind:status="server.status" ></app-server-status>
        </ul>
    </div>
</template>

<script>
    import ServerStatus from './ServerStatus.vue';
    export default{
        data: function(){
            return {
                servers:[
                    { id: 1, status: 'Normal'},
                    { id: 2, status: 'Critical'},
                    { id: 3, status: 'Unknown'},
                    { id: 1, status: 'Normal'}
                ]
            }
        },
        components:{
            appServerStatus: ServerStatus
        }
    }
</script>

<style>

</style>
