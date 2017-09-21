<template>
    <div>
        <div class="col-xs-12 col-sm-6">
            <ul class="list-group">
                <app-server-status v-for="server in servers" v-on:showServerDetails="selectedServer = $event" v-bind:id="server.id" v-bind:status="server.status" ></app-server-status>
            </ul>
        </div>
        <div class="col-xs-12 col-sm-6">
            <app-server-details v-if="selectedServer" v-bind:server="getServerData()" v-on:serverWasReset="setServerData($event)"></app-server-details>
        </div>
    </div>
</template>

<script>
    import ServerStatus from './ServerStatus.vue';
    import ServerDetails from './ServerDetails.vue';
    export default{
        data: function(){
            return {
                servers:[
                    { id: 1, status: 'Normal'},
                    { id: 2, status: 'Critical'},
                    { id: 3, status: 'Unknown'},
                    { id: 4, status: 'Normal'}
                ],
                selectedServer: null
            }
        },
        methods:{
            getServerData(){
                for (var i=0; i < this.servers.length; i++) {
                    if (this.servers[i].id === this.selectedServer) {
                        return this.servers[i];
                    }
                }
            },
            setServerData(thisServer){
                this.servers[thisServer.id - 1] = thisServer;
            }
        },
        components:{
            appServerStatus: ServerStatus,
            appServerDetails: ServerDetails
        }
    }
</script>

<style>

</style>
