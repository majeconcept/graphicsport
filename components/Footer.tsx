import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0d1a24] py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/LogoGS.svg"
              alt="Logo Graphic Sport"
              width={36}
              height={36}
            />
            <div>
              <p className="text-sm font-semibold text-white">Graphic Sport</p>
              <p className="text-xs text-white/30">Wittelsheim, Haut-Rhin</p>
            </div>
          </div>

          <p className="text-xs text-white/25">&copy; 2025 Graphic Sport — Tous droits réservés</p>

          <div className="flex gap-6 text-xs text-white/30">
            <Link
              href="/mentions-legales"
              className="transition-colors duration-200 hover:text-white/60"
            >
              Mentions légales
            </Link>
            <a
              href="https://www.facebook.com/graphicsport"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200 hover:text-white/60"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
