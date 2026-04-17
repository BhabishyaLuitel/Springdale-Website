import Link from "next/link";
import {
  Baby,
  BookOpen,
  FlaskConical,
  GraduationCap,
  ArrowRight,
} from "lucide-react";

const programs = [
  {
    icon: Baby,
    title: "Pre-Primary",
    grades: "Nursery – KG",
    description:
      "A playful, discovery-based environment where young learners build foundational skills through storytelling, art, and sensory exploration.",
    color: "from-pink-500/10 to-pink-500/5",
    iconColor: "text-pink-500",
    href: "/academics/primary",
  },
  {
    icon: BookOpen,
    title: "Primary Level",
    grades: "Grade 1 – 5",
    description:
      "Building strong academic foundations with our LRPA framework — nurturing curiosity, literacy, numeracy, and social skills.",
    color: "from-green/10 to-green/5",
    iconColor: "text-green",
    href: "/academics/primary",
  },
  {
    icon: FlaskConical,
    title: "Lower Secondary",
    grades: "Grade 6 – 8",
    description:
      "Expanding horizons through science labs, project-based learning, and critical thinking development across all subjects.",
    color: "from-gold-500/10 to-gold-500/5",
    iconColor: "text-gold-500",
    href: "/academics/secondary",
  },
  {
    icon: GraduationCap,
    title: "Secondary Level",
    grades: "Grade 9 – 10",
    description:
      "Rigorous SEE preparation with advanced labs, career guidance, and application-based learning using the LRPA framework.",
    color: "from-gold/10 to-gold/5",
    iconColor: "text-gold-dark",
    href: "/academics/secondary",
  },
];

export default function ProgramsPreview() {
  return (
    <section className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 text-gold-dark text-xs font-semibold tracking-wide uppercase mb-5">
            Our Programs
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-body mb-4">
            Academic <span className="text-gold">Programs</span>
          </h2>
          <p className="max-w-2xl mx-auto text-body-muted">
            From early childhood through secondary education, our programs are
            designed to inspire, challenge, and prepare students for the future.
          </p>
        </div>

        {/* Program Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program) => (
            <Link
              key={program.title}
              href={program.href}
              className="group relative p-8 rounded-3xl bg-white/50 backdrop-blur-3xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:bg-white/80 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-gradient-to-br from-gold/30 to-gold/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div
                className={`relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br ${program.color} border border-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-sm`}
              >
                <program.icon className={`w-7 h-7 ${program.iconColor}`} />
              </div>
              <h3 className="relative z-10 text-xl font-heading font-extrabold text-primary mb-1">
                {program.title}
              </h3>
              <p className="text-xs text-gold-dark font-semibold mb-3">
                {program.grades}
              </p>
              <p className="text-sm text-body-muted leading-relaxed mb-5">
                {program.description}
              </p>
              <div className="flex items-center gap-1 text-sm text-gold-dark font-semibold group-hover:gap-2 transition-all">
                Learn More
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
