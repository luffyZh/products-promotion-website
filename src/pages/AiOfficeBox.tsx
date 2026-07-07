import React, { useEffect, useState } from 'react';
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle,
  ClipboardCheck,
  Cpu,
  FileSearch,
  FileText,
  Layers,
  Lock,
  Mic,
  Network,
  ShieldCheck,
  Sparkles,
  ArrowUp,
  Zap
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import heroProductImage from '../assets/ai-officebox/AIBox-Product-Hero.png';
import capacityProductImage from '../assets/ai-officebox/AIBox-Product-Capcity.png';
import interfaceProductImage from '../assets/ai-officebox/AI-Powersource.png';

const scrollToId = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

type PlaceholderCardProps = {
  title: string;
  desc: string;
  badge?: string;
  icon: React.ComponentType<{ className?: string }>;
  aspectClassName: string;
  tone?: 'purple' | 'indigo' | 'slate';
  frame?: boolean;
  className?: string;
};

const PlaceholderCard: React.FC<PlaceholderCardProps> = ({
  title,
  desc,
  badge,
  icon: Icon,
  aspectClassName,
  tone = 'purple',
  frame = true,
  className
}) => {
  const toneClasses =
    tone === 'indigo'
      ? {
          ring: 'border-indigo-200/70 dark:border-indigo-800/50',
          chip: 'bg-indigo-600/10 dark:bg-indigo-400/10 text-indigo-800 dark:text-indigo-200 border-indigo-200/70 dark:border-indigo-700/30',
          icon: 'text-indigo-700 dark:text-indigo-200'
        }
      : tone === 'slate'
        ? {
            ring: 'border-slate-200/70 dark:border-slate-800/60',
            chip: 'bg-slate-900/5 dark:bg-white/5 text-slate-700 dark:text-slate-200 border-slate-200/70 dark:border-slate-800/60',
            icon: 'text-slate-700 dark:text-slate-200'
          }
        : {
            ring: 'border-purple-200/70 dark:border-purple-800/50',
            chip: 'bg-purple-600/10 dark:bg-purple-400/10 text-purple-800 dark:text-purple-200 border-purple-200/70 dark:border-purple-700/30',
            icon: 'text-purple-700 dark:text-purple-200'
          };

  return (
    <div
      className={`relative overflow-hidden ${className ?? ''} ${
        frame ? `rounded-3xl border ${toneClasses.ring} bg-white/60 dark:bg-white/5 backdrop-blur shadow-xl` : 'w-full'
      }`}
    >
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(120%_80%_at_80%_20%,rgba(147,51,234,0.22),transparent_60%),radial-gradient(70%_50%_at_10%_80%,rgba(99,102,241,0.14),transparent_60%)] opacity-80" />
      <div className="absolute inset-0 pointer-events-none [background-image:linear-gradient(rgba(2,6,23,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(2,6,23,0.08)_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.12] dark:opacity-[0.18]" />

      <div className={`${aspectClassName} w-full flex items-center justify-center`}>
        <div className="relative w-full h-full p-6 md:p-8 flex flex-col justify-between">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <div className="text-sm font-bold text-slate-950 dark:text-white truncate">{title}</div>
              <div className="mt-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{desc}</div>
            </div>
            <div className={`shrink-0 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-bold ${toneClasses.chip}`}>
              <Icon className={`w-4 h-4 ${toneClasses.icon}`} />
              {badge ?? 'IMAGE'}
            </div>
          </div>

          <div className="mt-6 flex-1 rounded-2xl border border-dashed border-slate-300/70 dark:border-slate-700/70 bg-white/30 dark:bg-black/20 flex items-center justify-center">
            <div className="text-center px-6">
              <Icon className={`w-12 h-12 mx-auto opacity-70 ${toneClasses.icon}`} />
              <div className="mt-3 text-xs font-semibold text-slate-700 dark:text-slate-200 tracking-wide">PLACEHOLDER</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AiOfficeBox: React.FC = () => {
  const { t } = useTranslation();
  const [activeAgent, setActiveAgent] = useState<'doc' | 'kb' | 'meeting' | 'compliance'>('doc');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-slate-50 dark:bg-[#08070a] min-h-screen text-slate-900 dark:text-slate-200 font-sans selection:bg-purple-500/25 selection:text-purple-950 dark:selection:text-purple-100 overflow-x-clip transition-colors duration-300">
      <section id="overview" className="relative pt-28 lg:pt-40 pb-14 lg:pb-20 border-b border-slate-200/70 dark:border-purple-900/20">
        <div className="absolute -top-32 start-1/2 -translate-x-1/2 w-[1100px] h-[500px] rounded-full bg-purple-500/20 dark:bg-purple-600/20 blur-[130px] pointer-events-none" />
        <div className="absolute -bottom-56 start-0 w-[800px] h-[520px] rounded-full bg-indigo-500/10 dark:bg-indigo-700/10 blur-[140px] pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_40%_at_50%_20%,rgba(147,51,234,0.08),transparent_60%),radial-gradient(40%_30%_at_10%_60%,rgba(99,102,241,0.06),transparent_60%),radial-gradient(40%_30%_at_90%_70%,rgba(236,72,153,0.05),transparent_60%)]" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 dark:bg-white/5 backdrop-blur border border-purple-200/60 dark:border-purple-700/30 text-purple-700 dark:text-purple-200 text-sm font-semibold shadow-sm">
                <Sparkles className="w-4 h-4" />
                {t('aiOfficeBox.heroBadge')}
              </div>

              <h1 className="mt-7 text-4xl md:text-6xl font-bold tracking-tight leading-[1.05] text-slate-950 dark:text-white">
                {t('aiOfficeBox.h1Line1')}
                <p className="mt-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-fuchsia-600 to-indigo-600 dark:from-purple-400 dark:via-fuchsia-400 dark:to-indigo-400">
                  {t('aiOfficeBox.h1Line2')}
                </p>
              </h1>

              <p className="mt-6 text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
                {t('aiOfficeBox.heroSubtitle')}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => scrollToId('community')}
                  className="inline-flex items-center gap-2 rounded-full bg-purple-600 text-white px-6 py-3 text-sm md:text-base font-bold shadow-lg shadow-purple-600/20 hover:bg-purple-700 transition-colors"
                >
                  {t('aiOfficeBox.heroCtaPrimary')}
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => scrollToId('agents')}
                  className="inline-flex items-center gap-2 rounded-full border border-purple-600 bg-white/80 dark:bg-white/5 text-purple-600 dark:text-purple-200 px-6 py-3 text-sm md:text-base font-semibold dark:border-slate-800 hover:bg-white dark:hover:bg-white/10 transition-colors"
                >
                  {t('aiOfficeBox.heroCtaSecondary')}
                </button>
              </div>
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl">
                {[
                  { icon: Cpu, title: t('aiOfficeBox.heroMetric1Title'), desc: t('aiOfficeBox.heroMetric1Desc') },
                  { icon: Lock, title: t('aiOfficeBox.heroMetric2Title'), desc: t('aiOfficeBox.heroMetric2Desc') },
                  { icon: Zap, title: t('aiOfficeBox.heroMetric3Title'), desc: t('aiOfficeBox.heroMetric3Desc') }
                ].map((m) => (
                  <div
                    key={m.title}
                    className="rounded-2xl bg-white/70 dark:bg-white/5 border border-slate-200 dark:border-slate-800 px-4 py-6 backdrop-blur"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-purple-600/10 dark:bg-purple-400/10 text-purple-700 dark:text-purple-300 flex items-center justify-center">
                        <m.icon className="w-5 h-5" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-md font-bold text-slate-900 dark:text-white truncate">{m.title}</div>
                        <div className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{m.desc}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="w-full flex items-center justify-center">
                <div className="relative w-full max-w-[520px] lg:max-w-[560px]">
                  <div className="absolute inset-x-10 -bottom-10 h-12 rounded-full bg-slate-900/15 blur-2xl dark:bg-black/60" />
                  <img
                    src={heroProductImage}
                    alt={t('aiOfficeBox.heroImageAlt')}
                    loading="lazy"
                    className="relative w-full h-auto object-contain drop-shadow-[0_28px_70px_rgba(15,23,42,0.24)] dark:drop-shadow-[0_28px_70px_rgba(0,0,0,0.65)]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pain" className="py-20 lg:py-28 bg-white dark:bg-[#07060a] border-b border-slate-200 dark:border-slate-900/60">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="text-lg font-semibold text-purple-700 dark:text-purple-300">{t('aiOfficeBox.painKicker')}</div>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-950 dark:text-white">
              {t('aiOfficeBox.painTitle')}
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed">{t('aiOfficeBox.painSubtitle')}</p>
          </div>

          <div className="mt-12 space-y-5">
            {[
              {
                icon: ShieldCheck,
                problemTitle: t('aiOfficeBox.pain1.problemTitle'),
                problemDesc: t('aiOfficeBox.pain1.problemDesc'),
                solutionTitle: t('aiOfficeBox.pain1.solutionTitle'),
                solutionDesc: t('aiOfficeBox.pain1.solutionDesc')
              },
              {
                icon: Cpu,
                problemTitle: t('aiOfficeBox.pain2.problemTitle'),
                problemDesc: t('aiOfficeBox.pain2.problemDesc'),
                solutionTitle: t('aiOfficeBox.pain2.solutionTitle'),
                solutionDesc: t('aiOfficeBox.pain2.solutionDesc')
              },
              {
                icon: Network,
                problemTitle: t('aiOfficeBox.pain3.problemTitle'),
                problemDesc: t('aiOfficeBox.pain3.problemDesc'),
                solutionTitle: t('aiOfficeBox.pain3.solutionTitle'),
                solutionDesc: t('aiOfficeBox.pain3.solutionDesc')
              }
            ].map((item) => (
              <div
                key={item.problemTitle}
                className="rounded-3xl bg-white dark:bg-white/5 border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden"
              >
                <div className="flex flex-col lg:flex-row">
                  <div className="flex-1 p-7 md:p-8 bg-slate-50/70 dark:bg-black/10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-2xl bg-red-500/10 text-red-600 dark:text-red-300 border border-red-500/10 dark:border-red-500/20 flex items-center justify-center">
                        <AlertTriangle className="w-5 h-5" />
                      </div>
                      <div className="flex items-baseline gap-2 flex-wrap">
                        <span className="text-sm font-bold text-red-600 dark:text-red-300">
                          {t('aiOfficeBox.painLabel')}：
                        </span>
                        <span className="text-lg md:text-xl font-bold text-slate-950 dark:text-white leading-snug">
                          {item.problemTitle}
                        </span>
                      </div>
                    </div>
                    <div className="mt-5">
                      <div className="mt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {item.problemDesc}
                      </div>
                    </div>
                  </div>

                  <div className="hidden lg:block w-px bg-slate-200 dark:bg-slate-800" />
                  <div className="lg:hidden h-px bg-slate-200 dark:bg-slate-800" />

                  <div className="flex-1 p-7 md:p-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/10 dark:border-emerald-500/20 flex items-center justify-center">
                        <CheckCircle className="w-5 h-5" />
                      </div>
                       <div className="flex items-baseline gap-2 flex-wrap">
                        <span className="text-sm font-bold text-emerald-700 dark:text-emerald-300">
                          {t('aiOfficeBox.solutionLabel')}：
                        </span>
                        <span className="text-lg md:text-xl font-bold text-slate-950 dark:text-white leading-snug">
                          {item.solutionTitle}
                        </span>
                      </div>
                    </div>
                    <div className="mt-5">
                      <div className="mt-2 text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
                        {item.solutionDesc}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="advantages" className="py-20 lg:py-28 bg-slate-50 dark:bg-[#08070a] border-b border-slate-200 dark:border-slate-900/60">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-950 dark:text-white">{t('aiOfficeBox.advantagesTitle')}</h2>
            <p className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed">{t('aiOfficeBox.advantagesSubtitle')}</p>
          </div>

          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {[
              { icon: ShieldCheck, title: t('aiOfficeBox.adv2.title'), desc: t('aiOfficeBox.adv2.desc') },
              { icon: FileSearch, title: t('aiOfficeBox.adv3.title'), desc: t('aiOfficeBox.adv3.desc') },
              { icon: Lock, title: t('aiOfficeBox.adv4.title'), desc: t('aiOfficeBox.adv4.desc') },
              { icon: ClipboardCheck, title: t('aiOfficeBox.adv5.title'), desc: t('aiOfficeBox.adv5.desc') }
            ].map((f) => (
              <div
                key={f.title}
                className="group rounded-3xl bg-white dark:bg-white/5 border border-slate-200 dark:border-slate-800 p-6 hover:shadow-lg hover:shadow-purple-500/5 transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-600/15 to-indigo-600/10 dark:from-purple-400/15 dark:to-indigo-400/10 text-purple-700 dark:text-purple-200 flex items-center justify-center">
                    <f.icon className="w-6 h-6" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-lg font-bold text-slate-950 dark:text-white">{f.title}</div>
                    <div className="mt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{f.desc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="hardware" className="pt-20 pb-16 lg:pt-28 lg:pb-24 bg-white dark:bg-[#07060a] border-b border-slate-200 dark:border-slate-900/60">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-950 dark:text-white">
                {t('aiOfficeBox.hardwareTitle')}
              </h2>
              <p className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed">{t('aiOfficeBox.hardwareSubtitle')}</p>

              <div className="mt-10 grid grid-cols-1 sm:grid-cols-1 gap-6">
                {[
                  { title: t('aiOfficeBox.spec1.title'), desc: t('aiOfficeBox.spec1.desc'), icon: Cpu },
                  { title: t('aiOfficeBox.spec3.title'), desc: t('aiOfficeBox.spec3.desc'), icon: ShieldCheck },
                  { title: t('aiOfficeBox.spec4.title'), desc: t('aiOfficeBox.spec4.desc'), icon: Network }
                ].map((s) => (
                  <div
                    key={s.title}
                    className="rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-slate-800 p-5"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-purple-600/10 dark:bg-purple-400/10 text-purple-700 dark:text-purple-200 flex items-center justify-center">
                        <s.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-lg font-bold text-slate-950 dark:text-white">{s.title}</div>
                        <div className="mt-1 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{s.desc}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="relative">
                <div className="relative w-full flex items-center justify-center">
                  <div className="absolute -top-8 flex items-center justify-center pointer-events-none select-none">
                    <div className="text-[clamp(56px,9.5vw,160px)] whitespace-nowrap font-bold text-purple-200 tracking-[-0.04em] dark:text-white/5">
                      160 TOPS
                    </div>
                  </div>
                  <img
                    src={capacityProductImage}
                    alt={t('aiOfficeBox.hardwareImageAlt')}
                    loading="lazy"
                    className="relative w-[1/4] object-contain drop-shadow-[0_28px_70px_rgba(15,23,42,0.18)] dark:drop-shadow-[0_28px_70px_rgba(0,0,0,0.55)]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section id="interface" className="py-20 lg:py-28 bg-slate-50 dark:bg-[#08070a] border-b border-slate-200 dark:border-slate-900/60">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-950 dark:text-white">{t('aiOfficeBox.interfaceTitle')}</h2>
            <p className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed">{t('aiOfficeBox.interfaceSubtitle')}</p>
          </div>

          <div className="mt-12 grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-white/5 shadow-xl">
                <img src={interfaceProductImage} alt={t('aiOfficeBox.interfaceImageAlt')} loading="lazy" className="w-full aspect-[16/10] object-cover" />
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    icon: Network,
                    count: t('aiOfficeBox.ports.lan.count'),
                    label: t('aiOfficeBox.ports.lan.label'),
                    desc: t('aiOfficeBox.ports.lan.desc')
                  },
                  {
                    icon: Zap,
                    count: t('aiOfficeBox.ports.typec.count'),
                    label: t('aiOfficeBox.ports.typec.label'),
                    desc: t('aiOfficeBox.ports.typec.desc')
                  },
                  {
                    icon: Cpu,
                    count: t('aiOfficeBox.ports.usb32.count'),
                    label: t('aiOfficeBox.ports.usb32.label'),
                    desc: t('aiOfficeBox.ports.usb32.desc')
                  },
                  {
                    icon: Layers,
                    count: t('aiOfficeBox.ports.hdmi.count'),
                    label: t('aiOfficeBox.ports.hdmi.label'),
                    desc: t('aiOfficeBox.ports.hdmi.desc')
                  },
                  {
                    icon: Mic,
                    count: t('aiOfficeBox.ports.audio.count'),
                    label: t('aiOfficeBox.ports.audio.label'),
                    desc: t('aiOfficeBox.ports.audio.desc')
                  },
                  {
                    icon: Zap,
                    count: t('aiOfficeBox.ports.dc.count'),
                    label: t('aiOfficeBox.ports.dc.label'),
                    desc: t('aiOfficeBox.ports.dc.desc')
                  }
                ].map((p) => (
                  <div
                    key={`${p.label}-${p.count}`}
                    className="flex items-center rounded-2xl bg-slate-50 dark:bg-black/10 border border-slate-200 dark:border-slate-800 px-5 py-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-purple-600/10 dark:bg-purple-400/10 text-purple-700 dark:text-purple-200 flex items-center justify-center shrink-0">
                        <p.icon className="w-5 h-5" />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <div className="text-sm font-bold text-slate-950 dark:text-white truncate">{p.label}</div>
                          <span className="shrink-0 px-2 py-0.5 rounded-full text-[11px] font-bold bg-purple-600 text-white">
                            {p.count}
                          </span>
                        </div>
                        <div className="mt-1 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{p.desc}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="agents" className="py-20 lg:py-28 bg-slate-50 dark:bg-[#08070a] border-b border-slate-200 dark:border-slate-900/60">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-950 dark:text-white">{t('aiOfficeBox.agentsTitle')}</h2>
            <p className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed">{t('aiOfficeBox.agentsSubtitle')}</p>
          </div>

          <div className="mt-12 grid lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-5">
              <div className="h-full rounded-3xl bg-white dark:bg-white/5 border border-slate-200 dark:border-slate-800 p-2">
                {(
                  [
                    {
                      key: 'doc' as const,
                      icon: FileText,
                      title: t('aiOfficeBox.agent1.title'),
                      desc: t('aiOfficeBox.agent1.desc')
                    },
                    {
                      key: 'kb' as const,
                      icon: FileSearch,
                      title: t('aiOfficeBox.agent2.title'),
                      desc: t('aiOfficeBox.agent2.desc')
                    },
                    {
                      key: 'meeting' as const,
                      icon: Mic,
                      title: t('aiOfficeBox.agent3.title'),
                      desc: t('aiOfficeBox.agent3.desc')
                    },
                    {
                      key: 'compliance' as const,
                      icon: ClipboardCheck,
                      title: t('aiOfficeBox.agent4.title'),
                      desc: t('aiOfficeBox.agent4.desc')
                    }
                  ] as const
                ).map((tab) => {
                  const active = tab.key === activeAgent;
                  return (
                    <button
                      key={tab.key}
                      type="button"
                      onClick={() => setActiveAgent(tab.key)}
                      className={`w-full text-left flex items-start gap-6 rounded-2xl p-4 transition-colors ${
                        active
                          ? 'bg-purple-600 text-white'
                          : 'hover:bg-slate-50 dark:hover:bg-white/5 text-slate-900 dark:text-slate-200'
                      }`}
                    >
                      <div
                        className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 ${
                          active ? 'bg-white/15' : 'bg-purple-600/10 dark:bg-purple-400/10 text-purple-700 dark:text-purple-200'
                        }`}
                      >
                        <tab.icon className={`w-5 h-5 ${active ? 'text-white' : ''}`} />
                      </div>
                      <div className="min-w-0">
                        <div className={`text-sm font-bold ${active ? 'text-white' : 'text-slate-950 dark:text-white'}`}>
                          {tab.title}
                        </div>
                        <div className={`mt-1 text-xs leading-relaxed ${active ? 'text-white/85' : 'text-slate-600 dark:text-slate-300'}`}>
                          {tab.desc}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="h-full rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-white/5 shadow-xl">
                <PlaceholderCard
                  title={
                    activeAgent === 'doc'
                      ? t('aiOfficeBox.placeholderAgentDoc.title')
                      : activeAgent === 'kb'
                        ? t('aiOfficeBox.placeholderAgentKb.title')
                        : activeAgent === 'meeting'
                          ? t('aiOfficeBox.placeholderAgentMeeting.title')
                          : t('aiOfficeBox.placeholderAgentCompliance.title')
                  }
                  desc={
                    activeAgent === 'doc'
                      ? t('aiOfficeBox.placeholderAgentDoc.desc')
                      : activeAgent === 'kb'
                        ? t('aiOfficeBox.placeholderAgentKb.desc')
                        : activeAgent === 'meeting'
                          ? t('aiOfficeBox.placeholderAgentMeeting.desc')
                          : t('aiOfficeBox.placeholderAgentCompliance.desc')
                  }
                  badge={t('aiOfficeBox.placeholderAgent.badge')}
                  icon={activeAgent === 'meeting' ? Mic : activeAgent === 'kb' ? FileSearch : activeAgent === 'doc' ? FileText : ClipboardCheck}
                  aspectClassName="h-full"
                  tone="slate"
                  frame={false}
                  className="h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="roadmap" className="py-20 lg:py-28 bg-white dark:bg-[#07060a] border-b border-slate-200 dark:border-slate-900/60">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-950 dark:text-white">{t('aiOfficeBox.roadmapTitle')}</h2>
            <p className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed">{t('aiOfficeBox.roadmapSubtitle')}</p>
          </div>

          <div className="mt-14 grid lg:grid-cols-3 gap-6">
            {[
              { badge: 'V1.0', title: t('aiOfficeBox.roadmap1.title'), desc: t('aiOfficeBox.roadmap1.desc') },
              { badge: 'V2.0', title: t('aiOfficeBox.roadmap2.title'), desc: t('aiOfficeBox.roadmap2.desc') },
              { badge: 'V3.0', title: t('aiOfficeBox.roadmap3.title'), desc: t('aiOfficeBox.roadmap3.desc') }
            ].map((step) => (
              <div
                key={step.badge}
                className="rounded-3xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-slate-800 p-7"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-600 text-white text-xs font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/80" />
                  {step.badge}
                </div>
                <div className="mt-5 text-lg font-bold text-slate-950 dark:text-white">{step.title}</div>
                <div className="mt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{step.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="community" className="py-20 lg:py-28 bg-gradient-to-b from-purple-950 via-purple-950 to-[#09090b] text-white overflow-hidden">
        <div className="absolute -top-56 end-0 w-[700px] h-[520px] rounded-full bg-fuchsia-500/25 blur-[140px] pointer-events-none" />
        <div className="absolute -bottom-56 start-0 w-[700px] h-[520px] rounded-full bg-indigo-500/20 blur-[140px] pointer-events-none" />

        <div className="container max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto rounded-3xl border border-white/15 bg-white/5 backdrop-blur p-8 md:p-12 shadow-2xl">
            <div className="flex flex-col lg:flex-row gap-10 items-start">
              <div className="flex-1">
                <div className="text-sm font-semibold text-purple-200">{t('aiOfficeBox.ctaKicker')}</div>
                <h2 className="mt-3 text-3xl md:text-4xl font-bold leading-tight">
                  {t('aiOfficeBox.ctaTitleLine1')}
                  <br />
                  {t('aiOfficeBox.ctaTitleLine2')}
                </h2>
                <p className="mt-5 text-white/75 leading-relaxed">{t('aiOfficeBox.ctaDesc')}</p>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <a
                    href="tel:13051891212"
                    className="inline-flex items-center gap-2 rounded-full bg-white text-purple-950 px-6 py-3 text-sm md:text-base font-bold hover:bg-purple-50 transition-colors"
                  >
                    {t('aiOfficeBox.ctaCall')}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <button
                    type="button"
                    onClick={() => scrollToId('overview')}
                    className="inline-flex items-center gap-2 rounded-full bg-white/10 text-white px-6 py-3 text-sm md:text-base font-semibold border border-white/15 hover:bg-white/15 transition-colors"
                  >
                    <ArrowUp className="w-4 h-4" />
                    {t('aiOfficeBox.ctaBackToTop')}
                  </button>
                </div>
              </div>

              <div className="w-full lg:w-[360px] shrink-0">
                <div className="rounded-3xl bg-black/25 border border-white/10 p-6">
                  <div className="text-sm font-bold">{t('aiOfficeBox.communityCardTitle')}</div>
                  <p className="mt-2 text-sm text-white/70 leading-relaxed">{t('aiOfficeBox.communityCardDesc')}</p>

                  <div className="mt-6 space-y-3">
                    {[
                      { title: t('aiOfficeBox.communityItem1Title'), desc: t('aiOfficeBox.communityItem1Desc') },
                      { title: t('aiOfficeBox.communityItem2Title'), desc: t('aiOfficeBox.communityItem2Desc') },
                      { title: t('aiOfficeBox.communityItem3Title'), desc: t('aiOfficeBox.communityItem3Desc') }
                    ].map((item) => (
                      <div key={item.title} className="rounded-2xl bg-white/5 border border-white/10 p-4">
                        <div className="text-sm font-bold">{item.title}</div>
                        <div className="mt-1 text-xs text-white/70 leading-relaxed">{item.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AiOfficeBox;
