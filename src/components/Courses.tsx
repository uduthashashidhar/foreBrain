import { Shield, Brain, Code, Globe, Clock, TrendingUp, ArrowRight, Cpu, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

export default function Courses() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            courses.forEach((_, idx) => {
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, idx]);
              }, idx * 150);
            });
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

  const courses = [
    {
      icon: Shield,
      title: 'Cybersecurity',
      duration: '12 Weeks',
      level: 'Intermediate',
      description: 'Master ethical hacking, network security, and threat detection with hands-on labs and real-world scenarios.',
      gradient: 'from-cyan-500 to-blue-600',
      slug: 'cybersecurity',
    },
    {
      icon: Brain,
      title: 'Artificial Intelligence',
      duration: '16 Weeks',
      level: 'Advanced',
      description: 'Dive into machine learning, neural networks, and AI applications with cutting-edge tools and frameworks.',
      gradient: 'from-purple-500 to-pink-600',
      slug: 'artificial-intelligence',
    },
    {
      icon: Code,
      title: 'Python Programming',
      duration: '8 Weeks',
      level: 'Beginner',
      description: 'Learn Python from scratch with practical projects in automation, data analysis, and software development.',
      gradient: 'from-green-500 to-teal-600',
      slug: 'python',
    },
    {
      icon: Globe,
      title: 'Web Development',
      duration: '10 Weeks',
      level: 'Intermediate',
      description: 'Build modern, responsive websites with HTML, CSS, JavaScript, React, and backend technologies.',
      gradient: 'from-orange-500 to-red-600',
      slug: 'web-development',
    },
    {
      icon: Cpu,
      title: 'Data Science',
      duration: '10 Weeks',
      level: 'Intermediate',
      description: 'Empowering innovation through intelligent data analysis, machine learning, and predictive insights.',
      gradient: 'from-blue-500 to-red-600',
      slug: 'data-science',
    },
    {
      icon: Users,
      title: 'Devops',
      duration: '10 Weeks',
      level: 'Intermediate',
      description: 'Bridging the gap between code and deployment through automation, collaboration, and agility.',
      gradient: 'from-yellow-500 to-red-600',
      slug: 'devops',
    },
  ];

  return (
    <section id="courses" ref={sectionRef} className="relative py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Our Courses</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Industry-aligned programs designed to transform you into a tech professional
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((course, idx) => (
            <div
              key={idx}
              className={`group relative glass-effect rounded-2xl p-8 neon-border glow-hover transition-all duration-500 transform ${
                visibleCards.includes(idx)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${course.gradient} rounded-t-2xl`} />

              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${course.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <course.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold mb-3 text-white">{course.title}</h3>

              <div className="flex items-center space-x-4 mb-4 text-sm">
                <span className="flex items-center text-cyan-400">
                  <Clock className="w-4 h-4 mr-1" />
                  {course.duration}
                </span>
                <span className="flex items-center text-purple-400">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  {course.level}
                </span>
              </div>

              <p className="text-gray-400 mb-6 leading-relaxed">{course.description}</p>

              <Link to={`/courses/${course.slug}`} className="flex items-center space-x-2 text-cyan-400 font-semibold group-hover:text-cyan-300 transition-colors">
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
