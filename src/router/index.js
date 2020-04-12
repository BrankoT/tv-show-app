import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const Home = () => import('../views/Home.vue');
const Favourites = () => import('../views/Favourites.vue');
const Episode = () => import('../views/Episode.vue');
const NotFound = () => import('../views/NotFound.vue');

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/favourites',
        name: 'Favourites',
        component: Favourites
    },
    {
        path: '/episode/:id',
        name: 'Episode',
        component: Episode,
    },
    {
        path: '*',
        name: 'NotFound',
        component: NotFound
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior () {
        return { x: 0, y: 0 }
    }
});

export default router
