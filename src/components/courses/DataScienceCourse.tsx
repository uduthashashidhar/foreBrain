import { Cpu, Clock, TrendingUp, CheckCircle, ArrowLeft, Users, Award, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DataScienceCourse() {
  const modules = [
    'Introduction to Data Science',
    'Python for Data Analysis',
    'Statistics & Probability',
    'Data Wrangling with Pandas',
    'Data Visualization (Matplotlib/Seaborn)',
    'Machine Learning Basics',
    'Supervised & Unsupervised Learning',
    'Feature Engineering',
    'Model Evaluation & Tuning',
    'Time Series Analysis',
    'MLOps & Deployment',
    'Capstone Project'
  ];

  const skills = [
    'Exploratory Data Analysis',
    'Data Visualization',
    'Machine Learning',
    'Feature Engineering',
    'Model Deployment',
    'SQL & NoSQL',
    'Statistics',
    'Python (Pandas/Numpy)'
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
            <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-blue-500 to-red-600 flex items-center justify-center">
              <Cpu className="w-10 h-10 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2 gradient-text">Data Science</h1>
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
            Learn to transform raw data into actionable insights with our comprehensive 10-week Data Science course. 
            Master data analysis, machine learning, and model deployment through hands-on projects and real-world datasets.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <Award className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
              <h3 className="font-semibold text-white">Data Certification</h3>
              <p className="text-gray-400 text-sm">IBM & AWS Data</p>
            </div>
            <div className="text-center">
              <BookOpen className="w-8 h-8 text-blue-400 mx-auto mb-2" />
              <h3 className="font-semibold text-white">Project Based</h3>
              <p className="text-gray-400 text-sm">5+ Real Datasets</p>
            </div>
            <div className="text-center">
              <Users className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <h3 className="font-semibold text-white">Career Ready</h3>
              <p className="text-gray-400 text-sm">Portfolio Projects</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Course Modules */}
          <div className="glass-effect rounded-2xl p-8 neon-border">
            <h2 className="text-2xl font-bold mb-6 text-blue-400">Course Modules</h2>
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
                <div key={idx} className="bg-gradient-to-r from-blue-500/20 to-red-500/20 rounded-lg p-3 text-center">
                  <span className="text-white font-medium">{skill}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-blue-500/10 to-red-500/10 rounded-lg border border-blue-500/20">
              <h3 className="text-xl font-bold mb-3 text-blue-400">Career Opportunities</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Data Scientist</li>
                <li>• Machine Learning Engineer</li>
                <li>• Data Analyst</li>
                <li>• BI Engineer</li>
                <li>• MLOps Engineer</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Enrollment CTA */}
        <div className="mt-12 text-center">
          <div className="glass-effect rounded-2xl p-8 neon-border">
            <h2 className="text-3xl font-bold mb-4 gradient-text">Ready to Unlock Insights from Data?</h2>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Learn data science techniques to analyze, model, and deploy solutions that drive business decisions.
            </p>
            <a
              href="https://form.finalform.so/forms/FEAH0emy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-red-600 px-8 py-3 rounded-lg font-semibold hover:from-blue-400 hover:to-red-500 transition-all transform hover:scale-105"
            >
              <span>Enroll Now</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}