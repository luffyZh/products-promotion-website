import { useTranslation } from 'react-i18next';
import { useLocale } from '../i18n/useLocale';
import { SUPPORTED_LOCALES, type Locale } from '../i18n/locale';

export function LanguageSwitcher({ className }: { className?: string }) {
  const { t } = useTranslation();
  const { locale, setLocale } = useLocale();

  return (
    <select
      className={
        className ??
        'h-9 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-3 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors'
      }
      value={locale}
      onChange={(e) => setLocale(e.target.value as Locale)}
      aria-label="Language"
    >
      {SUPPORTED_LOCALES.map((l) => (
        <option key={l} value={l}>
          {t(`locale.${l}`)}
        </option>
      ))}
    </select>
  );
}
