import type { Metadata } from "next";
import { FileText, CalendarDays, ClipboardCheck, Users } from "lucide-react";
import AdmissionForm from "@/components/AdmissionForm";

export const metadata: Metadata = {
  title: "Admission",
  description:
    "Apply for admission at Shree Springdale Secondary School, Sipadol-8, Bhaktapur. Admissions open for Nursery through Grade 10.",
};

const admissionSteps = [
  {
    icon: FileText,
    title: "Fill the Form",
    description: "Complete the online admission form with student and guardian details.",
  },
  {
    icon: ClipboardCheck,
    title: "Review & Interview",
    description: "Our admissions team will review your application and schedule an interview.",
  },
  {
    icon: CalendarDays,
    title: "Entrance Assessment",
    description: "Students appear for a grade-appropriate entrance assessment.",
  },
  {
    icon: Users,
    title: "Welcome to Springdale!",
    description: "Upon acceptance, complete enrollment and join the Springdale family.",
  },
];

const requiredDocs = [
  "Birth Certificate (photocopy)",
  "Previous School Report Card",
  "Transfer Certificate (TC)",
  "2 Passport-size Photos",
  "Guardian's Citizenship ID (photocopy)",
];

export default function AdmissionPage() {
  return (
    <div className="bg-cream min-h-screen">
      {/* Immersive Hero */}
      <section className="relative pt-40 pb-32 overflow-hidden bg-navy">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-[100px] -translate-y-1/2 animate-float" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-green/10 rounded-full blur-[80px] animate-float" style={{ animationDelay: '2s' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-slide-up">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white shadow-lg backdrop-blur-md text-xs font-bold tracking-widest uppercase mb-8">
            Admissions Open 2083
          </div>
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight leading-normal pt-2">
            Apply for <span className="text-gradient">Admission</span>
          </h1>
          <p className="max-w-2xl mx-auto text-white/80 text-lg sm:text-xl leading-relaxed">
            Begin your child&apos;s journey at Shree Springdale Secondary School.
            Fill out the form below and our admissions team will guide you through the process.
          </p>
        </div>
      </section>

      {/* Admission Process Steps */}
      <section className="relative z-20 -mt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {admissionSteps.map((step, index) => (
              <div
                key={step.title}
                className="relative bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-cream-dark group hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                    <step.icon className="w-5 h-5 text-gold-dark" />
                  </div>
                  <span className="text-xs font-bold text-navy/30 uppercase">Step {index + 1}</span>
                </div>
                <h3 className="font-heading text-base font-bold text-body mb-1.5">{step.title}</h3>
                <p className="text-sm text-body-muted leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

            {/* Sidebar Info */}
            <div className="lg:col-span-4 flex flex-col gap-6 lg:sticky lg:top-24 lg:self-start">
              {/* Required Documents */}
              <div className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-cream-dark">
                <h3 className="font-heading text-xl font-bold text-body mb-6">
                  Required Documents
                </h3>
                <ul className="space-y-4">
                  {requiredDocs.map((doc) => (
                    <li key={doc} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-gold mt-2 shrink-0" />
                      <span className="text-sm text-body-muted font-medium leading-relaxed">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Key Info Card */}
              <div className="bg-navy rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.1)] text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-3xl" />
                <div className="relative z-10">
                  <h3 className="font-heading text-xl font-bold mb-4">
                    Why Springdale?
                  </h3>
                  <ul className="space-y-3 text-sm text-white/80">
                    <li className="flex items-center gap-2">
                      <span className="text-gold">✦</span> Max 25 students per class
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-gold">✦</span> LRPA teaching framework
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-gold">✦</span> 5 major sports programs
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-gold">✦</span> Boarding facilities
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-gold">✦</span> Established since 2044 B.S.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Contact for queries */}
              <div className="bg-gold/5 rounded-3xl p-8 border border-gold/20">
                <h3 className="font-heading text-lg font-bold text-body mb-3">
                  Need Help?
                </h3>
                <p className="text-sm text-body-muted leading-relaxed mb-4">
                  For any queries regarding admissions, contact us:
                </p>
                <div className="space-y-2 text-sm">
                  <p className="text-body font-medium">📞 +977 01-5122204</p>
                  <p className="text-body font-medium">✉️ springdale.edu.np@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-8">
              <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.07)] border border-cream-dark">
                <div className="mb-10">
                  <h2 className="font-heading text-3xl font-extrabold text-body mb-3">
                    Admission Application Form
                  </h2>
                  <p className="text-body-muted text-base">
                    Please fill in all required fields. Fields marked with <span className="text-crimson font-bold">*</span> are mandatory.
                  </p>
                </div>
                <AdmissionForm />
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
