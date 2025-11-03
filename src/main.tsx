import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.tsx';
import './index.css';
import CybersecurityCourse from './components/courses/CybersecurityCourse';
import AICourse from './components/courses/AICourse';
import PythonCourse from './components/courses/PythonCourse';
import WebDevelopmentCourse from './components/courses/WebDevelopmentCourse';
import DataScienceCourse from './components/courses/DataScienceCourse';
import DevopsCourse from './components/courses/DevopsCourse';
import ScrollRestoration from './components/ScrollRestoration';
import { CampusRecruitmentTraining, AIModules, SoftwareDevelopment, WebSecurityAudit, CorporateWorkshops, IoTSecurity } from './components/services/index';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollRestoration />
      <Routes>
        <Route path="/*" element={<App />} />
        {/* Course Routes */}
        <Route path="/courses/cybersecurity" element={<CybersecurityCourse />} />
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
