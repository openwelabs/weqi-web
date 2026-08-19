import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './views/Home.vue'
import Download from './views/Download.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/download', name: 'download', component: Download },
  ],
})

export default router
