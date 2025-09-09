import * as React from 'react';
import * as ReactDOM from 'react-dom/client'; 
import GenericList from './components/GenericList';

let root: ReactDOM.Root | null = null;

export const mount = (rootElement: Element) => {
  if (!root) {
    root = ReactDOM.createRoot(rootElement);
  }
  root.render(
    <React.StrictMode>
      <GenericList 
        title="Sample Title" 
        description="Sample Description" 
        items={[]} 
      />
    </React.StrictMode>
  );
};

export { default as GenericList } from './components/GenericList';