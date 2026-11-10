// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Polices hébergées avec le site (aucune requête vers Google Fonts),
// à partir des fichiers des paquets @fontsource installés via npm.
/**
 * @param {string} pkg nom du paquet @fontsource
 * @param {number} weight graisse
 * @param {'normal' | 'italic'} [style]
 * @returns {{ weight: number, style: 'normal' | 'italic', src: [string] }}
 */
const file = (pkg, weight, style = 'normal') => ({
  weight,
  style,
  src: [`@fontsource/${pkg}/files/${pkg}-latin-${weight}-${style}.woff2`],
});

export default defineConfig({
  site: 'https://morgan-moline.github.io',
  base: '/Projet-Margot',
  integrations: [sitemap()],
  fonts: [
    {
      name: 'DM Sans',
      cssVariable: '--font-dm-sans',
      provider: fontProviders.local(),
      options: { variants: [file('dm-sans', 400), file('dm-sans', 600), file('dm-sans', 700)] },
      fallbacks: ['system-ui', 'sans-serif'],
    },
    {
      name: 'Playfair Display',
      cssVariable: '--font-playfair',
      provider: fontProviders.local(),
      options: {
        variants: [
          file('playfair-display', 500),
          file('playfair-display', 600),
          file('playfair-display', 600, 'italic'),
        ],
      },
      fallbacks: ['Georgia', 'serif'],
    },
  ],
});
