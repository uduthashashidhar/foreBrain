import { Shield, Clock, CheckCircle, ArrowLeft, Users, Award, BookOpen, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function CybersecurityCourse() {
  // Content updated to Forebrain — 6-Month Cybersecurity Professional Program
  
  // Syllabus download: look for any file named Forebrain_6_Month_Curriculum.* in assets/cource doc
  const syllabusUrl = (() => {
    const files = import.meta.glob('../../assets/cource doc/Forebrain_6_Month_Curriculum.*', {
      as: 'url',
      eager: true,
    });
    const urls = Object.values(files) as string[];
    return urls[0];
  })();
  const [activeTab, setActiveTab] = useState<'soc' | 'pentest'>('soc');
  
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
              <h1 className="text-3xl md:text-4xl font-bold mb-2 gradient-text">Forebrain — 6-Month Cybersecurity Professional Program</h1>
              <div className="flex items-center space-x-6 text-sm">
                <span className="flex items-center text-cyan-400">
                  <Clock className="w-4 h-4 mr-1" />
                  24 Weeks (6 Months)
                </span>
                <span className="flex items-center text-purple-400">
                  <Users className="w-4 h-4 mr-1" />
                  Blended — Instructor-led + TA Support
                </span>
                <span className="flex items-center text-green-400">
                  <Award className="w-4 h-4 mr-1" />
                  Hands-on labs, tools, real projects, capstone
                </span>
              </div>
            </div>
          </div>
          <p className="text-gray-300 text-lg leading-relaxed mb-2">
            A comprehensive, hands-on cybersecurity program designed to transform beginners into job-ready
            Cybersecurity Analysts, Pentesters, and Blue Teamers.
          </p>
        </div>

        {/* Key Outcomes */}
        <div className="glass-effect rounded-2xl p-8 neon-border mb-8">
          <h2 className="text-2xl font-bold mb-4 text-cyan-400">What You Will Learn</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Defensive & offensive cybersecurity',
              'SOC operations, SIEM, IDS, forensics',
              'Web app security, exploitation, OSINT',
              'Red team & blue team methodologies',
              'Linux, networking, cryptography',
              'Cloud, AD, API and mobile security',
              'Research, documentation & reporting',
              'Industry-grade capstone project',
            ].map((item, idx) => (
              <div key={idx} className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Curriculum */}
        <div className="glass-effect rounded-2xl p-8 neon-border mb-8">
          <h2 className="text-2xl font-bold mb-2 text-purple-400">Curriculum — 24 Weeks</h2>
          <p className="text-gray-400 mb-6">Six modules covering foundations, offensive and defensive security, advanced topics, and a capstone.</p>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Module A — Foundations & Environment (Weeks 1–4)</h3>
              <ul className="text-gray-300 space-y-1">
                <li>• Week 1: Lab Setup & Linux Essentials — VirtualBox/VMware, Kali & Windows setup; Linux navigation, permissions, Git basics; SSH connectivity testing. Tools: VirtualBox, Kali, Windows VM, Git, VS Code</li>
                <li>• Week 2: Networking & Packet Capture — TCP/IP, ports, subnetting; Packet sniffing & Wireshark analysis. Tools: Wireshark, tcpdump, netstat</li>
                <li>• Week 3: Windows Internals & Scripting Basics — Event logs, PowerShell; Python/Bash automation. Tools: PowerShell, Python, Notepad++</li>
                <li>• Week 4: Security Fundamentals & Cryptography — AES, RSA, hashing, TLS; TLS handshake capture. Tools: openssl, Wireshark</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-2">Module B — Core Security (Weeks 5–8)</h3>
              <ul className="text-gray-300 space-y-1">
                <li>• Week 5: OWASP Top 10 & Vulnerable Web App — Tools: OWASP Juice Shop, DVWA, Burp Suite, sqlmap</li>
                <li>• Week 6: Threat Modeling (STRIDE) — Tools: draw.io, threat modeling templates</li>
                <li>• Week 7: Manual Web App Testing — Parameter tampering, session testing. Tools: Burp Suite, Firefox Developer Tools</li>
                <li>• Week 8: OSINT & Passive Recon — Tools: Amass, Subfinder, Shodan, theHarvester</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-2">Module C — Offensive Security (Weeks 9–12)</h3>
              <ul className="text-gray-300 space-y-1">
                <li>• Week 9: Scanning & Vulnerability Assessment — Tools: Nmap, OpenVAS/Nessus, Nikto</li>
                <li>• Week 10: Exploitation & Metasploit — Exploit → Configure → Shell → Post-exploit. Tools: Metasploit, searchsploit, msfvenom</li>
                <li>• Week 11: SQLi, XSS & Business Logic Exploits — Tools: Burp Suite, sqlmap, Python scripts</li>
                <li>• Week 12: Post Exploitation & Reporting — Persistence, lateral movement; Professional pentest report</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-2">Module D — Blue Team & Detection (Weeks 13–16)</h3>
              <ul className="text-gray-300 space-y-1">
                <li>• Week 13: SIEM — ELK / Splunk — Tools: ELK, Filebeat, Splunk</li>
                <li>• Week 14: IDS — Zeek & Suricata — Tools: Suricata, Zeek, Wireshark</li>
                <li>• Week 15: Endpoint Forensics — Tools: Volatility3, Autopsy, FTK Imager</li>
                <li>• Week 16: Threat Hunting & Detection Engineering — Tools: Sigma, YARA, Kibana, Splunk</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-2">Module E — Advanced Topics (Weeks 17–20)</h3>
              <ul className="text-gray-300 space-y-1">
                <li>• Week 17: Active Directory Security — Tools: BloodHound, PowerView, Rubeus</li>
                <li>• Week 18: Cloud Security — Tools: AWS Lab, ScoutSuite, Prowler</li>
                <li>• Week 19: API & Mobile Security — Tools: Postman, Burp, MobSF</li>
                <li>• Week 20: Research Methods — Research proposal writing; Experiment design. Tools: Scholar, Zotero, Jupyter</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-2">Module F — Capstone & Career Prep (Weeks 21–24)</h3>
              <ul className="text-gray-300 space-y-1">
                <li>• Week 21: Capstone Planning — Red & Blue team formation; Rules of Engagement</li>
                <li>• Week 22: Red Team Offensive Phase — Controlled exploitation; Evidence & logs</li>
                <li>• Week 23: Blue Team IR Phase — Detection → Containment → Remediation; Incident report + timeline</li>
                <li>• Week 24: Final Presentations & Job Day — Capstone presentation; Resume review; Mock interviews</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Deliverables */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="glass-effect rounded-2xl p-8 neon-border">
            <h2 className="text-2xl font-bold mb-4 text-cyan-400">What You Get</h2>
            <ul className="text-gray-300 space-y-2">
              <li>• Forebrain 6-Month Cybersecurity Professional Certificate</li>
              <li>• Capstone portfolio + reports</li>
              <li>• SIEM dashboards</li>
              <li>• Pentest reports</li>
              <li>• Research paper</li>
              <li>• GitHub project library</li>
              <li>• Job & interview readiness</li>
            </ul>
          </div>
          <div className="glass-effect rounded-2xl p-8 neon-border">
            <h2 className="text-2xl font-bold mb-4 text-purple-400">Perfect For</h2>
            <ul className="text-gray-300 space-y-2">
              <li>• Students entering cybersecurity</li>
              <li>• IT professionals transitioning into cyber</li>
              <li>• Anyone aiming for roles in SOC, Pentesting, IR, or Vulnerability Assessment</li>
            </ul>
          </div>
        </div>

        {/* Explore More Courses (3 Months) */}
        <div className="mt-12">
          <div className="glass-effect rounded-2xl p-8 neon-border">
            <h2 className="text-2xl font-bold mb-6 gradient-text">Explore More Cybersecurity Courses — 3 Months</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link to="/courses/cybersecurity/penetration-testing-ethical-hacking" className="group relative overflow-hidden rounded-xl p-4 bg-gradient-to-br from-cyan-700/30 to-blue-700/30 border border-cyan-500/30 hover:border-cyan-400/60 transition-all float-smooth pop-hover">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">⚔️</span>
                  <span className="font-semibold text-white group-hover:text-cyan-200">Penetration Testing & Ethical Hacking</span>
                </div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-cyan-500/10 to-blue-500/10" />
              </Link>

              <Link to="/courses/cybersecurity/soc-analyst-incident-response" className="group relative overflow-hidden rounded-xl p-4 bg-gradient-to-br from-purple-700/30 to-pink-700/30 border border-purple-500/30 hover:border-purple-400/60 transition-all float-smooth pop-hover">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🧠</span>
                  <span className="font-semibold text-white group-hover:text-purple-200">SOC Analyst & Incident Response</span>
                </div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-purple-500/10 to-pink-500/10" />
              </Link>

              <Link to="/courses/cybersecurity/ethical-hacking-bug-bounty" className="group relative overflow-hidden rounded-xl p-4 bg-gradient-to-br from-rose-700/30 to-orange-700/30 border border-rose-500/30 hover:border-rose-400/60 transition-all float-smooth pop-hover">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🧩</span>
                  <span className="font-semibold text-white group-hover:text-rose-200">Ethical Hacking & Bug Bounty</span>
                </div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-rose-500/10 to-orange-500/10" />
              </Link>

              <Link to="/courses/cybersecurity/digital-forensics-malware-analysis" className="group relative overflow-hidden rounded-xl p-4 bg-gradient-to-br from-blue-700/30 to-indigo-700/30 border border-indigo-500/30 hover:border-indigo-400/60 transition-all float-smooth pop-hover">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🧬</span>
                  <span className="font-semibold text-white group-hover:text-indigo-200">Digital Forensics & Malware Analysis</span>
                </div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-blue-500/10 to-indigo-500/10" />
              </Link>

              <Link to="/courses/cybersecurity/cloud-security-devsecops" className="group relative overflow-hidden rounded-xl p-4 bg-gradient-to-br from-teal-700/30 to-emerald-700/30 border border-teal-500/30 hover:border-teal-400/60 transition-all float-smooth pop-hover">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">☁️</span>
                  <span className="font-semibold text-white group-hover:text-teal-200">Cloud Security & DevSecOps</span>
                </div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-teal-500/10 to-emerald-500/10" />
              </Link>

              <Link to="/courses/cybersecurity/blue-team-threat-hunting" className="group relative overflow-hidden rounded-xl p-4 bg-gradient-to-br from-sky-700/30 to-blue-800/30 border border-sky-500/30 hover:border-sky-400/60 transition-all">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🔵</span>
                  <span className="font-semibold text-white group-hover:text-sky-200">Blue Team Operations & Threat Hunting</span>
                </div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-sky-500/10 to-blue-700/10" />
              </Link>
            </div>
          </div>
        </div>

        {/* Advanced Cybersecurity Courses */}
        <div className="mt-12">
          <div className="glass-effect rounded-2xl p-8 neon-border">
            <h2 className="text-2xl font-bold mb-6 gradient-text">Advanced Cybersecurity Courses</h2>
            <div>
              <div className="flex justify-center space-x-4 mb-6">
                <button 
                  onClick={() => setActiveTab('soc')} 
                  className={`px-4 py-2 rounded-lg border transition-all pop-hover ${activeTab === 'soc' ? 'bg-purple-600/30 border-purple-400 text-white' : 'bg-purple-700/20 border-purple-500/40 text-purple-200 hover:border-purple-400/60'}`}
                >
                  Advanced SOC Analyst
                </button>
                <button 
                  onClick={() => setActiveTab('pentest')} 
                  className={`px-4 py-2 rounded-lg border transition-all pop-hover ${activeTab === 'pentest' ? 'bg-cyan-600/30 border-cyan-400 text-white' : 'bg-cyan-700/20 border-cyan-500/40 text-cyan-200 hover:border-cyan-400/60'}`}
                >
                  Advanced Pentesting
                </button>
              </div>

              {activeTab === 'soc' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-white">Advanced SOC Analyst</h3>
                    <p className="text-gray-300">Deep dive into detection engineering, threat hunting, and IR playbooks with real-world simulations.</p>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Advanced SIEM (Splunk/ELK) detections</li>
                      <li>• Sigma/YARA rule engineering</li>
                      <li>• Threat hunting methodologies</li>
                      <li>• Blue team capstone</li>
                    </ul>
                  </div>
                  <div className="flex items-end md:items-center">
                    <Link 
                      to="/courses/cybersecurity/advanced-soc-analyst" 
                      className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-600 px-6 py-3 rounded-lg font-semibold hover:from-purple-400 hover:to-pink-500 transition-all pop-hover"
                    >
                      <span>View Full Details</span>
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-white">Advanced Pentesting</h3>
                    <p className="text-gray-300">Advanced exploitation, web/API testing at depth, and a team-based red/blue capstone.</p>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Exploit chaining & custom payloads</li>
                      <li>• Advanced web & API testing</li>
                      <li>• OpSec-aware operations</li>
                      <li>• Capstone engagement</li>
                    </ul>
                  </div>
                  <div className="flex items-end md:items-center">
                    <Link 
                      to="/courses/cybersecurity/advanced-pentesting" 
                      className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 rounded-lg font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all pop-hover"
                    >
                      <span>View Full Details</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Enrollment CTA */}
        <div className="mt-12 text-center">
          <div className="glass-effect rounded-2xl p-8 neon-border">
            <h2 className="text-3xl font-bold mb-4 gradient-text">Ready to Start Your Cybersecurity Journey?</h2>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Join the Forebrain 6-month program to become job-ready with hands-on labs and an industry-grade capstone.
            </p>
            <Link 
              to="/#contact" 
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-3 rounded-lg font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all transform hover:scale-105"
            >
              <span>Enroll Now</span>
            </Link>
            <div className="mt-4">
              {syllabusUrl ? (
                <a
                  href={syllabusUrl}
                  download="Forebrain_6_Month_Curriculum"
                  className="group relative inline-flex items-center space-x-2 px-7 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 shadow-[0_8px_24px_rgba(34,211,238,0.25)] hover:shadow-[0_12px_28px_rgba(34,211,238,0.35)] transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
                >
                  <Download className="w-5 h-5 transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-105" />
                  <span>Download Syllabus</span>
                </a>
              ) : (
                <button
                  className="inline-flex items-center space-x-2 px-7 py-3 rounded-xl border border-gray-600/60 text-gray-400 bg-gray-800/30 cursor-not-allowed"
                  title="Syllabus will be available soon"
                >
                  <Download className="w-5 h-5" />
                  <span>Syllabus Coming Soon</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}