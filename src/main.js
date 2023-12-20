// import { createApp } from 'vue'
// import './style.css'
// import App from './App.vue'

// createApp(App).mount('#app')

import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import Home from './components/Home.vue';
import About from './components/About.vue';
import NotFound from './components/NotFound.vue';

import Rng from './components/pages/Rng.vue';
import WordCount from './components/pages/WordCount.vue';

import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/about',
            name: 'About',
            component: About
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: NotFound
        },
        /* Pages */
        {
            path: '/rng',
            name: 'Rng',
            component: Rng
        },
        {
            path: '/wordcount',
            name: 'WordCount',
            component: WordCount
        },

    ]
});

const app = createApp(App);

// tell Vue to use router
app.use(router);
app.mount('#app');