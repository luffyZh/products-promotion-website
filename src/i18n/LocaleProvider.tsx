import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react';
import i18n from './i18n';
import { DEFAULT_LOCALE, getDirection, guessLocaleFromNavigator, LOCALE_STORAGE_KEY, type Locale, normalizeLocale } from './locale';
import { LocaleContext, type LocaleContextValue } from './LocaleContext';

function readStoredLocale(): Locale | null {
  if (typeof window === 'undefined') return null;
  return normalizeLocale(window.localStorage.getItem(LOCALE_STORAGE_KEY));
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => readStoredLocale() ?? guessLocaleFromNavigator() ?? DEFAULT_LOCALE);

  const direction = useMemo(() => getDirection(locale), [locale]);

  useEffect(() => {
    void i18n.changeLanguage(locale);

    document.documentElement.lang = locale;
    document.documentElement.dir = direction;
    document.documentElement.classList.toggle('rtl', direction === 'rtl');

    window.localStorage.setItem(LOCALE_STORAGE_KEY, locale);
  }, [direction, locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
  }, []);

  const value = useMemo<LocaleContextValue>(() => ({ locale, direction, setLocale }), [direction, locale, setLocale]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}
