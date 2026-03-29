const values = [
  {
    title: "Qualité Premium",
    description: "Matériaux sélectionnés, machines professionnelles et contrôle qualité à chaque étape de production.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
  {
    title: "100% Professionnel",
    description: "Interlocuteur dédié, devis sous 24h, conseils techniques et accompagnement de A à Z sur votre projet.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    title: "Ancrage Local",
    description: "Atelier basé à Wittelsheim dans le Haut-Rhin. Livraison rapide partout en Alsace et au-delà.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    ),
  },
  {
    title: "Réactivité",
    description: "Délais maîtrisés, production sur mesure et livraison en 3 à 5 jours pour les commandes courantes.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
];

export default function Values() {
  return (
    <section className="bg-bg py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-6">

        <div className="mb-14 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            Pourquoi nous choisir
          </span>
          <h2 className="mt-3 font-heading text-4xl font-bold text-dark md:text-5xl">
            Notre engagement
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <div
              key={v.title}
              className="group relative rounded-2xl border border-gray-200/80 bg-white p-7 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/5 hover:border-accent/20"
            >
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-white">
                {v.icon}
              </div>
              <div className="absolute top-4 right-4 text-3xl font-bold text-dark/5 font-heading">
                0{i + 1}
              </div>
              <h3 className="text-base font-semibold text-dark">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text/55">{v.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
