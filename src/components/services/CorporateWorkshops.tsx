import { Users, Presentation, BookOpen, ArrowRight } from 'lucide-react';

export default function CorporateWorkshops() {
  return (
    <section className="relative py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold gradient-text">Corporate Workshops</h1>
          <p className="text-gray-400 mt-3 max-w-3xl">
            Custom workshops for enterprises and universities—phishing simulation, secure coding, SOC fundamentals, and awareness training tailored to your team’s needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="glass-effect rounded-2xl p-6 neon-border">
              <h2 className="text-xl font-semibold text-cyan-400 mb-3">What You’ll Learn</h2>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Security awareness and best practices</li>
                <li>Secure coding in common stacks</li>
                <li>SOC fundamentals and incident basics</li>
                <li>Team exercises and simulations</li>
              </ul>
            </div>

            <div className="glass-effect rounded-2xl p-6 neon-border">
              <h2 className="text-xl font-semibold text-cyan-400 mb-3">Workshop Tracks</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { icon: Presentation, title: 'Security Awareness' },
                  { icon: Users, title: 'Team Simulation' },
                  { icon: BookOpen, title: 'Secure Coding' },
                  { icon: Presentation, title: 'SOC Basics' },
                ].map((m, idx) => (
                  <div key={idx} className="glass-effect rounded-xl p-4 flex items-center space-x-3">
                    <m.icon className="w-6 h-6 text-cyan-400" />
                    <span className="text-gray-300">{m.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="glass-effect rounded-2xl p-6 neon-border">
              <h3 className="text-lg font-semibold text-cyan-400 mb-2">Who It’s For</h3>
              <p className="text-gray-300">Corporate teams and universities aiming to upskill on security.</p>
            </div>
            <div className="glass-effect rounded-2xl p-6 neon-border">
              <h3 className="text-lg font-semibold text-cyan-400 mb-2">Outcomes</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Improved security posture and awareness</li>
                <li>Hands-on practice with real scenarios</li>
                <li>Actionable next steps for teams</li>
              </ul>
            </div>
            <a href="#contact" className="inline-flex items-center space-x-2 text-cyan-400 font-semibold hover:text-cyan-300">
              <span>Request Info</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}