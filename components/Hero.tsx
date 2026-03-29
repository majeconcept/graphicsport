"use client";

import { useState } from "react";

export default function Hero() {
  const [playing, setPlaying] = useState(false);

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-dark overflow-hidden flex items-center"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-[#1e3448] to-[#0d1e2e]" />

      {/* Accent glow */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-accent/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-64 h-64 rounded-full bg-accent/5 blur-[80px] pointer-events-none" />

      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 py-32 w-full">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

          {/* Left — Text */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              <span className="text-xs font-medium tracking-wider text-accent uppercase">
                Haut-Rhin · Alsace
              </span>
            </div>

            <h1 className="font-heading text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
              Graphic
              <br />
              <span className="text-accent">Sport</span>
            </h1>

            <h2 className="mt-4 text-xl font-medium text-white/70 md:text-2xl leading-snug">
              Spécialiste du marquage textile<br className="hidden md:block" /> dans le Haut-Rhin
            </h2>

            <div className="mt-6 flex flex-wrap gap-2">
              {["Broderie", "Sérigraphie", "DTF", "Flex", "Transfert"].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/60"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-white transition-all duration-200 hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/25"
              >
                Demander un devis
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="#savoir-faire"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-medium text-white/80 transition-all duration-200 hover:border-white/40 hover:text-white"
              >
                Découvrir
              </a>
            </div>
          </div>

          {/* Right — Video block */}
          <div className="relative">
            <div className="relative aspect-video overflow-hidden rounded-2xl bg-white/5 border border-white/10 shadow-2xl">
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
                  className="group flex h-full w-full flex-col items-center justify-center gap-5 transition-all duration-300"
                  aria-label="Lancer la vidéo"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/20 border border-accent/40 transition-all duration-300 group-hover:bg-accent/30 group-hover:scale-110">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <polygon points="9,7 20,12 9,17" fill="#2BBCD4" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-white/60 group-hover:text-white/80 transition-colors duration-200">
                    Voir notre savoir-faire
                  </span>
                </button>
              )}
            </div>

            {/* Floating stats */}
            <div className="absolute -bottom-4 -left-4 rounded-xl border border-white/10 bg-dark/90 backdrop-blur-sm px-4 py-3 shadow-xl">
              <p className="text-xs text-white/40 uppercase tracking-wider">Techniques</p>
              <p className="text-xl font-bold text-white">5 expertises</p>
            </div>
            <div className="absolute -top-4 -right-4 rounded-xl border border-white/10 bg-dark/90 backdrop-blur-sm px-4 py-3 shadow-xl">
              <p className="text-xs text-white/40 uppercase tracking-wider">Localisation</p>
              <p className="text-xl font-bold text-accent">Wittelsheim</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs text-white/30 uppercase tracking-widest">Scroll</span>
        <div className="h-8 w-px bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
}
