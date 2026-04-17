import type { Metadata } from "next";
import LRPAFramework from "@/components/academics/LRPAFramework";
import {
  FlaskConical,
  Atom,
  Calculator,
  Globe,
  Languages,
  Laptop,
  Target,
  Trophy,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Secondary Level",
  description:
    "Shree Springdale Secondary School Secondary Level curriculum (Grade 6-10) — advanced academics, SEE preparation, excursions, and real-world application through the LRPA framework.",
};

const subjects = [
  {
    icon: Atom,
    name: "Science",
    description: "Physics, Chemistry, and Biology with dedicated lab sessions, experiments, and project-based assessments.",
  },
  {
    icon: Calculator,
    name: "Mathematics",
    description: "Advanced algebra, geometry, trigonometry, and statistics through problem-solving and analytical thinking.",
  },
  {
    icon: Languages,
    name: "English",
    description: "Literature analysis, creative writing, public speaking, and advanced grammar for global communication.",
  },
  {
    icon: Globe,
    name: "Social Studies",
    description: "History, geography, economics, and civic education with real-world context and critical analysis.",
  },
  {
    icon: Languages,
    name: "Nepali",
    description: "Advanced Nepali literature, grammar, and composition developing cultural awareness and communication mastery.",
  },
  {
    icon: Laptop,
    name: "Computer Science",
    description: "Digital literacy, basic programming, internet skills, and technology applications for the modern world.",
  },
];

const seeFeatures = [
  {
    icon: Target,
    title: "Targeted Preparation",
    description: "Structured revision plans, model papers, and practice tests aligned with SEE patterns.",
  },
  {
    icon: Trophy,
    title: "Track Record",
    description: "Consistently high pass rates with distinction-level achievers every year.",
  },
  {
    icon: FlaskConical,
    title: "Practical Focus",
    description: "Emphasis on practical exams, lab work, and application-based questions for higher scores.",
  },
];

export default function SecondaryPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-navy to-navy-light relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/20 text-gold-300 text-xs font-semibold tracking-wide uppercase mb-6">
            <FlaskConical className="w-3.5 h-3.5" />
            Secondary Level
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Secondary <span className="text-gradient">Education</span>
          </h1>
          <p className="max-w-2xl mx-auto text-white/80 text-lg">
            Grade 6 through 10 — developing analytical thinkers, confident
            communicators, and SEE-ready scholars.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-heading text-3xl font-bold text-body mb-4">
              Preparing Leaders for <span className="text-gold">Tomorrow</span>
            </h2>
            <p className="text-body-muted leading-relaxed">
              Our secondary program challenges students with rigorous academics while
              nurturing their unique talents. Students of Grade IX and X visit outside
              the valley once a year for field visits. The school doesn&apos;t stick to the
              same publication for all books — every subject teacher checks and recommends
              the curriculum. We have also administered the standard course of CEFS for
              updated computer knowledge.
            </p>
          </div>

          {/* LRPA Framework */}
          <LRPAFramework level="secondary" />
        </div>
      </section>

      {/* Subjects */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-body mb-4">
              Core <span className="text-gold">Subjects</span>
            </h2>
            <p className="max-w-2xl mx-auto text-body-muted">
              A comprehensive curriculum covering all SEE subjects with depth and rigor.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjects.map((subject) => (
              <div
                key={subject.name}
                className="p-6 rounded-2xl bg-cream border border-cream-dark hover:border-gold/30 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                  <subject.icon className="w-5 h-5 text-gold-dark" />
                </div>
                <h3 className="font-heading text-lg font-bold text-body mb-2">
                  {subject.name}
                </h3>
                <p className="text-sm text-body-muted leading-relaxed">
                  {subject.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEE Preparation */}
      <section className="py-20 bg-gradient-to-br from-navy to-navy-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
              SEE <span className="text-gradient">Preparation</span>
            </h2>
            <p className="max-w-2xl mx-auto text-white/80">
              Focused, structured preparation that brings out the best in every student.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {seeFeatures.map((feature) => (
              <div
                key={feature.title}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-5 h-5 text-gold" />
                </div>
                <h3 className="font-heading text-lg font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-white/80 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
