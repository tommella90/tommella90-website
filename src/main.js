import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import VueParticles from 'vue-particles';

createApp(App)
  .use(router)
  .use(VueParticles)
  .mount('#app'); 1


  