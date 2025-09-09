import { MicrofrontendManifest } from './types';

const manifest: MicrofrontendManifest = {
  name: 'profesional-mf',
  version: '1.0.0',
  exposedModules: {
    './AddressInfo': './src/AddressInfo.tsx',
    './AreaSlider': './src/AreaSlider.tsx',
    './PersonalInfo': './src/PersonalInfo.tsx',
    './PrivacyPolicy': './src/PrivacyPolicy.tsx',
    './ProfesionalInfo': './src/ProfesionalInfo.tsx',
    './ProjectDetails': './src/ProjectDetails.tsx',
    './RequestQuoteForm': './src/RequestQuoteForm.tsx',
    './SpaceSelect': './src/SpaceSelect.tsx'
  },
  routes: [
    {
      path: '/address',
      component: './AddressInfo'
    },
    {
      path: '/slider',
      component: './AreaSlider'
    },
    {
      path: '/personal',
      component: './PersonalInfo'
    },
    {
      path: '/privacy',
      component: './PrivacyPolicy'
    },
    {
      path: '/profesional',
      component: './ProfesionalInfo'
    },
    {
      path: '/project',
      component: './ProjectDetails'
    },
    {
      path: '/request-quote',
      component: './RequestQuoteForm'
    },
    {
      path: '/space-select',
      component: './SpaceSelect'
    }
  ]
};

export default manifest; 