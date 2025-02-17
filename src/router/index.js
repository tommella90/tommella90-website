import { createRouter, createWebHistory } from 'vue-router';
import AboutMeView from '../components/AboutMeView.vue';
import CVView from '../components/CVView.vue';
import HomeView from '../components/HomeView.vue';
import ProjectsHomeView from '../components/Projects/ProjectsHomeView.vue';

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
        path: '/projects',
        name: 'Projects-View',
        component: ProjectsHomeView,
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
