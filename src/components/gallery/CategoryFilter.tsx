"use client";

type Category = { id: string; label: string };

export default function CategoryFilter({
  categories,
  active,
  onChange,
}: {
  categories: readonly Category[];
  active: string;
  onChange: (id: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onChange(cat.id)}
          className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer ${
            active === cat.id
              ? "bg-navy text-white shadow-lg shadow-navy/20"
              : "bg-white text-body-muted hover:bg-cream-dark hover:text-body border border-cream-dark"
          }`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
