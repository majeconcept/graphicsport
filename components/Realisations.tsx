"use client";

import Image from "next/image";

const images = Array.from({ length: 6 }, (_, i) => ({
  src: `/images/realisation-${String(i + 1).padStart(2, "0")}.webp`,
  alt: `Réalisation Graphic Sport ${i + 1}`,
}));

export default function Realisations() {
  return (
    <section id="realisations" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-heading text-3xl font-semibold text-dark md:text-4xl">
          Nos réalisations
        </h2>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((img) => (
            <div
              key={img.src}
              className="relative aspect-[4/3] overflow-hidden rounded-lg bg-dark/10 transition-transform duration-300 hover:scale-[1.02]"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = "none";
                  const parent = target.parentElement;
                  if (parent && !parent.querySelector("span")) {
                    const span = document.createElement("span");
                    span.className =
                      "absolute inset-0 flex items-center justify-center text-sm text-text/50";
                    span.textContent = "Photo à venir";
                    parent.appendChild(span);
                  }
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
