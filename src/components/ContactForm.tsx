"use client";

import { useState } from "react";
import { Send, CheckCircle, Loader2, Info } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="text-center py-16 px-4 animate-scale-in">
        <div className="w-20 h-20 rounded-full bg-green/10 flex items-center justify-center mx-auto mb-6 shrink-0 relative">
          <div className="absolute inset-0 rounded-full border border-green/20 animate-ping opacity-20" />
          <CheckCircle className="w-10 h-10 text-green relative z-10" />
        </div>
        <h3 className="font-heading text-2xl font-bold text-body mb-3">
          Message Sent Successfully!
        </h3>
        <p className="text-body-muted text-base max-w-md mx-auto mb-8 leading-relaxed">
          Thank you for reaching out to Springdale. Our admissions team will review your inquiry and get back to you within 24 hours.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="px-6 py-3 text-sm font-bold text-body bg-cream border-2 border-cream-dark rounded-xl hover:bg-cream-dark transition-all cursor-pointer shadow-sm"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="form-label">
            Full Name <span className="text-crimson">*</span>
          </label>
          <input
            type="text"
            id="name"
            required
            className="form-input"
            placeholder="John Doe"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="form-label">
            Email Address <span className="text-crimson">*</span>
          </label>
          <input
            type="email"
            id="email"
            required
            className="form-input"
            placeholder="john@example.com"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="phone" className="form-label">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            className="form-input"
            placeholder="+977 98..."
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="subject" className="form-label">
            Subject <span className="text-crimson">*</span>
          </label>
          <select
            id="subject"
            required
            className="form-select"
          >
            <option value="">Select a subject</option>
            <option value="admission">Admission Inquiry</option>
            <option value="general">General Inquiry</option>
            <option value="visit">Campus Visit</option>
            <option value="feedback">Feedback</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="form-label">
          Message <span className="text-crimson">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          required
          className="form-input resize-none leading-relaxed"
          placeholder="How can we help you?"
        />
      </div>
      <div className="pt-2 space-y-4">
        <button
          type="submit"
          disabled={loading}
          className="w-full btn-primary disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {loading ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <>
              <Send className="w-4 h-4" />
              Send Message
            </>
          )}
        </button>
        <p className="text-center text-xs text-body-muted/70 flex items-center justify-center gap-1.5">
          <Info className="w-3.5 h-3.5" />
          We typically respond within 24 hours.
        </p>
      </div>
    </form>
  );
}
