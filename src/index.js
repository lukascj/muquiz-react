import React from 'react';
import ReactDOM from 'react-dom/client';
import PianoKeys from './comp.PianoKeys';

const App = () => {
  return (
    <>
      <h1>Hello, React!</h1>
      <PianoKeys />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);