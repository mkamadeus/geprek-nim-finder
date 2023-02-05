import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import unocss from 'unocss/vite';
import autoimports from 'unplugin-auto-import/vite';
import components from 'unplugin-vue-components/vite';
import i18n from '@intlify/unplugin-vue-i18n/vite';
import icons from 'unplugin-icons/vite';
import iconsResolver from 'unplugin-icons/resolver';
import pages from 'vite-plugin-pages';
import markdown from 'vite-plugin-vue-markdown';
import matter from 'gray-matter';
import layouts from 'vite-plugin-vue-layouts';
import path from 'path';
import fs from 'fs-extra';

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
      reactivityTransform: true,
    }),
    markdown({
      wrapperComponent: 'markdown',
      markdownItOptions: {
        html: true,
        linkify: true,
        typographer: true,
      },
    }),
    autoimports({
      dts: 'autoimports.d.ts',
      include: [/\.vue$/, /\.vue\?vue/, /\.ts$/],
      imports: ['vue', 'vue-router', '@vueuse/core', 'pinia', 'vue/macros', 'vue-i18n'],
    }),
    components({
      extensions: ['vue', 'md'],
      include: [/\.vue$/, /\.md$/],
      dts: 'components.d.ts',
      dirs: ['src/components'],
      resolvers: [iconsResolver()],
    }),
    pages({
      dirs: ['pages/'],
      extensions: ['vue', 'md'],
      extendRoute(route, parent) {
        if (route.component.endsWith('.md') && route.path != '/rfc') {
          const md = fs.readFileSync(path.join(__dirname, route.component), 'utf-8');
          const { data } = matter(md);
          route.meta = Object.assign(route.meta || {}, { frontmatter: data });
        }

        if (route.path.startsWith('/rfc') && route.path != '/rfc') {
          route.meta = Object.assign(route.meta || {}, { layout: 'rfc' });
        }

        return route;
      },
    }),
    layouts(),
    icons(),
    unocss({
      configFile: 'unocss.config.ts',
      include: [/\.vue/, /\.md/, /\.ts/],
    }),
    i18n({
      runtimeOnly: true,
      compositionOnly: true,
      fullInstall: true,
      include: [path.resolve(__dirname, 'locales/**')],
    }),
  ],
  build: {
    rollupOptions: {
      onwarn(warning, next) {
        if (warning.code !== 'UNUSED_EXTERNAL_IMPORT') next(warning);
      },
    },
  },
});
