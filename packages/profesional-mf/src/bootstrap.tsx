import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import AddressInfo from './AddressInfo';
import AreaSlider from './AreaSlider';
import PersonalInfo from './PersonalInfo';
import PrivacyPolicy from './PrivacyPolicy';
import Profesional from './Profesional';
import ProjectDetails from './ProjectDetails';
import RequestQuoteForm from './RequestQuoteForm';
import SpaceSelect from './SpaceSelect';

let root: ReactDOM.Root | null = null;

export const mount = (rootElement: Element) => {
  if (!root) {
    root = ReactDOM.createRoot(rootElement);
  }
  root.render(
    <React.StrictMode>
      <AddressInfo />
      <AreaSlider name="area" label="Area" rules={[{ required: true }]} />
      <PersonalInfo/>
      <PrivacyPolicy/>
      <Profesional/>
      <ProjectDetails/>
      <RequestQuoteForm/>
      <SpaceSelect name="space" label="Space" rules={[{ required: true }]} />
    </React.StrictMode>
  );
};

// Esporta anche i singoli componenti
export { default as AddressInfo } from './AddressInfo';
export { default as AreaSlider } from './AreaSlider';
export { default as PersonalInfo } from './PersonalInfo';
export { default as PrivacyPolicy } from './PrivacyPolicy';
export { default as Profesional } from './Profesional';
export { default as ProjectDetails } from './ProjectDetails';
export { default as RequestQuoteForm } from './RequestQuoteForm';
export { default as SpaceSelect } from './SpaceSelect';
export {};