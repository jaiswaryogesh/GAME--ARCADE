import React from "react";
import 'boxicons/css/boxicons.min.css';

const Footer = () => {
  return (
    <footer className="bg-[#0e0c2b] text-white py-12 px-4 md:px-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-left">

        {/* Brand Info */}
        <div className="space-y-4">
          <div className="flex items-center justify-center md:justify-start gap-3">
            <img src="/images/illu-logo.png" alt="Trinetra Logo" className="w-12 h-12" />
            <h1 className="text-2xl font-extrabold tracking-wider">TRINETRA</h1>
          </div>
          <p className="text-sm text-white/70">
            Dive into realms of action, adventure, and strategy. Your legend begins here.
          </p>
        </div>

        {/* Navigation */}
        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-purple-400">Explore</h2>
          <ul className="space-y-1 text-sm">
            <li><a href="#hero" className="hover:text-pink-400 transition">Home</a></li>
            <li><a href="#retro" className="hover:text-pink-400 transition">Retro Games</a></li>
            <li><a href="#avatar" className="hover:text-pink-400 transition">Avatars</a></li>
            <li><a href="#store" className="hover:text-pink-400 transition">Store</a></li>
          </ul>
        </div>

        {/* Help */}
        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-purple-400">Support</h2>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:text-pink-400 transition">Contact Us</a></li>
            <li><a href="#" className="hover:text-pink-400 transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-pink-400 transition">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Social */}
        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-purple-400">Join Us</h2>
          <div className="flex justify-center md:justify-start gap-4 text-2xl">
            <a href="#"><i className="bx bxl-instagram hover:text-pink-500 transition"></i></a>
            <a href="#"><i className="bx bxl-twitter hover:text-sky-400 transition"></i></a>
            <a href="#"><i className="bx bxl-youtube hover:text-red-500 transition"></i></a>
            <a href="#"><i className="bx bxl-discord hover:text-indigo-400 transition"></i></a>
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="mt-12 border-t border-white/10 pt-5 text-center text-xs text-white/50">
        © {new Date().getFullYear()} TRINETRA. All Rights Reserved. | Powered by YOU
      </div>
    </footer>
  );
};

export default Footer;
