import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import unocss from 'unocss/vite';
import autoimports from 'unplugin-auto-import/vite';
import components from 'unplugin-vue-components/vite';
import icons from 'unplugin-icons/vite';
import iconsResolver from 'unplugin-icons/resolver';
import pages from 'vite-plugin-pages';
import markdown from 'vite-plugin-md';
import layouts from 'vite-plugin-vue-layouts';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    markdown({
      markdownItOptions: {
        html: true,
        linkify: true,
        typographer: true,
      },
    }),
    unocss({
      configFile: 'unocss.config.ts',
    }),
    autoimports({
      dts: 'src/autoimports.d.ts',
      include: [/\.vue$/, /\.vue\?vue/],
      imports: ['vue', 'vue-router', '@vueuse/core', 'pinia'],
    }),
    components({
      dts: 'src/components.d.ts',
      dirs: ['src/components'],
      resolvers: [iconsResolver()],
    }),
    pages({
      extensions: ['vue', 'md'],
      extendRoute(route, parent) {
        if (route.component.includes('.md')) {
          console.log(route.component);
          return {
            ...route,
            meta: { layout: 'rfc' },
          };
        }
        return route;
      },
    }),
    layouts(),
    icons(),
  ],
});
