import { MicrofrontendManifest } from './types';

const manifest: MicrofrontendManifest = {
  name: 'generic-list-mf',
  version: '1.0.0',
  exposedModules: {
    './GenericList': './src/GenericList.tsx'
  },
  routes: [
    {
      path: '/list',
      component: './GenericList'
    },
  ]
};

export default manifest; 