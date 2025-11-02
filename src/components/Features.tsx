import { Users, BookOpen, Award, Briefcase } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

export default function Features() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Users,
      title: 'Live Learning',
      description: 'Interactive sessions with industry experts and real-time doubt resolution',
      color: 'cyan',
    },
    {
      icon: BookOpen,
      title: 'Project-Based',
      description: 'Build real-world projects and add them to your professional portfolio',
      color: 'purple',
    },
    {
      icon: Award,
      title: 'Certification',
      description: 'Industry-recognized certificates to boost your career prospects',
      color: 'green',
    },
    {
      icon: Briefcase,
      title: 'Industry Mentors',
      description: 'Learn from professionals working at top tech companies',
      color: 'orange',
    },
  ];

  const colorMap: Record<string, string> = {
    cyan: 'from-cyan-500 to-blue-600',
    purple: 'from-purple-500 to-pink-600',
    green: 'from-green-500 to-teal-600',
    orange: 'from-orange-500 to-red-600',
  };

  return (
    <section ref={sectionRef} className="relative py-20 md:py-32">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Why Choose Us</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Experience learning that goes beyond traditional education
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`group glass-effect rounded-2xl p-8 neon-border hover:scale-105 transition-all duration-300 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${colorMap[feature.color]} flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>

              <div className="mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r from-cyan-500 to-purple-600 transition-all duration-500 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
