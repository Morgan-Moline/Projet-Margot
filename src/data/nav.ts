export const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export const links = [
  { href: `${base}/`, label: 'Accueil' },
  { href: `${base}/a-propos`, label: 'Le projet' },
  { href: `${base}/livres`, label: 'Livres' },
  { href: `${base}/benevoles`, label: 'Bénévoles' },
  { href: `${base}/contact`, label: 'Contact' },
];

export const isActive = (href: string, pathname: string) => {
  const normalize = (p: string) => p.replace(/\/$/, '') || '/';
  return normalize(href) === normalize(pathname);
};
