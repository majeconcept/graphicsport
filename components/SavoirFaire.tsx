const techniques = [
  {
    title: "Broderie",
    description: "Relief, durabilité, prestige",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 4v24M8 8c4-4 12-4 16 0M8 16c4-4 12-4 16 0M8 24c4-4 12-4 16 0" />
      </svg>
    ),
  },
  {
    title: "Sérigraphie",
    description: "Couleurs éclatantes, grandes séries",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="6" width="24" height="16" rx="2" />
        <line x1="4" y1="14" x2="28" y2="14" />
        <line x1="12" y1="22" x2="12" y2="28" />
        <line x1="20" y1="22" x2="20" y2="28" />
        <line x1="8" y1="28" x2="24" y2="28" />
      </svg>
    ),
  },
  {
    title: "Transfert sérigraphique",
    description: "Précision monocouleur, toutes séries",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="4" width="20" height="14" rx="2" />
        <path d="M10 18v6a2 2 0 002 2h8a2 2 0 002-2v-6" />
        <path d="M13 10h6M16 7v6" />
      </svg>
    ),
  },
  {
    title: "DTF",
    description: "Détails fins, polyvalence maximale",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="16" cy="16" r="10" />
        <circle cx="16" cy="16" r="4" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="16" y1="26" x2="16" y2="30" />
        <line x1="2" y1="16" x2="6" y2="16" />
        <line x1="26" y1="16" x2="30" y2="16" />
      </svg>
    ),
  },
  {
    title: "Flex",
    description: "Découpe nette, sport & promo",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 8l10 16L26 8" />
        <line x1="4" y1="28" x2="28" y2="28" />
        <line x1="9" y1="16" x2="23" y2="16" />
      </svg>
    ),
  },
];

export default function SavoirFaire() {
  return (
    <section id="savoir-faire" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-heading text-3xl font-semibold text-dark md:text-4xl">
          Nos techniques de marquage
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {techniques.map((t) => (
            <article
              key={t.title}
              className="group rounded-lg border border-gray-100 bg-bg p-8 transition-shadow duration-300 hover:shadow-md"
            >
              <div className="text-accent">{t.icon}</div>
              <h3 className="mt-4 text-lg font-medium text-dark">{t.title}</h3>
              <p className="mt-2 text-sm text-text">{t.description}</p>
              <div className="mt-4 h-0.5 w-10 bg-accent" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
