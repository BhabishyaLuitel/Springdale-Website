"use client";

import { useState, useMemo } from "react";
import { Send, CheckCircle, Loader2, GraduationCap, Info } from "lucide-react";

const levels = [
  { value: "pre-primary", label: "Pre-Primary" },
  { value: "primary", label: "Primary" },
  { value: "lower-secondary", label: "Lower Secondary" },
  { value: "secondary", label: "Secondary" },
];

const gradesByLevel: Record<string, string[]> = {
  "pre-primary": ["Nursery", "LKG", "UKG"],
  "primary": ["Grade 1", "Grade 2", "Grade 3", "Grade 4", "Grade 5"],
  "lower-secondary": ["Grade 6", "Grade 7", "Grade 8"],
  "secondary": ["Grade 9", "Grade 10"],
};

const genderOptions = ["Male", "Female", "Other"];

export default function AdmissionForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState("");

  const availableGrades = useMemo(() => {
    return selectedLevel ? gradesByLevel[selectedLevel] || [] : [];
  }, [selectedLevel]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 2000);
  };

  if (submitted) {
    return (
      <div className="text-center py-20 px-4 animate-scale-in">
        <div className="w-24 h-24 rounded-full bg-green/10 flex items-center justify-center mx-auto mb-8 shrink-0 relative">
          <div className="absolute inset-0 rounded-full border border-green/20 animate-ping opacity-20" />
          <CheckCircle className="w-12 h-12 text-green relative z-10" />
        </div>
        <h3 className="font-heading text-3xl font-bold text-body mb-4">
          Application Submitted!
        </h3>
        <p className="text-body-muted text-base max-w-lg mx-auto mb-10 leading-relaxed">
          Thank you for applying to Shree Springdale Secondary School. Our admissions
          team will review your application and contact you within 3 business days
          to schedule an interview.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setSelectedLevel("");
          }}
          className="px-8 py-3.5 text-sm font-bold text-body bg-cream border-2 border-cream-dark rounded-xl hover:bg-cream-dark transition-all cursor-pointer shadow-sm"
        >
          Submit Another Application
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-10">
      {/* ─── Section 1: Student Information ─── */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center text-gold-dark font-bold text-sm border border-gold/20">1</div>
          <h3 className="font-heading text-lg font-bold text-body">Student Information</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="studentName" className="form-label">
              Student&apos;s Full Name <span className="text-crimson">*</span>
            </label>
            <input type="text" id="studentName" required className="form-input" placeholder="e.g. Ram Bahadur Shrestha" />
          </div>
          <div className="space-y-2">
            <label htmlFor="dob" className="form-label">
              Date of Birth <span className="text-crimson">*</span>
            </label>
            <input type="date" id="dob" required className="form-input" />
          </div>
          <div className="space-y-2">
            <label htmlFor="gender" className="form-label">
              Gender <span className="text-crimson">*</span>
            </label>
            <select id="gender" required className="form-select">
              <option value="">Select gender</option>
              {genderOptions.map((g) => (
                <option key={g} value={g.toLowerCase()}>{g}</option>
              ))}
            </select>
          </div>
          <div className="space-y-2">
            <label htmlFor="address" className="form-label">
              Home Address <span className="text-crimson">*</span>
            </label>
            <input type="text" id="address" required className="form-input" placeholder="e.g. Bhaktapur-5, Nepal" />
          </div>
        </div>
      </div>

      {/* ─── Divider ─── */}
      <div className="border-t border-cream-dark" />

      {/* ─── Section 2: Level & Grade ─── */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center text-gold-dark font-bold text-sm border border-gold/20">2</div>
          <h3 className="font-heading text-lg font-bold text-body">Academic Level & Grade</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="level" className="form-label">
              Applying for Level <span className="text-crimson">*</span>
            </label>
            <select
              id="level"
              required
              className="form-select"
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
            >
              <option value="">Select a level</option>
              {levels.map((l) => (
                <option key={l.value} value={l.value}>{l.label}</option>
              ))}
            </select>
          </div>
          <div className="space-y-2">
            <label htmlFor="grade" className="form-label">
              Applying for Grade <span className="text-crimson">*</span>
            </label>
            <select
              id="grade"
              required
              className={`form-select ${!selectedLevel ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={!selectedLevel}
            >
              <option value="">{selectedLevel ? "Select a grade" : "Select level first"}</option>
              {availableGrades.map((g) => (
                <option key={g} value={g}>{g}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Dynamic info box based on selected level */}
        {selectedLevel && (
          <div className="mt-4 p-4 rounded-xl bg-gold/5 border border-gold/20 animate-fade-in">
            <div className="flex items-start gap-3">
              <GraduationCap className="w-5 h-5 text-gold-dark mt-0.5 shrink-0" />
              <div>
                <p className="text-sm font-bold text-body mb-1">
                  {levels.find((l) => l.value === selectedLevel)?.label} Level
                </p>
                <p className="text-xs text-body-muted leading-relaxed">
                  {selectedLevel === "pre-primary" && "Our Pre-Primary program focuses on play-based learning, sensory exploration, and building foundational social skills in a nurturing environment."}
                  {selectedLevel === "primary" && "In our Primary Level, children develop core academic skills through our LRPA framework — nurturing curiosity, literacy, numeracy, and social skills."}
                  {selectedLevel === "lower-secondary" && "Lower Secondary expands horizons through science labs, project-based learning, and critical thinking across all subjects."}
                  {selectedLevel === "secondary" && "Our Secondary Level focuses on rigorous SEE preparation with advanced labs, career guidance, and real-world application-based learning."}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ─── Divider ─── */}
      <div className="border-t border-cream-dark" />

      {/* ─── Section 3: Previous School ─── */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center text-gold-dark font-bold text-sm border border-gold/20">3</div>
          <h3 className="font-heading text-lg font-bold text-body">Previous Education</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="prevSchool" className="form-label">
              Previous School Name
            </label>
            <input type="text" id="prevSchool" className="form-input" placeholder="Name of previous school (if any)" />
          </div>
          <div className="space-y-2">
            <label htmlFor="lastGrade" className="form-label">
              Last Grade Completed
            </label>
            <input type="text" id="lastGrade" className="form-input" placeholder="e.g. Grade 3" />
          </div>
        </div>
      </div>

      {/* ─── Divider ─── */}
      <div className="border-t border-cream-dark" />

      {/* ─── Section 4: Guardian Information ─── */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center text-gold-dark font-bold text-sm border border-gold/20">4</div>
          <h3 className="font-heading text-lg font-bold text-body">Guardian Information</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="guardianName" className="form-label">
              Guardian&apos;s Full Name <span className="text-crimson">*</span>
            </label>
            <input type="text" id="guardianName" required className="form-input" placeholder="Parent or guardian name" />
          </div>
          <div className="space-y-2">
            <label htmlFor="relationship" className="form-label">
              Relationship <span className="text-crimson">*</span>
            </label>
            <select id="relationship" required className="form-select">
              <option value="">Select relationship</option>
              <option value="father">Father</option>
              <option value="mother">Mother</option>
              <option value="guardian">Legal Guardian</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="space-y-2">
            <label htmlFor="guardianPhone" className="form-label">
              Phone Number <span className="text-crimson">*</span>
            </label>
            <input type="tel" id="guardianPhone" required className="form-input" placeholder="+977 98..." />
          </div>
          <div className="space-y-2">
            <label htmlFor="guardianEmail" className="form-label">
              Email Address
            </label>
            <input type="email" id="guardianEmail" className="form-input" placeholder="email@example.com" />
          </div>
        </div>
      </div>

      {/* ─── Divider ─── */}
      <div className="border-t border-cream-dark" />

      {/* ─── Section 5: Additional Info ─── */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center text-gold-dark font-bold text-sm border border-gold/20">5</div>
          <h3 className="font-heading text-lg font-bold text-body">Additional Information</h3>
        </div>
        <div className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="medical" className="form-label">
              Medical Conditions / Allergies
            </label>
            <textarea
              id="medical"
              rows={3}
              className="form-input resize-none leading-relaxed"
              placeholder="Any known allergies, medical conditions, or special needs (optional)"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="referral" className="form-label">
              How did you hear about us?
            </label>
            <select id="referral" className="form-select">
              <option value="">Select an option</option>
              <option value="friends">Friends / Family</option>
              <option value="social-media">Social Media</option>
              <option value="website">Website</option>
              <option value="newspaper">Newspaper / Pamphlet</option>
              <option value="walk-in">Walk In</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
      </div>

      {/* ─── Terms & Submit ─── */}
      <div className="space-y-6 pt-2">
        <div className="bg-cream rounded-xl p-5 border border-cream-dark">
          <label className="flex items-start gap-3 cursor-pointer group">
            <input
              type="checkbox"
              required
              className="mt-1 w-5 h-5 rounded-md border-2 border-slate-300 text-gold focus:ring-gold/20 cursor-pointer accent-gold"
            />
            <span className="text-sm text-body-muted leading-relaxed group-hover:text-body transition-colors">
              I confirm that the information provided is accurate. I understand that an admission interview
              may be required and that submission of this form does not guarantee enrollment.
            </span>
          </label>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full btn-primary !py-4 !text-base disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {loading ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <>
              <Send className="w-5 h-5" />
              Submit Admission Application
            </>
          )}
        </button>

        <p className="text-center text-xs text-body-muted/70 flex items-center justify-center gap-1.5">
          <Info className="w-3.5 h-3.5" />
          Your information is safe and will only be used for the admission process.
        </p>
      </div>
    </form>
  );
}
