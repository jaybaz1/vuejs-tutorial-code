<template>
    <div class="col-xs-12 col-sm-6">
        <button @click="resetServer">resetServer</button>
    </div>

</template>

<script>
    import { eventBus } from '../../main';  
    
    export default {
        props: ['status'],
        methods:{
            resetServer(){
                this.status = 'Normal';
                //eventBus.$emit('ageWasEdited', this.userAge); // method 1
                eventBus.$emit(this.status);
            }
        }
    }
</script>

<style>

</style>
