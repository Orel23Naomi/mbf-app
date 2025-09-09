import * as React from 'react';
import * as ReactDOM from 'react-dom/client'; 
import MaintenanceSchedule from './MaintenanceSchedule';

let root: ReactDOM.Root | null = null;

export const mount = (rootElement: Element) => {
  if (!root) {
    root = ReactDOM.createRoot(rootElement);
  }
  root.render(
    <React.StrictMode>
      <MaintenanceSchedule/>
    </React.StrictMode>
  );
};

export { default as MaintenanceSchedule } from './MaintenanceSchedule';
export {};