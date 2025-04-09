import React, { useState } from 'react';
import Footer from '../components/Footer';
import { Mail, Instagram, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formUrl = 'https://formsubmit.co/ajax/maulidaallya06@gmail.com';
    const response = await fetch(formUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setShowSuccess(true);
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => setShowSuccess(false), 5000);
    } else {
      alert('Gagal mengirim pesan. Silakan coba lagi.');
    }
  };

  return (
    <div className="bg-[#272727] text-white min-h-screen flex flex-col justify-between">
      <main className="max-w-3xl mx-auto w-full px-8 pt-24 pb-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">Hubungi Saya</h1>
        <p className="text-center mb-10 text-gray-300">
          Jika kamu ingin berdiskusi, kolaborasi, atau sekadar menyapa, silakan isi form di bawah atau hubungi saya melalui email.
        </p>

        {showSuccess && (
          <div className="mb-6 p-4 bg-green-600 text-white text-center rounded-lg shadow">
            Pesanmu berhasil dikirim! Terima kasih telah menghubungi saya.
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-[#1e1e1e] p-6 rounded-2xl shadow-lg"
        >
          <div>
            <label className="block mb-1 text-sm font-medium">Nama</label>
            <input
              type="text"
              name="name"
              required
              placeholder="Nama kamu"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded-md bg-[#2e2e2e] text-white border border-gray-600 focus:outline-none focus:border-green-400"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              required
              placeholder="email@example.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-md bg-[#2e2e2e] text-white border border-gray-600 focus:outline-none focus:border-green-400"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">Pesan</label>
            <textarea
              name="message"
              required
              placeholder="Tulis pesanmu di sini..."
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 rounded-md bg-[#2e2e2e] text-white border border-gray-600 focus:outline-none focus:border-green-400"
            ></textarea>
          </div>
          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition text-center"
            >
              Kirim Pesan
            </button>
          </div>
        </form>

        <div className="mt-12 text-center space-y-4">
          <p className="flex justify-center items-center gap-2 text-gray-300">
            <Mail className="w-4 h-4" /> maulidaallya06@gmail.com
          </p>
          <div className="flex justify-center gap-4 mt-2">
            <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-5 h-5 hover:text-pink-400 transition" />
            </a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 hover:text-gray-400 transition" />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5 hover:text-blue-400 transition" />
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
