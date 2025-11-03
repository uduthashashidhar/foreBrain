import { Shield, Clock, TrendingUp, CheckCircle, ArrowLeft, Users, Award, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CybersecurityCourse() {
  const modules = [
    'Introduction to Cybersecurity',
    'Network Security Fundamentals',
    'Ethical Hacking Techniques',
    'Vulnerability Assessment',
    'Incident Response',
    'Security Compliance & Governance',
    'Cryptography & Data Protection',
    'Penetration Testing',
    'Security Operations Center (SOC)',
    'Digital Forensics',
    'Risk Management',
    'Capstone Project'
  ];

  const skills = [
    'Ethical Hacking',
    'Network Security',
    'Vulnerability Assessment',
    'Incident Response',
    'Penetration Testing',
    'Security Auditing',
    'Risk Analysis',
    'Compliance Management'
  ];

  return (
    <div className="relative min-h-screen bg-[#050510] text-white">
      <div className="cyber-grid fixed inset-0 z-0 opacity-30" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Back Button */}
        <Link 
          to="/" 
          className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Courses</span>
        </Link>

        {/* Hero Section */}
        <div className="glass-effect rounded-2xl p-8 neon-border mb-12">
          <div className="flex items-center space-x-6 mb-6">
            <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2 gradient-text">Cybersecurity</h1>
              <div className="flex items-center space-x-6 text-sm">
                <span className="flex items-center text-cyan-400">
                  <Clock className="w-4 h-4 mr-1" />
                  12 Weeks
                </span>
                <span className="flex items-center text-purple-400">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  Intermediate
                </span>
                <span className="flex items-center text-green-400">
                  <Users className="w-4 h-4 mr-1" />
                  Max 25 Students
                </span>
              </div>
            </div>
          </div>
          
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Master the art of ethical hacking and cybersecurity with our comprehensive 12-week program. 
            Learn to protect organizations from cyber threats through hands-on labs, real-world scenarios, 
            and industry-standard tools. This course covers everything from network security fundamentals 
            to advanced penetration testing techniques.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <Award className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
              <h3 className="font-semibold text-white">Industry Certification</h3>
              <p className="text-gray-400 text-sm">CEH & CISSP Prep</p>
            </div>
            <div className="text-center">
              <BookOpen className="w-8 h-8 text-blue-400 mx-auto mb-2" />
              <h3 className="font-semibold text-white">Hands-on Labs</h3>
              <p className="text-gray-400 text-sm">50+ Practical Exercises</p>
            </div>
            <div className="text-center">
              <Users className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <h3 className="font-semibold text-white">Expert Mentorship</h3>
              <p className="text-gray-400 text-sm">1:1 Industry Guidance</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Course Modules */}
          <div className="glass-effect rounded-2xl p-8 neon-border">
            <h2 className="text-2xl font-bold mb-6 text-cyan-400">Course Modules</h2>
            <div className="space-y-3">
              {modules.map((module, idx) => (
                <div key={idx} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{module}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Skills You'll Learn */}
          <div className="glass-effect rounded-2xl p-8 neon-border">
            <h2 className="text-2xl font-bold mb-6 text-purple-400">Skills You'll Master</h2>
            <div className="grid grid-cols-2 gap-3">
              {skills.map((skill, idx) => (
                <div key={idx} className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg p-3 text-center">
                  <span className="text-white font-medium">{skill}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg border border-cyan-500/20">
              <h3 className="text-xl font-bold mb-3 text-cyan-400">Career Opportunities</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Cybersecurity Analyst</li>
                <li>• Ethical Hacker</li>
                <li>• Security Consultant</li>
                <li>• Penetration Tester</li>
                <li>• Security Operations Center (SOC) Analyst</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Enrollment CTA */}
        <div className="mt-12 text-center">
          <div className="glass-effect rounded-2xl p-8 neon-border">
            <h2 className="text-3xl font-bold mb-4 gradient-text">Ready to Start Your Cybersecurity Journey?</h2>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Join our comprehensive cybersecurity program and become a certified ethical hacker. 
              Limited seats available for the next batch.
            </p>
            <Link 
              to="/#contact" 
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-3 rounded-lg font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all transform hover:scale-105"
            >
              <span>Enroll Now</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}