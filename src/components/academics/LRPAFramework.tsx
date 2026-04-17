import Link from "next/link";
import {
  Lightbulb,
  RefreshCw,
  PenTool,
  Rocket,
  ArrowRight,
} from "lucide-react";

const lrpaSteps = [
  {
    icon: Lightbulb,
    letter: "L",
    title: "Learning",
    description:
      "Conceptual exploration through interactive lessons, visual aids, and guided discovery. Students engage with new ideas in a supportive, curiosity-driven environment.",
    color: "from-gold-500 to-gold-600",
    bgColor: "bg-gold-500/10",
  },
  {
    icon: RefreshCw,
    letter: "R",
    title: "Reinforcement",
    description:
      "Strengthening understanding through structured practice, group discussions, peer collaboration, and teacher-guided review sessions.",
    color: "from-green to-green-light",
    bgColor: "bg-green/10",
  },
  {
    icon: PenTool,
    letter: "P",
    title: "Practice",
    description:
      "Individual mastery through problem-solving exercises, worksheets, quizzes, and self-assessment tools that build confidence and accuracy.",
    color: "from-gold to-gold-light",
    bgColor: "bg-gold/10",
  },
  {
    icon: Rocket,
    letter: "A",
    title: "Application",
    description:
      "Real-world projects, experiments, presentations, and cross-curricular activities that connect classroom learning to everyday life.",
    color: "from-crimson to-red-400",
    bgColor: "bg-crimson/10",
  },
];

export default function LRPAFramework({
  level,
}: {
  level: "primary" | "secondary";
}) {
  return (
    <div>
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 text-gold-dark text-xs font-semibold tracking-wide uppercase mb-5">
          Our Teaching Framework
        </div>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-body mb-4">
          The <span className="text-gold">LRPA</span> Framework
        </h2>
        <p className="max-w-2xl mx-auto text-body-muted">
          {level === "primary"
            ? "Our primary-level LRPA approach builds strong foundations through age-appropriate, activity-based learning that makes every lesson an adventure."
            : "At the secondary level, LRPA develops advanced critical thinking, analytical skills, and real-world application to prepare students for SEE and beyond."}
        </p>
      </div>

      {/* Steps */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {lrpaSteps.map((step, i) => (
          <div
            key={step.letter}
            className="relative group"
          >
            {/* Connector line (desktop) */}
            {i < lrpaSteps.length - 1 && (
              <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-cream-dark to-transparent z-0 -translate-x-1/2" />
            )}

            <div className="relative p-6 rounded-2xl bg-white border border-cream-dark hover:border-gold/30 hover:shadow-xl hover:shadow-gold/5 transition-all duration-500 hover:-translate-y-1">
              {/* Step Number */}
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}
                >
                  <span className="text-xl font-bold text-white font-heading">
                    {step.letter}
                  </span>
                </div>
                <div
                  className={`w-10 h-10 rounded-xl ${step.bgColor} flex items-center justify-center`}
                >
                  <step.icon className="w-5 h-5 text-body-muted" />
                </div>
              </div>

              <h3 className="text-lg font-heading font-bold text-body mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-body-muted leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* LRPA Summary */}
      <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-navy to-navy-light text-white">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1">
            <h3 className="font-heading text-xl font-bold mb-2">
              Why LRPA Works
            </h3>
            <p className="text-white/80 text-sm leading-relaxed">
              By cycling through Learning → Reinforcement → Practice → Application,
              students develop deep understanding, not just rote memorization. Each
              phase builds on the previous one, creating a complete learning experience
              that sticks.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 btn-primary group"
          >
            Learn More
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
