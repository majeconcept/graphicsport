import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mentions légales — Graphic Sport",
  description: "Mentions légales du site Graphic Sport.",
};

export default function MentionsLegales() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-28">
      <Link
        href="/"
        className="text-sm text-accent transition-colors duration-200 hover:text-accent/80"
      >
        &larr; Retour à l&apos;accueil
      </Link>

      <h1 className="mt-8 font-heading text-4xl font-semibold text-dark">
        Mentions légales
      </h1>

      <div className="mt-8 space-y-6 text-text leading-relaxed">
        <p>
          {/* [[INSÉRER LES MENTIONS LÉGALES COMPLÈTES]] */}
          Page en cours de rédaction.
        </p>
      </div>
    </main>
  );
}
