import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Camera } from "lucide-react";
import { galleryImages } from "@/data/gallery-images";

export default function GalleryPreview() {
  const featured = galleryImages.slice(0, 6);

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 text-gold-dark text-xs font-semibold tracking-wide uppercase mb-5">
            <Camera className="w-3.5 h-3.5" />
            Campus Life
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-body mb-4">
            Life at <span className="text-gold">Springdale</span>
          </h2>
          <p className="max-w-2xl mx-auto text-body-muted">
            Moments of joy, discovery, and achievement — from science labs to sports
            fields, art workshops to cultural performances.
          </p>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[200px]">
          {featured.map((img, i) => (
            <div
              key={img.src}
              className={`group relative overflow-hidden rounded-2xl ${
                i === 0 ? "col-span-2 row-span-2" : "col-span-1 row-span-1"
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                sizes={i === 0 ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 50vw, 33vw"}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                <p className="text-white text-sm font-semibold">{img.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <Link
            href="/life-at-school"
            className="btn-primary group"
          >
            View Full Gallery
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
