import * as React from 'react';
import * as ReactDOM from 'react-dom/client'; 
import OurServices from './OurServices';

let root: ReactDOM.Root | null = null;

export const mount = (rootElement: Element) => {
  if (!root) {
    root = ReactDOM.createRoot(rootElement);
  }
  root.render(
    <React.StrictMode>
      <OurServices/>
    </React.StrictMode>
  );
};

export { default as OurServices } from './OurServices';
export {};