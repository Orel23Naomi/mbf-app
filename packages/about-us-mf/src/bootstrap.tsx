import * as React from 'react';
import * as ReactDOM from 'react-dom/client'; 
import CustomFooter from './CustomFooter';
import AboutUs from './AboutUs';

let root: ReactDOM.Root | null = null;

export const mount = (rootElement: Element) => {
  if (!root) {
    root = ReactDOM.createRoot(rootElement);
  }
  root.render(
    <React.StrictMode>
      <AboutUs />
      <CustomFooter />
    </React.StrictMode>
  );
};

export { default as AboutUs } from './AboutUs';
export { default as CustomFooter} from './CustomFooter';
export {};