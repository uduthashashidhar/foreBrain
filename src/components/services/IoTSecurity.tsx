import { Cpu, Wifi, BookOpen, ArrowRight } from 'lucide-react';

export default function IoTSecurity() {
  return (
    <section className="relative py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold gradient-text">Edge / IoT Security</h1>
          <p className="text-gray-400 mt-3 max-w-3xl">
            Lightweight security assessments and hardening guidance for IoT devices, NB-IoT and embedded systems—ideal for EV/ISRO context and constrained environments.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="glass-effect rounded-2xl p-6 neon-border">
              <h2 className="text-xl font-semibold text-cyan-400 mb-3">What You’ll Learn</h2>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>IoT threat models and security fundamentals</li>
                <li>Firmware, wireless, and device hardening</li>
                <li>Secure communication and update strategies</li>
                <li>Testing approaches for embedded systems</li>
              </ul>
            </div>

            <div className="glass-effect rounded-2xl p-6 neon-border">
              <h2 className="text-xl font-semibold text-cyan-400 mb-3">Training Modules</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { icon: Cpu, title: 'Embedded Basics' },
                  { icon: Wifi, title: 'Wireless Security' },
                  { icon: BookOpen, title: 'Hardening & Testing' },
                  { icon: Cpu, title: 'Secure Updates' },
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
              <p className="text-gray-300">Teams building IoT, embedded devices, or connected products.</p>
            </div>
            <div className="glass-effect rounded-2xl p-6 neon-border">
              <h3 className="text-lg font-semibold text-cyan-400 mb-2">Outcomes</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Stronger device security posture</li>
                <li>Practical hardening strategies</li>
                <li>Improved testing coverage</li>
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