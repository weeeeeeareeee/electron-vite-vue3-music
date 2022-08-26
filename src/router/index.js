import { createRouter, createWebHashHistory } from "vue-router"


const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: () => import('../pages/HomePage/index.vue'),
  // },
  {
    path: '/',
    name: 'Recommend',
    component: () => import('../pages/Recommend/index.vue'),

  },
  {
    path: '/MusicHall',
    name: 'MusicHall',
    component: () => import('../pages/MusicHall/index.vue'),

  },

]

const router = createRouter({
  history: createWebHashHistory("/"),
  routes
})

export default router