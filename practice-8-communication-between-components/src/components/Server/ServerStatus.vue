<template>
    <li class="list-group-item">
        <a @click="showDetails()">
            <div>Server #{{ id }}</div>
            <div>Status: {{status}}</div>
        </a>
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
        methods:{
            showDetails(){
                console.log(this.id);
                this.$emit('showServerDetails', this.id);
            }
        }
    }
</script>

<style>

</style>
