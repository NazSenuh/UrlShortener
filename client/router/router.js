import {createRouter, createWebHistory} from "vue-router";
import Register from "@/components/Register";
import Login from "@/components/Login";
import New from "@/components/New";
import List from "@/components/List";
import Detail from "@/components/Detail";
import home from "@/components/home";



const routes =[
    {path:'/login', name:'Lo-gin', component: Login},
    {path:'/home', name:'Home', component:home},
    {path:'/new', name:'Ne-w', component:New},
    {path:'/', name:'Registration', component:Register},
    {path: '/list', name:'List', component:List},
    {path: '/detail/:id', name:'Detail', component:Detail}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router