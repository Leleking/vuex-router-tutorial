import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{
        products:[
            {name:'mouse',price:50},
            {name:'keyboard',price:50},
            {name:'monitor',price:50}
        ],
        title:'My Vuex Component',
        links:[
            'www.google.com',
            'www.yahoo.com',
            'www.makemoney.com'
        ]
    },
    getters:{
        countLinks: state => {
            return state.links.length;
        },
        saleProducts: state => {
            var saleProducts = state.products.map(product =>{
                return{
                    name:"**"+product.name+"**",
                    price: product.price/2
                }
            } );
            return saleProducts
        }
    }
})