import { ArrowLeft, Shield, Clock, CheckCircle, Award, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AdvancedSOCCourse() {
  return (
    <div className="relative min-h-screen bg-[#050510] text-white">
      <div className="cyber-grid fixed inset-0 z-0 opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Back Button */}
        <Link 
          to="/courses/cybersecurity" 
          className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Cybersecurity</span>
        </Link>

        {/* Hero */}
        <div className="glass-effect rounded-2xl p-8 neon-border mb-12">
          <div className="flex items-center space-x-6 mb-6">
            <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2 gradient-text">Forebrain — Advanced SOC Training Program (2-Month)</h1>
              <div className="flex items-center space-x-6 text-sm">
                <span className="flex items-center text-purple-300"><Clock className="w-4 h-4 mr-1" /> 2 Months (8 Weeks / 48 Days)</span>
                <span className="flex items-center text-pink-300"><Award className="w-4 h-4 mr-1" /> 70% Labs — 30% Theory</span>
              </div>
            </div>
          </div>
          <p className="text-gray-300 text-lg leading-relaxed">
            A highly intensive 8‑week advanced SOC training program for intermediate cybersecurity learners to master SIEM engineering, DFIR, threat hunting, malware analysis, and red‑blue operations.
            Built around hands‑on labs and real‑world investigations using Splunk, ELK, QRadar, SOAR, MISP, Volatility, Suricata, Zeek, REMnux, FLARE VM, Havoc, Atomic Red Team, and more.
          </p>
        </div>

        {/* Program Outcome */}
        <div className="glass-effect rounded-2xl p-8 neon-border mb-8">
          <h2 className="text-2xl font-bold mb-4 text-purple-400">Program Outcome</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Operate as an Advanced SOC Analyst (L2/L3)',
              'Deploy SIEM detection rules in Splunk, ELK & QRadar',
              'Conduct end-to-end Incident Response using SOAR playbooks',
              'Perform memory, disk, browser & email forensics',
              'Analyze malware (static + dynamic) with Volatility, REMnux, FLARE VM',
              'Execute and defend against Red Team simulations',
              'Integrate threat intelligence (MISP, Abuse.ch, VirusTotal)',
              'Build SOC use-cases mapped to MITRE ATT&CK',
              'Produce enterprise-grade IR reports & SOC runbooks',
            ].map((item, idx) => (
              <div key={idx} className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Month 1 — Core SOC Operations & Forensics */}
        <div className="glass-effect rounded-2xl p-8 neon-border mb-8">
          <h2 className="text-2xl font-bold mb-2 text-pink-400">Month 1 — Core SOC Operations & Forensics</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">🔵 Week 1 — SOC & SIEM Foundation (Splunk, ELK, QRadar)</h3>
              <ul className="text-gray-300 space-y-1 mt-1">
                <li>• SOC tiers, KPIs, workflows</li>
                <li>• Splunk & ELK setup</li>
                <li>• Log ingestion (Windows & Linux)</li>
                <li>• Correlation searches: brute force, port scans</li>
                <li>• Splunk dashboards for SOC operations</li>
                <li>• QRadar basics & offense management</li>
                <li>• Comparative SIEM lab (Splunk vs ELK vs QRadar)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-1">🟠 Week 2 — Incident Response (IR) & SOAR</h3>
              <ul className="text-gray-300 space-y-1 mt-1">
                <li>• NIST IR lifecycle & IR plan building</li>
                <li>• SOAR fundamentals (Cortex XSOAR, Phantom)</li>
                <li>• Automated alert triage workflows</li>
                <li>• Compliance mapping (ISO 27001, PCI, HIPAA, GDPR)</li>
                <li>• Case studies: SolarWinds, Log4j breach</li>
                <li>• Automated phishing playbook</li>
                <li>• Write complete IR report + SOAR workflow</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-1">🟢 Week 3 — Digital Forensics Essentials</h3>
              <ul className="text-gray-300 space-y-1 mt-1">
                <li>• Chain of custody & documentation</li>
                <li>• Disk imaging with FTK Imager</li>
                <li>• Autopsy investigation: deleted files & file carving</li>
                <li>• Browser artifact recovery (Chrome/Firefox)</li>
                <li>• Email header & phishing forensics</li>
                <li>• Memory forensics (Volatility)</li>
                <li>• Compromised host forensic investigation</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-1">🔴 Week 4 — Project 1: SOC Investigation Case Study</h3>
              <ul className="text-gray-300 space-y-1 mt-1">
                <li>• Simulated insider attack</li>
                <li>• Threat timeline building (Splunk + ELK)</li>
                <li>• SIEM + Forensics integration workflow</li>
                <li>• Incident report creation (logs + artifacts + compliance)</li>
                <li>• Peer review & refinement</li>
                <li>• Final SOC breach case study presentation</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Month 2 — Advanced SOC, Threat Hunting & Red Team Simulation */}
        <div className="glass-effect rounded-2xl p-8 neon-border mb-8">
          <h2 className="text-2xl font-bold mb-2 text-purple-400">Month 2 — Advanced SOC, Threat Hunting & Red Team Simulation</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">🔵 Week 5 — Advanced SIEM Engineering & Threat Intelligence</h3>
              <ul className="text-gray-300 space-y-1 mt-1">
                <li>• Custom parsers & field extractions</li>
                <li>• TI integration: MISP, Abuse.ch, VirusTotal APIs</li>
                <li>• MITRE ATT&CK mapping for alerts</li>
                <li>• Suricata & Zeek integration</li>
                <li>• Writing YARA rules for malware detection</li>
                <li>• Build advanced APT-style detection use-cases</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-1">🟠 Week 6 — Threat Hunting & Malware Analysis</h3>
              <ul className="text-gray-300 space-y-1 mt-1">
                <li>• Hypothesis-driven hunting methodology</li>
                <li>• Threat hunting in Splunk & ELK</li>
                <li>• Detecting beaconing & stealth C2 traffic</li>
                <li>• Static malware analysis (REMnux, YARA, strings)</li>
                <li>• Dynamic analysis (FLARE VM, Any.Run, Cuckoo Sandbox)</li>
                <li>• Memory forensics deep-dive (Volatility + Rekall)</li>
                <li>• Extract IoCs & produce malware analysis report</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-1">🟢 Week 7 — Red vs Blue Team Simulation</h3>
              <ul className="text-gray-300 space-y-1 mt-1">
                <li>• Red team intro: Metasploit, Havoc</li>
                <li>• Lateral movement & persistence (BloodHound, Mimikatz)</li>
                <li>• Detecting C2 communication in Splunk & Zeek</li>
                <li>• Adversary emulation (Atomic Red Team)</li>
                <li>• SOAR integration for detection & response</li>
                <li>• Lab: Detect and stop insider + external attacks</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-1">🔴 Week 8 — Final SOC Integration Project</h3>
              <ul className="text-gray-300 space-y-1 mt-1">
                <li>• Full SOC incident scenario</li>
                <li>• Phishing + malware + lateral movement attack</li>
                <li>• Log collection + detection + threat hunt</li>
                <li>• Forensics of compromised host</li>
                <li>• Full SOC playbook creation</li>
                <li>• Final presentation + SOC readiness evaluation</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tools & Technologies Covered */}
        <div className="glass-effect rounded-2xl p-8 neon-border mb-8">
          <h2 className="text-2xl font-bold mb-4 text-purple-400">Tools & Technologies Covered</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-white mb-2">SIEM Tools</h3>
              <p className="text-gray-300">Splunk, ELK Stack, QRadar</p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">IR & SOAR</h3>
              <p className="text-gray-300">Cortex XSOAR, Splunk Phantom, Email Tracker Pro</p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Threat Intelligence</h3>
              <p className="text-gray-300">MISP, Abuse.ch, VirusTotal APIs</p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Forensics Tools</h3>
              <p className="text-gray-300">FTK Imager, Autopsy, Volatility, Rekall</p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Network & IDS</h3>
              <p className="text-gray-300">Suricata, Zeek</p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Malware Analysis</h3>
              <p className="text-gray-300">REMnux, FLARE VM, Cuckoo Sandbox</p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Red Team Tools</h3>
              <p className="text-gray-300">Metasploit, Havoc, Mimikatz, BloodHound, Atomic Red Team</p>
            </div>
          </div>
        </div>

        {/* Final Deliverables */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="glass-effect rounded-2xl p-8 neon-border">
            <h2 className="text-2xl font-bold mb-3 text-pink-400">Final Deliverables</h2>
            <ul className="text-gray-300 space-y-1">
              <li>• Splunk/ELK dashboards + detection rules</li>
              <li>• IR playbooks (manual & SOAR automation)</li>
              <li>• Forensic reports (disk, memory, email, artifacts)</li>
              <li>• Threat hunting report + IoCs + ATT&CK mapping</li>
              <li>• SOC runbook (incident detection → response → recovery)</li>
              <li>• End-to-end SOC Case Study Final Report</li>
            </ul>
          </div>
          <div className="glass-effect rounded-2xl p-8 neon-border">
            <h2 className="text-2xl font-bold mb-3 text-green-400">What You’ll Achieve</h2>
            <ul className="text-gray-300 space-y-1">
              <li>• Advanced SOC readiness (L2/L3)</li>
              <li>• Strong SIEM engineering & TI integrations</li>
              <li>• End-to-end IR and DFIR capability</li>
              <li>• Malware analysis & detection experience</li>
              <li>• Red/Blue operation awareness</li>
              <li>• Enterprise-grade reporting</li>
            </ul>
          </div>
        </div>

        {/* Enrollment CTA */}
        <div className="mt-12">
          <div className="glass-effect rounded-2xl p-8 neon-border text-center">
            <h2 className="text-2xl font-bold mb-3 gradient-text">Enroll</h2>
            <div className="mt-2 flex justify-center">
              <a
                href="https://form.finalform.so/forms/FEAH0emy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-600 px-8 py-3 rounded-lg font-semibold hover:from-purple-400 hover:to-pink-500 transition-all pop-hover"
              >
                <span>Enroll Now</span>
              </a>
            </div>
            <div className="mt-4 flex justify-center">
              <a
                href="/Advanced_SOC_Training_Plan.docx"
                download
                aria-label="Download Advanced SOC syllabus (DOCX)"
                className="download-btn download-btn-purple inline-flex items-center space-x-2 px-6 py-2 rounded-lg text-sm transition-all"
                onMouseMove={(e) => {
                  const target = e.currentTarget as HTMLAnchorElement;
                  const rect = target.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  target.style.setProperty('--x', `${x}px`);
                  target.style.setProperty('--y', `${y}px`);
                }}
              >
                <Download className="icon w-4 h-4 text-purple-300" />
                <span>Download Syllabus (DOCX)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}