import { useState, useEffect } from 'react';
import { Linkedin, Twitter, Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Courses from './components/Courses';
import Features from './components/Features';
import Workshops from './components/Workshops';
import Testimonials from './components/Testimonials';
import Statistics from './components/Statistics';
import About from './components/About';
import Contact from './components/Contact';
import ParticleBackground from './components/ParticleBackground';
import ScrollToTop from './components/ScrollToTop';
import Loader from './components/Loader'; // Import the loader

function App() {
  const [loading, setLoading] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // Adjust time as needed

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="relative min-h-screen bg-[#050510] text-white scroll-smooth app-fade-in">
      <ParticleBackground />
      <div className="cyber-grid fixed inset-0 z-0 opacity-30" />

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Services />
        <Courses />
        <Features />
        <Workshops />
        <Testimonials />
        <Statistics />
        <About />
        <Contact />

        {/* Footer remains the same */}
        <footer className="relative bg-gradient-to-b from-[#050510] via-[#0a0a20] to-[#0f0f30] border-t border-cyan-500/20">
          <div className="absolute inset-0 cyber-grid opacity-20" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div className="col-span-1 md:col-span-2">
                <h3 className="text-2xl font-bold mb-4 gradient-text">foreBrain Innovations</h3>
                <p className="text-gray-400 mb-4">
                  Empowering the next generation of tech innovators through hands-on training,
                  real-world projects, and industry-recognized certifications.
                </p>
                <div className="flex space-x-4">
                  {[ 
                    { icon: Linkedin, href: 'https://www.linkedin.com/company/forebrain-innovation/' },
                    { icon: Twitter, href: 'https://x.com/ForebrainL23675' },
                    { icon: Instagram, href: 'https://www.instagram.com/forebraininnovation/' },
                    { icon: Facebook, href: 'https://www.facebook.com/forebraininnovation/' },
                  ].map((social, idx) => (
                    <a
                      key={idx}
                      href={social.href}
                      className="w-10 h-10 rounded-lg glass-effect flex items-center justify-center glow-hover neon-border group"
                    >
                      <social.icon className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4 text-cyan-400">Quick Links</h4>
                <ul className="space-y-2">
                  {['Home', 'Courses', 'Services', 'Workshops', 'About', 'Contact'].map((link) => (
                    <li key={link}>
                      <a
                        href={`#${link.toLowerCase()}`}
                        className="text-gray-400 hover:text-cyan-400 transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4 text-cyan-400">Contact Info</h4>
                <ul className="space-y-3 text-gray-400 text-sm">
                  <li className="flex items-start">
                    <Mail className="w-4 h-4 mr-2 mt-1 text-cyan-400" />
                    <span>forebraininnovation@gmail.com</span>
                  </li>
                  <li className="flex items-start">
                    <Phone className="w-4 h-4 mr-2 mt-1 text-cyan-400" />
                    <span>+91 9225524601</span>
                  </li>
                  <li className="flex items-start">
                    <MapPin className="w-4 h-4 mr-2 mt-1 text-cyan-400" />
                    <span>Nagpur, India</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-cyan-500/20 pt-8 text-center">
              <p className="text-gray-400 text-sm">
                © 2025 foreBrain Innovations Pvt. Ltd. | All Rights Reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>

      <ScrollToTop show={showScrollTop} />
    </div>
  );
}

export default App;
