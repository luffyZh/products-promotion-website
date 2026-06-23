import { createContext } from 'react';
import type { Locale } from './locale';

export type LocaleContextValue = {
  locale: Locale;
  direction: 'ltr' | 'rtl';
  setLocale: (next: Locale) => void;
};

export const LocaleContext = createContext<LocaleContextValue | null>(null);

