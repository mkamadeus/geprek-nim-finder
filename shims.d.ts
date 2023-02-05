import 'vue-router';

declare module 'vue-router' {
  interface RouteMeta {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    frontmatter: any;
  }
}
