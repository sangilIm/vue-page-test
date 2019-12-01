import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import(/* webpackChunkName: "about" */ '../views/Home.vue');
const About = () => import(/* webpackChunkName: "about" */ '../views/About.vue');
const Users = () => import(/* webpackChunkName: "about" */ '../views/Users.vue');
const UsersChild = () => import(/* webpackChunkName: "about" */ '../views/UsersChild.vue');
const UsersDetail = () => import(/* webpackChunkName: "about" */ '../views/UsersDetail.vue');
const UsersEdit = () => import(/* webpackChunkName: "about" */ '../views/UsersEdit.vue');



const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/users/:userId',
    name: 'users',
    component: Users
  },
  {
    path: '/usersChild/',
    name: 'usersChild',
    component: UsersChild,
    children: [
      {
        path: ':userId',
        name: 'usersDetail',
        component: UsersDetail
      },
      {
        path: ':userId/edit',
        name: 'usersEdit',
        component: UsersEdit
      }
    ]

  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
