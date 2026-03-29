export default function Contact() {
  return (
    <section id="contact" className="bg-bg py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">

        <div className="overflow-hidden rounded-3xl bg-dark">
          <div className="grid lg:grid-cols-2">

            {/* Left — Info */}
            <div className="relative overflow-hidden p-10 md:p-14">
              <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-accent/10 blur-[80px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />

              <span className="text-xs font-semibold uppercase tracking-widest text-accent">
                Contact
              </span>
              <h2 className="mt-3 font-heading text-4xl font-bold text-white md:text-5xl">
                Parlons de<br />votre projet
              </h2>
              <p className="mt-4 text-white/50 leading-relaxed">
                Un projet de marquage textile ? Contactez-nous pour un devis personnalisé, gratuit et sans engagement.
              </p>

              <div className="mt-12 space-y-6">
                <a
                  href="tel:+33389662641"
                  className="flex items-center gap-4 group"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-accent transition-all duration-200 group-hover:bg-accent group-hover:text-white">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 015 4a2 2 0 012-2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-white/30 uppercase tracking-wider">Téléphone</p>
                    <p className="text-white font-medium group-hover:text-accent transition-colors duration-200">03 89 66 26 41</p>
                  </div>
                </a>

                <a
                  href="mailto:contact@graphicsport.fr"
                  className="flex items-center gap-4 group"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-accent transition-all duration-200 group-hover:bg-accent group-hover:text-white">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m2 7 10 7 10-7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-white/30 uppercase tracking-wider">Email</p>
                    <p className="text-white font-medium group-hover:text-accent transition-colors duration-200">contact@graphicsport.fr</p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-accent">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                      <circle cx="12" cy="9" r="2.5" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-white/30 uppercase tracking-wider">Adresse</p>
                    <p className="text-white font-medium">3 rue Alfred-Kastler, 68310 Wittelsheim</p>
                  </div>
                </div>

                <a
                  href="https://www.facebook.com/graphicsport"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-accent transition-all duration-200 group-hover:bg-accent group-hover:text-white">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-white/30 uppercase tracking-wider">Facebook</p>
                    <p className="text-white font-medium group-hover:text-accent transition-colors duration-200">Suivez-nous</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Right — Form */}
            <div className="border-t border-white/10 bg-white/[0.03] p-10 md:p-14 lg:border-t-0 lg:border-l">
              <p className="text-sm font-medium text-white/40 mb-8">Formulaire de contact</p>
              <form action="#" method="POST" className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium uppercase tracking-wider text-white/30 mb-2">
                      Nom
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/20 outline-none transition-all duration-200 focus:border-accent focus:bg-white/8"
                      placeholder="Jean Dupont"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-medium uppercase tracking-wider text-white/30 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/20 outline-none transition-all duration-200 focus:border-accent focus:bg-white/8"
                      placeholder="jean@exemple.fr"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="sujet" className="block text-xs font-medium uppercase tracking-wider text-white/30 mb-2">
                    Sujet
                  </label>
                  <input
                    type="text"
                    id="sujet"
                    name="sujet"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/20 outline-none transition-all duration-200 focus:border-accent focus:bg-white/8"
                    placeholder="Demande de devis broderie…"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-medium uppercase tracking-wider text-white/30 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/20 outline-none transition-all duration-200 focus:border-accent focus:bg-white/8"
                    placeholder="Décrivez votre projet, les quantités, les délais…"
                  />
                </div>
                <button
                  type="submit"
                  disabled
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-8 py-3.5 text-sm font-medium text-white transition-all duration-200 hover:bg-accent/90 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Envoyer le message
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </form>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
