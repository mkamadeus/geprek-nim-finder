import { createI18n } from 'vue-i18n';
import { AppModule } from './module';

const messages = Object.fromEntries(
  Object.entries(
    import.meta.glob<{ default: any }>('../../locales/*.y(a)?ml', { eager: true }),
  ).map(([key, value]) => {
    const yaml = key.endsWith('.yaml');
    return [key.slice(14, yaml ? -5 : -4), value.default];
  }),
);

export const install: AppModule = ({ app }) => {
  const i18n = createI18n({
    legacy: false,
    locale: 'id',
    inheritLocale: true,
    fallbackLocale: 'id',
    messages,
  });

  app.use(i18n);
};
