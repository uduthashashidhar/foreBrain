import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.tsx';
import './index.css';
import CybersecurityCourse from './components/courses/CybersecurityCourse';
import PenetrationTestingCourse from './components/courses/PenetrationTestingCourse';
import SOCAnalystCourse from './components/courses/SOCAnalystCourse';
import BugBountyCourse from './components/courses/BugBountyCourse';
import DigitalForensicsCourse from './components/courses/DigitalForensicsCourse';
import CloudSecurityDevSecOpsCourse from './components/courses/CloudSecurityDevSecOpsCourse';
import BlueTeamThreatHuntingCourse from './components/courses/BlueTeamThreatHuntingCourse';
import AdvancedSOCCourse from './components/courses/AdvancedSOCCourse';
import AdvancedPentestingCourse from './components/courses/AdvancedPentestingCourse';
import AICourse from './components/courses/AICourse';
import PythonCourse from './components/courses/PythonCourse';
import WebDevelopmentCourse from './components/courses/WebDevelopmentCourse';
import DataScienceCourse from './components/courses/DataScienceCourse';
import DevopsCourse from './components/courses/DevopsCourse';
import ScrollRestoration from './components/ScrollRestoration';
import { CampusRecruitmentTraining, AIModules, SoftwareDevelopment, WebSecurityAudit, CorporateWorkshops, IoTSecurity } from './components/services/index';

// Drive CSS variables for animated scrollbar thumb and themed glow
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
function updateScrollDecor() {
  const doc = document.documentElement;
  const max = doc.scrollHeight - doc.clientHeight;
  const progress = max > 0 ? (doc.scrollTop / max) : 0;
  // Set percentage string for CSS background anchor
  doc.style.setProperty('--scroll-pc', `${Math.round(progress * 100)}%`);
}
// Initialize and attach listeners (respect reduced motion)
updateScrollDecor();
if (!prefersReducedMotion) {
  window.addEventListener('scroll', updateScrollDecor, { passive: true });
  window.addEventListener('resize', updateScrollDecor);
}

// Cursor tip glow setup
const docEl = document.documentElement;
const cursorGlow = document.createElement('div');
cursorGlow.className = 'cursor-glow cursor-glow-hidden';
document.body.appendChild(cursorGlow);

let pulseTimeout: number | undefined;
let hideTimeout: number | undefined;
let lastX = window.innerWidth / 2;
let lastY = window.innerHeight / 2;
let lastT = performance.now();

function handleMouseMove(e: MouseEvent) {
  docEl.style.setProperty('--cursor-x', `${e.clientX}px`);
  docEl.style.setProperty('--cursor-y', `${e.clientY}px`);
  cursorGlow.classList.remove('cursor-glow-hidden');
  // Compute velocity to adapt intensity
  const t = performance.now();
  const dt = Math.max(1, t - lastT); // ms
  const dx = e.clientX - lastX;
  const dy = e.clientY - lastY;
  const dist = Math.hypot(dx, dy);
  const speedPxPerMs = dist / dt; // px/ms
  const speedNorm = Math.min(1, speedPxPerMs / 1.2); // tune sensitivity
  let scale = 0.95 + 0.15 * speedNorm;
  let opacity = 0.45 + 0.35 * speedNorm;

  // Subtle reduction over interactive controls to avoid distraction
  const target = e.target as Element | null;
  if (target && target.matches('a, button, input, textarea, select, [role="button"], [role="link"]')) {
    scale = Math.max(0.9, scale - 0.08);
    opacity = Math.max(0.4, opacity - 0.1);
  }
  docEl.style.setProperty('--cursor-scale', `${scale}`);
  docEl.style.setProperty('--cursor-opacity', `${opacity}`);

  lastX = e.clientX;
  lastY = e.clientY;
  lastT = t;

  if (pulseTimeout) window.clearTimeout(pulseTimeout);
  pulseTimeout = window.setTimeout(() => {
    docEl.style.setProperty('--cursor-scale', '1');
    docEl.style.setProperty('--cursor-opacity', '0.55');
  }, 140);
  if (hideTimeout) window.clearTimeout(hideTimeout);
  hideTimeout = window.setTimeout(() => {
    cursorGlow.classList.add('cursor-glow-hidden');
  }, 600);
}

if (!prefersReducedMotion) {
  window.addEventListener('mousemove', handleMouseMove, { passive: true });
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollRestoration />
      <Routes>
        <Route path="/*" element={<App />} />
        {/* Course Routes */}
        <Route path="/courses/cybersecurity" element={<CybersecurityCourse />} />
        <Route path="/courses/cybersecurity/penetration-testing-ethical-hacking" element={<PenetrationTestingCourse />} />
        <Route path="/courses/cybersecurity/soc-analyst-incident-response" element={<SOCAnalystCourse />} />
        <Route path="/courses/cybersecurity/ethical-hacking-bug-bounty" element={<BugBountyCourse />} />
        <Route path="/courses/cybersecurity/digital-forensics-malware-analysis" element={<DigitalForensicsCourse />} />
        <Route path="/courses/cybersecurity/cloud-security-devsecops" element={<CloudSecurityDevSecOpsCourse />} />
        <Route path="/courses/cybersecurity/blue-team-threat-hunting" element={<BlueTeamThreatHuntingCourse />} />
        <Route path="/courses/cybersecurity/advanced-soc-analyst" element={<AdvancedSOCCourse />} />
        <Route path="/courses/cybersecurity/advanced-pentesting" element={<AdvancedPentestingCourse />} />
        <Route path="/courses/artificial-intelligence" element={<AICourse />} />
        <Route path="/courses/python" element={<PythonCourse />} />
        <Route path="/courses/web-development" element={<WebDevelopmentCourse />} />
        <Route path="/courses/data-science" element={<DataScienceCourse />} />
        <Route path="/courses/devops" element={<DevopsCourse />} />
        {/* Service Routes */}
        <Route path="/services/campus-recruitment-training" element={<CampusRecruitmentTraining />} />
        <Route path="/services/ai-modules" element={<AIModules />} />
        <Route path="/services/software-development" element={<SoftwareDevelopment />} />
        <Route path="/services/web-security-audit" element={<WebSecurityAudit />} />
        <Route path="/services/corporate-workshops" element={<CorporateWorkshops />} />
        <Route path="/services/iot-security" element={<IoTSecurity />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
