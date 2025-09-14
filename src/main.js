// import { createApp } from 'vue'
// import './style.css'
// import App from './App.vue'

// createApp(App).mount('#app')

import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import Home from './components/Home.vue';
import About from './components/pages/About.vue';
import Tools from './components/pages/Tools.vue';
import Fun from './components/pages/Fun.vue';
import NotFound from './components/NotFound.vue';

import Rng from './components/pages/tool/Rng.vue';
import WordCount from './components/pages/tool/WordCount.vue';
import Solve24 from './components/pages/tool/Solve24.vue';
import Play24 from './components/pages/fun/Play24.vue';
import Factor from './components/pages/tool/Factor.vue';
import Clock from './components/pages/tool/Clock.vue';
import FourKeys from './components/pages/fun/FourKeys.vue'

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
            path: '/tools',
            name: 'Tools',
            component: Tools
        },
        {
            path: '/fun',
            name: 'Fun',
            component: Fun
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
        {
            path: '/solve24',
            name: 'Solve24',
            component: Solve24
        },
        {
            path: '/play24',
            name: 'Play24',
            component: Play24
        },
        {
            path: '/factor',
            name: 'Factor',
            component: Factor
        },
        {
            path: '/clock',
            name: 'Clock',
            component: Clock
        },
        {
            path: '/4k',
            name: 'FourKeys',
            component: FourKeys
        }
    ]
});

const app = createApp(App);

// tell Vue to use router
app.use(router);
app.mount('#app');