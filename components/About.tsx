const techniques = [
  "Broderie",
  "Sérigraphie",
  "Transfert sérigraphique",
  "DTF",
  "Flex",
];

export default function About() {
  return (
    <section id="about" className="bg-bg py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-heading text-3xl font-semibold text-dark md:text-4xl">
          Un savoir-faire alsacien d&apos;exception
        </h2>

        <div className="mt-12 grid gap-12 md:grid-cols-2">
          <div className="space-y-4 text-text leading-relaxed">
            <p>
              Implantée à Wittelsheim au cœur du Haut-Rhin, Graphic Sport met
              son expertise artisanale au service des professionnels, associations
              et collectivités depuis de nombreuses années.
            </p>
            <p>
              Notre atelier dispose d&apos;un parc machines complet et régulièrement
              renouvelé, garantissant une qualité de marquage irréprochable sur
              tous types de textiles.
            </p>
            <p>
              Chaque projet est traité avec la même exigence : conseil
              personnalisé, choix de la technique la plus adaptée et finitions
              soignées jusque dans les moindres détails.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider text-text/60">
              Nos techniques
            </h3>
            <ul className="mt-4 space-y-3">
              {techniques.map((t) => (
                <li key={t} className="flex items-center gap-3 text-text">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="shrink-0 text-accent"
                  >
                    <path
                      d="M4 10l4 4 8-8"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
