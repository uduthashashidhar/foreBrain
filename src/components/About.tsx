import { Target, Eye, Zap } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              About foreBrain Innovations
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              We are a leading technology education company committed to bridging the gap between
              academic learning and industry requirements. Our mission is to empower aspiring
              technologists with practical skills, real-world experience, and industry connections.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              Founded by industry veterans and education enthusiasts, foreBrain Innovations
              combines cutting-edge curriculum with hands-on training methodologies. We partner
              with top tech companies to ensure our students are job-ready from day one.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-4 glass-effect rounded-xl p-4 neon-border">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-cyan-400">Our Mission</h3>
                  <p className="text-gray-400">
                    To democratize tech education and create a pipeline of skilled professionals
                    ready to tackle tomorrow's challenges.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 glass-effect rounded-xl p-4 neon-border">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center flex-shrink-0">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-purple-400">Our Vision</h3>
                  <p className="text-gray-400">
                    To be the premier destination for tech education, recognized globally for
                    excellence and innovation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative glass-effect rounded-2xl p-8 neon-border">
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl animate-pulse-slow" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-600/20 rounded-full blur-2xl animate-pulse-slow" style={{ animationDelay: '1s' }} />

              <div className="relative aspect-square rounded-xl bg-gradient-to-br from-cyan-500/10 to-purple-600/10 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 cyber-grid opacity-30" />
                <div className="relative z-10 text-center">
                  <Zap className="w-24 h-24 text-cyan-400 mx-auto mb-6 animate-float" />
                  <div className="space-y-6">
                    <div className="flex items-center justify-center space-x-3">
                      <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />
                      <span className="text-gray-300 font-semibold">Innovation</span>
                    </div>
                    <div className="flex items-center justify-center space-x-3">
                      <div className="w-3 h-3 rounded-full bg-purple-400 animate-pulse" style={{ animationDelay: '0.3s' }} />
                      <span className="text-gray-300 font-semibold">Excellence</span>
                    </div>
                    <div className="flex items-center justify-center space-x-3">
                      <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" style={{ animationDelay: '0.6s' }} />
                      <span className="text-gray-300 font-semibold">Empowerment</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
