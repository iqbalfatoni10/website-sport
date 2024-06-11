import { createApp } from 'vue';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import '@fortawesome/fontawesome-free/css/all.css';

import router from './router';
import App from './App.vue';

createApp(App).use(router).mount('#app');
