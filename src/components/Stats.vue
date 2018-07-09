<template>

    <div>{{countLinks}}</div>
</template>
<script>
import { mapGetters } from 'vuex';
    export default{
        computed:{
            ...mapGetters({
               countLinks: 'countLinks'
            })
        }
    }
</script>
