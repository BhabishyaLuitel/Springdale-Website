import HeroSection from "@/components/home/HeroSection";
import NewsTicker from "@/components/home/NewsTicker";
import PrincipalMessage from "@/components/home/PrincipalMessage";
import StatsCounter from "@/components/home/StatsCounter";
import ProgramsPreview from "@/components/home/ProgramsPreview";
import GalleryPreview from "@/components/home/GalleryPreview";

export default function Home() {
  return (
    <>
      <HeroSection />
      <NewsTicker />
      <StatsCounter />
      <PrincipalMessage />
      <ProgramsPreview />
      <GalleryPreview />

      {/* CTA Banner */}
      <section className="py-20 bg-gradient-to-br from-navy via-navy-light to-navy relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/5 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Begin Your Child&apos;s
            <br />
            <span className="text-gradient">Journey Today</span>
          </h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8">
            Admissions are open for the upcoming academic session. Join the Springdale
            family and give your child the foundation for a brilliant future.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/admission"
              className="btn-primary"
            >
              Apply for Admission
            </a>
            <a
              href="/about"
              className="px-8 py-3.5 border-2 border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white/40 transition-all duration-300 text-sm"
            >
              Learn More About Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
