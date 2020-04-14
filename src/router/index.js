import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Login from "../views/login/Login";  //登录
import Regis from "../views/login/Regis";   //注册
import FindBack from "../views/login/FindBack";  //找回密码
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/regis',
    name: 'Regis',
    component: Regis
  },{
    path: '/findback',
    name: 'FindBack',
    component: FindBack
  },
]

const router = new VueRouter({
  routes
})

export default router
