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

- `src/pages/` : Accueil, Le projet, Livres, Bénévoles et Contact
- `src/components/` : en-tête, menu burger, pied de page et composants de présentation
- `src/data/nav.ts` : liens communs au menu et au pied de page
- `src/styles/global.css` : palette et mise en page
- `public/images/` et `public/videos/` : médias utilisés sur le site

Les fiches détaillées des livres, les coordonnées de contact et les informations de soutien seront ajoutées lors d'une prochaine mise à jour, lorsque les éléments seront disponibles.
