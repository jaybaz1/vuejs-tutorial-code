<template>
    <li class="list-group-item" @click="showDetails">
        <div>Server #{{ id }}</div>
        <div>Status: {{status}}</div>
    </li>

</template>

<script>
    import { eventBus } from '../../main';  
    
    export default {
        props: {
            id: {
                type: Number
            },
            status:{
                type: String
            }
        },
        created(){
            eventBus.$on('serverReset',  (data) => { 
                this.status = data;
            });
        }
    }
</script>

<style>

</style>
