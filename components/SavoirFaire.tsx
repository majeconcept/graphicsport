const techniques = [
  {
    title: "Broderie",
    description: "Relief, durabilité, prestige. Idéal pour les vêtements de travail et les articles haut de gamme.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 4v24M8 8c4-4 12-4 16 0M8 16c4-4 12-4 16 0M8 24c4-4 12-4 16 0" />
      </svg>
    ),
    tag: "Haut de gamme",
  },
  {
    title: "Sérigraphie",
    description: "Couleurs éclatantes, grandes séries. La solution économique pour les impressions volumineuses.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="6" width="24" height="16" rx="2" />
        <line x1="4" y1="14" x2="28" y2="14" />
        <line x1="12" y1="22" x2="12" y2="28" />
        <line x1="20" y1="22" x2="20" y2="28" />
        <line x1="8" y1="28" x2="24" y2="28" />
      </svg>
    ),
    tag: "Grandes séries",
  },
  {
    title: "Transfert sérigraphique",
    description: "Précision monocouleur, toutes séries. Rendu net et professionnel sur tout type de textile.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="4" width="20" height="14" rx="2" />
        <path d="M10 18v6a2 2 0 002 2h8a2 2 0 002-2v-6" />
        <path d="M13 10h6M16 7v6" />
      </svg>
    ),
    tag: "Toutes séries",
  },
  {
    title: "DTF",
    description: "Détails fins, polyvalence maximale. Impression haute définition sur tous supports.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="16" cy="16" r="10" />
        <circle cx="16" cy="16" r="4" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="16" y1="26" x2="16" y2="30" />
        <line x1="2" y1="16" x2="6" y2="16" />
        <line x1="26" y1="16" x2="30" y2="16" />
      </svg>
    ),
    tag: "Haute définition",
  },
  {
    title: "Flex",
    description: "Découpe nette, sport & promo. Rendu premium pour les équipements sportifs.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 8l10 16L26 8" />
        <line x1="4" y1="28" x2="28" y2="28" />
        <line x1="9" y1="16" x2="23" y2="16" />
      </svg>
    ),
    tag: "Sport & Promo",
  },
];

export default function SavoirFaire() {
  return (
    <section id="savoir-faire" className="bg-bg py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">

        <div className="mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            Nos techniques
          </span>
          <h2 className="mt-3 font-heading text-4xl font-bold text-dark md:text-5xl">
            Cinq expertises,<br />un seul atelier
          </h2>
          <p className="mt-4 max-w-lg text-text/70">
            Du prototype à la grande série, nous maîtrisons l'ensemble des techniques de marquage textile professionnel.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {techniques.map((t, i) => (
            <article
              key={t.title}
              className={`group relative overflow-hidden rounded-2xl border border-gray-200/80 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/5 hover:border-accent/20 ${
                i === 4 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
                {t.icon}
              </div>

              <div className="mb-1 inline-block rounded-full bg-dark/5 px-2.5 py-0.5 text-xs font-medium text-dark/50">
                {t.tag}
              </div>

              <h3 className="mt-2 text-lg font-semibold text-dark">{t.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text/60">{t.description}</p>

              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-accent transition-all duration-300 group-hover:w-full" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
