import { Shield, Brain, Code, Globe, Users, Cpu, BookOpen, ArrowRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function Services() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // reveal cards with a stagger
            services.forEach((_, idx) => {
              setTimeout(() => {
                setVisibleCards((prev) => {
                  if (!prev.includes(idx)) return [...prev, idx];
                  return prev;
                });
              }, idx * 120);
            });
          }
        });
      },
      { threshold: 0.12 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Shield,
      title: 'Campus Recruitment Training (CRT)',
      subtitle: 'Career Readiness & Placement',
      desc: 'Outcome-driven training for campus placements: aptitude, communication, interviews, resume building, and mock tests to boost placement success.',
      gradient: 'from-cyan-500 to-blue-600',
      slug: 'campus-recruitment-training',
    },
    {
      icon: Brain,
      title: 'AI Modules',
      subtitle: 'AI & ML Curriculum',
      desc: 'Modular AI program covering ML fundamentals, model deployment, responsible AI practices, and applied projects (NLP, CV, predictive analytics).',
      gradient: 'from-purple-500 to-pink-600',
      slug: 'ai-modules',
    },
    {
      icon: Code,
      title: 'Software Development',
      subtitle: 'Secure Development',
      desc: 'Secure full-stack development and automation solutions — from prototyping to production with security best practices baked in.',
      gradient: 'from-green-500 to-teal-600',
      slug: 'software-development',
    },
    {
      icon: Globe,
      title: 'Web Security Audit',
      subtitle: 'PenTest & Audit',
      desc: 'Comprehensive web and API security assessments including OWASP testing, authenticated scans, and remediation guidance.',
      gradient: 'from-orange-500 to-red-600',
      slug: 'web-security-audit',
    },
    {
      icon: Users,
      title: 'Corporate Workshops',
      subtitle: 'Team Upskilling',
      desc: 'Custom workshops for enterprises and universities — phishing simulation, secure coding, SOC fundamentals, and awareness training.',
      gradient: 'from-yellow-400 to-amber-500',
      slug: 'corporate-workshops',
    },
    {
      icon: Cpu,
      title: 'Edge / IoT Security',
      subtitle: 'IoT & Embedded',
      desc: 'Lightweight security assessments and hardening guidance for IoT devices, NB-IoT and embedded systems (useful for your EV/ISRO context).',
      gradient: 'from-teal-400 to-cyan-500',
      slug: 'iot-security',
    },
  ];

  return (
    <section id="services" ref={sectionRef} className="relative py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Services & Training</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Practical programs and security services to help teams build secure, resilient systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((svc, idx) => (
            <article
              key={svc.title}
              className={`group relative glass-effect rounded-2xl p-7 neon-border glow-hover transition-all duration-500 transform ${
                visibleCards.includes(idx) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              {/* top accent bar */}
              <div
                className={`absolute -top-1 left-0 w-full h-1 rounded-t-2xl bg-gradient-to-r ${svc.gradient}`}
                aria-hidden
              />

              <div className="flex items-start space-x-4">
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${svc.gradient} flex items-center justify-center shrink-0`}
                >
                  <svc.icon className="w-7 h-7 text-white" />
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{svc.title}</h3>
                      <p className="text-sm text-cyan-300 mt-1">{svc.subtitle}</p>
                    </div>
                    
                  </div>

                  <p className="text-gray-400 mt-4 text-sm leading-relaxed">{svc.desc}</p>

                  <div className="mt-6">
                    <Link to={`/services/${svc.slug}`} className="inline-flex items-center space-x-2 text-cyan-400 font-semibold hover:text-cyan-300 transition-colors">
                      <span>Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
