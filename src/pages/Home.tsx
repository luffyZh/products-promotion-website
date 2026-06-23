import { Link } from 'react-router-dom';
import { Shield, ChevronRight, ArrowRight, Cpu, Eye } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="flex-1 flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative w-full py-24 lg:py-32 overflow-hidden bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-8">
          <h1 className="text-5xl lg:text-7xl font-black tracking-tight text-slate-900 dark:text-white">
            {t('home.heroTitlePrefix')}
            <span className="text-emerald-600 dark:text-emerald-500">{t('home.heroTitleHighlight')}</span>
          </h1>
          <p className="text-lg lg:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            {t('home.heroDesc')}
          </p>
          <div className="flex justify-center gap-4 pt-4">
            <a href="#products" className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-3 rounded-full font-semibold transition-all shadow-lg flex items-center gap-2">
              {t('home.heroCta')} <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="w-full py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">{t('home.productsTitle')}</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              {t('home.productsSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Product 1: GuardX */}
            <Link 
              to="/products/guardx"
              className="group block p-1 rounded-2xl bg-gradient-to-b from-slate-100 to-white dark:from-slate-800 dark:to-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 hover:shadow-xl transition-all duration-300"
            >
              <div className="bg-slate-950 rounded-xl aspect-video p-6 flex flex-col items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <Shield className="w-16 h-16 text-emerald-400 mb-4" />
                <h3 className="text-white text-xl font-bold tracking-wider z-10">{t('home.guardxCardTitleTop')}</h3>
                <p className="text-emerald-400/80 text-sm mt-2 z-10">{t('home.guardxCardTagline')}</p>
              </div>
              <div className="p-6">
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{t('home.guardxCardTitle')}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 line-clamp-2">
                  {t('home.guardxCardDesc')}
                </p>
                <div className="flex items-center text-emerald-600 dark:text-emerald-500 font-semibold text-sm group-hover:gap-2 transition-all">
                  {t('home.learnMore')} <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </Link>

            {/* Product 2: Placeholder */}
            <div className="group block p-1 rounded-2xl bg-gradient-to-b from-slate-100 to-white dark:from-slate-800 dark:to-slate-900 border border-slate-200 dark:border-slate-800 transition-all duration-300 opacity-80">
              <div className="bg-slate-800 dark:bg-slate-900 rounded-xl aspect-video p-6 flex flex-col items-center justify-center relative overflow-hidden">
                <Cpu className="w-16 h-16 text-slate-400 dark:text-slate-600 mb-4" />
                <h3 className="text-slate-300 dark:text-slate-500 text-xl font-bold tracking-wider z-10">{t('home.placeholder1TitleTop')}</h3>
                <p className="text-slate-400/80 dark:text-slate-600 text-sm mt-2 z-10">{t('home.placeholder1Tagline')}</p>
              </div>
              <div className="p-6">
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{t('home.placeholder1Title')}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 line-clamp-2">
                  {t('home.placeholder1Desc')}
                </p>
                <div className="flex items-center text-slate-400 dark:text-slate-600 font-semibold text-sm">
                  {t('common.comingSoon')}
                </div>
              </div>
            </div>

            {/* Product 3: Placeholder */}
            <div className="group block p-1 rounded-2xl bg-gradient-to-b from-slate-100 to-white dark:from-slate-800 dark:to-slate-900 border border-slate-200 dark:border-slate-800 transition-all duration-300 opacity-80">
              <div className="bg-slate-800 dark:bg-slate-900 rounded-xl aspect-video p-6 flex flex-col items-center justify-center relative overflow-hidden">
                <Eye className="w-16 h-16 text-slate-400 dark:text-slate-600 mb-4" />
                <h3 className="text-slate-300 dark:text-slate-500 text-xl font-bold tracking-wider z-10">{t('home.placeholder2TitleTop')}</h3>
                <p className="text-slate-400/80 dark:text-slate-600 text-sm mt-2 z-10">{t('home.placeholder2Tagline')}</p>
              </div>
              <div className="p-6">
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{t('home.placeholder2Title')}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 line-clamp-2">
                  {t('home.placeholder2Desc')}
                </p>
                <div className="flex items-center text-slate-400 dark:text-slate-600 font-semibold text-sm">
                  {t('common.comingSoon')}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
