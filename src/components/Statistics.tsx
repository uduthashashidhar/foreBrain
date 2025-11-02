import { useState, useEffect, useRef } from 'react';
import { TrendingUp, Users, Award, Briefcase } from 'lucide-react';

export default function Statistics() {
  const [counts, setCounts] = useState({ students: 0, workshops: 0, partners: 0, satisfaction: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats = [
    { icon: Users, label: 'Students Trained', value: 10000, suffix: '+', color: 'cyan' },
    { icon: Award, label: 'Workshops Conducted', value: 30, suffix: '+', color: 'purple' },
    { icon: Briefcase, label: 'Industry Partners', value: 10, suffix: '+', color: 'green' },
    { icon: TrendingUp, label: 'Satisfaction Rate', value: 98, suffix: '%', color: 'orange' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCounters();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    stats.forEach((stat, index) => {
      let currentCount = 0;
      const increment = stat.value / steps;

      const timer = setInterval(() => {
        currentCount += increment;
        if (currentCount >= stat.value) {
          currentCount = stat.value;
          clearInterval(timer);
        }

        setCounts((prev) => ({
          ...prev,
          [['students', 'workshops', 'partners', 'satisfaction'][index]]: Math.floor(currentCount),
        }));
      }, stepDuration);
    });
  };

  const colorMap: Record<string, { gradient: string; text: string }> = {
    cyan: { gradient: 'from-cyan-500 to-blue-600', text: 'text-cyan-400' },
    purple: { gradient: 'from-purple-500 to-pink-600', text: 'text-purple-400' },
    green: { gradient: 'from-green-500 to-teal-600', text: 'text-green-400' },
    orange: { gradient: 'from-orange-500 to-red-600', text: 'text-orange-400' },
  };

  const countValues = [counts.students, counts.workshops, counts.partners, counts.satisfaction];

  return (
    <section ref={sectionRef} className="relative py-20 md:py-32">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-gradient-to-r from-cyan-500/10 to-purple-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Our Impact</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Numbers that speak for our commitment to excellence
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-effect rounded-2xl p-8 neon-border text-center hover:scale-105 transition-all duration-300"
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${colorMap[stat.color].gradient} flex items-center justify-center mx-auto mb-6 animate-pulse-slow`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>

              <div className={`text-5xl font-bold mb-3 ${colorMap[stat.color].text}`}>
                {countValues[idx]}
                <span className="text-3xl">{stat.suffix}</span>
              </div>

              <p className="text-gray-400 font-semibold">{stat.label}</p>

              <div className="mt-4 h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${colorMap[stat.color].gradient} transition-all duration-2000 ease-out`}
                  style={{ width: hasAnimated ? '100%' : '0%' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
