import { Radar, ArrowLeft, Clock, CheckCircle, BookOpen, Award, Target, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BlueTeamThreatHuntingCourse() {
  // Find syllabus file URL by prefix anywhere under src/assets
  const syllabusUrl = (() => {
    const files = import.meta.glob('/src/assets/**/Forebrain_BlueTeam_ThreatHunting_3Month_Syllabus.*', {
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
        <Link to="/courses/cybersecurity" className="inline-flex items-center space-x-2 text-sky-400 hover:text-sky-300 transition-colors mb-8">
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Cybersecurity</span>
        </Link>
        {/* Hero */}
        <div className="glass-effect rounded-2xl p-8 neon-border mb-12">
          <div className="flex items-center space-x-6 mb-4">
            <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-sky-500 to-blue-700 flex items-center justify-center">
              <Radar className="w-10 h-10 text-white" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2 gradient-text">🛡️ Forebrain — Blue Team Operations & Threat Hunting (3-Month Program)</h1>
              <p className="text-gray-300">A 12-week intensive defensive cybersecurity program designed to build real SOC analysts and threat hunters with hands-on experience in SIEM tools, detection engineering, incident response, and enterprise-grade threat investigations.</p>
              <div className="flex items-center space-x-6 text-sm mt-2">
                <span className="flex items-center text-sky-300"><Clock className="w-4 h-4 mr-1" /> 3 Months (12 Weeks / 60 Days)</span>
                <span className="flex items-center text-indigo-300"><BookOpen className="w-4 h-4 mr-1" /> 1 hr class + 1 hr lab (Mon–Fri)</span>
                <span className="flex items-center text-blue-300"><Award className="w-4 h-4 mr-1" /> Saturday: Activity Day (practical)</span>
                <span className="flex items-center text-emerald-300"><Award className="w-4 h-4 mr-1" /> Focus: Real-time SOC & hunting workflows</span>
              </div>
            </div>
          </div>
        </div>

        {/* Outcomes */}
        <div className="glass-effect rounded-2xl p-8 neon-border mb-8">
          <h2 className="text-2xl font-bold mb-4 text-sky-400">Program Outcome</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Operate as SOC Analyst (L1/L2)',
              'Build & tune detection rules',
              'Analyze Windows, Linux & network logs',
              'Perform SIEM-based threat hunting',
              'Configure Wazuh, ELK & Splunk environments',
              'Investigate malware, phishing & endpoint attacks',
              'Create full IR playbooks and escalation workflows',
              'Complete an enterprise threat hunting capstone',
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
          <h2 className="text-2xl font-bold mb-2 text-indigo-400">Program Structure (Phase-Wise)</h2>
          <div className="space-y-8">
            {/* Phase 1 */}
            <div>
              <h3 className="text-xl font-bold text-white mb-1">🔵 Phase 1 — SOC Foundations & Log Analysis (Weeks 1–3)</h3>
              <p className="text-gray-400 mb-2">Master the fundamentals of defensive security and live monitoring.</p>
              <h4 className="text-lg font-semibold text-sky-300">Topics Covered</h4>
              <ul className="text-gray-300 space-y-1 mt-1">
                <li>• Introduction to Blue Teaming & SOC structure</li>
                <li>• SOC tiers, alert lifecycles & analyst responsibilities</li>
                <li>• Windows & Linux log sources: Sysmon, Event Viewer, journalctl</li>
                <li>• SIEM basics: ingestion, normalization, correlation</li>
                <li>• ELK Stack & Wazuh operations</li>
                <li>• Hands-on: Wazuh + Elastic setup</li>
                <li>• Log integration: Sysmon, Zeek, Suricata</li>
                <li>• MITRE ATT&CK mapping basics</li>
              </ul>
              <h4 className="text-lg font-semibold text-sky-300 mt-3">Deliverable</h4>
              <p className="text-gray-300">Configured SIEM environment with live data sources + mapped ATT&CK detections</p>
            </div>

            {/* Phase 2 */}
            <div>
              <h3 className="text-xl font-bold text-white mb-1">🟠 Phase 2 — Detection Engineering & Threat Hunting (Weeks 4–6)</h3>
              <p className="text-gray-400 mb-2">Learn how to detect, correlate, and hunt threats in enterprise infrastructure.</p>
              <h4 className="text-lg font-semibold text-orange-300">Topics Covered</h4>
              <ul className="text-gray-300 space-y-1 mt-1">
                <li>• Threat hunting fundamentals & hypothesis building</li>
                <li>• Data correlation using KQL & Sigma rules</li>
                <li>• Custom rule creation in Wazuh & Splunk</li>
                <li>• Detecting TTPs: process injection, credential dumping, lateral movement</li>
                <li>• Alert generation using MITRE mapping</li>
                <li>• Threat hunting with Sysmon logs, Zeek telemetry & Suricata alerts</li>
                <li>• Adversary simulation using Atomic Red Team & Caldera</li>
              </ul>
              <h4 className="text-lg font-semibold text-orange-300 mt-3">Deliverable</h4>
              <p className="text-gray-300">Custom detection rule pack + Hunt Reports mapped to MITRE ATT&CK Techniques</p>
            </div>

            {/* Phase 3 */}
            <div>
              <h3 className="text-xl font-bold text-white mb-1">🟢 Phase 3 — Incident Response & Threat Intelligence (Weeks 7–9)</h3>
              <p className="text-gray-400 mb-2">Build core IR skills and learn to investigate real enterprise threats.</p>
              <h4 className="text-lg font-semibold text-emerald-300">Topics Covered</h4>
              <ul className="text-gray-300 space-y-1 mt-1">
                <li>• IR lifecycle: identify → contain → eradicate → recover</li>
                <li>• Forensic triage using Velociraptor, OSQuery, Volatility</li>
                <li>• Threat intelligence tools: MISP, OpenCTI, VirusTotal</li>
                <li>• Automated enrichment using Cortex analyzers</li>
                <li>• Case management in TheHive</li>
                <li>• Practical use case: Malware / phishing investigation</li>
                <li>• Building IR runbooks & playbooks</li>
                <li>• SOC escalation & reporting workflows</li>
              </ul>
              <h4 className="text-lg font-semibold text-emerald-300 mt-3">Deliverable</h4>
              <p className="text-gray-300">End-to-end Incident Report + IOC Enrichment Workflow</p>
            </div>

            {/* Phase 4 */}
            <div>
              <h3 className="text-xl font-bold text-white mb-1">🔴 Phase 4 — Advanced Threat Hunting & Capstone (Weeks 10–12)</h3>
              <p className="text-gray-400 mb-2">Perform advanced detection and complete a full enterprise simulation.</p>
              <h4 className="text-lg font-semibold text-rose-300">Topics Covered</h4>
              <ul className="text-gray-300 space-y-1 mt-1">
                <li>• Advanced ELK queries & visualizations</li>
                <li>• Behavioral detection & false positive tuning</li>
                <li>• Threat actor profiling using MITRE ATT&CK Navigator</li>
                <li>• Endpoint & network correlation across data sources</li>
                <li>• Python automation for IOC correlation & log parsing</li>
                <li>• Capstone project: Enterprise Threat Hunting Simulation</li>
                <li>• Final presentation & Blue Team readiness review</li>
              </ul>
              <h4 className="text-lg font-semibold text-rose-300 mt-3">Deliverable</h4>
              <p className="text-gray-300">Full SOC Investigation Report + IOC Mapping + Incident Timeline Reconstruction</p>
            </div>
          </div>
        </div>

        {/* Tools & Technologies */}
        <div className="glass-effect rounded-2xl p-8 neon-border mb-8">
          <h2 className="text-2xl font-bold mb-4 text-sky-400">Tools & Technologies Covered</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-white mb-2">SIEM & Log Management</h3>
              <p className="text-gray-300">Wazuh, Splunk, ELK Stack (Elasticsearch, Logstash, Kibana), IBM QRadar (overview)</p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Threat Hunting & Detection</h3>
              <p className="text-gray-300">Sysmon, Velociraptor, Zeek, Suricata, Sigma, KQL</p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Incident Response & Forensics</h3>
              <p className="text-gray-300">TheHive, Cortex, OSQuery, GRR, Volatility</p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Threat Intelligence</h3>
              <p className="text-gray-300">MISP, OpenCTI, MITRE ATT&CK Navigator, VirusTotal</p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Automation & Scripting</h3>
              <p className="text-gray-300">Python, Sigma2ELK, PowerShell scripts, Log parsing tools</p>
            </div>
          </div>
        </div>

        {/* Lab Setup Environment */}
        <div className="glass-effect rounded-2xl p-8 neon-border mb-8">
          <h2 className="text-2xl font-bold mb-4 text-indigo-400">Lab Setup Environment</h2>
          <ul className="text-gray-300 space-y-1">
            <li>• Virtualized SOC Lab (VMware/VirtualBox)</li>
            <li>• Windows 10 Sysmon-enabled system</li>
            <li>• Ubuntu Wazuh + ELK server</li>
            <li>• Zeek & Suricata network monitoring nodes</li>
            <li>• TheHive + Cortex stack</li>
            <li>• Simulated attack datasets (Atomic Red Team, Caldera, Red Canary)</li>
            <li>• Malware & phishing logs for investigation</li>
          </ul>
        </div>

        {/* Assessments & Achievements */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="glass-effect rounded-2xl p-8 neon-border">
            <h2 className="text-2xl font-bold mb-3 text-sky-400">Assessments</h2>
            <ul className="text-gray-300 space-y-1">
              <li>• Weekly SOC labs & hunt reports</li>
              <li>• Custom detection rule pack</li>
              <li>• Correlation dashboards</li>
              <li>• Incident Response & IOC reports</li>
              <li>• Final Capstone Threat Hunting Simulation</li>
            </ul>
          </div>
          <div className="glass-effect rounded-2xl p-8 neon-border">
            <h2 className="text-2xl font-bold mb-3 text-emerald-400">What You’ll Achieve</h2>
            <ul className="text-gray-300 space-y-1">
              <li>• Readiness for SOC Analyst (L1/L2) roles</li>
              <li>• Experience with enterprise SIEM & DFIR tools</li>
              <li>• Full investigation & threat hunting portfolio</li>
              <li>• Practical understanding of adversary behavior</li>
              <li>• Complete SOC capstone report & presentation</li>
            </ul>
          </div>
        </div>

        {/* Enrollment CTA */}
        <div className="mt-12">
          <div className="glass-effect rounded-2xl p-8 neon-border">
            <h2 className="text-2xl font-bold mb-3 gradient-text text-center">Enroll & Download</h2>
            <div className="mt-2 flex justify-center">
              <a
                href="https://form.finalform.so/forms/FEAH0emy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-sky-500 to-blue-700 px-8 py-3 rounded-lg font-semibold hover:from-sky-400 hover:to-blue-600 transition-all transform hover:scale-105 pop-hover"
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
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all transform ${hasSyllabus ? 'bg-gradient-to-r from-sky-500 to-blue-700 hover:from-sky-400 hover:to-blue-600 shadow-lg shadow-sky-500/20 hover:shadow-sky-400/30 hover:-translate-y-0.5 pop-hover' : 'bg-gray-700 text-gray-300 cursor-not-allowed opacity-60'}`}
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