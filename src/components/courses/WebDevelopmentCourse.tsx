import { Globe, Clock, TrendingUp, CheckCircle, ArrowLeft, Users, Award, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function WebDevelopmentCourse() {
  const modules = [
    'HTML5 & Semantic Markup',
    'CSS3 & Advanced Styling',
    'JavaScript Fundamentals',
    'DOM Manipulation & Events',
    'Responsive Web Design',
    'React.js & Component Architecture',
    'State Management & Hooks',
    'Node.js & Express.js',
    'Database Integration (MongoDB)',
    'RESTful APIs & Authentication',
    'Deployment & DevOps Basics',
    'Full-Stack Project Development'
  ];

  const skills = [
    'HTML5 & CSS3',
    'JavaScript ES6+',
    'React.js',
    'Node.js & Express',
    'MongoDB',
    'RESTful APIs',
    'Responsive Design',
    'Version Control (Git)'
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
            <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
              <Globe className="w-10 h-10 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2 gradient-text">Web Development</h1>
              <div className="flex items-center space-x-6 text-sm">
                <span className="flex items-center text-cyan-400">
                  <Clock className="w-4 h-4 mr-1" />
                  10 Weeks
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
            Build modern, responsive websites and web applications with our comprehensive 10-week full-stack web development course. 
            Master both frontend and backend technologies including HTML5, CSS3, JavaScript, React, Node.js, and MongoDB. 
            Create dynamic, interactive web experiences that work seamlessly across all devices.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <Award className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
              <h3 className="font-semibold text-white">Full-Stack Certification</h3>
              <p className="text-gray-400 text-sm">MERN Stack Expert</p>
            </div>
            <div className="text-center">
              <BookOpen className="w-8 h-8 text-blue-400 mx-auto mb-2" />
              <h3 className="font-semibold text-white">Live Projects</h3>
              <p className="text-gray-400 text-sm">5+ Web Applications</p>
            </div>
            <div className="text-center">
              <Users className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <h3 className="font-semibold text-white">Portfolio Ready</h3>
              <p className="text-gray-400 text-sm">Professional Projects</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Course Modules */}
          <div className="glass-effect rounded-2xl p-8 neon-border">
            <h2 className="text-2xl font-bold mb-6 text-orange-400">Course Modules</h2>
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
            <h2 className="text-2xl font-bold mb-6 text-red-400">Skills You'll Master</h2>
            <div className="grid grid-cols-2 gap-3">
              {skills.map((skill, idx) => (
                <div key={idx} className="bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg p-3 text-center">
                  <span className="text-white font-medium">{skill}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-lg border border-orange-500/20">
              <h3 className="text-xl font-bold mb-3 text-orange-400">Career Opportunities</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Full-Stack Developer</li>
                <li>• Frontend Developer</li>
                <li>• Backend Developer</li>
                <li>• React Developer</li>
                <li>• Web Application Developer</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Enrollment CTA */}
        <div className="mt-12 text-center">
          <div className="glass-effect rounded-2xl p-8 neon-border">
            <h2 className="text-3xl font-bold mb-4 gradient-text">Ready to Build Amazing Web Applications?</h2>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Master full-stack web development and create modern, responsive web applications. 
              Build a professional portfolio that showcases your skills to employers.
            </p>
            <a
              href="https://form.finalform.so/forms/FEAH0emy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-red-600 px-8 py-3 rounded-lg font-semibold hover:from-orange-400 hover:to-red-500 transition-all transform hover:scale-105"
            >
              <span>Enroll Now</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}