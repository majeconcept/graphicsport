const techniques = [
  {
    title: "Broderie",
    description: "Relief et durabilité incomparables. Idéal pour vêtements de travail, uniformes et articles représentatifs.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 4v24M8 8c4-4 12-4 16 0M8 16c4-4 12-4 16 0M8 24c4-4 12-4 16 0" />
      </svg>
    ),
    tags: ["Entreprise", "Workwear"],
    price: "€€€",
    color: "from-violet-500/10 to-transparent",
  },
  {
    title: "Sérigraphie",
    description: "Couleurs éclatantes et économie d'échelle. La technique de référence pour les grandes séries.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="6" width="24" height="16" rx="2" />
        <line x1="4" y1="14" x2="28" y2="14" />
        <line x1="12" y1="22" x2="12" y2="28" />
        <line x1="20" y1="22" x2="20" y2="28" />
        <line x1="8" y1="28" x2="24" y2="28" />
      </svg>
    ),
    tags: ["Sport", "Association", "Événement"],
    price: "€€",
    color: "from-blue-500/10 to-transparent",
  },
  {
    title: "Transfert sérigraphique",
    description: "Précision et netteté monocouleur. Polyvalent, adapté à toutes les séries et tous supports.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="4" width="20" height="14" rx="2" />
        <path d="M10 18v6a2 2 0 002 2h8a2 2 0 002-2v-6" />
        <path d="M13 10h6M16 7v6" />
      </svg>
    ),
    tags: ["Promo", "Entreprise"],
    price: "€€",
    color: "from-green-500/10 to-transparent",
  },
  {
    title: "DTF",
    description: "Impression haute définition, détails fins et camaïeux complexes. La technique la plus polyvalente.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="16" cy="16" r="10" />
        <circle cx="16" cy="16" r="4" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="16" y1="26" x2="16" y2="30" />
        <line x1="2" y1="16" x2="6" y2="16" />
        <line x1="26" y1="16" x2="30" y2="16" />
      </svg>
    ),
    tags: ["Toutes séries", "Multi-couleurs"],
    price: "€€€",
    color: "from-orange-500/10 to-transparent",
  },
  {
    title: "Flex",
    description: "Découpe nette sur vinyle thermocollant. Rendu premium pour équipements sportifs et promotionnels.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 8l10 16L26 8" />
        <line x1="4" y1="28" x2="28" y2="28" />
        <line x1="9" y1="16" x2="23" y2="16" />
      </svg>
    ),
    tags: ["Sport", "Promo"],
    price: "€",
    color: "from-red-500/10 to-transparent",
  },
];

export default function SavoirFaire() {
  return (
    <section id="savoir-faire" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">

        <div className="mb-16 grid gap-6 md:grid-cols-2 md:items-end">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">
              Nos techniques
            </span>
            <h2 className="mt-3 font-heading text-4xl font-bold text-dark md:text-5xl">
              5 expertises,<br />1 seul atelier
            </h2>
          </div>
          <p className="text-text/60 md:text-right md:max-w-sm md:ml-auto">
            Du prototype à la grande série, nous conseillons et appliquons la technique la plus adaptée à chaque projet.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {techniques.map((t) => (
            <article
              key={t.title}
              className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-bg p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5 hover:border-accent/20"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${t.color} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />

              <div className="relative">
                <div className="mb-4 flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-white">
                    {t.icon}
                  </div>
                  <span className="rounded-full border border-dark/10 bg-white px-2.5 py-0.5 text-xs font-semibold text-dark/40">
                    {t.price}
                  </span>
                </div>

                <h3 className="text-base font-semibold text-dark">{t.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-text/55">{t.description}</p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {t.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-dark/5 px-2.5 py-0.5 text-[11px] font-medium text-dark/50">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-accent transition-all duration-300 group-hover:w-full" />
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
