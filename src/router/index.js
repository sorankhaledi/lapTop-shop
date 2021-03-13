import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Brands from '../components/Brands.vue'
import About from '../components/About.vue'
import Asus from '../components/brands/Asus.vue'
import Acer from '../components/brands/Acer.vue'
import All from '../components/brands/All.vue'
import Hp from '../components/brands/Hp.vue'
import Lenovo from '../components/brands/Lenovo.vue'
import Msi from '../components/brands/Msi.vue'
import Sony from '../components/brands/Sony.vue'
import Dell from '../components/brands/Dell.vue'
import Apple from '../components/brands/Apple.vue'
import Microsoft from '../components/brands/Microsoft.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/brands',
    name: 'Brands',
    component: Brands,
    children: [
      {
        path: '/brands/all',
        name: 'All',
        component: All
      },
      {
        path: '/brands/asus',
        name: 'Asus',
        component: Asus
      },
      {
        path: '/brands/acer',
        name: 'Acer',
        component: Acer
      },
      {
        path: '/brands/hp',
        name: 'Hp',
        component: Hp
      },
      {
        path: '/brands/lenovo',
        name: 'Lenovo',
        component: Lenovo
      },
      {
        path: '/brands/msi',
        name: 'Msi',
        component: Msi
      },
      {
        path: '/brands/sony',
        name: 'Sony',
        component: Sony
      },
      {
        path: '/brands/dell',
        name: 'Dell',
        component: Dell
      },
      {
        path: '/brands/apple',
        name: 'Apple',
        component: Apple
      },
      {
        path: '/brands/microsoft',
        name: 'Microsoft',
        component: Microsoft
      }
    ]
  },
  {
    path: '/aboutus',
    name: 'About',
    component: About
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
