"use client";

import { useState } from "react";

export default function Hero() {
  const [playing, setPlaying] = useState(false);

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-dark overflow-hidden flex items-center"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d1e2e] via-dark to-[#0a1520]" />
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-accent/8 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-accent/5 blur-[100px] pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 py-32 w-full">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              <span className="text-xs font-semibold tracking-wider text-accent uppercase">
                Haut-Rhin · Alsace · Depuis 1998
              </span>
            </div>

            <h1 className="font-heading text-5xl font-bold leading-[1.05] text-white md:text-6xl lg:text-7xl">
              Graphic<br />
              <span className="text-accent">Sport</span>
            </h1>

            <p className="mt-5 text-xl text-white/60 leading-relaxed max-w-md">
              Marquage textile haut de gamme pour professionnels, associations et collectivités du Haut-Rhin.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {["Broderie", "Sérigraphie", "DTF", "Flex", "Transfert"].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/50"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/25"
              >
                Demander un devis
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="#savoir-faire"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-medium text-white/70 transition-all duration-200 hover:border-white/40 hover:text-white"
              >
                Nos techniques
              </a>
            </div>

            {/* Inline social proof */}
            <div className="mt-12 flex items-center gap-4 border-t border-white/10 pt-8">
              <div className="flex -space-x-2">
                {["E","A","S"].map((l) => (
                  <div key={l} className="flex h-8 w-8 items-center justify-center rounded-full border border-dark bg-accent/20 text-xs font-semibold text-accent">
                    {l}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="12" height="12" viewBox="0 0 12 12" fill="#2BBCD4">
                      <path d="M6 1l1.5 3 3.5.5-2.5 2.5.5 3.5L6 9l-3 1.5.5-3.5L1 4.5l3.5-.5z" />
                    </svg>
                  ))}
                </div>
                <p className="text-xs text-white/40 mt-0.5">Clients satisfaits depuis 1998</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl">
              {playing ? (
                // [[INSÉRER URL VIDÉO dans src]]
                <video src="" className="h-full w-full object-cover" controls autoPlay />
              ) : (
                <button
                  type="button"
                  onClick={() => setPlaying(true)}
                  className="group flex h-full w-full flex-col items-center justify-center gap-5"
                  aria-label="Lancer la vidéo"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-accent/40 bg-accent/20 transition-all duration-300 group-hover:scale-110 group-hover:bg-accent/30">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      <polygon points="9,7 20,12 9,17" fill="#2BBCD4" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-white/50 transition-colors duration-200 group-hover:text-white/80">
                    Voir notre atelier en action
                  </span>
                </button>
              )}
            </div>
            <div className="absolute -bottom-5 -left-5 rounded-xl border border-white/10 bg-dark/90 backdrop-blur-sm px-4 py-3 shadow-xl">
              <p className="text-xs text-white/30 uppercase tracking-wider">Techniques maîtrisées</p>
              <p className="text-2xl font-bold text-white">5 <span className="text-sm font-normal text-accent">expertises</span></p>
            </div>
            <div className="absolute -top-5 -right-5 rounded-xl border border-white/10 bg-dark/90 backdrop-blur-sm px-4 py-3 shadow-xl">
              <p className="text-xs text-white/30 uppercase tracking-wider">Département</p>
              <p className="text-2xl font-bold text-accent">68 <span className="text-sm font-normal text-white/60">Haut-Rhin</span></p>
            </div>
          </div>

        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] uppercase tracking-[0.2em] text-white/20">Scroll</span>
        <div className="h-10 w-px bg-gradient-to-b from-white/20 to-transparent" />
      </div>
    </section>
  );
}
