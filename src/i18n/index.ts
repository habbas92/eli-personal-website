import en from './en';
import fr from './fr';
import es from './es';
import type { Dict } from './en';

export type { Dict };
export const locales = ['en', 'fr', 'es'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export const dict: Record<Locale, Dict> = { en, fr, es };

export function t(locale: Locale): Dict {
  return dict[locale];
}

/** Path for a page in a given locale. English lives at the root, others under /fr and /es. */
export function localePath(locale: Locale, path: string): string {
  const clean = path === '/' ? '' : path.replace(/\/$/, '');
  if (locale === defaultLocale) return clean || '/';
  return `/${locale}${clean}`;
}

/** Split a pathname into its locale and the locale-free page path. */
export function parsePath(pathname: string): { locale: Locale; path: string } {
  const clean = pathname.replace(/\.html$/, '').replace(/\/index$/, '').replace(/\/$/, '') || '/';
  const match = clean.match(/^\/(fr|es)(\/.*)?$/);
  if (match) return { locale: match[1] as Locale, path: match[2] || '/' };
  return { locale: defaultLocale, path: clean };
}
