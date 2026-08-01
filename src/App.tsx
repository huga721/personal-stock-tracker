import React from 'react';
import Portfolio from './pages/Portfolio.tsx';
import { Navbar } from './components/Navbar.tsx';

function App() {
  return (
  <div className="app">
    <Navbar />
    <Portfolio></Portfolio>
  </div>
  );
}

export default App;