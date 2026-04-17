import { Quote } from "lucide-react";
import Image from "next/image";

export default function PrincipalMessage() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/5] max-w-sm mx-auto lg:mx-0">
              {/* Decorative frame */}
              <div className="absolute -inset-4 bg-gradient-to-br from-gold/20 to-gold/5 rounded-3xl" />
              <div className="absolute -inset-1 bg-gradient-to-br from-gold to-gold-dark rounded-2xl" />
              <div className="relative h-full rounded-2xl bg-primary overflow-hidden shadow-2xl">
                <Image
                  src="/images/biju sir.jpeg"
                  alt="Mr. Bijju Sir - Academic Director"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 384px"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-3 -right-3 bg-gold text-navy px-4 py-2 rounded-xl shadow-lg text-xs font-bold uppercase tracking-wider">
                Academic Director
              </div>
            </div>
          </div>

          {/* Message Side */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 text-gold-dark text-xs font-semibold tracking-wide uppercase mb-6">
              Principal&apos;s Message
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-body mb-8 leading-tight">
              A Warm Welcome from
              <br />
              <span className="text-gold">Our Principal</span>
            </h2>

            <div className="relative mt-12 sm:mt-16">
              <Quote className="absolute -top-8 -left-4 sm:-left-8 w-16 h-16 text-gold/15 z-0 rotate-12" />
              <blockquote className="relative z-10 pl-6 border-l-4 border-gold">
                <p className="text-base sm:text-lg text-body-muted leading-relaxed mb-6 italic">
                  At Shree Springdale Secondary School, we are deeply committed
                  to developing complete human beings. Our philosophy — &ldquo;Education is
                  the Enlightenment of Mind&rdquo; — drives everything we do. We believe
                  that extra-curricular activity is the other-half of education.
                </p>
                <p className="text-base sm:text-lg text-body-muted leading-relaxed mb-6 italic">
                  Through our LRPA framework — Learning, Reinforcement, Practice, and Application
                  — every child receives a personalized educational journey. With small class sizes
                  of maximum 25 students, boarding facilities, and five major sports programs
                  including Athletics, Volleyball, Table Tennis, Gymnastics, and Martial Arts,
                  we ensure holistic growth.
                </p>
                <p className="text-base sm:text-lg text-body-muted leading-relaxed italic">
                  I invite you to explore our school, meet our dedicated faculty, and discover
                  why Springdale has remained a trusted name in Bhaktapur&apos;s educational
                  landscape since 2044 B.S.
                </p>
              </blockquote>
            </div>

            <div className="mt-8 pt-6 border-t border-cream-dark">
              <p className="font-heading text-xl font-bold text-body">
                Mr. Bijju Sir
              </p>
              <p className="text-sm text-gold-dark font-medium">
                Academic Director, Shree Springdale Secondary School
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
