export default function Contact() {
  return (
    <section id="contact" className="bg-dark py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-heading text-3xl font-semibold text-white md:text-4xl">
          Nous contacter
        </h2>

        <div className="mt-12 grid gap-12 md:grid-cols-2">
          <div className="space-y-6 text-white/80">
            <div>
              <h3 className="text-sm font-medium uppercase tracking-wider text-white/50">
                Adresse
              </h3>
              <p className="mt-1">
                3 rue Alfred-Kastler
                <br />
                68310 Wittelsheim
              </p>
            </div>

            <div>
              <h3 className="text-sm font-medium uppercase tracking-wider text-white/50">
                Téléphone
              </h3>
              <a
                href="tel:+33389662641"
                className="mt-1 inline-block transition-colors duration-200 hover:text-accent"
              >
                03 89 66 26 41
              </a>
            </div>

            <div>
              <h3 className="text-sm font-medium uppercase tracking-wider text-white/50">
                Email
              </h3>
              <a
                href="mailto:contact@graphicsport.fr"
                className="mt-1 inline-block transition-colors duration-200 hover:text-accent"
              >
                contact@graphicsport.fr
              </a>
            </div>

            <div>
              <a
                href="https://www.facebook.com/graphicsport"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm transition-colors duration-200 hover:text-accent"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Suivez-nous sur Facebook
              </a>
            </div>
          </div>

          <form action="#" method="POST" className="space-y-5">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-white/50"
              >
                Nom
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-colors duration-200 focus:border-accent"
                placeholder="Votre nom"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white/50"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-colors duration-200 focus:border-accent"
                placeholder="votre@email.fr"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-white/50"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="mt-1 w-full resize-none rounded-md border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-colors duration-200 focus:border-accent"
                placeholder="Décrivez votre projet…"
              />
            </div>

            <button
              type="submit"
              disabled
              className="rounded-md bg-accent px-8 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-accent/90 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
