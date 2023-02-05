// SSG
import { ViteSSG } from 'vite-ssg';

// CSS
import '@unocss/reset/tailwind.css';
import 'uno.css';
import '~/styles/index.css';

// LAYOUTS
import { setupLayouts } from 'virtual:generated-layouts';
import generatedRoutes from 'virtual:generated-pages';
const routes = setupLayouts(generatedRoutes);

// STORE
import { createPinia } from 'pinia';
import { useSearch } from './stores/search';
import { useSettings } from './stores/settings';

// MAIN APP
import App from './App.vue';
import { AppModule } from './modules/module';

export const createApp = ViteSSG(
  App,
  {
    routes,
  },
  (ctx) => {
    Object.values(
      import.meta.glob<{ install: AppModule }>('./modules/*.ts', { eager: true }),
    ).forEach((x) => {
      x.install?.(ctx);
    });
  },
);
