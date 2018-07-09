<template>

<div>
    <h3>Fill the form please</h3>
    <hr>
    Name:
    <edu-sender @messageChanged='user.name=$event'></edu-sender>
    Last name:
    <edu-sender @messageChanged='user.lastname=$event'></edu-sender>
    Phone Number:
    <edu-sender @messageChanged='user.phone=$event'></edu-sender>
    <a class="waves-effect waves-light btn amber darken-2">Press me!</a>
    <h5>Name: {{user.name}}</h5>
    <h5>Lastname: {{user.lastname}}</h5>
    <h5>Phone: {{user.phone}}</h5>


</div>
    
</template>


<script>
import Sender from "./Sender";
export default{
    components:{
        'edu-sender' : Sender
    },
    data(){
        return {
            user:{
                name:'',
                lastname:'',
                phone:''
            }
        }
    }

}
    
</script>

<style>

</style>
