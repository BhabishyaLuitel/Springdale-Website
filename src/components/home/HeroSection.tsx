"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scroll = window.scrollY;
        const parallaxBg = heroRef.current.querySelector(
          ".parallax-bg"
        ) as HTMLElement;
        if (parallaxBg) {
          parallaxBg.style.transform = `translateY(${scroll * 0.4}px)`;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  return (
    <section
      ref={heroRef}
      className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden"
    >
      {/* Parallax Background — Drone Video */}
      <div className="parallax-bg absolute inset-0 w-full h-[130%] -top-[15%] bg-navy overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-80"
          poster="/images/events/hero-bg-2.jpg"
        >
          <source src="/videos/hero-drone.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.4))' }} />

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gold/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-gold/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        {/* Badge */}
        <div className="inline-flex items-center justify-center mb-8 animate-fade-in">
          <span className="text-[10px] font-light text-white/70 uppercase tracking-[1px]">
            Established 2044 B.S. <span className="mx-2">•</span> Sipadol-8, Bhaktapur
          </span>
        </div>

        {/* Main Heading */}
        <h1
          className="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] font-extrabold text-white mb-4 leading-[1.1] animate-slide-up drop-shadow-lg"
          style={{ animationDelay: "1.5s" }}
        >
          <span className="text-gradient">Springdale</span>
        </h1>
        <p
          className="text-lg sm:text-xl md:text-2xl text-white/90 font-light mb-3 animate-slide-up drop-shadow-md"
          style={{ animationDelay: "1.8s" }}
        >
          Secondary School
        </p>
        <p
          className="max-w-[800px] mx-auto text-sm sm:text-base text-white/90 drop-shadow-md leading-[1.6] mb-10 animate-slide-up"
          style={{ animationDelay: "2.1s", margin: "0 auto" }}
        >
          &ldquo;Education is the Enlightenment of Mind&rdquo; &mdash; Developing
          complete human beings through academics, extra-curricular activities,
          and a nurturing boarding environment since 2044 B.S.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up"
          style={{ animationDelay: "2.4s" }}
        >
          <Link
            href="/admission"
            className="btn-primary w-full sm:w-auto"
          >
            Apply for Admission
          </Link>
          <Link
            href="/academics"
            className="btn-secondary w-full sm:w-auto"
          >
            Explore Programs
          </Link>
        </div>


      </div>

      {/* Bottom gradient fade removed for clarity */}

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-shimmer z-20">
        <span className="text-[10px] text-white/40 uppercase tracking-[0.2em] font-medium">
          Scroll
        </span>
        <ChevronDown className="w-5 h-5 text-white/40 animate-bounce" />
      </div>
    </section>
  );
}
