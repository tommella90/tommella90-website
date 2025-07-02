import { createRouter, createWebHistory } from 'vue-router';
import AboutMeView from '../components/AboutMeView.vue';
import CVView from '../components/CVView.vue';
import HomeView from '../components/HomeView.vue';
import ArtHomeView from '@/components/Art/ArtHomeView.vue';
import NerdyView from '@/components/Art/Categories/NerdyView.vue';
import GeometricWorldsView from '@/components/Art/Categories/GeometricWorldsView.vue';

const routes = [
    {
        path: '/',
        name: 'Home-View',
        component: HomeView,    
    },  
    {
        path: '/cv',
        name: 'CV-View',
        component: CVView,
    },
    {
        path: '/about-me',
        name: 'AboutMe-View',
        component: AboutMeView,
    },
    {
        path: '/art',
        name: 'Art-View',
        component: ArtHomeView,
    },
    {
        path: '/art/nerdy',
        name: 'Nerdy-View',
        component: NerdyView,
    },
    {
        path: '/art/geometric-worlds',
        name: 'GeometricWorlds-View',
        component: GeometricWorldsView,
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
