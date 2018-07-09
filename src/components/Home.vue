<template>
    <div>
        Welcome to The Home
        <ul>
            <li v-for="product in saleProducts"> name: {{product.name}} age: {{product.price}}</li>
        </ul>
    </div>
</template>
<script>
    export default{
       computed:{
           getProducts(){
               return this.$store.state.products
           },
           saleProducts(){
               return this.$store.getters.saleProducts;
           }
       }
    }
</script>
