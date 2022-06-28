// CSS
import '@unocss/reset/tailwind.css';
import 'uno.css';
import '~/styles/index.css';

// LAYOUTS
import { setupLayouts } from 'virtual:generated-layouts';
import generatedRoutes from 'virtual:generated-pages';
const routes = setupLayouts(generatedRoutes);

// ROUTER
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({ routes, history: createWebHistory() });

// STORE
import { createPinia } from 'pinia';
const store = createPinia();

// MAIN APP
import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

app.use(router);
app.use(store);
app.mount('#geprek');
