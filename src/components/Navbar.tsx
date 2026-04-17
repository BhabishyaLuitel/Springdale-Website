"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/academics", label: "Academics" },
  { href: "/life-at-school", label: "Life at School" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/70 backdrop-blur-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border-b border-white/40 py-2 text-primary"
          : "bg-transparent py-4 text-white"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-16 h-16 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform drop-shadow-md">
              <Image src="/images/logo-transparent.png" alt="Shree Springdale Secondary School Logo" fill className="object-contain" priority sizes="(max-width: 64px) 100vw, 64px" />
            </div>
            <div className="hidden sm:flex flex-col">
              <p className={`text-sm font-bold leading-tight tracking-wide ${scrolled ? 'text-primary' : 'text-white'}`}>
                Shree Springdale
              </p>
              <p className={`text-[11px] font-medium ${scrolled ? 'text-gold-dark' : 'text-gold'}`}>
                Sipadol-8, Bhaktapur
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-[2.5rem]">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold rounded-lg hover:bg-white/20 px-3 py-2 transition-all duration-300 ${scrolled ? 'text-primary hover:text-primary-light' : 'text-white/90 hover:text-white'}`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/admission"
              className="ml-3 relative z-50 btn-primary !px-5 !py-2.5"
            >
              Enroll Now
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 transition-colors ${scrolled ? 'text-primary' : 'text-white'}`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 top-0 z-40 transition-all duration-500 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-[#000000]/60 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 h-full w-72 bg-[#005F48] shadow-2xl transition-transform duration-500 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-end p-4">
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-white/60 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="px-6 py-4 space-y-1">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-base font-medium text-white/80 hover:text-gold hover:bg-white/5 rounded-lg transition-all duration-300"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4">
              <Link
                href="/admission"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center px-4 py-3 text-sm font-semibold bg-gold text-navy rounded-lg hover:bg-gold-light transition-all"
              >
                Enroll Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
