
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 0,
    "route": "/"
  },
  {
    "renderMode": 0,
    "route": "/about"
  },
  {
    "renderMode": 0,
    "route": "/note/*"
  },
  {
    "renderMode": 0,
    "route": "/movies"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 643, hash: '9cb1e73e6a86ebac28069ac33a440a8026b788bcaa9d8b26f8d6b480c97623ed', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 946, hash: 'b38150388afa6148517b7c9d24f28f789df8351bfe16b8ea52e492c4dadc6ae9', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-G4TORBF2.css': {size: 122, hash: 'GjA+V7V/fKc', text: () => import('./assets-chunks/styles-G4TORBF2_css.mjs').then(m => m.default)}
  },
};
