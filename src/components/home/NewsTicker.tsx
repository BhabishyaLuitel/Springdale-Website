"use client";

import { Megaphone } from "lucide-react";

const newsItems = [
  "📢 Admissions Open for Academic Session 2083 — Apply at Shree Springdale Secondary School, Sipadol-8, Bhaktapur!",
  "🏆 Outstanding SEE results — Congratulations to all our graduating students!",
  "🎨 Annual Art, Craft & Dance Exhibition — All parents are invited!",
  "🔬 Science Fair registrations open for all grades — Hands-on experiments encouraged",
  "⚽ Inter-school Volleyball & Athletics Tournament — Springdale brings home medals!",
  "📚 Emperia Foundation scholarships available — Class toppers receive 50% tuition scholarship",
  "🚌 Bus shuttle service now covers Nagarkot, Sipadole, Duwakot, Gundu, Nalinchowk & inner Bhaktapur",
];

export default function NewsTicker() {
  return (
    <div className="bg-navy text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto flex items-center">
        {/* Label */}
        <div className="shrink-0 flex items-center gap-2 px-5 py-3 bg-gold text-navy font-semibold text-xs uppercase tracking-wider z-10">
          <Megaphone className="w-4 h-4" />
          <span className="hidden sm:inline">Latest News</span>
        </div>

        {/* Ticker */}
        <div className="overflow-hidden py-3 flex-1 relative">
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-navy to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-navy to-transparent z-10" />
          <div className="flex animate-ticker whitespace-nowrap hover:[animation-play-state:paused]">
            {[...newsItems, ...newsItems].map((item, i) => (
              <span
                key={i}
                className="inline-block px-8 text-sm text-white/80 font-medium"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
