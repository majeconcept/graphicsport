const testimonials = [
  {
    name: "Laurent M.",
    role: "Responsable d'une association sportive",
    text: "Excellent travail pour nos maillots de club. La broderie est d'une netteté parfaite, les couleurs sont fidèles à nos demandes. Délai respecté, équipe réactive. On recommande vivement !",
    rating: 5,
    initials: "LM",
  },
  {
    name: "Sophie R.",
    role: "Dirigeante PME, secteur BTP",
    text: "Graphic Sport équipe toute notre équipe terrain depuis 3 ans. Qualité constante, conseil professionnel et tarifs compétitifs. Un partenaire de confiance pour nos vêtements de travail personnalisés.",
    rating: 5,
    initials: "SR",
  },
  {
    name: "Thomas K.",
    role: "Organisateur d'événements",
    text: "Commande de 200 t-shirts pour un festival en un temps record. Le transfert sérigraphique est impeccable et les visuels sont restés intacts après plusieurs lavages. Super prestation !",
    rating: 5,
    initials: "TK",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-6">

        <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">
              Témoignages
            </span>
            <h2 className="mt-3 font-heading text-4xl font-bold text-dark md:text-5xl">
              Ils nous font confiance
            </h2>
          </div>
          <div className="flex items-center gap-3 rounded-2xl border border-gray-100 bg-bg px-6 py-4">
            <div>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 12 12" fill="#2BBCD4">
                    <path d="M6 1l1.5 3 3.5.5-2.5 2.5.5 3.5L6 9l-3 1.5.5-3.5L1 4.5l3.5-.5z" />
                  </svg>
                ))}
              </div>
              <p className="mt-0.5 text-sm font-semibold text-dark">Note client</p>
            </div>
            <div className="border-l border-gray-200 pl-4">
              <p className="text-3xl font-bold text-accent">4.9</p>
              <p className="text-xs text-text/50">/5 satisfaction</p>
            </div>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <blockquote
              key={t.name}
              className="rounded-2xl border border-gray-100 bg-bg p-7 transition-all duration-300 hover:shadow-md hover:border-accent/20"
            >
              <div className="flex gap-0.5 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 12 12" fill="#2BBCD4">
                    <path d="M6 1l1.5 3 3.5.5-2.5 2.5.5 3.5L6 9l-3 1.5.5-3.5L1 4.5l3.5-.5z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm leading-relaxed text-text/70 italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="mt-5 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/10 text-xs font-bold text-accent">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-dark">{t.name}</p>
                  <p className="text-xs text-text/40">{t.role}</p>
                </div>
              </div>
            </blockquote>
          ))}
        </div>

      </div>
    </section>
  );
}
