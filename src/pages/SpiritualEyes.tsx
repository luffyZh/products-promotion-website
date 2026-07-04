import React, { useEffect } from 'react';
import { 
  Eye, 
  Lock, 
  Crosshair, 
  WifiOff, 
  AlertTriangle,
  Building2,
  Users,
  Database,
  Briefcase
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

const SpiritualEyes: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-slate-50 dark:bg-[#030712] min-h-screen text-slate-900 dark:text-slate-300 font-sans selection:bg-blue-500/30 selection:text-blue-900 dark:selection:text-blue-200 overflow-hidden transition-colors duration-300">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden border-b border-blue-200 dark:border-blue-900/30">
        {/* Background Effects */}
        <div className="absolute top-0 start-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-400/20 dark:bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 dark:opacity-10 mix-blend-overlay pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600 dark:bg-blue-950/50 border border-blue-500 dark:border-blue-800/50 text-white dark:text-blue-400 text-sm font-medium mb-8 backdrop-blur-sm shadow-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-300 dark:bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-100 dark:bg-blue-500"></span>
            </span>
            {t('spiritualEyes.heroBadge')}
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
            {t('spiritualEyes.brandZh')}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-500">
              {t('spiritualEyes.brandEn')}
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-12 font-light tracking-wide">
            {t('spiritualEyes.heroSubtitleLine1')}
            <br/>
            <span className="text-blue-600 dark:text-blue-400 font-medium">{t('spiritualEyes.heroSubtitleLine2')}</span>
          </p>

          <div className="w-full max-w-5xl mx-auto rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 shadow-[0_0_40px_rgba(37,99,235,0.1)] dark:shadow-[0_0_40px_rgba(37,99,235,0.15)] relative aspect-video flex items-center justify-center">
            {/* Image Placeholder */}
            <div className="text-center p-8">
              <Eye className="w-16 h-16 text-blue-500 dark:text-blue-700 mx-auto mb-4 opacity-50" />
              <p className="text-blue-600 font-mono text-sm">{t('spiritualEyes.heroImagePlaceholderTitle')}</p>
              <p className="text-slate-500 text-xs mt-2 max-w-md mx-auto">{t('spiritualEyes.heroImagePlaceholderDesc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- CORE PILLARS --- */}
      <section className="py-24 relative bg-white dark:bg-slate-950 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">{t('spiritualEyes.pillarsTitle')}</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              {t('spiritualEyes.pillarsDescPrefix')}{' '}
              <span className="text-blue-600 dark:text-blue-400">{t('spiritualEyes.pillarsDescHighlight')}</span>{' '}
              {t('spiritualEyes.pillarsDescSuffix')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group p-8 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 dark:hover:border-blue-700/50 transition-colors relative overflow-hidden">
              <div className="absolute top-0 end-0 w-32 h-32 bg-blue-100 dark:bg-blue-600/10 blur-[40px] group-hover:bg-blue-200 dark:group-hover:bg-blue-500/20 transition-colors" />
              <div className="w-14 h-14 rounded-xl bg-blue-100 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400">
                <WifiOff className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{t('spiritualEyes.feature1.title')}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                {t('spiritualEyes.feature1.desc')}
              </p>
            </div>
            {/* Feature 2 */}
            <div className="group p-8 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 dark:hover:border-indigo-700/50 transition-colors relative overflow-hidden">
              <div className="absolute top-0 end-0 w-32 h-32 bg-indigo-100 dark:bg-indigo-600/10 blur-[40px] group-hover:bg-indigo-200 dark:group-hover:bg-indigo-500/20 transition-colors" />
              <div className="w-14 h-14 rounded-xl bg-indigo-100 dark:bg-indigo-950 border border-indigo-200 dark:border-indigo-800 flex items-center justify-center mb-6 text-indigo-600 dark:text-indigo-400">
                <Crosshair className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{t('spiritualEyes.feature2.title')}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                {t('spiritualEyes.feature2.desc')}
              </p>
            </div>
            {/* Feature 3 */}
            <div className="group p-8 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-sky-500/50 dark:hover:border-sky-700/50 transition-colors relative overflow-hidden">
              <div className="absolute top-0 end-0 w-32 h-32 bg-sky-100 dark:bg-sky-600/10 blur-[40px] group-hover:bg-sky-200 dark:group-hover:bg-sky-500/20 transition-colors" />
              <div className="w-14 h-14 rounded-xl bg-sky-100 dark:bg-sky-950 border border-sky-200 dark:border-sky-800 flex items-center justify-center mb-6 text-sky-600 dark:text-sky-400">
                <Lock className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{t('spiritualEyes.feature3.title')}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                {t('spiritualEyes.feature3.desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- PRODUCT FORMS --- */}
      <section className="py-24 relative bg-slate-50 dark:bg-[#050b14] border-y border-slate-200 dark:border-slate-800/50 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">{t('spiritualEyes.formsTitle')}</h2>
            <p className="text-slate-600 dark:text-slate-400">{t('spiritualEyes.formsSubtitle')}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Pro Version */}
            <div className="bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-950 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col shadow-sm dark:shadow-none">
              <div className="p-10 pb-0 flex-grow">
                <div className="inline-block px-3 py-1 rounded-md bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-400 text-xs font-bold tracking-wider mb-4 border border-blue-200 dark:border-blue-800/50">{t('spiritualEyes.pro.badge')}</div>
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">{t('spiritualEyes.pro.name')}</h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-6">{t('spiritualEyes.pro.tagline')}</p>
                <ul className="space-y-4 text-slate-700 dark:text-slate-300 text-sm mb-8">
                  <li className="flex items-start gap-3"><span className="text-blue-500 dark:text-blue-500 mt-0.5">✦</span> <span><strong>{t('spiritualEyes.pro.item1Label')}</strong> {t('spiritualEyes.pro.item1Value')}</span></li>
                  <li className="flex items-start gap-3"><span className="text-blue-500 dark:text-blue-500 mt-0.5">✦</span> <span><strong>{t('spiritualEyes.pro.item2Label')}</strong> {t('spiritualEyes.pro.item2Value')}</span></li>
                  <li className="flex items-start gap-3"><span className="text-blue-500 dark:text-blue-500 mt-0.5">✦</span> <span><strong>{t('spiritualEyes.pro.item3Label')}</strong> {t('spiritualEyes.pro.item3Value')}</span></li>
                </ul>
              </div>
              <div className="h-64 bg-slate-100 dark:bg-slate-900 relative border-t border-slate-200 dark:border-slate-800 flex items-center justify-center">
                 {/* Image Placeholder */}
                <div className="text-center px-4">
                  <p className="text-blue-600 dark:text-blue-700 font-mono text-sm mb-2">{t('spiritualEyes.pro.imagePlaceholderTitle')}</p>
                  <p className="text-slate-500 dark:text-slate-600 text-xs">{t('spiritualEyes.pro.imagePlaceholderDesc')}</p>
                </div>
              </div>
            </div>

            {/* Air Version */}
            <div className="bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-950 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col shadow-sm dark:shadow-none">
              <div className="p-10 pb-0 flex-grow">
                <div className="inline-block px-3 py-1 rounded-md bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-400 text-xs font-bold tracking-wider mb-4 border border-indigo-200 dark:border-indigo-800/50">{t('spiritualEyes.air.badge')}</div>
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">{t('spiritualEyes.air.name')}</h3>
                <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-6">{t('spiritualEyes.air.tagline')}</p>
                <ul className="space-y-4 text-slate-700 dark:text-slate-300 text-sm mb-8">
                  <li className="flex items-start gap-3"><span className="text-indigo-500 mt-0.5">✦</span> <span><strong>{t('spiritualEyes.air.item1Label')}</strong> {t('spiritualEyes.air.item1Value')}</span></li>
                  <li className="flex items-start gap-3"><span className="text-indigo-500 mt-0.5">✦</span> <span><strong>{t('spiritualEyes.air.item2Label')}</strong> {t('spiritualEyes.air.item2Value')}</span></li>
                  <li className="flex items-start gap-3"><span className="text-indigo-500 mt-0.5">✦</span> <span><strong>{t('spiritualEyes.air.item3Label')}</strong> {t('spiritualEyes.air.item3Value')}</span></li>
                </ul>
              </div>
              <div className="h-64 bg-slate-100 dark:bg-slate-900 relative border-t border-slate-200 dark:border-slate-800 flex items-center justify-center">
                 {/* Image Placeholder */}
                 <div className="text-center px-4">
                  <p className="text-indigo-600 dark:text-indigo-700 font-mono text-sm mb-2">{t('spiritualEyes.air.imagePlaceholderTitle')}</p>
                  <p className="text-slate-500 dark:text-slate-600 text-xs">{t('spiritualEyes.air.imagePlaceholderDesc')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SCENARIOS --- */}
      <section className="py-24 relative bg-white dark:bg-slate-950 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <div className="mb-16 md:flex justify-between items-end">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">{t('spiritualEyes.scenariosTitle')}</h2>
              <p className="text-slate-600 dark:text-slate-400">{t('spiritualEyes.scenariosSubtitle')}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Scenario 1 */}
            <div className="group rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col sm:flex-row shadow-sm hover:shadow-md transition-shadow">
              <div className="sm:w-2/5 h-48 sm:h-auto bg-slate-200 dark:bg-slate-800 relative flex items-center justify-center border-b sm:border-b-0 sm:border-e border-slate-300 dark:border-slate-700">
                <div className="text-center p-4">
                  <Briefcase className="w-8 h-8 text-slate-400 dark:text-slate-600 mx-auto mb-2" />
                  <p className="text-slate-500 text-xs font-mono">{t('spiritualEyes.scenarioImagePlaceholder')}</p>
                </div>
              </div>
              <div className="p-6 sm:w-3/5">
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{t('spiritualEyes.scenario1.title')}</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2">{t('spiritualEyes.scenario1.desc')}</p>
                <div className="space-y-1">
                  <p className="text-xs text-slate-500 dark:text-slate-500 flex items-center gap-2"><AlertTriangle className="w-3 h-3 text-red-500 dark:text-red-400/70"/> {t('spiritualEyes.scenario1.risk1')}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-500 flex items-center gap-2"><AlertTriangle className="w-3 h-3 text-red-500 dark:text-red-400/70"/> {t('spiritualEyes.scenario1.risk2')}</p>
                </div>
              </div>
            </div>

            {/* Scenario 2 */}
            <div className="group rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col sm:flex-row shadow-sm hover:shadow-md transition-shadow">
              <div className="sm:w-2/5 h-48 sm:h-auto bg-slate-200 dark:bg-slate-800 relative flex items-center justify-center border-b sm:border-b-0 sm:border-e border-slate-300 dark:border-slate-700">
                <div className="text-center p-4">
                  <Users className="w-8 h-8 text-slate-400 dark:text-slate-600 mx-auto mb-2" />
                  <p className="text-slate-500 text-xs font-mono">{t('spiritualEyes.scenarioImagePlaceholder')}</p>
                </div>
              </div>
              <div className="p-6 sm:w-3/5">
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{t('spiritualEyes.scenario2.title')}</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2">{t('spiritualEyes.scenario2.desc')}</p>
                <div className="space-y-1">
                  <p className="text-xs text-slate-500 dark:text-slate-500 flex items-center gap-2"><AlertTriangle className="w-3 h-3 text-red-500 dark:text-red-400/70"/> {t('spiritualEyes.scenario2.risk1')}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-500 flex items-center gap-2"><AlertTriangle className="w-3 h-3 text-red-500 dark:text-red-400/70"/> {t('spiritualEyes.scenario2.risk2')}</p>
                </div>
              </div>
            </div>

            {/* Scenario 3 */}
            <div className="group rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col sm:flex-row shadow-sm hover:shadow-md transition-shadow">
              <div className="sm:w-2/5 h-48 sm:h-auto bg-slate-200 dark:bg-slate-800 relative flex items-center justify-center border-b sm:border-b-0 sm:border-e border-slate-300 dark:border-slate-700">
                <div className="text-center p-4">
                  <Building2 className="w-8 h-8 text-slate-400 dark:text-slate-600 mx-auto mb-2" />
                  <p className="text-slate-500 text-xs font-mono">{t('spiritualEyes.scenarioImagePlaceholder')}</p>
                </div>
              </div>
              <div className="p-6 sm:w-3/5">
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{t('spiritualEyes.scenario3.title')}</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2">{t('spiritualEyes.scenario3.desc')}</p>
                <div className="space-y-1">
                  <p className="text-xs text-slate-500 dark:text-slate-500 flex items-center gap-2"><AlertTriangle className="w-3 h-3 text-red-500 dark:text-red-400/70"/> {t('spiritualEyes.scenario3.risk1')}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-500 flex items-center gap-2"><AlertTriangle className="w-3 h-3 text-red-500 dark:text-red-400/70"/> {t('spiritualEyes.scenario3.risk2')}</p>
                </div>
              </div>
            </div>

            {/* Scenario 4 */}
            <div className="group rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col sm:flex-row shadow-sm hover:shadow-md transition-shadow">
              <div className="sm:w-2/5 h-48 sm:h-auto bg-slate-200 dark:bg-slate-800 relative flex items-center justify-center border-b sm:border-b-0 sm:border-e border-slate-300 dark:border-slate-700">
                <div className="text-center p-4">
                  <Database className="w-8 h-8 text-slate-400 dark:text-slate-600 mx-auto mb-2" />
                  <p className="text-slate-500 text-xs font-mono">{t('spiritualEyes.scenarioImagePlaceholder')}</p>
                </div>
              </div>
              <div className="p-6 sm:w-3/5">
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{t('spiritualEyes.scenario4.title')}</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2">{t('spiritualEyes.scenario4.desc')}</p>
                <div className="space-y-1">
                  <p className="text-xs text-slate-500 dark:text-slate-500 flex items-center gap-2"><AlertTriangle className="w-3 h-3 text-red-500 dark:text-red-400/70"/> {t('spiritualEyes.scenario4.risk1')}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-500 flex items-center gap-2"><AlertTriangle className="w-3 h-3 text-red-500 dark:text-red-400/70"/> {t('spiritualEyes.scenario4.risk2')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- TECH COMPARISON & SPECS --- */}
      <section className="py-24 relative bg-slate-50 dark:bg-[#030712] border-t border-slate-200 dark:border-slate-800/50 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-12 text-center">{t('spiritualEyes.comparisonTitle')}</h2>
            
            {/* Image Comparison Placeholder */}
            <div className="mb-16 bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 flex flex-col md:flex-row gap-6 items-center shadow-sm">
               <div className="flex-1 w-full aspect-video bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg flex items-center justify-center relative">
                  <div className="absolute top-2 start-2 bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs px-2 py-1 rounded">{t('spiritualEyes.comparisonLeftBadge')}</div>
                  <div className="text-center">
                    <p className="text-slate-500 font-mono text-sm">{t('spiritualEyes.comparisonImagePlaceholder')}</p>
                    <p className="text-slate-500 dark:text-slate-600 text-xs mt-1">{t('spiritualEyes.comparisonLeftDesc')}</p>
                  </div>
               </div>
               <div className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 font-bold border border-slate-200 dark:border-slate-700 shadow-inner">VS</div>
               <div className="flex-1 w-full aspect-video bg-blue-50 dark:bg-slate-950 border border-blue-300 dark:border-blue-800/50 rounded-lg flex items-center justify-center relative shadow-[0_0_20px_rgba(37,99,235,0.05)] dark:shadow-[0_0_20px_rgba(37,99,235,0.1)]">
                  <div className="absolute top-2 start-2 bg-blue-600 dark:bg-blue-950 text-white dark:text-blue-400 border border-blue-500 dark:border-blue-800/50 text-xs px-2 py-1 rounded shadow-sm">{t('spiritualEyes.comparisonRightBadge')}</div>
                  <div className="text-center">
                    <p className="text-blue-600 dark:text-blue-700 font-mono text-sm">{t('spiritualEyes.comparisonImagePlaceholder')}</p>
                    <p className="text-blue-800 dark:text-blue-900 text-xs mt-1">{t('spiritualEyes.comparisonRightDesc')}</p>
                  </div>
               </div>
            </div>

            {/* Performance Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 text-center hover:border-blue-400 dark:hover:border-blue-800/50 transition-colors shadow-sm">
                <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">≤ 3秒</div>
                <div className="text-blue-600 dark:text-blue-400 text-sm mb-2 font-medium">{t('spiritualEyes.metric1.title')}</div>
                <p className="text-slate-500 text-xs">{t('spiritualEyes.metric1.desc')}</p>
              </div>
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 text-center hover:border-blue-400 dark:hover:border-blue-800/50 transition-colors shadow-sm">
                <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">6米</div>
                <div className="text-blue-600 dark:text-blue-400 text-sm mb-2 font-medium">{t('spiritualEyes.metric2.title')}</div>
                <p className="text-slate-500 text-xs">{t('spiritualEyes.metric2.desc')}</p>
              </div>
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 text-center hover:border-blue-400 dark:hover:border-blue-800/50 transition-colors shadow-sm">
                <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">≥ 80%</div>
                <div className="text-blue-600 dark:text-blue-400 text-sm mb-2 font-medium">{t('spiritualEyes.metric3.title')}</div>
                <p className="text-slate-500 text-xs">{t('spiritualEyes.metric3.desc')}</p>
              </div>
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 text-center hover:border-blue-400 dark:hover:border-blue-800/50 transition-colors shadow-sm">
                <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">≤ 10%</div>
                <div className="text-blue-600 dark:text-blue-400 text-sm mb-2 font-medium">{t('spiritualEyes.metric4.title')}</div>
                <p className="text-slate-500 text-xs">{t('spiritualEyes.metric4.desc')}</p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default SpiritualEyes;
