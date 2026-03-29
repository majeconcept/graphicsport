# Graphic Sport — Site Vitrine

## Projet
Site vitrine one-page Next.js 14 pour **Graphic Sport**, spécialiste du marquage textile dans le Haut-Rhin (Alsace).

## URLs
- **Production** : https://graphic-sport.vercel.app
- **Repo GitHub** : https://github.com/majeconcept/graphicsport.git
- **Dev local** : http://localhost:3000

## Stack
- Next.js 14.2.35 (App Router, TypeScript)
- Tailwind CSS
- Google Fonts : Outfit (titres) + Inter (corps)
- Zéro dépendance UI externe

## Design tokens
```
--color-bg:     #F5F9FA
--color-accent: #2BBCD4
--color-dark:   #1A2B3C
--color-white:  #FFFFFF
--color-text:   #3D4F5C
```

## Structure
```
/app
  layout.tsx              ← SEO, fonts, JSON-LD LocalBusiness
  page.tsx                ← Assemblage des 10 sections
  globals.css
  mentions-legales/page.tsx
/components
  Navbar.tsx              ← Client (burger mobile, scroll opacity)
  Hero.tsx                ← Client (video play toggle)
  Stats.tsx               ← Barre accent 4 chiffres clés
  SavoirFaire.tsx         ← 5 cards techniques (tags audience, prix)
  Values.tsx              ← 4 piliers (Qualité, Pro, Local, Réactivité)
  About.tsx               ← Dark section, liste techniques interactive
  Realisations.tsx        ← Client (onError fallback images)
  Testimonials.tsx        ← 3 avis clients ★★★★★
  CtaBand.tsx             ← Section accent CTA double
  Contact.tsx             ← Formulaire HTML statique
  Footer.tsx
/public
  LogoGS.svg
  /images
    realisation-01.webp … realisation-06.webp
```

## Placeholders à remplir
- `Hero.tsx` : `[[INSÉRER URL VIDÉO]]` dans `<video src="">`
- `layout.tsx` : `[[INSÉRER URL OG:IMAGE]]` dans OpenGraph
- `mentions-legales/page.tsx` : `[[INSÉRER LES MENTIONS LÉGALES COMPLÈTES]]`
- `Testimonials.tsx` : remplacer les témoignages exemples par de vrais avis

## Infos client
- **Adresse** : 3 rue Alfred-Kastler, 68310 Wittelsheim
- **Tél** : 03 89 66 26 41 (`tel:+33389662641`)
- **Email** : contact@graphicsport.fr
- **Facebook** : https://www.facebook.com/graphicsport

## Commandes
```bash
npm run dev      # Serveur local → http://localhost:3000
npm run build    # Build prod
npx vercel --prod  # Deploy production
git push         # Push GitHub (Vercel redéploie automatiquement)
```

## Notes
- Le formulaire contact est HTML statique (aucun backend). Pour le rendre fonctionnel : intégrer Resend, Formspree ou Netlify Forms.
- Les images réalisations doivent être en `.webp` dans `/public/images/`.
- Le dev server tourne via `.claude/launch.json` (port 3000).
