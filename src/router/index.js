import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Main from '@/views/Main.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/main',
            name: 'Main',
            component: Main
        }
    ]
})

export default router
