import { Shield, ArrowLeft, Clock, CheckCircle, BookOpen, Award, Target, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PenetrationTestingCourse() {
  // Find syllabus file URL by prefix anywhere under src/assets
  const syllabusUrl = (() => {
    const files = import.meta.glob('/src/assets/**/Forebrain_PenTest_EthicalHacking_3Month_Syllabus.*', {
      eager: true,
      as: 'url',
    }) as unknown as Record<string, string>;
    const first = Object.values(files)[0];
    return first;
  })();
  const hasSyllabus = Boolean(syllabusUrl);
  return (
    <div className="relative min-h-screen bg-[#050510] text-white">
      <div className="cyber-grid fixed inset-0 z-0 opacity-30" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Link to="/courses/cybersecurity" className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-8">
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Cybersecurity</span>
        </Link>
        {/* Hero */}
        <div className="glass-effect rounded-2xl p-8 neon-border mb-12">
          <div className="flex items-center space-x-6 mb-6">
            <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2 gradient-text">⚡ Forebrain — Penetration Testing & Ethical Hacking (3-Month Program)</h1>
              <p className="text-gray-300">A fully practical, 12-week program focused on real-world offensive security skills.</p>
              <div className="flex items-center space-x-6 text-sm mt-2">
                <span className="flex items-center text-cyan-400"><Clock className="w-4 h-4 mr-1" /> 3 Months (12 Weeks)</span>
                <span className="flex items-center text-purple-400"><BookOpen className="w-4 h-4 mr-1" /> 1 hr class + 1 hr lab, Mon–Fri</span>
                <span className="flex items-center text-green-400"><Award className="w-4 h-4 mr-1" /> 85% Practical — 15% Theory</span>
              </div>
            </div>
          </div>
          <p className="text-gray-300 leading-relaxed">
            A fully practical, 12-week penetration testing training program designed to build real-world offensive security skills with hands-on labs, daily practice, and industry-focused assignments.
          </p>
        </div>

        {/* Outcomes */}
        <div className="glass-effect rounded-2xl p-8 neon-border mb-8">
          <h2 className="text-2xl font-bold mb-4 text-cyan-400">Program Outcome</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Strong foundational pentesting skills',
              'Complete understanding of recon, exploitation & reporting',
              'Hands-on experience with industry tools',
              '3 practical projects + 1 full capstone',
              'Portfolio-ready reports',
              'Pathway to eJPT / OSCP beginner-level readiness',
            ].map((item, idx) => (
              <div key={idx} className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Structure */}
        <div className="glass-effect rounded-2xl p-8 neon-border mb-8">
          <h2 className="text-2xl font-bold mb-2 text-purple-400">Program Structure (Phase-Wise)</h2>
          <div className="space-y-6">
            {/* Phase 1 */}
            <div>
              <h3 className="text-xl font-bold text-white mb-1">🔵 Phase 1 — Foundations & Recon (Weeks 1–3)</h3>
              <p className="text-gray-400 mb-2">Build your base as a professional pentester.</p>
              <h4 className="text-lg font-semibold text-cyan-300">Topics Covered</h4>
              <ul className="text-gray-300 space-y-1 mt-1">
                <li>• Linux essentials for pentesting (Kali/Ubuntu)</li>
                <li>• Networking basics: TCP/IP, routing, ports, packet capture</li>
                <li>• OSINT & passive reconnaissance</li>
                <li>• Active reconnaissance & scanning</li>
                <li>• Scripting basics (Python & Bash) for automating recon</li>
                <li>• Safe lab operations & Rules of Engagement (RoE)</li>
              </ul>
              <h4 className="text-lg font-semibold text-cyan-300 mt-3">Tools Used</h4>
              <p className="text-gray-300">Amass, Subfinder, crt.sh, Shodan, theHarvester, Nmap, Netcat, hping3</p>
              <h4 className="text-lg font-semibold text-cyan-300 mt-3">Practical Assignment I</h4>
              <p className="text-gray-300">OSINT + Recon Pack: Subdomain inventory, asset list, and initial Nmap scan outputs.</p>
            </div>

            {/* Phase 2 */}
            <div>
              <h3 className="text-xl font-bold text-white mb-1">🟠 Phase 2 — Web Application Pentesting (Weeks 4–6)</h3>
              <p className="text-gray-400 mb-2">Deep dive into OWASP Top 10, web app hacking & API testing.</p>
              <h4 className="text-lg font-semibold text-purple-300">Topics Covered</h4>
              <ul className="text-gray-300 space-y-1 mt-1">
                <li>• HTTP/HTTPS, sessions, cookies, headers</li>
                <li>• SQLi, XSS, CSRF, IDOR, RCE basics</li>
                <li>• Parameter tampering & logic flaw exploitation</li>
                <li>• API pentesting: JWT, rate-limit bypass, auth bypass</li>
                <li>• Exploit chaining</li>
                <li>• Metasploit for web modules (safe use)</li>
              </ul>
              <h4 className="text-lg font-semibold text-purple-300 mt-3">Tools Used</h4>
              <p className="text-gray-300">Burp Suite, OWASP ZAP, sqlmap, Nikto, DVWA, Juice Shop, Postman</p>
              <h4 className="text-lg font-semibold text-purple-300 mt-3">Practical Assignment II</h4>
              <p className="text-gray-300">Web App Pentest Report: DVWA/Juice Shop exploitation + PoCs + remediation plan.</p>
            </div>

            {/* Phase 3 */}
            <div>
              <h3 className="text-xl font-bold text-white mb-1">🟢 Phase 3 — Network & Host Exploitation (Weeks 7–9)</h3>
              <p className="text-gray-400 mb-2">Learn to break into systems, escalate privileges, and move laterally.</p>
              <h4 className="text-lg font-semibold text-emerald-300">Topics Covered</h4>
              <ul className="text-gray-300 space-y-1 mt-1">
                <li>• Advanced Nmap scanning & enumeration</li>
                <li>• Vulnerability validation (OpenVAS/Nessus)</li>
                <li>• Exploiting common services: SMB, FTP, RCE vectors</li>
                <li>• Post-exploitation workflow</li>
                <li>• Privilege escalation (Linux & Windows)</li>
                <li>• Active Directory basics & BloodHound enumeration</li>
                <li>• Kerberoasting concepts (lab-safe)</li>
              </ul>
              <h4 className="text-lg font-semibold text-emerald-300 mt-3">Tools Used</h4>
              <p className="text-gray-300">OpenVAS/Nessus, Metasploit, searchsploit, msfvenom, CrackMapExec, BloodHound, Mimikatz (demo)</p>
              <h4 className="text-lg font-semibold text-emerald-300 mt-3">Practical Assignment III</h4>
              <p className="text-gray-300">Network Pentest Report: Exploit lab host → gain shell → escalate privileges → submit report.</p>
            </div>

            {/* Phase 4 */}
            <div>
              <h3 className="text-xl font-bold text-white mb-1">🔴 Phase 4 — Advanced Techniques, Reporting & Capstone (Weeks 10–12)</h3>
              <p className="text-gray-400 mb-2">Master high-level exploitation and present your final red-team project.</p>
              <h4 className="text-lg font-semibold text-rose-300">Topics Covered</h4>
              <ul className="text-gray-300 space-y-1 mt-1">
                <li>• Exploit chaining & custom payload concepts</li>
                <li>• OpSec & detection awareness</li>
                <li>• C2 basics + beacon behavior (simulated)</li>
                <li>• Social engineering awareness (phishing templates — no live attacks)</li>
                <li>• Automation scripts for pentesters</li>
                <li>• Final team-based red/blue engagement</li>
              </ul>
              <h4 className="text-lg font-semibold text-rose-300 mt-3">Capstone Deliverables</h4>
              <ul className="text-gray-300 space-y-1 mt-1">
                <li>• Red Team logbook (commands, timestamps, evidence)</li>
                <li>• Blue Team detection metrics</li>
                <li>• Final technical pentest report</li>
                <li>• Capstone demo video</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tools & Technologies */}
        <div className="glass-effect rounded-2xl p-8 neon-border mb-8">
          <h2 className="text-2xl font-bold mb-4 text-cyan-400">Tools & Technologies Covered</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-white mb-2">Recon & Scanning</h3>
              <p className="text-gray-300">Nmap, Amass, Subfinder, theHarvester, crt.sh, Shodan, Netcat, hping3</p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Web Pentesting</h3>
              <p className="text-gray-300">Burp Suite, OWASP ZAP, sqlmap, Nikto, DVWA, Juice Shop, Postman</p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Exploitation & Post-Exploitation</h3>
              <p className="text-gray-300">Metasploit, searchsploit, msfvenom, Mimikatz (demo), BloodHound, CrackMapExec</p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Network Analysis & IDS</h3>
              <p className="text-gray-300">Wireshark, tcpdump, Suricata, Zeek, Snort</p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Scripting & Automation</h3>
              <p className="text-gray-300">Python 3, Bash, PowerShell (conceptual)</p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Reporting</h3>
              <p className="text-gray-300">Markdown, Git, CVSS, LaTeX templates</p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Cloud & API</h3>
              <p className="text-gray-300">AWS basics (sandbox), ScoutSuite, Postman, jwt.io</p>
            </div>
          </div>
        </div>

        {/* Assessments & Certification */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="glass-effect rounded-2xl p-8 neon-border">
            <h2 className="text-2xl font-bold mb-3 text-purple-400">Assessments</h2>
            <ul className="text-gray-300 space-y-1">
              <li>• Weekly lab submissions</li>
              <li>• Three major assignments (Recon, Web, Network)</li>
              <li>• Mid-course practical exam</li>
              <li>• Final Capstone Assessment & Presentation</li>
            </ul>
          </div>
          <div className="glass-effect rounded-2xl p-8 neon-border">
            <h2 className="text-2xl font-bold mb-3 text-green-400">Certification Mapping</h2>
            <ul className="text-gray-300 space-y-1">
              <li>• eJPT pathway</li>
              <li>• OSCP basic readiness after completing capstone and additional practice</li>
            </ul>
          </div>
        </div>

        {/* Who Should Enroll */}
        <div className="mt-12">
          <div className="glass-effect rounded-2xl p-8 neon-border">
            <h2 className="text-2xl font-bold mb-3 gradient-text text-center">Who Should Enroll</h2>
            <ul className="text-gray-300 space-y-1 max-w-2xl mx-auto">
              <li>• Beginners starting in ethical hacking</li>
              <li>• Students entering cybersecurity</li>
              <li>• IT professionals transitioning to security</li>
              <li>• Anyone preparing for pentesting careers</li>
            </ul>
            <div className="mt-6 flex justify-center">
              <a
                href="https://form.finalform.so/forms/FEAH0emy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-3 rounded-lg font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all transform hover:scale-105"
              >
                <Target className="w-5 h-5" />
                <span>Enroll Now</span>
              </a>
            </div>
            <div className="mt-4 flex justify-center">
              <a
                href={hasSyllabus ? syllabusUrl : undefined}
                download
                aria-disabled={!hasSyllabus}
                onClick={(e) => { if (!hasSyllabus) e.preventDefault(); }}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all transform ${hasSyllabus ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/30 hover:-translate-y-0.5' : 'bg-gray-700 text-gray-300 cursor-not-allowed opacity-60'}`}
              >
                <Download className="w-5 h-5" />
                <span>{hasSyllabus ? 'Download Syllabus' : 'Syllabus Coming Soon'}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}