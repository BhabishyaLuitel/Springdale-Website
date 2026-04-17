import type { Metadata } from "next";
import MasonryGrid from "@/components/gallery/MasonryGrid";
import { Camera } from "lucide-react";

export const metadata: Metadata = {
  title: "Life at School",
  description:
    "Explore campus life at Shree Springdale Secondary School — science labs, art workshops, sports with Athletics, Volleyball, Table Tennis, Gymnastics & Martial Arts, cultural programs, and more.",
};

export default function LifeAtSchoolPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-navy to-navy-light relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gold/3 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/80 text-xs font-semibold tracking-wide uppercase mb-6">
            <Camera className="w-3.5 h-3.5" />
            Photo Gallery
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Life at <span className="text-gradient">Springdale</span>
          </h1>
          <p className="max-w-2xl mx-auto text-white/80 text-lg">
            A visual journey through the events, activities, and everyday moments
            that make our school community vibrant and alive.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MasonryGrid />
        </div>
      </section>
    </>
  );
}
