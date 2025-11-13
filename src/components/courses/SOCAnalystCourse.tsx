import { ShieldQuestion, ArrowLeft, Clock, CheckCircle, BookOpen, Award, Target, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SOCAnalystCourse() {
  // Find syllabus file URL by prefix anywhere under src/assets
  const syllabusUrl = (() => {
    const files = import.meta.glob('/src/assets/**/Forebrain_SOC_Analyst_IncidentResponse_3Month_Syllabus.*', {
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
        <Link to="/courses/cybersecurity" className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors mb-8">
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Cybersecurity</span>
        </Link>
        <div className="glass-effect rounded-2xl p-8 neon-border mb-12">
          <div className="flex items-center space-x-6 mb-4">
            <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
              <ShieldQuestion className="w-10 h-10 text-white" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2 gradient-text">🛡️ Forebrain — SOC Analyst & Incident Response (3-Month Program)</h1>
              <p className="text-gray-300">A fully practical, 12-week training program designed to build job-ready SOC Analysts with real-world skills in log analysis, SIEM operations, threat hunting, detection engineering, and incident response.</p>
              <div className="flex items-center space-x-6 text-sm mt-2">
                <span className="flex items-center text-purple-300"><Clock className="w-4 h-4 mr-1" /> 3 Months (12 Weeks / 60 Days)</span>
                <span className="flex items-center text-pink-300"><BookOpen className="w-4 h-4 mr-1" /> 1 hr class + 1 hr lab, Mon–Fri</span>
                <span className="flex items-center text-emerald-300"><Award className="w-4 h-4 mr-1" /> Practical SOC training with attack simulations</span>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-effect rounded-2xl p-8 neon-border mb-8">
          <h2 className="text-2xl font-bold mb-4 text-purple-400">Program Outcome</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Strong knowledge of SOC operations & workflows',
              'Practical SIEM experience (ELK & Splunk)',
              'Hands-on detection engineering (Sigma, YARA, KQL, SPL)',
              'Threat hunting & forensic investigation skills',
              'Incident Response (IR) playbook development',
              'Ability to analyse, detect, and respond to cybersecurity incidents',
              'Capstone SOC simulation experience',
            ].map((item, idx) => (
              <div key={idx} className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-effect rounded-2xl p-8 neon-border mb-8">
          <h2 className="text-2xl font-bold mb-2 text-pink-400">Program Structure (Phase-Wise)</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">🔵 Phase 1 — Foundations & Log Collection (Weeks 1–3)</h3>
              <p className="text-gray-400 mb-2">Build a strong base with log collection and SIEM fundamentals.</p>
              <h4 className="text-lg font-semibold text-purple-300">Topics Covered</h4>
              <ul className="text-gray-300 space-y-1 mt-1">
                <li>• SOC roles, tiers (L1–L3), workflows</li>
                <li>• Windows, Sysmon, Linux log sources</li>
                <li>• Network telemetry & PCAP basics</li>
                <li>• Log forwarding using Syslog, Filebeat, Winlogbeat</li>
                <li>• Windows Event Forwarding (WEF) setup</li>
                <li>• SIEM basics — ELK & Splunk environment setup</li>
                <li>• Log normalization & parsing using KQL, SPL, Lucene</li>
              </ul>
              <h4 className="text-lg font-semibold text-purple-300 mt-3">Practical Lab</h4>
              <ul className="text-gray-300 space-y-1 mt-1">
                <li>• Ingest Windows/Linux logs into ELK/Splunk</li>
                <li>• Create first dashboards and visualizations</li>
              </ul>
              <h4 className="text-lg font-semibold text-purple-300 mt-3">Deliverable</h4>
              <p className="text-gray-300">Log Ingestion Setup + Dashboard Pack</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-1">🟠 Phase 2 — Detection Engineering & Threat Signatures (Weeks 4–6)</h3>
              <p className="text-gray-400 mb-2">Learn to build enterprise-grade detections.</p>
              <h4 className="text-lg font-semibold text-pink-300">Topics Covered</h4>
              <ul className="text-gray-300 space-y-1 mt-1">
                <li>• MITRE ATT&CK for detection mapping</li>
                <li>• Writing Sigma rules (beginner to advanced)</li>
                <li>• Converting Sigma → SPL / Sigma → KQL</li>
                <li>• YARA rules for malware detection</li>
                <li>• False positive reduction & tuning</li>
                <li>• IDS overview — Zeek & Suricata rule creation</li>
              </ul>
              <h4 className="text-lg font-semibold text-pink-300 mt-3">Practical Lab</h4>
              <ul className="text-gray-300 space-y-1 mt-1">
                <li>• Implement custom Sigma rule</li>
                <li>• Test rule firing in SIEM environment</li>
              </ul>
              <h4 className="text-lg font-semibold text-pink-300 mt-3">Deliverable</h4>
              <p className="text-gray-300">Detection Rule Pack + Alert Configuration Report</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-1">🟢 Phase 3 — Threat Hunting & Endpoint Forensics (Weeks 7–9)</h3>
              <p className="text-gray-400 mb-2">Investigate real threats through proactive hunting & forensic analysis.</p>
              <h4 className="text-lg font-semibold text-emerald-300">Topics Covered</h4>
              <ul className="text-gray-300 space-y-1 mt-1">
                <li>• Hypothesis-driven threat hunting</li>
                <li>• Memory forensics with Volatility</li>
                <li>• Disk forensics using Autopsy & FTK Imager</li>
                <li>• Sysinternals Suite for host investigations</li>
                <li>• IOC enrichment (VirusTotal, MISP, OSINT feeds)</li>
                <li>• Sysmon configuration & Event ID attack mapping</li>
              </ul>
              <h4 className="text-lg font-semibold text-emerald-300 mt-3">Practical Lab</h4>
              <ul className="text-gray-300 space-y-1 mt-1">
                <li>• Conduct hunt for credential dumping attacks</li>
                <li>• Analyze memory/disk evidence</li>
              </ul>
              <h4 className="text-lg font-semibold text-emerald-300 mt-3">Deliverable</h4>
              <p className="text-gray-300">Threat Hunting Report + IOC Pack</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-1">🔴 Phase 4 — Incident Response & SOC Maturity (Weeks 10–12)</h3>
              <p className="text-gray-400 mb-2">Master full incident handling & team-based SOC operations.</p>
              <h4 className="text-lg font-semibold text-rose-300">Topics Covered</h4>
              <ul className="text-gray-300 space-y-1 mt-1">
                <li>• IR lifecycle: detect → analyze → contain → recover</li>
                <li>• Playbooks for ransomware, breaches, insider threat</li>
                <li>• Evidence handling & chain-of-custody</li>
                <li>• SOAR (automation) fundamentals</li>
                <li>• SOC metrics: MTTD, MTTR, KPI dashboards</li>
                <li>• End-to-end IR attack simulation (Red vs Blue drill)</li>
              </ul>
              <h4 className="text-lg font-semibold text-rose-300 mt-3">Practical Lab</h4>
              <ul className="text-gray-300 space-y-1 mt-1">
                <li>• Full IR scenario simulation</li>
                <li>• Create SOC metrics dashboard</li>
              </ul>
              <h4 className="text-lg font-semibold text-rose-300 mt-3">Deliverables</h4>
              <p className="text-gray-300">IR Playbook + SOC Metrics Dashboard + Final Incident Report</p>
            </div>
          </div>
        </div>

        <div className="glass-effect rounded-2xl p-8 neon-border mb-8">
          <h2 className="text-2xl font-bold mb-4 text-purple-400">Tools & Technologies Covered</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-white mb-2">SIEM / Log Management</h3>
              <p className="text-gray-300">ELK Stack, Splunk</p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Log Collection</h3>
              <p className="text-gray-300">Filebeat, Winlogbeat, Syslog, Windows Event Forwarding</p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Network / IDS</h3>
              <p className="text-gray-300">Zeek, Suricata, Wireshark, tcpdump</p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Forensics</h3>
              <p className="text-gray-300">Volatility, Autopsy, FTK Imager, Sysinternals</p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Detection / Hunting</h3>
              <p className="text-gray-300">Sigma, YARA, Sysmon, MISP, VirusTotal</p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Threat Intelligence & Automation</h3>
              <p className="text-gray-300">OpenCTI, SOAR concepts, Python enrichment scripts</p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">SOC Operations</h3>
              <p className="text-gray-300">Markdown reporting, Git version control, Jupyter notebooks</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="glass-effect rounded-2xl p-8 neon-border">
            <h2 className="text-2xl font-bold mb-3 text-pink-400">Assessments</h2>
            <ul className="text-gray-300 space-y-1">
              <li>• Weekly SOC labs & dashboards</li>
              <li>• Detection Engineering Rule Pack</li>
              <li>• Threat Hunting Investigation Report</li>
              <li>• IR Playbook & Incident Report</li>
              <li>• Final Capstone SOC Simulation</li>
            </ul>
          </div>
          <div className="glass-effect rounded-2xl p-8 neon-border">
            <h2 className="text-2xl font-bold mb-3 text-green-400">What You’ll Achieve</h2>
            <ul className="text-gray-300 space-y-1">
              <li>• SOC Analyst (L1/L2) readiness</li>
              <li>• IR responder capability</li>
              <li>• Strong SIEM query & dashboarding experience</li>
              <li>• Complete SOC portfolio (reports, dashboards, rules)</li>
              <li>• Real-world investigation experience</li>
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <div className="glass-effect rounded-2xl p-8 neon-border">
            <h2 className="text-2xl font-bold mb-3 gradient-text text-center">Ideal For</h2>
            <ul className="text-gray-300 space-y-1 max-w-2xl mx-auto">
              <li>• Students entering cybersecurity</li>
              <li>• Professionals moving to SOC Analyst roles</li>
              <li>• People preparing for detection & IR careers</li>
            </ul>
            <div className="mt-6 flex justify-center">
              <Link 
                to="/#contact" 
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-600 px-8 py-3 rounded-lg font-semibold hover:from-purple-400 hover:to-pink-500 transition-all transform hover:scale-105"
              >
                <Target className="w-5 h-5" />
                <span>Enroll Now</span>
              </Link>
            </div>
            <div className="mt-4 flex justify-center">
              <a
                href={hasSyllabus ? syllabusUrl : undefined}
                download
                aria-disabled={!hasSyllabus}
                onClick={(e) => { if (!hasSyllabus) e.preventDefault(); }}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all transform ${hasSyllabus ? 'bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 shadow-lg shadow-pink-500/20 hover:shadow-pink-400/30 hover:-translate-y-0.5' : 'bg-gray-700 text-gray-300 cursor-not-allowed opacity-60'}`}
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