import React from 'react';

function App() {
  return (
    <div className="App">
      <header style={{ padding: '20px', backgroundColor: '#f0f0f0' }}>
        <h1>Core Shell Application</h1>
      </header>
      <main style={{ padding: '20px' }}>
        <h2>Welcome to MicroFrontend App</h2>
        <p>This is the core shell application running without complex dependencies.</p>
        <button 
          type="button" 
          style={{
            backgroundColor: '#1890ff',
            color: 'white',
            border: 'none',
            padding: '8px 16px',
            borderRadius: '6px',
            cursor: 'pointer'
          }}
        >
          Test Button
        </button>
      </main>
      <footer style={{ padding: '20px', backgroundColor: '#f0f0f0', marginTop: '40px' }}>
        <p>Footer content</p>
      </footer>
    </div>
  );
}

export default App;

