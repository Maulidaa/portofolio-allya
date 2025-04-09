import React from "react";
import { Instagram, Mail, Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#1e1e1e] text-white py-10 px-6 md:px-16">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Nama & Copyright */}
        <div className="text-center md:text-left">
          <h4 className="text-lg font-semibold">Allya Maulida</h4>
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} All rights reserved</p>
        </div>

        {/* Sosial Media */}
        <div className="flex gap-4 text-gray-300">
          <a href="mailto:maulidaallya06@gmail.com" target="_blank" rel="noopener noreferrer">
            <Mail className="w-5 h-5 hover:text-green-400 transition" />
          </a>
          <a href="https://www.instagram.com/maulida_all/" target="_blank" rel="noopener noreferrer">
            <Instagram className="w-5 h-5 hover:text-pink-400 transition" />
          </a>
          <a href="https://github.com/Maulidaa" target="_blank" rel="noopener noreferrer">
            <Github className="w-5 h-5 hover:text-white transition" />
          </a>
          <a href="https://www.linkedin.com/in/allya-maulida-403125329/" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-5 h-5 hover:text-blue-400 transition" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
