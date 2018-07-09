import Vue from 'vue'
import Home from '../components/Home'
import Blog from '../components/Blog'
export const routes = [
    {path:'/',component:Home,name:'Home'},
    {path:'/blog/:id',component:Blog,name:'Blog'}
]
