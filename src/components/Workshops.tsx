import { Calendar, Users, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function Workshops() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const workshops = [
    {
      title: 'Ethical Hacking Bootcamp',
      date: 'March 15-17, 2025',
      participants: '50+ Seats',
      description: 'Intensive 3-day workshop on penetration testing and vulnerability assessment',
      type: 'Workshop',
      status: 'Open',
    },
    {
      title: 'AI & Machine Learning Internship',
      date: 'April 1 - June 30, 2025',
      participants: '20 Positions',
      description: '3-month paid internship working on real AI projects with industry mentors',
      type: 'Internship',
      status: 'Hiring',
    },
    {
      title: 'Full Stack Web Dev Sprint',
      date: 'March 22-24, 2025',
      participants: '60+ Seats',
      description: 'Build and deploy complete web applications in just 3 days',
      type: 'Workshop',
      status: 'Open',
    },
    {
      title: 'Cybersecurity Internship Program',
      date: 'May 1 - July 31, 2025',
      participants: '15 Positions',
      description: 'Work with security teams on threat analysis and incident response',
      type: 'Internship',
      status: 'Hiring',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % workshops.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + workshops.length) % workshops.length);
  };

  return (
    <section id="workshops" className="relative py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Workshops & Internships
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Hands-on learning experiences and real-world opportunities
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {workshops.map((workshop, idx) => (
                <div key={idx} className="w-full flex-shrink-0 px-4">
                  <div className="glass-effect rounded-2xl p-8 md:p-12 neon-border max-w-4xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                      <div>
                        <span
                          className={`inline-block px-4 py-1 rounded-full text-sm font-semibold mb-4 ${
                            workshop.type === 'Workshop'
                              ? 'bg-cyan-500/20 text-cyan-400 neon-border'
                              : 'bg-purple-600/20 text-purple-400 neon-border-purple'
                          }`}
                        >
                          {workshop.type}
                        </span>
                        <h3 className="text-2xl md:text-3xl font-bold mb-2">{workshop.title}</h3>
                      </div>
                      <span className="px-4 py-2 rounded-lg bg-green-500/20 text-green-400 text-sm font-semibold border border-green-500/30">
                        {workshop.status}
                      </span>
                    </div>

                    <p className="text-gray-400 text-lg mb-6">{workshop.description}</p>

                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-8 space-y-3 sm:space-y-0 mb-8">
                      <div className="flex items-center text-gray-300">
                        <Calendar className="w-5 h-5 mr-2 text-cyan-400" />
                        <span>{workshop.date}</span>
                      </div>
                      <div className="flex items-center text-gray-300">
                        <Users className="w-5 h-5 mr-2 text-purple-400" />
                        <span>{workshop.participants}</span>
                      </div>
                    </div>

                    <button className="group px-8 py-4 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 flex items-center space-x-2">
                      <span>Register Now</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {workshops.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === idx
                    ? 'bg-cyan-400 w-8'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-3 rounded-lg glass-effect neon-border hover:bg-white/10 transition-all"
          >
            <ArrowRight className="w-6 h-6 rotate-180" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-3 rounded-lg glass-effect neon-border hover:bg-white/10 transition-all"
          >
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
