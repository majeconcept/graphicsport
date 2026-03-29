const techniques = [
  { num: "01", label: "Broderie", desc: "Pour le workwear et le haut de gamme" },
  { num: "02", label: "Sérigraphie", desc: "Pour les grandes séries couleur" },
  { num: "03", label: "Transfert sérigraphique", desc: "Pour toutes séries, rendu net" },
  { num: "04", label: "DTF", desc: "Pour les détails fins et multicouleurs" },
  { num: "05", label: "Flex", desc: "Pour le sport et la promotion" },
];

export default function About() {
  return (
    <section id="about" className="bg-dark py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-start">

          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">
              À propos
            </span>
            <h2 className="mt-3 font-heading text-4xl font-bold text-white md:text-5xl leading-tight">
              Un savoir-faire<br />alsacien<br />
              <span className="text-accent">d&apos;exception</span>
            </h2>

            <div className="mt-8 space-y-4 text-white/55 leading-relaxed text-[15px]">
              <p>
                Implantée à Wittelsheim au cœur du Haut-Rhin, Graphic Sport accompagne depuis plus de 25 ans les entreprises, associations et collectivités dans tous leurs projets de marquage textile.
              </p>
              <p>
                Notre atelier dispose d&apos;un parc machines complet et régulièrement renouvelé, garantissant une qualité de marquage irréprochable sur tous types de textiles — du t-shirt de coton au polaire technique.
              </p>
              <p>
                Chaque projet est traité avec la même exigence : conseil personnalisé dès la prise de contact, choix de la technique la plus adaptée et finitions soignées jusque dans les moindres détails.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-3">
              {[
                { v: "25+", l: "Années d'expérience" },
                { v: "5", l: "Techniques maîtrisées" },
                { v: "68", l: "Haut-Rhin" },
              ].map((s) => (
                <div key={s.l} className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                  <p className="text-2xl font-bold text-accent">{s.v}</p>
                  <p className="mt-1 text-[11px] uppercase tracking-wider text-white/30 leading-tight">{s.l}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-8">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-6">
              Techniques disponibles
            </h3>
            <ul className="space-y-2.5">
              {techniques.map((t) => (
                <li
                  key={t.num}
                  className="group flex items-center justify-between gap-4 rounded-xl border border-white/5 bg-white/5 px-5 py-4 transition-all duration-200 hover:border-accent/30 hover:bg-accent/5"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-bold text-accent/50 group-hover:text-accent transition-colors">{t.num}</span>
                    <div>
                      <p className="text-sm font-semibold text-white">{t.label}</p>
                      <p className="text-xs text-white/30">{t.desc}</p>
                    </div>
                  </div>
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="text-white/20 group-hover:text-accent transition-colors shrink-0">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </li>
              ))}
            </ul>

            <div className="mt-6 rounded-xl border border-accent/20 bg-accent/10 p-5">
              <p className="text-sm font-semibold text-accent">Conseil technique gratuit</p>
              <p className="mt-1 text-xs text-white/50 leading-relaxed">
                Pas sûr de la technique adaptée à votre projet ? Contactez-nous — nous vous conseillons sans engagement.
              </p>
              <a href="#contact" className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:underline">
                Nous contacter
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
