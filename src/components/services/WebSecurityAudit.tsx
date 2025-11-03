import { Shield, Globe, BookOpen, ArrowRight } from 'lucide-react';

export default function WebSecurityAudit() {
  return (
    <section className="relative py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold gradient-text">Web Security Audit</h1>
          <p className="text-gray-400 mt-3 max-w-3xl">
            Comprehensive web and API security assessments including OWASP testing, authenticated scans, and remediation guidance.
            Learn best practices for secure design and testing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="glass-effect rounded-2xl p-6 neon-border">
              <h2 className="text-xl font-semibold text-cyan-400 mb-3">What You’ll Learn</h2>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>OWASP Top 10 and web application security fundamentals</li>
                <li>API security testing and common vulnerabilities</li>
                <li>Secure configuration and remediation planning</li>
                <li>Reporting and stakeholder communication</li>
              </ul>
            </div>

            <div className="glass-effect rounded-2xl p-6 neon-border">
              <h2 className="text-xl font-semibold text-cyan-400 mb-3">Training Modules</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { icon: Shield, title: 'OWASP Testing' },
                  { icon: Globe, title: 'API Security' },
                  { icon: BookOpen, title: 'Secure Config' },
                  { icon: Shield, title: 'Reporting & Remediation' },
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
              <p className="text-gray-300">Developers, QA engineers, and teams responsible for web/app security.</p>
            </div>
            <div className="glass-effect rounded-2xl p-6 neon-border">
              <h3 className="text-lg font-semibold text-cyan-400 mb-2">Outcomes</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Ability to identify and fix web security issues</li>
                <li>Improved API and application hardening</li>
                <li>Actionable audit reports</li>
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