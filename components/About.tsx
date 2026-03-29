const techniques = [
  "Broderie",
  "Sérigraphie",
  "Transfert sérigraphique",
  "DTF",
  "Flex",
];

const stats = [
  { value: "5", label: "Techniques maîtrisées" },
  { value: "68", label: "Département Haut-Rhin" },
  { value: "100%", label: "Fabrication locale" },
];

export default function About() {
  return (
    <section id="about" className="bg-dark py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">

        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

          {/* Left */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">
              À propos
            </span>
            <h2 className="mt-3 font-heading text-4xl font-bold text-white md:text-5xl leading-tight">
              Un savoir-faire<br />alsacien d&apos;exception
            </h2>

            <div className="mt-8 space-y-4 text-white/60 leading-relaxed">
              <p>
                Implantée à Wittelsheim au cœur du Haut-Rhin, Graphic Sport met son expertise artisanale au service des professionnels, associations et collectivités depuis de nombreuses années.
              </p>
              <p>
                Notre atelier dispose d&apos;un parc machines complet et régulièrement renouvelé, garantissant une qualité de marquage irréprochable sur tous types de textiles.
              </p>
              <p>
                Chaque projet est traité avec la même exigence : conseil personnalisé, choix de la technique la plus adaptée et finitions soignées jusque dans les moindres détails.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="text-2xl font-bold text-accent">{s.value}</p>
                  <p className="mt-1 text-xs text-white/40 leading-tight">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-6">
              Nos techniques
            </h3>
            <ul className="space-y-3">
              {techniques.map((t, i) => (
                <li
                  key={t}
                  className="flex items-center justify-between rounded-xl border border-white/5 bg-white/5 px-5 py-4 transition-all duration-200 hover:border-accent/30 hover:bg-accent/5"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent/10 text-xs font-bold text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-medium text-white">{t}</span>
                  </div>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-accent/40">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
