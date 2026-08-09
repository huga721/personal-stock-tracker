import React from 'react';
import Portfolio from './pages/Portfolio.tsx';
import { Navbar } from './components/navbar/Navbar.tsx';

function App() {
  return (
  <div className="app">
    <Navbar />
    <Portfolio />
  </div>
  );
}

export default App;