import { Cloud, ArrowLeft, Clock, CheckCircle, BookOpen, Award, Target, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CloudSecurityDevSecOpsCourse() {
  // Find syllabus file URL by prefix anywhere under src/assets
  const syllabusUrl = (() => {
    const files = import.meta.glob('/src/assets/**/Forebrain_CloudSecurity_DevSecOps_3Month_Syllabus.*', {
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
        <Link to="/courses/cybersecurity" className="inline-flex items-center space-x-2 text-teal-400 hover:text-teal-300 transition-colors mb-8">
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Cybersecurity</span>
        </Link>

        {/* Hero */}
        <div className="glass-effect rounded-2xl p-8 neon-border mb-12">
          <div className="flex items-center space-x-6 mb-4">
            <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center">
              <Cloud className="w-10 h-10 text-white" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2 gradient-text">☁️ Forebrain — Cloud Security & DevSecOps (3-Month Program)</h1>
              <p className="text-gray-300">A fully practical, 12-week program focused on cloud security, DevSecOps automation, and multi-cloud compliance. Learn to secure AWS, Azure, and GCP while building automated CI/CD pipelines with integrated security.</p>
              <div className="flex items-center space-x-6 text-sm mt-2">
                <span className="flex items-center text-teal-300"><Clock className="w-4 h-4 mr-1" /> 3 Months (12 Weeks / 60 Days)</span>
                <span className="flex items-center text-emerald-300"><BookOpen className="w-4 h-4 mr-1" /> 1 hr class + 1 hr lab (Mon–Fri)</span>
                <span className="flex items-center text-cyan-300"><Award className="w-4 h-4 mr-1" /> Saturday: Activity Day (hands-on)</span>
                <span className="flex items-center text-teal-300"><Award className="w-4 h-4 mr-1" /> Focus: Cloud security + DevSecOps automation</span>
              </div>
            </div>
          </div>
        </div>

        {/* Program Outcome */}
        <div className="glass-effect rounded-2xl p-8 neon-border mb-8">
          <h2 className="text-2xl font-bold mb-4 text-teal-400">Program Outcome</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Master AWS, Azure & GCP security fundamentals',
              'Build secure multi-cloud architectures',
              'Configure IAM, network segmentation, encryption & logging',
              'Perform cloud security audits & vulnerability assessments',
              'Automate DevSecOps pipelines with security tools',
              'Implement container & Kubernetes security',
              'Apply IaC security in Terraform/Ansible/CloudFormation',
              'Capstone: Automated secure multi-cloud deployment',
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
          <h2 className="text-2xl font-bold mb-2 text-emerald-400">Program Structure (Phase-Wise)</h2>
          <div className="space-y-8">
            {/* Phase 1 */}
            <div>
              <h3 className="text-xl font-bold text-white mb-1">🔵 Phase 1 — Cloud Security Foundations & Architecture (Weeks 1–3)</h3>
              <p className="text-gray-400 mb-2">Learn essential cloud architecture and secure design principles.</p>
              <h4 className="text-lg font-semibold text-teal-300">Topics Covered</h4>
              <ul className="text-gray-300 space-y-1 mt-1">
                <li>• Cloud models: IaaS, PaaS, SaaS & shared responsibility</li>
                <li>• Core services: EC2/VMs, S3/Blob/Storage, VPC/VNet</li>
                <li>• IAM fundamentals: roles, policies, permission boundaries</li>
                <li>• Secure cloud networking: VPC, subnets, NACLs, security groups</li>
                <li>• Encryption & Key Management (KMS, Azure Key Vault, GCP KMS)</li>
                <li>• CloudTrail, Azure Monitor, GCP Logging</li>
                <li>• Cloud compliance frameworks: CIS, NIST, ISO 27017</li>
                <li>• Introduction to CIS Benchmarks</li>
              </ul>
              <h4 className="text-lg font-semibold text-teal-300 mt-3">Deliverable</h4>
              <p className="text-gray-300">Secure Cloud Baseline Architecture + IAM Policy + Segmented VPC Setup</p>
            </div>

            {/* Phase 2 */}
            <div>
              <h3 className="text-xl font-bold text-white mb-1">🟠 Phase 2 — Cloud Security Assessment & Hardening (Weeks 4–6)</h3>
              <p className="text-gray-400 mb-2">Perform audits, harden cloud resources, and secure containers & Kubernetes.</p>
              <h4 className="text-lg font-semibold text-orange-300">Topics Covered</h4>
              <ul className="text-gray-300 space-y-1 mt-1">
                <li>• Multi-cloud assessment tools: ScoutSuite, Prowler, CloudSploit</li>
                <li>• Automated remediation workflows</li>
                <li>• Cloud pentesting guidelines (AWS)</li>
                <li>• Container security fundamentals</li>
                <li>• Docker image scanning: Trivy, Dockle</li>
                <li>• Kubernetes auditing with kube-bench & kube-hunter</li>
                <li>• Least privilege IAM, identity federation (SSO, SAML, IAM roles)</li>
                <li>• Threat detection: GuardDuty, Azure Defender, GCP SCC</li>
              </ul>
              <h4 className="text-lg font-semibold text-orange-300 mt-3">Deliverable</h4>
              <p className="text-gray-300">Cloud Security Assessment Report + Hardened Infrastructure Scripts</p>
            </div>

            {/* Phase 3 */}
            <div>
              <h3 className="text-xl font-bold text-white mb-1">🟢 Phase 3 — DevSecOps Implementation & CI/CD Security (Weeks 7–9)</h3>
              <p className="text-gray-400 mb-2">Integrate security into DevOps workflows and automate testing.</p>
              <h4 className="text-lg font-semibold text-emerald-300">Topics Covered</h4>
              <ul className="text-gray-300 space-y-1 mt-1">
                <li>• DevOps vs DevSecOps: secure SDLC</li>
                <li>• Security integration into CI/CD pipelines</li>
                <li>• Jenkins, GitHub Actions & GitLab CI automation</li>
                <li>• SAST with SonarQube, Snyk</li>
                <li>• DAST automation using OWASP ZAP</li>
                <li>• Container signing & verification</li>
                <li>• IaC Security: Terraform, Ansible & CloudFormation hardening</li>
                <li>• Secrets management with Vault, AWS Secrets Manager, GitHub Secrets</li>
              </ul>
              <h4 className="text-lg font-semibold text-emerald-300 mt-3">Deliverable</h4>
              <p className="text-gray-300">Secure CI/CD Pipeline with SAST + DAST + IaC Security + Secrets Integration</p>
            </div>

            {/* Phase 4 */}
            <div>
              <h3 className="text-xl font-bold text-white mb-1">🔴 Phase 4 — Compliance, Monitoring & Capstone (Weeks 10–12)</h3>
              <p className="text-gray-400 mb-2">Implement continuous compliance and complete a real-world multi-cloud security project.</p>
              <h4 className="text-lg font-semibold text-rose-300">Topics Covered</h4>
              <ul className="text-gray-300 space-y-1 mt-1">
                <li>• Continuous compliance: AWS Config, Azure Policy, GCP SCC</li>
                <li>• Multi-cloud monitoring: CloudWatch, Azure Monitor, ELK</li>
                <li>• Automated IR workflows using Lambda & Azure Logic Apps</li>
                <li>• Policy-as-code using OPA & Terraform Cloud Policies</li>
                <li>• Multi-cloud governance architecture</li>
                <li>• Capstone: Automated multi-cloud deployment + secure DevSecOps pipeline</li>
                <li>• Final audit report and project presentation</li>
              </ul>
              <h4 className="text-lg font-semibold text-rose-300 mt-3">Deliverable</h4>
              <p className="text-gray-300">Capstone Report + Automated Security-Enforced Multi-Cloud Infrastructure</p>
            </div>
          </div>
        </div>

        {/* Tools & Technologies Covered */}
        <div className="glass-effect rounded-2xl p-8 neon-border mb-8">
          <h2 className="text-2xl font-bold mb-4 text-teal-400">Tools & Technologies Covered</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-white mb-2">Cloud Platforms</h3>
              <p className="text-gray-300">AWS, Azure, Google Cloud (GCP)</p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Security & Assessment</h3>
              <p className="text-gray-300">ScoutSuite, Prowler, CloudSploit, Pacu, Burp Suite</p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Containers & Kubernetes</h3>
              <p className="text-gray-300">Docker, Trivy, Dockle, kube-bench, kube-hunter</p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">DevSecOps / CI/CD</h3>
              <p className="text-gray-300">Jenkins, GitHub Actions, GitLab CI, SonarQube, Snyk</p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Infrastructure as Code (IaC)</h3>
              <p className="text-gray-300">Terraform, Ansible, CloudFormation</p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Monitoring & Compliance</h3>
              <p className="text-gray-300">AWS Config, Azure Defender, GCP Security Command Center, ELK Stack, Grafana</p>
            </div>
          </div>
        </div>

        {/* Deliverables & Assessment */}
        <div className="glass-effect rounded-2xl p-8 neon-border mb-8">
          <h2 className="text-2xl font-bold mb-4 text-emerald-400">Deliverables & Assessment</h2>
          <ul className="text-gray-300 space-y-1">
            <li>• Cloud security lab exercises</li>
            <li>• Hardening scripts & assessment reports</li>
            <li>• Secure CI/CD pipeline project</li>
            <li>• Compliance dashboards</li>
            <li>• Final capstone: Multi-Cloud Automated Deployment with Security Controls</li>
          </ul>
        </div>

        {/* What Students Gain */}
        <div className="glass-effect rounded-2xl p-8 neon-border mb-8">
          <h2 className="text-2xl font-bold mb-4 text-cyan-400">What Students Gain</h2>
          <ul className="text-gray-300 space-y-1">
            <li>• Multi-cloud security skills</li>
            <li>• DevSecOps engineering experience</li>
            <li>• Real-world auditing and hardening skills</li>
            <li>• CI/CD security automation expertise</li>
            <li>• Portfolio with cloud + DevSecOps projects</li>
            <li>• Eligibility for roles: AWS Security Analyst, DevSecOps Engineer, Cloud Security Engineer</li>
          </ul>
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
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-teal-500 to-emerald-600 px-8 py-3 rounded-lg font-semibold hover:from-teal-400 hover:to-emerald-500 transition-all transform hover:scale-105 pop-hover"
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
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all transform ${hasSyllabus ? 'bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-400 hover:to-emerald-500 shadow-lg shadow-teal-500/20 hover:shadow-teal-400/30 hover:-translate-y-0.5 pop-hover' : 'bg-gray-700 text-gray-300 cursor-not-allowed opacity-60'}`}
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