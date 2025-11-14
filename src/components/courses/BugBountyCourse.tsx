import { Bug, ArrowLeft, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

// Discover syllabus file URL dynamically (PDF/DOCX) from assets
const syllabusGlob = import.meta.glob('/src/assets/**/*.{pdf,docx}', { eager: true, as: 'url' });
const syllabusCandidates = [
  'Forebrain_EthicalHacking_BugBounty_3Month_Syllabus',
  'Forebrain_BugBounty_3Month_Syllabus',
  'Forebrain_EthicalHacking_3Month_Syllabus'
];
const resolveSyllabusUrl = (): string | undefined => {
  for (const path in syllabusGlob) {
    const fname = path.split('/').pop()?.toLowerCase() || '';
    if (syllabusCandidates.some((c) => fname.startsWith(c.toLowerCase()))) {
      return (syllabusGlob as Record<string, string>)[path];
    }
  }
  return undefined;
};

export default function BugBountyCourse() {
  const syllabusUrl = resolveSyllabusUrl();

  return (
    <div className="relative min-h-screen bg-[#050510] text-white">
      <div className="cyber-grid fixed inset-0 z-0 opacity-30" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Link to="/courses/cybersecurity" className="inline-flex items-center space-x-2 text-rose-400 hover:text-rose-300 transition-colors mb-8">
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Cybersecurity</span>
        </Link>

        {/* Header */}
        <div className="glass-effect rounded-2xl p-8 neon-border mb-8">
          <div className="flex items-center space-x-6 mb-6">
            <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-rose-500 to-orange-600 flex items-center justify-center">
              <Bug className="w-10 h-10 text-white" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2 gradient-text">🕵️ Ethical Hacking & Bug Bounty (3-Month Program)</h1>
              <p className="text-gray-400">12-week practical program — recon, exploitation, write-ups, and live hunting.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-xl font-bold mb-2 text-orange-300">Program Duration</h2>
              <ul className="text-gray-300 space-y-1">
                <li>• 3 Months (12 Weeks / 60 Days)</li>
                <li>• Format: 1 hr class + 1 hr lab practice (Mon–Fri)</li>
                <li>• Saturday: Activity Day — live hunting, write-ups, guest sessions</li>
                <li>• Learning Style: 90% Practical, 10% Theory</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-2 text-orange-300">Program Outcome</h2>
              {[
                'Learn responsible disclosure & bug bounty fundamentals',
                'Perform advanced recon & automation',
                'Test web apps, APIs, and cloud misconfigurations',
                'Discover and exploit OWASP Top 10 vulnerabilities',
                'Create professional vulnerability reports',
                'Build a bug bounty portfolio with real PoC write-ups',
                'Participate in a simulated bug-hunting capstone',
                'Prepare for HackerOne, Bugcrowd & private bounty programs',
              ].map((item, idx) => (
                <div key={idx} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Program Structure */}
        <div className="glass-effect rounded-2xl p-8 neon-border mb-8">
          <h2 className="text-2xl font-bold mb-2 text-rose-400">Program Structure (Phase-Wise)</h2>
          <div className="space-y-8">
            {/* Phase 1 */}
            <div>
              <h3 className="text-xl font-bold text-white mb-1">🔵 Phase 1 — Foundations & Recon for Bug Bounty (Weeks 1–3)</h3>
              <p className="text-gray-400 mb-2">Master recon — the most important bug bounty skill.</p>
              <h4 className="text-lg font-semibold text-orange-300">Topics Covered</h4>
              <ul className="text-gray-300 space-y-1 mt-1">
                <li>• Bug bounty platforms: HackerOne, Bugcrowd, Open Bug Bounty</li>
                <li>• Program scopes, rules of engagement & legal boundaries</li>
                <li>• OSINT & passive recon: Amass, Subfinder, crt.sh, Wayback</li>
                <li>• Subdomain enumeration & takeover detection</li>
                <li>• Tech stack fingerprinting: Wappalyzer, WhatWeb</li>
                <li>• Automation for recon: ffuf, aquatone, masscan</li>
              </ul>
              <h4 className="text-lg font-semibold text-orange-300 mt-3">Practical Assignment I</h4>
              <p className="text-gray-300">Recon Pack: Asset Inventory + Live Subdomains + Priority Target List</p>
            </div>

            {/* Phase 2 */}
            <div>
              <h3 className="text-xl font-bold text-white mb-1">🟠 Phase 2 — Web Vulnerabilities & Hunting Techniques (Weeks 4–6)</h3>
              <p className="text-gray-400 mb-2">Deep-dive into high-impact web vulnerabilities and PoC generation.</p>
              <h4 className="text-lg font-semibold text-amber-300">Topics Covered</h4>
              <ul className="text-gray-300 space-y-1 mt-1">
                <li>• OWASP Top 10 (bug bounty perspective)</li>
                <li>• Burp Suite mastery (proxy, repeater, intruder, Collaborator)</li>
                <li>• Manual testing: parameter tampering, logic flaws, IDOR, auth bypass</li>
                <li>• Automation tools: Nuclei, Nikto, ZAP scan templates</li>
                <li>• Exploiting: SQLi, XSS, SSRF, XXE, blind attacks</li>
                <li>• API testing: JWT, rate-limit bypass, API fuzzing</li>
              </ul>
              <h4 className="text-lg font-semibold text-amber-300 mt-3">Practical Assignment II</h4>
              <p className="text-gray-300">Web Bounty Write-up: PoC + Vulnerability Report + Remediation</p>
            </div>

            {/* Phase 3 */}
            <div>
              <h3 className="text-xl font-bold text-white mb-1">🟢 Phase 3 — Advanced Targets & Specialized Hunting (Weeks 7–9)</h3>
              <p className="text-gray-400 mb-2">Explore high-value, less-common vulnerability categories.</p>
              <h4 className="text-lg font-semibold text-emerald-300">Topics Covered</h4>
              <ul className="text-gray-300 space-y-1 mt-1">
                <li>• Advanced recon pipeline & endpoint discovery</li>
                <li>• Subdomain takeover & cloud misconfiguration hunting (S3, Azure Blob)</li>
                <li>• Mobile security basics: Android/iOS overview</li>
                <li>• API pentesting advanced techniques</li>
                <li>• WAF bypassing & sanitization bypasses</li>
                <li>• Writing custom Burp Extensions & automation scripts</li>
                <li>• Safe proof-of-concept generation</li>
              </ul>
              <h4 className="text-lg font-semibold text-emerald-300 mt-3">Practical Assignment III</h4>
              <p className="text-gray-300">Advanced Hunt: Cloud Misconfiguration or Subdomain Takeover PoC (Lab-Safe)</p>
            </div>

            {/* Phase 4 */}
            <div>
              <h3 className="text-xl font-bold text-white mb-1">🔴 Phase 4 — Reporting, Disclosure & Capstone (Weeks 10–12)</h3>
              <p className="text-gray-400 mb-2">Learn the business side of bug bounty + final hunting challenge.</p>
              <h4 className="text-lg font-semibold text-rose-300">Topics Covered</h4>
              <ul className="text-gray-300 space-y-1 mt-1">
                <li>• Writing high-quality vulnerability reports</li>
                <li>• Executive summary, technical details, impact, remediation</li>
                <li>• Responsible disclosure policies & communication</li>
                <li>• Monetization strategies & private program selection</li>
                <li>• Building a professional bug bounty portfolio</li>
                <li>• Capstone: simulated live bug-hunting engagement</li>
              </ul>
              <h4 className="text-lg font-semibold text-rose-300 mt-3">Capstone Deliverables</h4>
              <ul className="text-gray-300 space-y-1 mt-1">
                <li>• 3+ professional write-ups</li>
                <li>• PoC artifacts (screenshots, scripts, curl commands)</li>
                <li>• Final Capstone Vulnerability Report</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tools & Technologies Covered */}
        <div className="glass-effect rounded-2xl p-8 neon-border mb-8">
          <h2 className="text-2xl font-bold mb-4 text-orange-300">Tools & Technologies Covered</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-white mb-2">Recon & Discovery</h3>
              <p className="text-gray-300">Amass, Subfinder, crt.sh, Wayback Machine, Shodan, masscan, aquatone, ffuf</p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Web Pentesting</h3>
              <p className="text-gray-300">Burp Suite (Pro/Community), Burp Collaborator, OWASP ZAP, sqlmap, Nikto, Nuclei, dirsearch</p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">API & Mobile Testing</h3>
              <p className="text-gray-300">Postman, jwt.io, Burp Mobile Assistant, Frida (conceptual)</p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Scripting & Automation</h3>
              <p className="text-gray-300">Python, Bash, custom Burp extensions</p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Bug Bounty Platforms & Reporting</h3>
              <p className="text-gray-300">HackerOne, Bugcrowd, GitHub Security Advisories, Markdown, PoC tools</p>
            </div>
          </div>
        </div>

        {/* Deliverables & Assessment */}
        <div className="glass-effect rounded-2xl p-8 neon-border mb-8">
          <h2 className="text-2xl font-bold mb-3 text-rose-400">Deliverables & Assessment</h2>
          <ul className="text-gray-300 space-y-1">
            <li>• Recon Pack</li>
            <li>• Three full vulnerability write-ups</li>
            <li>• Capstone Live Hunt Report</li>
            <li>• Weekly labs & hunting logs</li>
            <li>• Guidance for real-world platform submissions</li>
          </ul>
        </div>

        {/* What Students Gain */}
        <div className="glass-effect rounded-2xl p-8 neon-border mb-8">
          <h2 className="text-2xl font-bold mb-3 text-orange-300">What Students Gain</h2>
          <ul className="text-gray-300 space-y-1">
            <li>• Strong bug bounty & web hacking skills</li>
            <li>• Confidence to hunt on real platforms</li>
            <li>• A professional portfolio of vulnerabilities</li>
            <li>• Ability to build automation tools</li>
            <li>• Knowledge to participate in private programs</li>
          </ul>
        </div>

        {/* Enrollment CTA */}
        <div className="mt-12">
          <div className="glass-effect rounded-2xl p-8 neon-border">
            <h2 className="text-2xl font-bold mb-3 gradient-text text-center">Enroll & Download</h2>
            <div className="mt-2 flex justify-center gap-4">
              <a
                href="https://form.finalform.so/forms/FEAH0emy"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-rose-600 to-orange-600 hover:from-rose-500 hover:to-orange-500 transition-colors font-semibold pop-hover"
              >
                Enroll Now
              </a>
              {syllabusUrl ? (
                <a 
                  href={syllabusUrl}
                  download="Forebrain_EthicalHacking_BugBounty_3Month_Syllabus"
                  className="px-6 py-3 rounded-lg bg-gradient-to-r from-gray-700 to-slate-700 hover:from-gray-600 hover:to-slate-600 transition-colors font-semibold pop-hover"
                >
                  Download Syllabus
                </a>
              ) : (
                <button 
                  disabled
                  className="px-6 py-3 rounded-lg bg-gray-800 text-gray-500 cursor-not-allowed font-semibold"
                >
                  Syllabus Coming Soon
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}