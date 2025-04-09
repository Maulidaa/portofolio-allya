import React from "react";
import { ExternalLink } from "lucide-react";

const ProjectCard = ({ image, category, title, description, link }) => {
  return (
    <div className="flex flex-col md:flex-row bg-[#2a2a2a] rounded-2xl p-4 md:p-6 shadow-lg gap-6 hover:scale-[1.01] transition-all duration-300">
      {/* Gambar project */}
      <div className="relative w-full md:w-1/2 rounded-lg overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-auto rounded-lg object-cover"
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
        <p className="text-sm text-gray-300">{description}</p>
      </div>
    </div>
  );
};

const FeaturedProjects = () => {
  return (
    <section className="bg-[#1e1e1e] text-white py-20 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>

        <div className="space-y-10">
          <ProjectCard
            image="/images/bolder.png" // Pastikan ini ada di public/images
            category="Web Development"
            title="Bolder Landingpage"
            description="Serrow restructured and designed core pages, creating interactive elements that put users in control and allowed them to discover the information needed to make a decision."
            link="https://bolder.com"
          />
          <ProjectCard
            image="/images/kerjamantul.png"
            category="Web Development"
            title="Kerja Mantul Education Management"
            description="Serrow restructured and designed core pages, creating interactive elements that put users in control and allowed them to discover the information needed to make a decision."
            link="https://kerjamantul.com"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
