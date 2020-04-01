import Vue from 'vue'
import VueRouter from 'vue-router'
import ImageLIst from '../views/ImageList.vue'
import UploadForm from '../views/UploadForm.vue'
import AuthHandler from '../components/AuthHandler'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ImageLIst',
    component: ImageLIst
  },
  {
    path: '/upload',
    name: 'upload',
    component: UploadForm
  },
  {
    path: '/upload',
    name: 'upload',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/oauth2/callback',
    name: 'AuthHandler',
    component: AuthHandler
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
