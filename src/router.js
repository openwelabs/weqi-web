import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './views/Home.vue'
import Download from './views/Download.vue'
import AddModel from './views/AddModel.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/download', name: 'download', component: Download },
    { path: '/add-model', name: 'add-model', component: AddModel },
  ],
})

export default router
