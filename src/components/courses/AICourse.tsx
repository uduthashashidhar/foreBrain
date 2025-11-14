import { Brain, Clock, TrendingUp, CheckCircle, ArrowLeft, Users, Award, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AICourse() {
  const modules = [
    'Introduction to Artificial Intelligence',
    'Machine Learning Fundamentals',
    'Deep Learning & Neural Networks',
    'Natural Language Processing',
    'Computer Vision',
    'Reinforcement Learning',
    'AI Ethics & Responsible AI',
    'TensorFlow & PyTorch',
    'Model Deployment & MLOps',
    'Generative AI & LLMs',
    'AI in Business Applications',
    'Capstone AI Project'
  ];

  const skills = [
    'Machine Learning',
    'Deep Learning',
    'Neural Networks',
    'NLP Processing',
    'Computer Vision',
    'TensorFlow/PyTorch',
    'Model Deployment',
    'Data Analysis'
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
            <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
              <Brain className="w-10 h-10 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2 gradient-text">Artificial Intelligence</h1>
              <div className="flex items-center space-x-6 text-sm">
                <span className="flex items-center text-cyan-400">
                  <Clock className="w-4 h-4 mr-1" />
                  16 Weeks
                </span>
                <span className="flex items-center text-purple-400">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  Advanced
                </span>
                <span className="flex items-center text-green-400">
                  <Users className="w-4 h-4 mr-1" />
                  Max 20 Students
                </span>
              </div>
            </div>
          </div>
          
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Dive deep into the world of Artificial Intelligence and Machine Learning with our comprehensive 16-week program. 
            Master cutting-edge AI technologies, from neural networks to generative AI, and learn to build intelligent systems 
            that can solve real-world problems. This advanced course covers the latest in AI research and practical applications.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <Award className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
              <h3 className="font-semibold text-white">AI Certification</h3>
              <p className="text-gray-400 text-sm">Google AI & AWS ML</p>
            </div>
            <div className="text-center">
              <BookOpen className="w-8 h-8 text-blue-400 mx-auto mb-2" />
              <h3 className="font-semibold text-white">Real Projects</h3>
              <p className="text-gray-400 text-sm">10+ AI Applications</p>
            </div>
            <div className="text-center">
              <Users className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <h3 className="font-semibold text-white">Research Focus</h3>
              <p className="text-gray-400 text-sm">Latest AI Trends</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Course Modules */}
          <div className="glass-effect rounded-2xl p-8 neon-border">
            <h2 className="text-2xl font-bold mb-6 text-purple-400">Course Modules</h2>
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
            <h2 className="text-2xl font-bold mb-6 text-pink-400">Skills You'll Master</h2>
            <div className="grid grid-cols-2 gap-3">
              {skills.map((skill, idx) => (
                <div key={idx} className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg p-3 text-center">
                  <span className="text-white font-medium">{skill}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg border border-purple-500/20">
              <h3 className="text-xl font-bold mb-3 text-purple-400">Career Opportunities</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• AI/ML Engineer</li>
                <li>• Data Scientist</li>
                <li>• Research Scientist</li>
                <li>• AI Product Manager</li>
                <li>• Machine Learning Architect</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Enrollment CTA */}
        <div className="mt-12 text-center">
          <div className="glass-effect rounded-2xl p-8 neon-border">
            <h2 className="text-3xl font-bold mb-4 gradient-text">Ready to Master Artificial Intelligence?</h2>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Join our advanced AI program and become an expert in machine learning and artificial intelligence. 
              Shape the future with cutting-edge AI technologies.
            </p>
            <a
              href="https://form.finalform.so/forms/FEAH0emy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-600 px-8 py-3 rounded-lg font-semibold hover:from-purple-400 hover:to-pink-500 transition-all transform hover:scale-105"
            >
              <span>Enroll Now</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}