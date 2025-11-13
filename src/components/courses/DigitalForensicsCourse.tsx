import { Microscope, ArrowLeft, Clock, CheckCircle, BookOpen, Award, Target, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DigitalForensicsCourse() {
  // Find syllabus file URL by prefix anywhere under src/assets
  const syllabusUrl = (() => {
    const primary = import.meta.glob('/src/assets/**/Forebrain_Forensics_Malware_3Month_Syllabus.*', {
      eager: true,
      as: 'url',
    }) as unknown as Record<string, string>;
    const fallback = import.meta.glob('/src/assets/**/Forebrain_DigitalForensics_MalwareAnalysis_3Month_Syllabus.*', {
      eager: true,
      as: 'url',
    }) as unknown as Record<string, string>;
    const firstPrimary = Object.values(primary)[0];
    if (firstPrimary) return firstPrimary;
    const firstFallback = Object.values(fallback)[0];
    return firstFallback;
  })();
  const hasSyllabus = Boolean(syllabusUrl);
  return (
    <div className="relative min-h-screen bg-[#050510] text-white">
      <div className="cyber-grid fixed inset-0 z-0 opacity-30" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Link to="/courses/cybersecurity" className="inline-flex items-center space-x-2 text-indigo-400 hover:text-indigo-300 transition-colors mb-8">
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Cybersecurity</span>
        </Link>

        {/* Hero */}
        <div className="glass-effect rounded-2xl p-8 neon-border mb-12">
          <div className="flex items-center space-x-6 mb-4">
            <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
              <Microscope className="w-10 h-10 text-white" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2 gradient-text">🔍 Forebrain — Digital Forensics & Malware Analysis (3-Month Program)</h1>
              <p className="text-gray-300">A 12-week intensive training program designed to develop practical forensic investigators and malware analysts with hands-on experience in disk imaging, memory forensics, PCAP analysis, and malware reverse engineering.</p>
              <div className="flex items-center space-x-6 text-sm mt-2">
                <span className="flex items-center text-indigo-300"><Clock className="w-4 h-4 mr-1" /> 3 Months (12 Weeks / 60 Days)</span>
                <span className="flex items-center text-blue-300"><BookOpen className="w-4 h-4 mr-1" /> 1 hr class + 1 hr lab (Mon–Fri)</span>
                <span className="flex items-center text-purple-300"><Award className="w-4 h-4 mr-1" /> Saturday: Activity Day for deep-dive labs</span>
                <span className="flex items-center text-indigo-300"><Award className="w-4 h-4 mr-1" /> Focus: Real-world DFIR skills</span>
              </div>
            </div>
          </div>
        </div>

        {/* Program Outcome */}
        <div className="glass-effect rounded-2xl p-8 neon-border mb-8">
          <h2 className="text-2xl font-bold mb-4 text-indigo-400">Program Outcome</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Perform digital forensic investigations end-to-end',
              'Conduct disk imaging, memory acquisition & evidence preservation',
              'Analyze Windows, Linux, and volatile artifacts',
              'Detect and analyze malware (static + dynamic)',
              'Investigate network-based attacks using PCAP analysis',
              'Build forensic timelines and correlate host/network data',
              'Reverse engineer malware behavior (beginner-level RE)',
              'Produce professional forensic and malware analysis reports',
              'Complete a full forensic case capstone',
            ].map((item, idx) => (
              <div key={idx} className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Program Structure */}
        <div className="glass-effect rounded-2xl p-8 neon-border mb-8">
          <h2 className="text-2xl font-bold mb-2 text-blue-400">Program Structure (Phase-Wise)</h2>
          <div className="space-y-8">
            {/* Phase 1 */}
            <div>
              <h3 className="text-xl font-bold text-white mb-1">🔵 Phase 1 — Foundations & Evidence Collection (Weeks 1–3)</h3>
              <p className="text-gray-400 mb-2">Learn the fundamentals of forensic investigation, evidence handling, and triage.</p>
              <h4 className="text-lg font-semibold text-indigo-300">Topics Covered</h4>
              <ul className="text-gray-300 space-y-1 mt-1">
                <li>• Digital forensics principles, legal considerations</li>
                <li>• Chain-of-custody, documentation, forensic readiness</li>
                <li>• Disk imaging: FTK Imager, dd, DC3 tools</li>
                <li>• File systems & artifact locations (NTFS, FAT, ext4)</li>
                <li>• Memory fundamentals & volatile data collection</li>
                <li>• Timeline creation & initial triage checklists</li>
              </ul>
              <h4 className="text-lg font-semibold text-indigo-300 mt-3">Deliverable</h4>
              <p className="text-gray-300">Disk images + chain-of-custody forms + preliminary triage report</p>
            </div>

            {/* Phase 2 */}
            <div>
              <h3 className="text-xl font-bold text-white mb-1">🟠 Phase 2 — Memory Analysis & Static Malware Analysis (Weeks 4–6)</h3>
              <p className="text-gray-400 mb-2">Master memory forensics and malware classification techniques.</p>
              <h4 className="text-lg font-semibold text-orange-300">Topics Covered</h4>
              <ul className="text-gray-300 space-y-1 mt-1">
                <li>• Memory acquisition tools: Volatility, DumpIt</li>
                <li>• Analyzing processes, DLLs, handles, network connections</li>
                <li>• Static malware analysis: PE structure, strings, imports</li>
                <li>• YARA rules for malware detection and classification</li>
                <li>• Automated sandbox analysis using Cuckoo</li>
                <li>• Safe malware handling in isolated labs</li>
              </ul>
              <h4 className="text-lg font-semibold text-orange-300 mt-3">Deliverable</h4>
              <p className="text-gray-300">Memory Analysis Report + YARA Signature Pack</p>
            </div>

            {/* Phase 3 */}
            <div>
              <h3 className="text-xl font-bold text-white mb-1">🟢 Phase 3 — Network Forensics & Threat Attribution (Weeks 7–9)</h3>
              <p className="text-gray-400 mb-2">Analyze network traffic, identify attacker activity, and correlate multiple data sources.</p>
              <h4 className="text-lg font-semibold text-emerald-300">Topics Covered</h4>
              <ul className="text-gray-300 space-y-1 mt-1">
                <li>• PCAP analysis using Wireshark & tcpdump</li>
                <li>• Network protocol analysis (DNS, HTTP, SMTP, C2 channels)</li>
                <li>• Traffic carving & extracting transferred files</li>
                <li>• Network timeline creation from logs + PCAPs</li>
                <li>• Threat attribution basics using OSINT</li>
                <li>• SIEM integration for forensic log searching</li>
              </ul>
              <h4 className="text-lg font-semibold text-emerald-300 mt-3">Deliverable</h4>
              <p className="text-gray-300">PCAP Analysis Report + Extracted Artifacts + Timeline</p>
            </div>

            {/* Phase 4 */}
            <div>
              <h3 className="text-xl font-bold text-white mb-1">🔴 Phase 4 — Advanced Malware Analysis & Incident Reporting (Weeks 10–12)</h3>
              <p className="text-gray-400 mb-2">Perform deep-dive malware investigations and complete your capstone case.</p>
              <h4 className="text-lg font-semibold text-rose-300">Topics Covered</h4>
              <ul className="text-gray-300 space-y-1 mt-1">
                <li>• Dynamic malware analysis & sandbox instrumentation</li>
                <li>• Behavior graphs, API monitoring, registry/persistence analysis</li>
                <li>• Reverse engineering basics: Ghidra & IDA walkthroughs</li>
                <li>• Unpacking & deobfuscation concepts</li>
                <li>• Correlating forensic findings into a full incident narrative</li>
                <li>• Legal and ethical reporting guidelines</li>
                <li>• Capstone: evidence acquisition → final IR report</li>
              </ul>
              <h4 className="text-lg font-semibold text-rose-300 mt-3">Deliverable</h4>
              <p className="text-gray-300">Full Forensic Investigation Report + Malware Analysis Artifacts</p>
            </div>
          </div>
        </div>

        {/* Tools & Technologies Covered */}
        <div className="glass-effect rounded-2xl p-8 neon-border mb-8">
          <h2 className="text-2xl font-bold mb-4 text-indigo-400">Tools & Technologies Covered</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-white mb-2">Disk Imaging & File System Forensics</h3>
              <p className="text-gray-300">FTK Imager, dd, Sleuth Kit, Autopsy, Plaso</p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Memory & Malware Analysis</h3>
              <p className="text-gray-300">Volatility, Rekall, DumpIt, Cuckoo Sandbox, YARA</p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Network Forensics</h3>
              <p className="text-gray-300">Wireshark, tcpdump, Zeek</p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Reverse Engineering</h3>
              <p className="text-gray-300">Ghidra, IDA Pro (conceptual), radare2</p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Threat Intelligence</h3>
              <p className="text-gray-300">MISP, VirusTotal, OSINT frameworks</p>
            </div>
          </div>
        </div>

        {/* Deliverables & Assessment */}
        <div className="glass-effect rounded-2xl p-8 neon-border mb-8">
          <h2 className="text-2xl font-bold mb-4 text-blue-400">Deliverables & Assessment</h2>
          <ul className="text-gray-300 space-y-1">
            <li>• Weekly forensic evidence submissions (images, dumps, PCAPs)</li>
            <li>• Memory analysis & YARA signatures</li>
            <li>• Disk forensics report</li>
            <li>• Network forensics packet analysis</li>
            <li>• Final capstone forensic investigation report & presentation</li>
          </ul>
        </div>

        {/* What Students Gain */}
        <div className="glass-effect rounded-2xl p-8 neon-border mb-8">
          <h2 className="text-2xl font-bold mb-4 text-purple-400">What Students Gain</h2>
          <ul className="text-gray-300 space-y-1">
            <li>• Practical DFIR & malware analysis skills</li>
            <li>• Memory, disk, and network investigation experience</li>
            <li>• Ability to classify malware based on behavior & attributes</li>
            <li>• Competency with enterprise forensic and malware tools</li>
            <li>• A complete forensic case portfolio for career opportunities</li>
          </ul>
        </div>

        {/* Enrollment CTA */}
        <div className="mt-12">
          <div className="glass-effect rounded-2xl p-8 neon-border">
            <h2 className="text-2xl font-bold mb-3 gradient-text text-center">Enroll & Download</h2>
            <div className="mt-2 flex justify-center">
              <Link 
                to="/#contact" 
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-500 to-blue-600 px-8 py-3 rounded-lg font-semibold hover:from-indigo-400 hover:to-blue-500 transition-all transform hover:scale-105 pop-hover"
              >
                <Target className="w-5 h-5" />
                <span>Enroll Now</span>
              </Link>
            </div>
            <div className="mt-4 flex justify-center">
              <a
                href={hasSyllabus ? syllabusUrl : undefined}
                download={hasSyllabus ? 'Forebrain_Forensics_Malware_3Month_Syllabus' : undefined}
                aria-disabled={!hasSyllabus}
                onClick={(e) => { if (!hasSyllabus) e.preventDefault(); }}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all transform ${hasSyllabus ? 'bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-400 hover:to-blue-500 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-400/30 hover:-translate-y-0.5 pop-hover' : 'bg-gray-700 text-gray-300 cursor-not-allowed opacity-60'}`}
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