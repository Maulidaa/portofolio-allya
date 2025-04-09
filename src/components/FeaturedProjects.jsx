import React from "react";
import { ExternalLink, Github } from "lucide-react";

const ProjectCard = ({ image, category, title, description, link, codeLink }) => {
  return (
    <div className="flex flex-col md:flex-row bg-[#2a2a2a] rounded-2xl p-4 md:p-6 shadow-lg gap-6 hover:scale-[1.01] transition-all duration-300">
      {/* Gambar project */}
      <div className="relative w-full md:w-[35%] max-w-md rounded-lg overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-auto object-contain rounded-lg"
        />
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-2 right-2 bg-white/10 backdrop-blur-md p-2 rounded-full hover:bg-white/20 transition"
          >
            <ExternalLink className="w-4 h-4 text-white" />
          </a>
        )}
      </div>

      {/* Info */}
      <div className="flex-1">
        <p className="text-sm text-gray-400 mb-1">{category}</p>
        <h3 className="text-xl md:text-2xl font-bold mb-2">{title}</h3>
        <p className="text-sm text-gray-300 mb-3">{description}</p>
        {codeLink && (
          <a
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-gray-400 hover:text-white transition"
          >
            <Github className="w-4 h-4" />
            View Code
          </a>
        )}
      </div>
    </div>
  );
};

const FeaturedProjects = () => {
  return (
    <section className="bg-[#010101] text-white py-20 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-green-400">Projects</h2>

        <div className="space-y-10">
          <ProjectCard
            image="/images/agrolyze.png"
            category="Web Development"
            title="Agrolyze"
            description="Website yang membantu petani dan masyarakat umum dalam mengidentifikasi penyakit tanaman melalui teknologi prediktif."
            link="https://agrolyze.vercel.app/"
            codeLink="https://github.com/PCC-Coders/api-agrolens"
          />
          <ProjectCard
            image="/images/gitaRupa.png"
            category="Web Development"
            title="GitaRupa"
            description="Platform pemesanan tiket dan informasi museum serta galeri seni di Indonesia, yang memudahkan pencarian dan eksplorasi budaya."
            link="https://museumgitarupa.vercel.app/"
            codeLink="https://github.com/Team-Project-PCC"
          />
          <ProjectCard
            image="/images/justip.png"
            category="Mobile Application"
            title="Justip"
            description="Aplikasi jasa titip yang menjamin kemudahan dan keamanan transaksi antara penitip dan pembeli."
            link="https://justipin.my.id/"
          />
          <ProjectCard
            image="/images/hydronic.png"
            category="UI/UX Design"
            title="HydroNic"
            description="Desain aplikasi mobile untuk memantau dan mengontrol sistem hidroponik secara real-time dengan antarmuka ramah pengguna."
            link="https://www.figma.com/design/wNaSq4wfHyRqjMZqbFgikU/HydroNic?node-id=959-2079&p=f&t=qUx3kydvZvVNtLtp-0"
          />
          <ProjectCard
            image="/images/safeZone.png"
            category="UI/UX Design"
            title="SafeZone"
            description="Konsep aplikasi yang membantu orang tua memantau aktivitas anak di sekolah serta menerima notifikasi penting terkait keamanan."
            link="https://www.figma.com/design/lfLKRK3ftK93DDnRlB48vP/SafeZone?t=QIx3jGy3WJXQWDgA-0"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;