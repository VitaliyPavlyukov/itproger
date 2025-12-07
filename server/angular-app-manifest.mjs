
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://VitaliyPavlyukov.github.io/itproger/',
  locale: undefined,
  routes: [
  {
    "renderMode": 0,
    "route": "/itproger"
  },
  {
    "renderMode": 0,
    "route": "/itproger/about"
  },
  {
    "renderMode": 0,
    "route": "/itproger/note/*"
  },
  {
    "renderMode": 0,
    "route": "/itproger/movies"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 686, hash: '256878dc176136e105a0c175f216e4579f787d887599689b3f93d079cc83c386', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 989, hash: '131ca1acffc013e8ab06776e85626519ce805f0cbc8476170006358e7ee22115', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-G4TORBF2.css': {size: 122, hash: 'GjA+V7V/fKc', text: () => import('./assets-chunks/styles-G4TORBF2_css.mjs').then(m => m.default)}
  },
};
