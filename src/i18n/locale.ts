export const DEFAULT_LOCALE = 'zh-CN' as const;
export const SUPPORTED_LOCALES = ['zh-CN', 'en', 'ar'] as const;
export type Locale = (typeof SUPPORTED_LOCALES)[number];

export const LOCALE_STORAGE_KEY = 'products-promotion-website:locale';

export function normalizeLocale(input?: string | null): Locale {
  if (!input) return DEFAULT_LOCALE;

  const lowered = input.toLowerCase();

  if (lowered === 'zh' || lowered.startsWith('zh-')) return 'zh-CN';
  if (lowered === 'en' || lowered.startsWith('en-')) return 'en';
  if (lowered === 'ar' || lowered.startsWith('ar-')) return 'ar';

  return DEFAULT_LOCALE;
}

export function guessLocaleFromNavigator(): Locale {
  if (typeof navigator === 'undefined') return DEFAULT_LOCALE;
  return normalizeLocale(navigator.language);
}

export function getDirection(locale: Locale): 'ltr' | 'rtl' {
  return locale === 'ar' ? 'rtl' : 'ltr';
}

