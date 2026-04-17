import Link from "next/link";
import Image from "next/image";
import {
  GraduationCap,
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
} from "lucide-react";

const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/academics", label: "Academics" },
  { href: "/academics/primary", label: "Primary Level" },
  { href: "/academics/secondary", label: "Secondary Level" },
  { href: "/life-at-school", label: "Life at School" },
  { href: "/contact", label: "Contact" },
];

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  );
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );
}

const socialLinks = [
  { href: "https://facebook.com/springdale.edu.np", icon: FacebookIcon, label: "Facebook" },
  { href: "https://instagram.com/springdale.edu.np", icon: InstagramIcon, label: "Instagram" },
  { href: "#", icon: YoutubeIcon, label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="bg-primary/95 backdrop-blur-2xl text-white/80 border-t border-white/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/50 to-transparent pointer-events-none" />
      {/* Main Footer */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* School Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="relative w-16 h-16 flex items-center justify-center shrink-0 drop-shadow-md">
                <Image src="/images/logo-transparent.png" alt="Shree Springdale Secondary School Logo" fill className="object-contain" sizes="64px" />
              </div>
              <div>
                <p className="text-sm font-bold text-white leading-tight">
                  Shree Springdale
                </p>
                <p className="text-[11px] text-gold/80 font-medium">
                  Sipadol-8, Bhaktapur
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-white/70 mb-6">
              Education is the Enlightenment of Mind. Nurturing young minds
              with quality education and boarding facilities since 2044 B.S.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-gold/20 hover:text-gold transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group text-sm text-white/70 hover:text-gold transition-colors inline-flex items-center gap-1"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <span className="text-sm text-white/70">
                  Sipadol-8, Bhaktapur, Nepal
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <div>
                  <a href="tel:+977-01-5122204" className="text-sm text-white/70 hover:text-gold transition-colors block">
                    +977 01-5122204
                  </a>
                  <a href="tel:+977-01-5122205" className="text-sm text-white/70 hover:text-gold transition-colors block">
                    +977 01-5122205
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <a href="mailto:springdale.edu.np@gmail.com" className="text-sm text-white/70 hover:text-gold transition-colors">
                  springdale.edu.np@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social Feed */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
              Follow Us
            </h3>
            <div className="space-y-3">
              <a
                href="https://facebook.com/springdale.edu.np"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-2">
                  <FacebookIcon className="w-5 h-5 text-[#1877F2]" />
                  <span className="text-sm font-medium text-white">Facebook</span>
                </div>
                <p className="text-xs text-white/50 group-hover:text-white/70 transition-colors">
                  Follow us for the latest updates, events, and school news.
                </p>
              </a>
              <a
                href="https://instagram.com/springdale.edu.np"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-2">
                  <InstagramIcon className="w-5 h-5 text-[#E4405F]" />
                  <span className="text-sm font-medium text-white">Instagram</span>
                </div>
                <p className="text-xs text-white/50 group-hover:text-white/70 transition-colors">
                  See our students&apos; moments and campus life in photos.
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Shree Springdale Secondary School, Sipadol-8, Bhaktapur. All rights reserved.
          </p>
          <p className="text-xs text-white/30">
            Crafted with ❤️ for education
          </p>
        </div>
      </div>
    </footer>
  );
}
