import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Shree Springdale Secondary School, Sipadol-8, Bhaktapur. Call +977 01-5122204, email springdale.edu.np@gmail.com, or visit us near Kamalbinayak Bus Park.",
};

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    lines: ["Shree Springdale Secondary School", "Sipadol-8, Bhaktapur, Nepal", "Near Kamalbinayak Bus Park"],
  },
  {
    icon: Phone,
    title: "Call Us",
    lines: ["+977 01-5122204", "+977 01-5122205"],
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: ["springdale.edu.np@gmail.com"],
  },
  {
    icon: Clock,
    title: "School Hours",
    lines: ["Sun – Fri: 9:45 AM – 4:00 PM", "Saturday: Closed"],
  },
];

export default function ContactPage() {
  return (
    <div className="bg-cream min-h-screen">
      {/* Immersive Hero */}
      <section className="relative pt-40 pb-28 overflow-hidden bg-navy">
        {/* Dynamic Abstract Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-[100px] -translate-y-1/2 animate-float" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gold-500/10 rounded-full blur-[80px] animate-float" style={{ animationDelay: '2s' }} />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-slide-up">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white shadow-lg backdrop-blur-md text-xs font-bold tracking-widest uppercase mb-8">
            Get in Touch
          </div>
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight">
            Contact <span className="text-gradient">Springdale</span>
          </h1>
          <p className="max-w-2xl mx-auto text-white/80 text-lg sm:text-xl leading-relaxed">
            Whether you&apos;re looking to enroll, schedule a campus visit, or simply ask a question, we are here to help.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="relative z-20 -mt-16 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Info Cards Column */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-cream-dark">
                <h3 className="font-heading text-2xl font-bold text-body mb-8">
                  Get Answers.
                </h3>
                <div className="space-y-8">
                  {contactInfo.map((item) => (
                    <div key={item.title} className="flex items-start gap-5 group">
                      <div className="w-12 h-12 rounded-2xl bg-cream flex items-center justify-center shrink-0 group-hover:bg-gold/10 transition-colors duration-300">
                        <item.icon className="w-5 h-5 text-gold-dark" />
                      </div>
                      <div>
                        <h4 className="font-heading text-lg font-bold text-body mb-1.5">{item.title}</h4>
                        {item.lines.map((line, i) => (
                          <p key={i} className="text-sm text-body-muted leading-relaxed font-medium">
                            {line}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map Embed Container */}
              <div className="rounded-3xl overflow-hidden h-[300px] bg-cream-dark shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-cream-dark relative group">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14128.45!2d85.43!3d27.67!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDQwJzEyLjAiTiA4NcKwMjUnNDguMCJF!5e0!3m2!1sen!2snp!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="School Location"
                  className="grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-cream-dark h-full">
                <div className="mb-10">
                  <h2 className="font-heading text-3xl font-extrabold text-body mb-3">
                    Send a Message
                  </h2>
                  <p className="text-body-muted text-base">
                    Fill out the form below and our admissions team will get back to you shortly.
                  </p>
                </div>
                <ContactForm />
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
