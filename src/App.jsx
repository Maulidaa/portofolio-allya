import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Portofolio from './pages/Portofolio';
import Contact from './pages/Contact';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portofolio" element={<Portofolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;