import { createRouter, createWebHistory } from "vue-router";
import Home from '../view/HomePage.vue'
import Gudang from '../view/AboutPage.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/gudang',
        name: 'Gudang',
        component: Gudang
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;