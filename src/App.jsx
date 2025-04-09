import React from 'react';
import Navbar from './components/Navbar'; 
import Hero from './components/Hero';
import About from './components/About';
import './App.css'; 

function App() {
  return (
    <div className="bg-[#272727] min-h-screen text-white">
      <Navbar />
      <Hero />
      <About />
      {/* Konten lainnya */}
      <div className="p-4">
      </div>
    </div>
  );
}

export default App;