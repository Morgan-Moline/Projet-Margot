# Je lis pour toi – Lectures en néonatalogie

Première version du site vitrine du projet « Je lis pour toi », réalisée avec Astro et Node.js.

## Démarrer en local

```bash
npm install
npm run dev
```

Le site est disponible par défaut sur http://localhost:4321.

## Commandes

- `npm run dev` : serveur de développement
- `npm run build` : génération du site statique dans `dist/`
- `npm run preview` : prévisualisation du build

## Organisation

- `src/pages/` : Accueil, Le projet, Livres, Bénévoles, Contact et pages légales
- `src/components/` : en-tête (menu burger) et pied de page
- `src/data/nav.ts` : liens communs au menu et au pied de page
- `src/data/livres.ts` : liste des livres (titre, auteur, résumé, thème, couverture)
- `src/assets/` : images optimisées automatiquement au build (WebP, tailles adaptées)
- `src/styles/global.css` : palette et mise en page
- `public/videos/` : vidéos et leurs images d’aperçu
- `docs/` : documents de travail du projet (non publiés sur le site)

## Ajouter un livre

1. Déposer la couverture dans `src/assets/livres/` avec un nom simple (ex. `mon-livre.jpg`).
2. Dans `src/data/livres.ts`, ajouter l’import de l’image puis une entrée dans la liste `books`.

Le compteur et les filtres par thème de la page Livres se mettent à jour automatiquement.

Les fiches détaillées des livres, les coordonnées de contact et les informations de soutien seront ajoutées lors d'une prochaine mise à jour, lorsque les éléments seront disponibles.
