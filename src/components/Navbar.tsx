import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png'; // ✅ Your main foreBrain logo

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Courses', href: '#courses' },
    { name: 'Workshops', href: '#workshops' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-effect border-b border-cyan-500/20' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* ====== LOGO ONLY (Removed fB box) ====== */}
          <a href="#home" className="flex items-center">
            <img
              src={logo}
              alt="foreBrain Logo"
              className="h-10 md:h-12 w-auto object-contain hover:scale-105 transition-transform duration-300"
            />
          </a>

          {/* ====== DESKTOP LINKS ====== */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-cyan-400 transition-colors font-medium relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <a
              href="#contact"
              className="px-6 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 glow-hover"
            >
              Get Started
            </a>
          </div>

          {/* ====== MOBILE MENU BUTTON ====== */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg glass-effect neon-border"
          >
            {isOpen ? <X className="w-6 h-6 text-cyan-400" /> : <Menu className="w-6 h-6 text-cyan-400" />}
          </button>
        </div>
      </div>

      {/* ====== MOBILE MENU ====== */}
      {isOpen && (
        <div className="md:hidden glass-effect border-t border-cyan-500/20 animate-fade-in">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-2 text-gray-300 hover:text-cyan-400 transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block text-center px-6 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-semibold"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
