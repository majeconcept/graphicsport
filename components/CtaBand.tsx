export default function CtaBand() {
  return (
    <section className="bg-accent py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
              Vous avez un projet de marquage ?
            </h2>
            <p className="mt-2 text-white/70 text-lg">
              Devis gratuit et personnalisé sous 24h. Aucun engagement.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-accent transition-all duration-200 hover:bg-white/90 hover:shadow-lg"
            >
              Demander un devis
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="tel:+33389662641"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:border-white hover:bg-white/10"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2.5 2h3l1.5 3-2 1a8 8 0 004 4l1-2 3 1.5v3a1 1 0 01-1 1C6 14.5 1.5 10 1.5 3.5a1 1 0 011-1z" />
              </svg>
              03 89 66 26 41
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
