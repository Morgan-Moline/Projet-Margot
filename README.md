# Site vitrine

Projet [Astro](https://astro.build) : structure du site avec du texte Lorem ipsum, à remplacer par le vrai contenu.

## Démarrer

```bash
npm install
npm run dev
```

Le site est alors disponible sur http://localhost:4321.

## Commandes

| Commande          | Action                                   |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Serveur de développement                 |
| `npm run build`   | Génère le site statique dans `dist/`     |
| `npm run preview` | Prévisualise le build en local           |

## Structure

```
src/
├── components/   Header (menu burger), Footer, Hero, Card
├── data/         nav.ts : la liste des pages du menu (à modifier pour ajouter/retirer une page)
├── layouts/      Layout.astro (squelette commun à toutes les pages)
├── pages/        index, a-propos, services, realisations, contact (1 fichier = 1 page)
└── styles/       global.css (palette, typo, boutons : tout est en variables CSS)
public/           favicon et fichiers servis tels quels
```

## Palette

| Couleur | Code      | Usage                                         |
| ------- | --------- | --------------------------------------------- |
| Vert    | `#87A96B` | Accents, survols du menu, fonds de sections   |
| Brun    | `#5A3E2B` | Textes, bandeau d'accueil, menu, pied de page |
| Orange  | `#D5851F` | Boutons, page active, détails                 |

Les trois couleurs sont définies en haut de `src/styles/global.css` (`--green`, `--brown`, `--orange`).

## Ajouter une page

1. Créer `src/pages/ma-page.astro` (copier une page existante).
2. Ajouter une ligne dans `src/data/nav.ts` : le menu burger et le pied de page se mettent à jour tout seuls.

## À personnaliser en priorité

1. **Nom du site** : dans `Layout.astro` (balise `<title>`), `Header.astro` et `Footer.astro`.
2. **Textes** : remplacer les Lorem ipsum page par page.
3. **Formulaire de contact** : il est factice, à brancher sur un service (Formspree, Netlify Forms…).

## Publier sur GitHub Pages

1. Dans `astro.config.mjs`, renseigner `site` et `base`.
2. Pousser le projet sur GitHub, puis activer *Settings → Pages → Source : GitHub Actions*.
3. Ajouter le workflow officiel Astro : https://docs.astro.build/fr/guides/deploy/github/
