import React from 'react';
import { Code, ClipboardList } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="bg-[rgb(0,0,0)] text-white py-20 px-6 md:px-16">

      {/* WHAT I DO */}
      <div className="max-w-5xl mx-auto mt-16">
        <h3 className="text-3xl font-bold text-green-400 text-center mb-10">What I Do</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Web Development */}
          <div className="bg-[#2a2a2a] p-6 rounded-2xl shadow-lg border border-green-500">
            <div className="flex items-center justify-center mb-4">
              <Code className="w-10 h-10 text-green-400" />
            </div>
            <h4 className="text-xl font-semibold mb-2 text-white text-center">Web Development</h4>
            <p className="text-gray-300 text-center">
              Membangun website yang fungsional dan responsif menggunakan Laravel, dengan fokus pada performa dan keamanan.
            </p>
          </div>

          {/* UI/UX Design */}
          <div className="bg-[#2a2a2a] p-6 rounded-2xl shadow-lg border border-blue-500">
            <div className="flex items-center justify-center mb-4">
              <ClipboardList className="w-10 h-10 text-blue-400" />
            </div>
            <h4 className="text-xl font-semibold mb-2 text-white text-center">UI/UX Design</h4>
            <p className="text-gray-300 text-center">
              Mendesain antarmuka pengguna yang menarik dan intuitif menggunakan Figma, dengan pendekatan riset dan kenyamanan pengguna.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
