import { Users, Award } from 'lucide-react';
import founderImg from '../assets/founder.jpg';
import ceoImg from '../assets/ceo.jpg';

export default function Team() {
  const leadership = [
    {
      name: 'Pooja Tayade',
      role: 'Director & Founder',
      image: founderImg,
      highlight: 'Vision & Operations',
      description:
        'Leads organizational vision and oversees operations, partnerships, and strategic initiatives.'
    },
    {
      name: 'u.shashidhar',
      role: 'CEO & Cybersecurity Head',
      image: ceoImg,
      highlight: 'Leadership & Execution',
      description:
        'Drives execution, performance, and team success across all functions.'
    },
  ];

  // Core team members section removed for now; we'll add later when ready

  return (
    <section id="team" className="relative py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text text-center">Our Team</h2>
          <p className="text-gray-400 mt-3 max-w-3xl mx-auto text-center">
            Meet the leadership and the core team that powers our programs and initiatives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {leadership.map((leader, idx) => (
            <div
              key={idx}
              className="glass-effect rounded-2xl p-6 md:p-8 neon-border app-fade-in transition-transform duration-300 hover:scale-105 hover:translate-y-1"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="flex items-center space-x-4 mb-4">
                <img src={leader.image} alt={leader.role} className="w-16 h-16 rounded-xl object-cover neon-border" />
                <div>
                  <h3 className="text-2xl font-bold text-white">{leader.name}</h3>
                  <p className="text-gray-300 text-sm">{leader.role}</p>
                  <p className="text-cyan-400 text-sm font-medium">{leader.highlight}</p>
                </div>
              </div>
              <p className="text-gray-300">{leader.description}</p>
            </div>
          ))}
        </div>

        {/* Core Team Members section intentionally removed for now */}
      </div>
    </section>
  );
}