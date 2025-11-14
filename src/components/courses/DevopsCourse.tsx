import { Users, Clock, TrendingUp, CheckCircle, ArrowLeft, Award, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DevopsCourse() {
  const modules = [
    'Introduction to DevOps',
    'Linux & Shell Scripting',
    'Version Control with Git',
    'CI/CD Pipelines',
    'Docker & Containerization',
    'Kubernetes Basics',
    'Infrastructure as Code (Terraform)',
    'Monitoring & Logging',
    'Cloud Platforms (AWS/GCP/Azure)',
    'Security & Compliance',
    'Automation with Ansible',
    'Capstone Deployment Project'
  ];

  const skills = [
    'CI/CD Pipelines',
    'Docker & Kubernetes',
    'Infrastructure as Code',
    'Cloud Deployment',
    'Monitoring & Logging',
    'Automation',
    'Version Control',
    'Linux Administration'
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
            <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-yellow-500 to-red-600 flex items-center justify-center">
              <Users className="w-10 h-10 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2 gradient-text">DevOps</h1>
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
                  Max 25 Students
                </span>
              </div>
            </div>
          </div>
          
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Bridge the gap between development and operations with our hands-on DevOps program. 
            Learn to build, test, and deploy applications rapidly and reliably using modern tools and practices.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <Award className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
              <h3 className="font-semibold text-white">DevOps Certification</h3>
              <p className="text-gray-400 text-sm">Docker/K8s/AWS</p>
            </div>
            <div className="text-center">
              <BookOpen className="w-8 h-8 text-blue-400 mx-auto mb-2" />
              <h3 className="font-semibold text-white">Real Deployments</h3>
              <p className="text-gray-400 text-sm">CI/CD Pipelines</p>
            </div>
            <div className="text-center">
              <Users className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <h3 className="font-semibold text-white">Team Collaboration</h3>
              <p className="text-gray-400 text-sm">Agile & DevOps</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Course Modules */}
          <div className="glass-effect rounded-2xl p-8 neon-border">
            <h2 className="text-2xl font-bold mb-6 text-yellow-400">Course Modules</h2>
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
                <div key={idx} className="bg-gradient-to-r from-yellow-500/20 to-red-500/20 rounded-lg p-3 text-center">
                  <span className="text-white font-medium">{skill}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-yellow-500/10 to-red-500/10 rounded-lg border border-yellow-500/20">
              <h3 className="text-xl font-bold mb-3 text-yellow-400">Career Opportunities</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• DevOps Engineer</li>
                <li>• Cloud Engineer</li>
                <li>• Site Reliability Engineer (SRE)</li>
                <li>• Platform Engineer</li>
                <li>• Automation Engineer</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Enrollment CTA */}
        <div className="mt-12 text-center">
          <div className="glass-effect rounded-2xl p-8 neon-border">
            <h2 className="text-3xl font-bold mb-4 gradient-text">Ready to Automate and Deploy Faster?</h2>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Build production-ready pipelines and infrastructure with modern DevOps tools and practices.
            </p>
            <a
              href="https://form.finalform.so/forms/FEAH0emy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-500 to-red-600 px-8 py-3 rounded-lg font-semibold hover:from-yellow-400 hover:to-red-500 transition-all transform hover:scale-105"
            >
              <span>Enroll Now</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}