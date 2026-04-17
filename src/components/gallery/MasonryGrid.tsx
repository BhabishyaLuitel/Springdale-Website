"use client";

import { useState } from "react";
import { galleryImages, categories } from "@/data/gallery-images";
import GalleryCard from "./GalleryCard";
import Lightbox from "./Lightbox";
import CategoryFilter from "./CategoryFilter";

export default function MasonryGrid() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    activeCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <>
      <CategoryFilter
        categories={categories}
        active={activeCategory}
        onChange={setActiveCategory}
      />

      <div className="masonry-grid mt-8">
        {filtered.map((img, i) => (
          <GalleryCard
            key={img.src}
            image={img}
            index={i}
            onClick={() => setLightboxIndex(i)}
          />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20">
          <p className="text-body-muted text-lg">No photos in this category yet.</p>
        </div>
      )}

      {lightboxIndex !== null && (
        <Lightbox
          images={filtered}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() =>
            setLightboxIndex(
              lightboxIndex > 0 ? lightboxIndex - 1 : filtered.length - 1
            )
          }
          onNext={() =>
            setLightboxIndex(
              lightboxIndex < filtered.length - 1 ? lightboxIndex + 1 : 0
            )
          }
        />
      )}
    </>
  );
}
