import { useState, useEffect } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  const [text, setText] = useState('');
  const fullText = 'Empowering the Next Generation of Tech Leaders';
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="mb-6 flex justify-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-effect neon-border animate-float">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-gray-300">Welcome to the Future of Tech Education</span>
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-glow min-h-[1.2em]">
          {text}
          <span className="animate-pulse">|</span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-4 max-w-4xl mx-auto">
          Hands-on Training • Internships • Certifications
        </p>
        <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
          in Cybersecurity, AI, Python, and Web Development
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#courses"
            className="group px-8 py-4 rounded-lg bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-semibold hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 glow-hover flex items-center space-x-2 w-full sm:w-auto justify-center"
          >
            <span>Explore Courses</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#workshops"
            className="group px-8 py-4 rounded-lg bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold hover:shadow-2xl hover:shadow-purple-600/50 transition-all duration-300 glow-hover-purple flex items-center space-x-2 w-full sm:w-auto justify-center"
          >
            <span>Join Workshop</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { icon: '🛡️', label: 'Cybersecurity' },
            { icon: '🧠', label: 'Artificial Intelligence' },
            { icon: '🐍', label: 'Python' },
            { icon: '🌐', label: 'Web Development' },
          ].map((item, idx) => (
            <div
              key={idx}
              className="glass-effect rounded-xl p-6 neon-border glow-hover animate-float"
              style={{ animationDelay: `${idx * 0.2}s` }}
            >
              <div className="text-4xl mb-2">{item.icon}</div>
              <p className="text-sm font-semibold text-gray-300">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
