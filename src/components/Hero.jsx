import React from 'react';
import profileImg from '../assets/profile.png';

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-gray-900 to-black text-white h-screen flex items-center justify-center px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Foto bundar */}
        <div className="flex-shrink-0">
          <img
            src={profileImg}
            alt="Profile"
            className="w-40 h-40 md:w-52 md:h-52 rounded-full object-cover border-4 border-green-500 shadow-lg"
          />
        </div>
     <div className="max-w-6xl mx-auto flex flex-col items-start text-left">
     <h1 className="text-2xl md:text-4xl font-bold mb-4">
      Hi, I'm <span className="text-green-400">Allya Maulida</span>
    </h1>
    <p className="text-lg md:text-xl text-gray-300 mb-6">
      I'm a 4th semester Informatics Engineering student with an interest in backend development, system design, and visual design like UI/UX and graphics. I also enjoy building websites and learning new things. I work well in teams and always try to improve my skills.
    </p>
        <div className="flex justify-center gap-4">
          <a
            href="https://drive.google.com/file/d/1jKZH7cv2zAm0eIQdzE-HiB6-YkP9V-bV/view?usp=drive_link"
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full transition"
          >
            View Portfolio
          </a>
          <a
            href="#contact"
            className="border border-green-500 hover:bg-green-500 text-white px-6 py-3 rounded-full transition"
          >
            Contact Me
          </a>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;