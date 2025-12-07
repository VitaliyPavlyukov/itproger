
export default {
  basePath: 'https://VitaliyPavlyukov.github.io/itproger',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
