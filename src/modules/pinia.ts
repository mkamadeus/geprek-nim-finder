import { type ViteSSGContext } from 'vite-ssg';
import { useSearch } from '~/stores/search';
import { useSettings } from '~/stores/settings';
import { AppModule } from './module';

export const install: AppModule = ({ app, initialState, router }) => {
  const pinia = createPinia();
  app.use(pinia);

  if (import.meta.env.SSR) initialState.pinia = pinia.state.value;
  else pinia.state.value = initialState.pinia || {};

  router.beforeEach((to, from, next) => {
    // initiate store
    useSettings(pinia);
    useSearch(pinia);
    next();
  });
};
