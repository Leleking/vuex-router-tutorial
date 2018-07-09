<template>
    <div class="row">
     <div class="col-md-6 red">
        {{title}}{{$route.params.id}}
        <router-link :to="'/blog/'+id"></router-link>
        <Stats/>
     </div>
     <div class="col-md-6 grey">
         <div class="container">
             <h1>This is another component</h1>
         </div>
     </div>
    </div>
</template>
<script>
import Stats from './Stats'
import {mapState , mapGetters} from 'vuex'
    export default{
        components:{
            Stats
        },
        data(){
            return{
                id:4
            }
        },
        computed:{
            ...mapState([
                'title'
            ]),
        maybe(){
            return 'maybe i will go';
        }
        },
        methods:{

        }
    }
</script>\
<style>
.red{
    background-color: darksalmon;
}
.grey{
    background-color:floralwhite;
}
</style>
