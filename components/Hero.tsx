"use client";

import { useState } from "react";

export default function Hero() {
  const [playing, setPlaying] = useState(false);

  return (
    <section
      id="hero"
      className="relative bg-bg pt-28 pb-20 md:pt-36 md:pb-28"
      style={{
        backgroundImage:
          "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.03) 1px, transparent 0)",
        backgroundSize: "24px 24px",
      }}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <h1 className="font-heading text-5xl font-semibold tracking-tight text-dark md:text-6xl">
            Graphic Sport
          </h1>
          <h2 className="mt-4 font-heading text-2xl font-semibold text-accent md:text-3xl">
            Spécialiste du marquage textile dans le Haut-Rhin
          </h2>
          <p className="mt-6 text-lg text-text">
            Broderie · Sérigraphie · DTF · Flex · Transfert sérigraphique
          </p>
          <a
            href="#contact"
            className="mt-8 inline-block rounded-md bg-accent px-8 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-accent/90"
          >
            Demander un devis
          </a>
        </div>

        <div className="mt-16">
          <div className="relative aspect-video max-w-3xl overflow-hidden rounded-lg bg-dark">
            {playing ? (
              // [[INSÉRER URL VIDÉO dans src]]
              <video
                src=""
                className="h-full w-full object-cover"
                controls
                autoPlay
              />
            ) : (
              <button
                type="button"
                onClick={() => setPlaying(true)}
                className="flex h-full w-full flex-col items-center justify-center gap-4"
                aria-label="Lancer la vidéo"
              >
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 64 64"
                  fill="none"
                  className="text-white opacity-80"
                >
                  <circle
                    cx="32"
                    cy="32"
                    r="31"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <polygon
                    points="26,20 26,44 46,32"
                    fill="currentColor"
                  />
                </svg>
                <span className="text-sm font-medium text-white/80">
                  Voir notre savoir-faire
                </span>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
