<template>
<div>
    <input type="text" :value="somevalue" @input="changeMessage">
</div>

</template>

<script>
    export default{
        props: ['msg'],
        data(){
            return {
                somevalue: ''
            }
        },
        methods:{
            changeMessage(event){
                this.somevalue = event.target.value;
                this.$emit('messageChanged',this.somevalue);
            }
        }
    }
</script>

<style>

</style>


