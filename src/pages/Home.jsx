import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="bg-[#272727] min-h-screen text-white">
      <Hero />
      <About />
      <Skills />
      <Footer />
    </div>
  );
};

export default Home;