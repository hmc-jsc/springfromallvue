import Vue from 'vue'
import VueRouter from 'vue-router'
import finAll from  '../views/finAll'
import formData from  '../views/formData'
import upFile from  "../views/upFile2"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'finAll',
    component: finAll
  },
  {
    path: '/formData',
    name: 'formData',
    component: formData
  },
  {
    path: '/upFile',
    name: 'upFile',
    component: upFile
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
