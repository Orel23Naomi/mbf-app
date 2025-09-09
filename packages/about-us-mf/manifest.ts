import { MicrofrontendManifest } from './types';

const manifest: MicrofrontendManifest = {
  name: 'about-us-mf',
  version: '1.0.0',
  exposedModules: {
    './AboutUs': './src/AboutUs.tsx',
    './CustomFooter': './src/CustomFooter.tsx'
  },
  routes: [
    {
      path: '/about',
      component: './AboutUs'
    },
    {
      path: '/footer',
      component: './CustomFooter'
    }
  ]
};

export default manifest; 