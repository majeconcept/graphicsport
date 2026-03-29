import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#131F2B] py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-sm text-white/40 md:flex-row md:justify-between">
        <p>&copy; 2025 Graphic Sport — Tous droits réservés</p>

        <div className="flex gap-6">
          <Link
            href="/mentions-legales"
            className="transition-colors duration-200 hover:text-white/70"
          >
            Mentions légales
          </Link>
          <a
            href="https://www.facebook.com/graphicsport"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200 hover:text-white/70"
          >
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
}
