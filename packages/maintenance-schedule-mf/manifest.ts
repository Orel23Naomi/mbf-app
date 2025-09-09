import { MicrofrontendManifest } from './types';

const manifest: MicrofrontendManifest = {
  name: 'maintenance-schedule-mf',
  version: '1.0.0',
  exposedModules: {
    './MaintenanceSchedule': './src/MaintenanceSchedule.tsx'
  },
  routes: [
    {
      path: '/schedule',
      component: './MaintenanceSchedule'
    },
  ]
};

export default manifest; 