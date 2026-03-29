"use client";

import Image from "next/image";

const images = Array.from({ length: 6 }, (_, i) => ({
  src: `/images/realisation-${String(i + 1).padStart(2, "0")}.webp`,
  alt: `Réalisation Graphic Sport ${i + 1}`,
}));

export default function Realisations() {
  return (
    <section id="realisations" className="bg-bg py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">

        <div className="mb-16 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">
              Portfolio
            </span>
            <h2 className="mt-3 font-heading text-4xl font-bold text-dark md:text-5xl">
              Nos réalisations
            </h2>
          </div>
          <p className="max-w-sm text-sm text-text/60 md:text-right">
            Chaque projet reflète notre exigence du détail et la qualité de nos techniques.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((img, i) => (
            <div
              key={img.src}
              className={`group relative overflow-hidden rounded-2xl bg-dark/10 ${
                i === 0 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="aspect-[4/3]">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = "none";
                    const parent = target.parentElement;
                    if (parent && !parent.querySelector("span")) {
                      const span = document.createElement("span");
                      span.className =
                        "absolute inset-0 flex items-center justify-center text-sm text-text/40";
                      span.textContent = "Photo à venir";
                      parent.appendChild(span);
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-4 left-4 opacity-0 transition-all duration-300 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-1.5 text-xs font-medium text-white">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    Réalisation #{i + 1}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
