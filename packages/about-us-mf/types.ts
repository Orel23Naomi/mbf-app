export interface MicrofrontendManifest {
  name: string;
  version: string;
  exposedModules: Record<string, string>;
  routes: Array<{ path: string; component: string }>;
}