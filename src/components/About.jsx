import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-[#1e1e1e] text-white py-20 px-6 md:px-16">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* FOTO PROFIL */}
        <div className="flex justify-center md:justify-start">
          <img
            src="/profile.png" // ganti sesuai nama file kamu
            alt="Allya Maulida"
            className="rounded-full w-48 h-48 object-cover border-4 border-green-500 shadow-lg"
          />
        </div>

        {/* DESKRIPSI DIRI */}
        <div>
          <h2 className="text-3xl font-bold text-green-400 mb-4">About Me</h2>
          <p className="text-gray-300 mb-4 leading-relaxed text-lg">
            Saya Allya Maulida, mahasiswa semester 4 Program Studi D3-Teknik Informatika di Politeknik Negeri Semarang dengan IPK 3.94. Saya memiliki ketertarikan dalam pengembangan web, khususnya di bidang backend menggunakan Laravel, serta desain sistem dan UI/UX.
          </p>
          <p className="text-gray-300 mb-4 leading-relaxed text-lg">
            Saya aktif mengikuti kompetisi seperti KRI, KMIPN, dan ITC, dan pernah meraih juara 3 Web Development. Saya juga memiliki pengalaman dalam proyek-proyek seperti website donasi, sistem deteksi penyakit tanaman, dan desain aplikasi anti-bullying.
          </p>
          <p className="text-gray-300 leading-relaxed text-lg">
            Saya dikenal sebagai pribadi yang kreatif, cepat belajar, berpikir kritis, dan terbuka terhadap tantangan baru.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;