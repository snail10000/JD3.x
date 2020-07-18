import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

    const routes = [
    {
      path: '/',
      name: 'Register',
      redirect: '/login'
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
      path: '/login',
      name: 'Login',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
    },
    {
        path: '/index',
        name: 'Index',
        component: () => import( '../views/Index.vue')
    },
        {
            path: '/botnav',
            name: 'Botnav',
            component: () => import( '../views/Botnav.vue'),
            children:[
                {
                    path: 'index',
                    name: 'Index',
                    component: () => import( '../views/Index.vue')
                },
                {
                    path: 'list',
                    name: 'list',
                    component: () => import( '../views/List.vue')
                },
                {
                    path: 'search',
                    name: 'search',
                    component: () => import( '../views/Search.vue')
                },
                {
                    path: 'cart',
                    name: 'cart',
                    component: () => import( '../views/Cart.vue')
                },
                {
                    path: 'mine',
                    name: 'mine',
                    component: () => import( '../views/Mine.vue')
                }
            ]
        },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
