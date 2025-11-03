import { Users, Award, BookOpen, ArrowRight } from 'lucide-react';

export default function CampusRecruitmentTraining() {
  return (
    <section className="relative py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold gradient-text">Campus Recruitment Training (CRT)</h1>
          <p className="text-gray-400 mt-3 max-w-3xl">
            Structured, outcome-driven training designed to help students crack campus placements. We focus on aptitude, communication, interview skills,
            and job-readiness through practice-driven modules and mock assessments.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="glass-effect rounded-2xl p-6 neon-border">
              <h2 className="text-xl font-semibold text-cyan-400 mb-3">What You’ll Learn</h2>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Aptitude: Quantitative, Logical Reasoning, and Verbal Ability</li>
                <li>Communication: Presentation skills, group discussion, and email etiquette</li>
                <li>Interview Prep: HR and technical interview practice with feedback</li>
                <li>Resume Building: Crafting ATS-friendly resumes and LinkedIn optimization</li>
                <li>Mock Tests: Timed assessments and analysis to improve performance</li>
              </ul>
            </div>

            <div className="glass-effect rounded-2xl p-6 neon-border">
              <h2 className="text-xl font-semibold text-cyan-400 mb-3">Training Modules</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { icon: BookOpen, title: 'Aptitude Foundations' },
                  { icon: Users, title: 'Communication & GD' },
                  { icon: Award, title: 'Interview Mastery' },
                  { icon: BookOpen, title: 'Resume & Portfolio' },
                ].map((m, idx) => (
                  <div key={idx} className="glass-effect rounded-xl p-4 flex items-center space-x-3">
                    <m.icon className="w-6 h-6 text-cyan-400" />
                    <span className="text-gray-300">{m.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="glass-effect rounded-2xl p-6 neon-border">
              <h3 className="text-lg font-semibold text-cyan-400 mb-2">Who It’s For</h3>
              <p className="text-gray-300">Pre-final and final-year students preparing for campus placements and off-campus roles.</p>
            </div>
            <div className="glass-effect rounded-2xl p-6 neon-border">
              <h3 className="text-lg font-semibold text-cyan-400 mb-2">Outcomes</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Improved test scores and interview confidence</li>
                <li>Job-ready resume and profile</li>
                <li>Placement-ready communication skills</li>
              </ul>
            </div>
            <a href="#contact" className="inline-flex items-center space-x-2 text-cyan-400 font-semibold hover:text-cyan-300">
              <span>Request Info</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}