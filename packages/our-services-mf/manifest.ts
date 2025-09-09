import { MicrofrontendManifest } from './types';

const manifest: MicrofrontendManifest = {
  name: 'our-services-mf',
  version: '1.0.0',
  exposedModules: {
    './OurServices': './src/OurServices.tsx'
  },
  routes: [
    {
      path: '/services',
      component: './OurServices'
    },
  ]
};

export default manifest; 