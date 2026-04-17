import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, FlaskConical, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Academics",
  description:
    "Explore Shree Springdale Secondary School academic programs from Pre-Primary through Secondary levels, powered by the innovative LRPA teaching framework. Class sizes limited to 25 students.",
};

const levels = [
  {
    icon: BookOpen,
    title: "Primary Level",
    grades: "Pre-Primary – Grade 5",
    description:
      "Building strong foundations through play-based and activity-driven learning. Our LRPA framework ensures every young learner develops curiosity, literacy, and numeracy skills.",
    href: "/academics/primary",
    gradient: "from-green/10 to-emerald-500/5",
    iconColor: "text-green",
  },
  {
    icon: FlaskConical,
    title: "Secondary Level",
    grades: "Grade 6 – 10",
    description:
      "Advanced academics with hands-on labs, project-based learning, and rigorous SEE preparation. The LRPA framework deepens critical thinking and real-world application.",
    href: "/academics/secondary",
    gradient: "from-gold-500/10 to-indigo-500/5",
    iconColor: "text-gold-600",
  },
];

export default function AcademicsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-navy to-navy-light relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/80 text-xs font-semibold tracking-wide uppercase mb-6">
            Academic Programs
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Our <span className="text-gradient">Academics</span>
          </h1>
          <p className="max-w-2xl mx-auto text-white/80 text-lg">
            A curriculum powered by the LRPA framework with maximum 25 students per
            class — preparing students for examinations, careers, and life.
          </p>
        </div>
      </section>

      {/* Levels */}
      <section className="py-20 bg-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {levels.map((level) => (
              <Link
                key={level.title}
                href={level.href}
                className="group p-8 rounded-2xl bg-white border border-cream-dark hover:border-gold/30 hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${level.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <level.icon className={`w-7 h-7 ${level.iconColor}`} />
                </div>
                <h2 className="font-heading text-2xl font-bold text-body mb-2">
                  {level.title}
                </h2>
                <p className="text-sm text-gold-dark font-semibold mb-4">
                  {level.grades}
                </p>
                <p className="text-body-muted leading-relaxed mb-6">
                  {level.description}
                </p>
                <div className="inline-flex items-center gap-2 text-sm text-gold-dark font-semibold group-hover:gap-3 transition-all">
                  Explore Curriculum
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* LRPA Brief */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-body mb-4">
            The <span className="text-gold">LRPA</span> Advantage
          </h2>
          <p className="max-w-2xl mx-auto text-body-muted mb-10">
            Every lesson at Springdale follows our proven 4-step framework —
            from conceptual exploration to real-world mastery.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {["Learning", "Reinforcement", "Practice", "Application"].map(
              (step, i) => (
                <div
                  key={step}
                  className="flex items-center gap-3 px-6 py-3 rounded-xl bg-cream border border-cream-dark"
                >
                  <span className="w-8 h-8 rounded-lg bg-gold text-navy text-sm font-bold flex items-center justify-center">
                    {step[0]}
                  </span>
                  <span className="text-sm font-medium text-body">
                    {step}
                  </span>
                  {i < 3 && (
                    <ArrowRight className="w-4 h-4 text-navy/30 hidden sm:block" />
                  )}
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </>
  );
}
