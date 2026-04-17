import type { Metadata } from "next";
import { Target, Eye, Heart, Star, Users, BookOpen, Shield, Bus, Stethoscope, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Shree Springdale Secondary School — established 2044 B.S. in Sipadol-8, Bhaktapur. Our history, aim, philosophy, facilities, and commitment to holistic education.",
};

const values = [
  {
    icon: Star,
    title: "Excellence",
    description: "Striving for the highest standards in academics, character, and extracurricular achievement since 2044 B.S.",
  },
  {
    icon: Shield,
    title: "Discipline",
    description: "We want our students to realize the importance of discipline but not at the cost of their dignity and creativity.",
  },
  {
    icon: Users,
    title: "Community",
    description: "Parents are expected to actively participate in their children's career-making, as they are an integral part of the school.",
  },
  {
    icon: BookOpen,
    title: "Holistic Education",
    description: "Extra-curricular activity is the other-half of education. We maintain the balance between academics and co-curricular activities.",
  },
];

const facilities = [
  {
    icon: Bus,
    title: "Transportation",
    description: "Three buses provide shuttle service to Nagarkot, Sipadole, Duwakot, Gundu, Nalinchowk, and inner city areas of Bhaktapur.",
  },
  {
    icon: Stethoscope,
    title: "Medical & Insurance",
    description: "First aid facility on campus. Every student is provided with medical insurance during the whole academic session.",
  },
  {
    icon: Award,
    title: "Scholarships",
    description: "Class toppers receive 50% scholarship on tuition fees. Emperia Foundation provides full scholarships to 25+ students.",
  },
  {
    icon: Heart,
    title: "Boarding Facilities",
    description: "Day-boarding and full boarding facilities available. Forms and tariff for hostel are available at the school administration.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-navy to-navy-light relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/80 text-xs font-semibold tracking-wide uppercase mb-6">
            About Us
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Our <span className="text-gradient">Story</span>
          </h1>
          <p className="max-w-2xl mx-auto text-white/80 text-lg">
            &ldquo;Education is the Enlightenment of Mind&rdquo; &mdash; Established
            2044 B.S. in Sipadol-8, Bhaktapur, Nepal.
          </p>
        </div>
      </section>

      {/* History & Introduction */}
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-body mb-4">
              Our <span className="text-gold">History</span>
            </h2>
          </div>
          <div className="space-y-6">
            <div className="p-8 rounded-2xl bg-white border border-cream-dark shadow-[0_4px_20px_rgb(0,0,0,0.04)]">
              <h3 className="font-heading text-xl font-bold text-body mb-4">Introduction</h3>
              <p className="text-body-muted leading-relaxed mb-4">
                Shree Springdale Secondary School is in the twenty-ninth year
                of its inception. In Bhaktapur&mdash;a city known for its antique values,
                this school is tirelessly moving ahead to materialize academic excellence.
                The co-operation of the parents and the well-wishers has placed this school
                among a few ones which the parents and guardians can rely upon.
              </p>
              <p className="text-body-muted leading-relaxed">
                We believe that extra-curricular activity is the other-half of education.
                Therefore, the concerted efforts of teachers, students and all the members
                of Springdale family have made education the complete whole till this day.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-cream-dark shadow-[0_4px_20px_rgb(0,0,0,0.04)]">
              <h3 className="font-heading text-xl font-bold text-body mb-4">History</h3>
              <p className="text-body-muted leading-relaxed">
                This school was established in the year 2044 B.S. when parents were searching
                for the alternative of monotonous and carefree education system of public schools.
                This school has remained well known despite various adversities in the past. It
                has never compromised for quality education after all.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-cream-dark shadow-[0_4px_20px_rgb(0,0,0,0.04)]">
              <h3 className="font-heading text-xl font-bold text-body mb-4">Discipline</h3>
              <p className="text-body-muted leading-relaxed">
                We love discipline. We want our students to realize themselves the importance
                of discipline but not at the cost of their dignity and creativity. They have
                to abide by the rules and regulations of Springdale, which otherwise will cause
                chaos among the students. Students who fail to follow the school rules are
                reported to their parents as the parents are considered an integral part of school.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-navy to-navy-light text-white">
              <div className="w-14 h-14 rounded-2xl bg-gold/20 flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-heading text-2xl font-bold mb-4">Aim &amp; Philosophy</h3>
              <p className="text-white/80 leading-relaxed">
                This school advocates the statement that students should be developed into a
                complete human being that includes civilization, activities, socialization,
                knowledge and all. It further envisions producing a world-class citizen that
                not only competes but also contributes to the modern world.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-gradient-to-br from-gold/10 to-gold/5 border border-gold/20">
              <div className="w-14 h-14 rounded-2xl bg-gold/20 flex items-center justify-center mb-6">
                <Eye className="w-6 h-6 text-gold-dark" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-navy mb-4">
                Faculty &amp; Academics
              </h3>
              <p className="text-body-muted leading-relaxed">
                Highly experienced teaching faculty has been appointed by the school. It is
                mandatory that teachers prepare lesson plans before the classroom and the
                Principal is the head of the academics supported by the Vice-Principal, the
                Coordinator and the other staff. Results are published on certain dates as
                mentioned in the operational calendar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-body mb-4">
              Our <span className="text-gold">Facilities</span>
            </h2>
            <p className="max-w-2xl mx-auto text-body-muted">
              Comprehensive facilities to support every aspect of student life.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((facility) => (
              <div
                key={facility.title}
                className="p-6 rounded-2xl bg-white border border-cream-dark hover:border-gold/30 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center mx-auto mb-5">
                  <facility.icon className="w-6 h-6 text-gold-dark" />
                </div>
                <h3 className="font-heading text-lg font-bold text-body mb-2">
                  {facility.title}
                </h3>
                <p className="text-sm text-body-muted leading-relaxed">
                  {facility.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-body mb-4">
              Our <span className="text-gold">Values</span>
            </h2>
            <p className="max-w-2xl mx-auto text-body-muted">
              The principles that guide everything we do at Springdale.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="p-6 rounded-2xl bg-cream border border-cream-dark hover:border-gold/30 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center mx-auto mb-5">
                  <value.icon className="w-6 h-6 text-gold-dark" />
                </div>
                <h3 className="font-heading text-lg font-bold text-body mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-body-muted leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* School Schedule & Info */}
      <section className="py-20 bg-gradient-to-br from-navy to-navy-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
              School <span className="text-gradient">Information</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="font-heading text-lg font-bold text-white mb-3">School Schedule</h3>
              <p className="text-sm text-white/60 leading-relaxed">
                School begins at 9:45 AM for assembly and ends at 4:00 PM on normal school days.
                Winter schedule is compressed and parents are notified prior to changes. All
                students receive an academic calendar at admission.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="font-heading text-lg font-bold text-white mb-3">Class Size</h3>
              <p className="text-sm text-white/60 leading-relaxed">
                Newly made desks and benches with not more than two students per desk. Each class
                contains 25 students at the most. Any class having more than 25 students is
                divided into two classes.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="font-heading text-lg font-bold text-white mb-3">Attendance &amp; Punctuality</h3>
              <p className="text-sm text-white/60 leading-relaxed">
                Students absent without prior information receive a same-day call. Over 80%
                attendance is required for promotion consideration. The school encourages active
                participation in all programs and activities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
