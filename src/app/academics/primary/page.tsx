import type { Metadata } from "next";
import LRPAFramework from "@/components/academics/LRPAFramework";
import { BookOpen, Palette, Calculator, Globe, Languages } from "lucide-react";

export const metadata: Metadata = {
  title: "Primary Level",
  description:
    "Shree Springdale Secondary School Primary Level curriculum (Pre-Primary to Grade 5) — building strong foundations through activity-based learning with the LRPA framework.",
};

const subjects = [
  {
    icon: Calculator,
    name: "Mathematics",
    description: "Number sense, operations, geometry, and problem-solving through hands-on manipulatives and games.",
  },
  {
    icon: Globe,
    name: "Science & Environment",
    description: "Exploring the natural world through observation, simple experiments, and outdoor learning.",
  },
  {
    icon: Languages,
    name: "English Language",
    description: "Reading, writing, speaking, and listening skills through stories, phonics, and creative expression.",
  },
  {
    icon: BookOpen,
    name: "Nepali Language",
    description: "Strong Nepali literacy through traditional stories, grammar, composition, and cultural heritage.",
  },
  {
    icon: Globe,
    name: "Social Studies",
    description: "Understanding our community, national identity, geography, and civic responsibility.",
  },
  {
    icon: Palette,
    name: "Creative Arts",
    description: "Visual arts, music, dance, and craft projects that develop creativity and self-expression.",
  },
];

export default function PrimaryPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-navy to-navy-light relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-green/5 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green/20 text-green-light text-xs font-semibold tracking-wide uppercase mb-6">
            <BookOpen className="w-3.5 h-3.5" />
            Primary Level
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Primary <span className="text-gradient">Education</span>
          </h1>
          <p className="max-w-2xl mx-auto text-white/80 text-lg">
            Pre-Primary through Grade 5 — building the foundations of curiosity,
            literacy, and lifelong learning through our LRPA approach.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-heading text-3xl font-bold text-body mb-4">
              Where Learning Begins with <span className="text-gold">Wonder</span>
            </h2>
            <p className="text-body-muted leading-relaxed">
              Our primary program nurtures natural curiosity through age-appropriate,
              activity-based learning. Every classroom contains a maximum of 25 students
              with newly made desks. We follow Nepal&apos;s national curriculum enhanced
              with our innovative LRPA framework. Pupils of Nursery, JKG, and SKG are
              provided with exercise books throughout the year.
            </p>
          </div>

          {/* LRPA Framework */}
          <LRPAFramework level="primary" />
        </div>
      </section>

      {/* Subjects */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-body mb-4">
              Subject <span className="text-gold">Highlights</span>
            </h2>
            <p className="max-w-2xl mx-auto text-body-muted">
              A balanced curriculum that develops academic skills, creativity, and character.
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
    </>
  );
}
