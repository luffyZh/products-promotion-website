import { useState, useEffect, useRef } from 'react';
import html2canvas from 'html2canvas';
import { Trans, useTranslation } from 'react-i18next';
import { 
  Shield, 
  Cpu, 
  BatteryCharging, 
  Eye, 
  Layers, 
  MapPin, 
  AlertTriangle, 
  CheckCircle2, 
  ChevronRight, 
  ChevronLeft,
  Camera, 
  Monitor,
  X,
  Target,
  Zap,
  Database,
  CheckSquare,
  Rocket,
  Check,
  Book
} from 'lucide-react';

// 本地素材导入
import heroImg1 from '../assets/guard-x/GuardX-01.jpg';
import heroImg2 from '../assets/guard-x/GuardX-02.jpg';
import heroImg3 from '../assets/guard-x/GuardX-03.jpg';
import heroImg4 from '../assets/guard-x/GuardX-04.jpg';
import heroImg5 from '../assets/guard-x/GuardX-05.jpg';

import boxImg from '../assets/guard-x/guardx-box.png';
import padImg from '../assets/guard-x/pad.png';
import moduleImg from '../assets/guard-x/module.png';
import stoneImg from '../assets/guard-x/bone.png'; // 根据文件夹中的实际命名为 bone.png
import woodImg from '../assets/guard-x/tree.png';
import dashboardImg from '../assets/guard-x/web-screen.png';
import guardxNightImg from '../assets/guard-x/guardx-night.jpeg';
import otherNightImg from '../assets/guard-x/other-product-night.jpeg';
import guardxImg from '../assets/guard-x/demo.png';
import traditionalImg from '../assets/guard-x/traditional.png';
import guardxRealImg from '../assets/guard-x/guardx-real.png';
import guardBookImg from '../assets/guard-x/guard-book.png';
import luosiImg from '../assets/guard-x/luosi.png';
import eleLineImg from '../assets/guard-x/ele-line.png';

const heroImages = [heroImg1, heroImg2, heroImg3, heroImg4, heroImg5];

export default function ProductLandingPage() {
  const { t } = useTranslation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [isDownloading, setIsDownloading] = useState(false);
  const pdfRef = useRef<HTMLDivElement>(null);

  // 动态修改页面标题，适配微信等浏览器的标题展示
  useEffect(() => {
    // 动态设置标题
    document.title = t('guardx.meta.title');
    
    // 动态设置微信分享的 Fallback 图片
    const fallbackDiv = document.getElementById('wechat-share-fallback');
    if (fallbackDiv) {
      fallbackDiv.innerHTML = `<img src="${import.meta.env.BASE_URL}guardx-share.jpg" alt="${t('guardx.meta.wechatShareAlt')}" />`;
    }

    // 组件卸载时恢复默认状态
    return () => {
      document.title = t('meta.defaultTitle');
      if (fallbackDiv) {
        fallbackDiv.innerHTML = '';
      }
    };
  }, [t]);

  const handleDownloadImage = async () => {
    if (!pdfRef.current || isDownloading) return;
    setIsDownloading(true);
    
    try {
      const canvas = await html2canvas(pdfRef.current, {
        scale: 3, // 提升分辨率
        useCORS: true,
        backgroundColor: document.documentElement.classList.contains('dark') ? '#020617' : '#ffffff',
        windowWidth: 1280,
        width: 1280,
        onclone: (clonedDoc) => {
          // 1. 隐藏需要忽略的元素，避免在图片中占位
          const ignoreElements = clonedDoc.querySelectorAll('[data-html2canvas-ignore="true"]');
          ignoreElements.forEach((el) => {
            (el as HTMLElement).style.display = 'none';
          });

          // 2. 修复 html2canvas 无法正确渲染 background-clip: text 渐变色的问题
          const gradientTexts = clonedDoc.querySelectorAll('.bg-clip-text');
          gradientTexts.forEach((el) => {
            const htmlEl = el as HTMLElement;
            htmlEl.style.background = 'none';
            htmlEl.style.webkitTextFillColor = 'initial';
            htmlEl.style.color = '#059669'; // 统一降级为 emerald-600 纯色
          });

          // 3. 强制应用桌面端样式 (解决 html2canvas 视口宽度导致的移动端排版错乱问题)
          const allElements = clonedDoc.querySelectorAll('*');
          allElements.forEach(el => {
            const htmlEl = el as HTMLElement;
            const classes = Array.from(htmlEl.classList);
            const mdClasses = classes.filter(c => c.startsWith('md:'));
            if (mdClasses.length > 0) {
              mdClasses.forEach(mdClass => {
                const baseClass = mdClass.substring(3);
                htmlEl.classList.add(baseClass);
                
                // 移除对应的移动端互斥类名
                if (baseClass === 'flex-row') htmlEl.classList.remove('flex-col');
                if (baseClass === 'block') htmlEl.classList.remove('hidden');
                if (baseClass === 'flex') htmlEl.classList.remove('hidden');
                if (baseClass === 'justify-start') htmlEl.classList.remove('justify-end');
                if (baseClass === 'text-start') htmlEl.classList.remove('text-center');
                if (baseClass === 'min-h-[72px]') htmlEl.classList.remove('min-h-[60px]');
              });
            }
          });

          // 4. 修复夜间全彩对比的 clip-path 失效问题
          const nightVisionContainer = clonedDoc.querySelector('#night-vision .relative.max-w-5xl');
          if (nightVisionContainer) {
            const leftDiv = nightVisionContainer.children[0] as HTMLElement;
            const rightDiv = nightVisionContainer.children[1] as HTMLElement;
            const divider = nightVisionContainer.children[2] as HTMLElement;
            
            if (leftDiv && rightDiv) {
              leftDiv.style.clipPath = 'none';
              leftDiv.style.width = '50%';
              leftDiv.style.borderRight = '2px solid rgba(255,255,255,0.3)';
              const leftImg = leftDiv.querySelector('img');
              if (leftImg) leftImg.style.objectPosition = 'left center';
              
              rightDiv.style.width = '50%';
              rightDiv.style.left = '50%';
              const rightImg = rightDiv.querySelector('img');
              if (rightImg) rightImg.style.objectPosition = 'right center';
            }
            if (divider) divider.style.display = 'none';
          }
        }
      });

      const imgData = canvas.toDataURL('image/jpeg', 1.0);
      
      const link = document.createElement('a');
      link.href = imgData;
      link.download = t('guardx.meta.downloadImageName');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Image generation failed:', error);
      alert(t('guardx.meta.downloadFailed'));
    } finally {
      setIsDownloading(false);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000); // 5秒自动轮播
    return () => clearInterval(timer);
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };
  return (
    <div className="w-full" ref={pdfRef}>
      {/* 1. 首屏 (Hero Section) */}
      <header className="relative w-full py-20 lg:py-32 print:py-16 print:pt-32 overflow-hidden bg-slate-50 print:bg-white dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 print:gap-8 items-center">
          <div className="lg:col-span-7 space-y-6 print:space-y-4">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              <Cpu className="w-4 h-4 me-2" />
              {t('guardx.hero.badge')}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white" style={{ lineHeight: '1.5' }}>
              <Trans
                i18nKey="guardx.hero.title"
                components={{
                  highlight: (
                    <span className="bg-gradient-to-r from-emerald-500 to-teal-600 dark:from-emerald-400 dark:to-teal-500 bg-clip-text text-transparent" />
                  ),
                  br: <br />
                }}
              />
            </h1>
            <p className="text-lg max-w-xl leading-relaxed text-slate-600 dark:text-slate-400">
              {t('guardx.hero.desc')}
            </p>
            <div className="flex flex-wrap gap-4 pt-4 print:hidden">
              <button 
                data-html2canvas-ignore="true"
                onClick={() => setIsVideoModalOpen(true)}
                className="bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-lg flex items-center gap-2"
              >
                {t('guardx.hero.watchVideo')} <ChevronRight className="w-4 h-4" />
              </button>
              <button 
                data-html2canvas-ignore="true"
                onClick={() => {
                  document.getElementById('camouflage')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-3 rounded-lg font-semibold border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-700 dark:text-slate-300 transition-all"
              >
                {t('guardx.hero.learnCamouflage')}
              </button>
            </div>
          </div>
          <div className="lg:col-span-5 relative group">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800/50 bg-white dark:bg-slate-900/20 shadow-xl dark:shadow-none aspect-[1/1]">
              {heroImages.map((img, index) => (
                <img 
                  key={index}
                  src={img} 
                  alt={t('guardx.hero.imageAlt', { index: index + 1 })} 
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                    index === currentImageIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  } ${index === 0 ? 'print:!opacity-100 print:!z-10' : 'print:!opacity-0 print:!hidden'}`}
                />
              ))}
              
              {/* 左右切换按钮 */}
              <button 
                onClick={prevImage}
                className="absolute start-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/50 dark:bg-black/50 backdrop-blur hover:bg-white dark:hover:bg-black text-slate-800 dark:text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 print:hidden"
                aria-label={t('guardx.a11y.prevImage')}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={nextImage}
                className="absolute end-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/50 dark:bg-black/50 backdrop-blur hover:bg-white dark:hover:bg-black text-slate-800 dark:text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 print:hidden"
                aria-label={t('guardx.a11y.nextImage')}
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* 底部指示器 */}
              <div className="absolute bottom-24 inset-x-0 flex justify-center gap-2 z-10 print:hidden">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentImageIndex 
                        ? 'bg-emerald-500 w-6' 
                        : 'bg-white/60 hover:bg-white'
                    }`}
                    aria-label={t('guardx.a11y.switchToImage', { index: index + 1 })}
                  />
                ))}
              </div>

              <div className="absolute bottom-4 inset-x-4 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border border-slate-200 dark:border-slate-800 p-4 rounded-xl flex items-center justify-between z-10 print:hidden">
                <div>
                  <h4 className="text-slate-900 dark:text-white font-bold text-sm">{t('guardx.hero.cardTitle')}</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-xs">{t('guardx.hero.cardSubtitle')}</p>
                </div>
                <Shield className="text-emerald-500 dark:text-emerald-400 w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 2. 核心亮点 (Features) */}
      <section id="features" className="w-full py-20 print:py-24 border-t print:border-t-1 print:mt-32 border-slate-200 dark:border-slate-900 bg-white dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 print:pb-24">
          <div className="text-center max-w-3xl mx-auto mb-16 print:mb-8 space-y-4">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">{t('guardx.features.title')}</h2>
            <p className="text-slate-600 dark:text-slate-400">
              {t('guardx.features.subtitle')}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 print:!grid-cols-2 gap-8 print:gap-4">
            
            <div className="p-6 print:p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 transition-all">
              <div className="w-12 h-12 print:w-12 print:h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-6 print:mb-2">
                <Eye className="w-6 h-6 print:w-6 print:h-6 text-emerald-600 dark:text-emerald-500" />
              </div>
              <h3 className="text-xl print:text-xl font-bold mb-2 print:my-3 text-slate-900 dark:text-white">{t('guardx.features.items.0.title')}</h3>
              <p className="text-md print:text-md leading-relaxed text-slate-600 dark:text-slate-400">
                <Trans
                  i18nKey="guardx.features.items.0.desc"
                  components={{
                    highlight: (
                      <span className="bg-gradient-to-r font-bold from-emerald-500 to-teal-600 dark:from-emerald-400 dark:to-teal-500 bg-clip-text text-transparent" />
                    )
                  }}
                />
              </p>
            </div>

            <div className="p-6 print:p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 transition-all">
              <div className="w-12 h-12 print:w-12 print:h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-6 print:mb-2">
                <BatteryCharging className="w-6 h-6 print:w-6 print:h-6 text-emerald-600 dark:text-emerald-500" />
              </div>
              <h3 className="text-xl print:text-xl font-bold mb-2 print:my-3 text-slate-900 dark:text-white">{t('guardx.features.items.1.title')}</h3>
              <p className="text-md print:text-md leading-relaxed text-slate-600 dark:text-slate-400">
                <Trans
                  i18nKey="guardx.features.items.1.desc"
                  components={{
                    highlight: (
                      <span className="bg-gradient-to-r font-bold from-emerald-500 to-teal-600 dark:from-emerald-400 dark:to-teal-500 bg-clip-text text-transparent" />
                    )
                  }}
                />
              </p>
            </div>

            <div className="p-6 print:p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 transition-all">
              <div className="w-12 h-12 print:w-12 print:h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-6 print:mb-2">
                <Cpu className="w-6 h-6 print:w-6 print:h-6 text-emerald-600 dark:text-emerald-500" />
              </div>
              <h3 className="text-xl print:text-xl font-bold mb-2 print:my-3 text-slate-900 dark:text-white">{t('guardx.features.items.2.title')}</h3>
              <p className="text-md print:text-md leading-relaxed text-slate-600 dark:text-slate-400">
                <Trans
                  i18nKey="guardx.features.items.2.desc"
                  components={{
                    highlight: (
                      <span className="bg-gradient-to-r font-bold from-emerald-500 to-teal-600 dark:from-emerald-400 dark:to-teal-500 bg-clip-text text-transparent" />
                    )
                  }}
                />
              </p>
            </div>

            <div className="p-6 print:p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 transition-all">
              <div className="w-12 h-12 print:w-12 print:h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-6 print:mb-2">
                <Layers className="w-6 h-6 print:w-6 print:h-6 text-emerald-600 dark:text-emerald-500" />
              </div>
              <h3 className="text-xl print:text-xl font-bold mb-2 print:my-3 text-slate-900 dark:text-white">{t('guardx.features.items.3.title')}</h3>
              <p className="text-md print:text-md leading-relaxed text-slate-600 dark:text-slate-400">
                <Trans
                  i18nKey="guardx.features.items.3.desc"
                  components={{
                    highlight: (
                      <span className="bg-gradient-to-r font-bold from-emerald-500 to-teal-600 dark:from-emerald-400 dark:to-teal-500 bg-clip-text text-transparent" />
                    )
                  }}
                />
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* 4. 隐蔽伪装与设备形态 (Camouflage & Forms) - Xmind Style */}
      <section id="camouflage" className="w-full py-24 print:py-6 print:border-y-0 border-y border-slate-200 dark:border-slate-900 bg-white dark:bg-slate-950 transition-colors duration-300 overflow-hidden print:break-before-page">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20 print:mb-6 space-y-4">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">{t('guardx.camouflage.title')}</h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              {t('guardx.camouflage.subtitle')}
            </p>
          </div>

          <div className="relative flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 print:gap-4">
            
            {/* 左侧：核心模组 */}
            <div className="relative z-10 w-full md:w-1/3 max-w-sm">
              <div className="rounded-2xl border-2 border-emerald-500/30 bg-emerald-50/50 dark:bg-emerald-900/10 p-6 shadow-2xl shadow-emerald-500/10 relative backdrop-blur-sm">
                <div className="absolute -top-3 -end-3">
                  <span className="relative flex h-6 w-6">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-6 w-6 bg-emerald-500 items-center justify-center">
                      <Cpu className="w-3 h-3 text-white" />
                    </span>
                  </span>
                </div>
                <div className="aspect-[4/3] flex items-center justify-center mb-6">
                  <img src={moduleImg} alt={t('guardx.camouflage.moduleImageAlt')} className="w-full h-full object-contain hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="text-center space-y-2">
                  <span className="inline-block px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-xs font-bold rounded-full mb-2">{t('guardx.camouflage.moduleBadge')}</span>
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white">{t('guardx.camouflage.moduleTitle')}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {t('guardx.camouflage.moduleDesc')}
                  </p>
                </div>
              </div>
            </div>

            {/* 连接线 (仅 PC 端显示) */}
            <div className="hidden md:block absolute start-1/3 end-1/3 top-1/2 -translate-y-1/2 z-0 print:hidden">
              <svg width="100%" height="300" className="absolute top-1/2 -translate-y-1/2" style={{ overflow: 'visible' }}>
                <path d="M 0 150 C 50 150, 50 0, 100 0" fill="none" stroke="currentColor" className="text-emerald-500/30 dark:text-emerald-500/20" strokeWidth="3" strokeDasharray="6 6" />
                <path d="M 0 150 C 50 150, 50 300, 100 300" fill="none" stroke="currentColor" className="text-emerald-500/30 dark:text-emerald-500/20" strokeWidth="3" strokeDasharray="6 6" />
                {/* 动画流动点 */}
                <circle r="4" fill="#10b981" className="animate-[dash_3s_linear_infinite]">
                  <animateMotion dur="3s" repeatCount="indefinite" path="M 0 150 C 50 150, 50 0, 100 0" />
                </circle>
                <circle r="4" fill="#10b981" className="animate-[dash_3s_linear_infinite]">
                  <animateMotion dur="3s" repeatCount="indefinite" path="M 0 150 C 50 150, 50 300, 100 300" />
                </circle>
              </svg>
            </div>

            {/* 右侧：扩展形态分支 */}
            <div className="relative z-10 w-full md:w-1/2 flex flex-col gap-12 print:gap-4">
              
              {/* 分支 1 */}
              <div className="relative flex items-center gap-6 group">
                <div className="hidden md:flex w-8 h-px bg-emerald-500/30"></div>
                <div className="flex-1 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 p-2 flex flex-col sm:flex-row items-center gap-6 hover:border-emerald-500/50 transition-colors shadow-sm hover:shadow-xl hover:-translate-y-1 duration-300">
                  <div 
                    className="w-48 h-48 shrink-0 bg-slate-50 dark:bg-slate-800/50 rounded-xl flex items-center justify-center p-2 cursor-pointer relative overflow-hidden group/img"
                    onClick={() => setPreviewImage(stoneImg)}
                  >
                    <img src={stoneImg} alt={t('guardx.camouflage.branches.0.imageAlt')} className="w-full h-full object-contain group-hover/img:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/10 flex items-center justify-center transition-colors">
                      <Eye className="text-white opacity-0 group-hover/img:opacity-100 w-8 h-8 drop-shadow-md transition-opacity" />
                    </div>
                  </div>
                  <div className="space-y-2 text-center sm:text-start">
                    <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-500">{t('guardx.camouflage.branches.0.badge')}</span>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white">{t('guardx.camouflage.branches.0.title')}</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {t('guardx.camouflage.branches.0.desc')}
                    </p>
                  </div>
                </div>
              </div>

              {/* 分支 2 */}
              <div className="relative flex items-center gap-6 group">
                <div className="hidden md:flex w-8 h-px bg-emerald-500/30"></div>
                <div className="flex-1 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 p-2 flex flex-col sm:flex-row items-center gap-6 hover:border-emerald-500/50 transition-colors shadow-sm hover:shadow-xl hover:-translate-y-1 duration-300">
                  <div 
                    className="w-48 h-48 shrink-0 bg-slate-50 dark:bg-slate-800/50 rounded-xl flex items-center justify-center p-2 cursor-pointer relative overflow-hidden group/img"
                    onClick={() => setPreviewImage(woodImg)}
                  >
                    <img src={woodImg} alt={t('guardx.camouflage.branches.1.imageAlt')} className="w-full h-full object-contain group-hover/img:scale-110 transition-transform duration-500 drop-shadow-md" />
                    <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/10 flex items-center justify-center transition-colors">
                      <Eye className="text-white opacity-0 group-hover/img:opacity-100 w-8 h-8 drop-shadow-md transition-opacity" />
                    </div>
                  </div>
                  <div className="space-y-2 text-center sm:text-start">
                    <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-500">{t('guardx.camouflage.branches.1.badge')}</span>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white">{t('guardx.camouflage.branches.1.title')}</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {t('guardx.camouflage.branches.1.desc')}
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 5. 智慧大屏态势感知 (Dashboard) */}
      <section id="dashboard" className="w-full py-24 print:py-6 print:border-t-0 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 print:mb-6 space-y-4">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">{t('guardx.dashboard.title')}</h2>
            <p className="text-slate-600 dark:text-slate-400">
              {t('guardx.dashboard.subtitle')}
            </p>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:grid grid-cols-12 gap-8 items-center max-w-[1400px] mx-auto print:flex print:flex-col print:gap-2">
            {/* Left Features */}
            <div className="col-span-3 space-y-40 print:space-y-2 text-end relative print:flex print:justify-around print:w-full print:text-center print:mt-2">
              <div className="relative pe-8 print:pe-0 print:flex-1">
                <div className="absolute top-1/2 end-0 w-8 h-px bg-emerald-500/50 transform -translate-y-1/2 print:hidden"></div>
                <div className="w-2 h-2 rounded-full bg-emerald-500 absolute top-1/2 -end-1 transform -translate-y-1/2 print:hidden"></div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{t('guardx.dashboard.items.0.title')}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{t('guardx.dashboard.items.0.desc')}</p>
              </div>
              <div className="relative pe-8 print:pe-0 print:flex-1">
                <div className="absolute top-1/2 end-0 w-8 h-px bg-emerald-500/50 transform -translate-y-1/2 print:hidden"></div>
                <div className="w-2 h-2 rounded-full bg-emerald-500 absolute top-1/2 -end-1 transform -translate-y-1/2 print:hidden"></div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{t('guardx.dashboard.items.1.title')}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{t('guardx.dashboard.items.1.desc')}</p>
              </div>
            </div>

            {/* Center Image */}
            <div className="col-span-6 relative z-10 print:w-full">
              <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl relative group">
                <img src={dashboardImg} alt={t('guardx.dashboard.imageAlt')} className="w-full h-auto transform group-hover:scale-[1.02] transition-transform duration-700" />
                <div className="absolute top-4 end-4 bg-red-500/90 backdrop-blur text-white text-xs px-3 py-1.5 rounded-md font-bold flex items-center gap-2 print:hidden">
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                  {t('guardx.dashboard.realtime')}
                </div>
              </div>
            </div>

            {/* Right Features */}
            <div className="col-span-3 space-y-40 print:space-y-2 text-start relative print:flex print:justify-around print:w-full print:text-center print:mt-2">
              <div className="relative ps-8 print:ps-0 print:flex-1">
                <div className="absolute top-1/2 start-0 w-8 h-px bg-emerald-500/50 transform -translate-y-1/2 print:hidden"></div>
                <div className="w-2 h-2 rounded-full bg-emerald-500 absolute top-1/2 -start-1 transform -translate-y-1/2 print:hidden"></div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{t('guardx.dashboard.items.2.title')}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{t('guardx.dashboard.items.2.desc')}</p>
              </div>
              <div className="relative ps-8 print:ps-0 print:flex-1">
                <div className="absolute top-1/2 start-0 w-8 h-px bg-emerald-500/50 transform -translate-y-1/2 print:hidden"></div>
                <div className="w-2 h-2 rounded-full bg-emerald-500 absolute top-1/2 -start-1 transform -translate-y-1/2 print:hidden"></div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{t('guardx.dashboard.items.3.title')}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{t('guardx.dashboard.items.3.desc')}</p>
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden flex flex-col items-center space-y-8">
            <div className="w-full rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl relative">
              <img src={dashboardImg} alt={t('guardx.dashboard.imageAlt')} className="w-full h-auto" />
              <div className="absolute top-3 end-3 bg-red-500/90 backdrop-blur text-white text-xs px-3 py-1.5 rounded-md font-bold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                {t('guardx.dashboard.realtime')}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 w-full">
              <div className="bg-white dark:bg-slate-900/50 p-5 rounded-xl border border-slate-200 dark:border-slate-800">
                <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1 text-emerald-600 dark:text-emerald-500">{t('guardx.dashboard.items.0.title')}</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400">{t('guardx.dashboard.items.0.desc')}</p>
              </div>
              <div className="bg-white dark:bg-slate-900/50 p-5 rounded-xl border border-slate-200 dark:border-slate-800">
                <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1 text-emerald-600 dark:text-emerald-500">{t('guardx.dashboard.items.1.title')}</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400">{t('guardx.dashboard.items.1.desc')}</p>
              </div>
              <div className="bg-white dark:bg-slate-900/50 p-5 rounded-xl border border-slate-200 dark:border-slate-800">
                <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1 text-emerald-600 dark:text-emerald-500">{t('guardx.dashboard.items.2.title')}</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400">{t('guardx.dashboard.items.2.desc')}</p>
              </div>
              <div className="bg-white dark:bg-slate-900/50 p-5 rounded-xl border border-slate-200 dark:border-slate-800">
                <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1 text-emerald-600 dark:text-emerald-500">{t('guardx.dashboard.items.3.title')}</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400">{t('guardx.dashboard.items.3.desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. 夜视对比 (Night Vision) */}
      <section id="night-vision" className="w-full py-24 print:py-12 bg-black print:bg-white transition-colors duration-300 overflow-hidden relative print:break-before-page">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl font-bold tracking-tight text-white print:text-slate-900">{t('guardx.nightVision.title')}</h2>
            <p className="text-slate-400 print:text-slate-600 text-lg">
              {t('guardx.nightVision.subtitle')}
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden border border-slate-800 shadow-2xl aspect-[4/3] md:aspect-[21/9] group">
            {/* Left Image: GuardX */}
            <div className="absolute inset-0 z-10 transition-all duration-500 ease-in-out" style={{ clipPath: 'polygon(0 0, 55% 0, 45% 100%, 0 100%)' }}>
              <img src={guardxNightImg} alt={t('guardx.nightVision.leftImageAlt')} className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000" />
              {/* Left Timestamp */}
              <div className="absolute top-4 start-4 md:top-6 md:start-8 font-mono text-emerald-400 font-bold tracking-wider text-sm md:text-base z-20 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                2024-05-27 20:16:32
              </div>
              <div className="absolute bottom-6 start-6 md:start-12 bg-black/60 backdrop-blur px-6 py-2 rounded-full text-white font-bold border border-white/10 shadow-lg z-20">
                <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">{t('guardx.nightVision.leftBadge')}</span>
              </div>
            </div>

            {/* Right Image: Traditional */}
            <div className="absolute inset-0 z-0">
              <img src={otherNightImg} alt={t('guardx.nightVision.rightImageAlt')} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000" />
              {/* Right Timestamp */}
              <div className="absolute top-4 end-4 md:top-6 md:end-8 font-mono text-slate-300 font-bold tracking-wider text-sm md:text-base z-20 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                2024-05-27 20:16:32
              </div>
              <div className="absolute bottom-6 end-6 md:end-12 bg-black/60 backdrop-blur px-6 py-2 rounded-full text-white font-bold border border-white/10 shadow-lg z-20">
                <span className="text-slate-300">{t('guardx.nightVision.rightBadge')}</span>
              </div>
            </div>

            {/* Diagonal Divider Line */}
            <div className="absolute top-[-10%] bottom-[-10%] start-[45%] w-[10%] z-20 pointer-events-none">
              <svg className="w-full h-full drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" preserveAspectRatio="none" viewBox="0 0 100 100">
                <line x1="100" y1="0" x2="0" y2="100" stroke="rgba(255,255,255,0.8)" strokeWidth="0.5" vectorEffect="non-scaling-stroke" />
              </svg>
            </div>

            {/* VS Badge */}
            <div className="absolute top-1/2 start-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black text-white w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center font-black italic text-lg md:text-2xl border-[3px] border-slate-800 shadow-[0_0_30px_rgba(0,0,0,0.8)] z-30">
              VS
            </div>
          </div>
        </div>
      </section>

      {/* 7. 应用场景 (Scenarios) */}
      <section id="scenarios" className="w-full py-20 border-t border-slate-200 dark:border-slate-900 bg-white dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">{t('guardx.scenarios.title')}</h2>
            <p className="text-slate-600 dark:text-slate-400">
              {t('guardx.scenarios.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl border border-slate-200 dark:border-slate-800 flex gap-6 bg-slate-50 dark:bg-slate-900/20 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0">
                <MapPin className="text-emerald-600 dark:text-emerald-500 w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{t('guardx.scenarios.items.0.title')}</h3>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {t('guardx.scenarios.items.0.desc')}
                </p>
              </div>
            </div>

            <div className="p-8 rounded-2xl border border-slate-200 dark:border-slate-800 flex gap-6 bg-slate-50 dark:bg-slate-900/20 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0">
                <Shield className="text-emerald-600 dark:text-emerald-500 w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{t('guardx.scenarios.items.1.title')}</h3>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {t('guardx.scenarios.items.1.desc')}
                </p>
              </div>
            </div>

            <div className="p-8 rounded-2xl border border-slate-200 dark:border-slate-800 flex gap-6 bg-slate-50 dark:bg-slate-900/20 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0">
                <Camera className="text-emerald-600 dark:text-emerald-500 w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{t('guardx.scenarios.items.2.title')}</h3>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {t('guardx.scenarios.items.2.desc')}
                </p>
              </div>
            </div>

            <div className="p-8 rounded-2xl border border-slate-200 dark:border-slate-800 flex gap-6 bg-slate-50 dark:bg-slate-900/20 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0">
                <Monitor className="text-emerald-600 dark:text-emerald-500 w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{t('guardx.scenarios.items.3.title')}</h3>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {t('guardx.scenarios.items.3.desc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. 痛点问题与解决方案对比 (Painpoints vs Solutions) */}
      <section id="painpoints" className="w-full py-20 print:py-6 bg-slate-50 print:bg-white dark:bg-slate-950 transition-colors duration-300 print:break-before-page">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 print:mb-6 space-y-4 print:space-y-2">
            <h2 className="text-3xl print:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">{t('guardx.painpoints.title')}</h2>
            <p className="text-slate-600 print:text-md dark:text-slate-400">
              {t('guardx.painpoints.subtitle')}
            </p>
          </div>

          <div className="space-y-8 print:space-y-4">
            <div className="grid md:grid-cols-2 gap-6 p-8 print:p-4 print:gap-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white print:bg-white dark:bg-slate-900/20 shadow-sm transition-colors duration-300">
              <div className="space-y-4 print:space-y-2">
                <div className="inline-flex items-center gap-2 text-rose-600 dark:text-rose-500 font-semibold text-lg print:text-xl">
                  <AlertTriangle className="w-5 h-5 print:w-5 print:h-5" /> {t('guardx.painpoints.items.0.painTitle')}
                </div>
                <p className="text-base print:text-md text-slate-600 dark:text-slate-400">
                  {t('guardx.painpoints.items.0.painDesc')}
                </p>
              </div>
              <div className="space-y-4 print:space-y-2 md:border-s md:ps-8 print:ps-4 border-slate-200 dark:border-slate-800">
                <div className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-500 font-semibold text-lg print:text-xl">
                  <CheckCircle2 className="w-5 h-5 print:w-5 print:h-5" /> {t('guardx.painpoints.items.0.solutionTitle')}
                </div>
                <p className="text-base print:text-md text-slate-700 dark:text-slate-300">
                  {t('guardx.painpoints.items.0.solutionDesc')}
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 p-8 print:p-4 print:gap-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white print:bg-white dark:bg-slate-900/20 shadow-sm transition-colors duration-300">
              <div className="space-y-4 print:space-y-2">
                <div className="inline-flex items-center gap-2 text-rose-600 dark:text-rose-500 font-semibold text-lg print:text-xl">
                  <AlertTriangle className="w-5 h-5 print:w-5 print:h-5" /> {t('guardx.painpoints.items.1.painTitle')}
                </div>
                <p className="text-base print:text-md text-slate-600 dark:text-slate-400">
                  {t('guardx.painpoints.items.1.painDesc')}
                </p>
              </div>
              <div className="space-y-4 print:space-y-2 md:border-s md:ps-8 print:ps-4 border-slate-200 dark:border-slate-800">
                <div className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-500 font-semibold text-lg print:text-xl">
                  <CheckCircle2 className="w-5 h-5 print:w-5 print:h-5" /> {t('guardx.painpoints.items.1.solutionTitle')}
                </div>
                <p className="text-base print:text-md text-slate-700 dark:text-slate-300">
                  {t('guardx.painpoints.items.1.solutionDesc')}
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 p-8 print:p-4 print:gap-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white print:bg-white dark:bg-slate-900/20 shadow-sm transition-colors duration-300">
              <div className="space-y-4 print:space-y-2">
                <div className="inline-flex items-center gap-2 text-rose-600 dark:text-rose-500 font-semibold text-lg print:text-xl">
                  <AlertTriangle className="w-5 h-5 print:w-5 print:h-5" /> {t('guardx.painpoints.items.2.painTitle')}
                </div>
                <p className="text-base print:text-md text-slate-600 dark:text-slate-400">
                  {t('guardx.painpoints.items.2.painDesc')}
                </p>
              </div>
              <div className="space-y-4 print:space-y-2 md:border-s md:ps-8 print:ps-4 border-slate-200 dark:border-slate-800">
                <div className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-500 font-semibold text-lg print:text-xl">
                  <CheckCircle2 className="w-5 h-5 print:w-5 print:h-5" /> {t('guardx.painpoints.items.2.solutionTitle')}
                </div>
                <p className="text-base print:text-md text-slate-700 dark:text-slate-300">
                  {t('guardx.painpoints.items.2.solutionDesc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. 产品优势对比 (Comparison) */}
      <section id="comparison" className="w-full py-20 print:py-6 bg-slate-50 print:bg-white dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4 print:hidden">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">{t('guardx.comparison.title')}</h2>
            <p className="text-slate-600 dark:text-slate-400">{t('guardx.comparison.subtitle')}</p>
          </div>

          <div className="relative mx-auto max-w-4xl pt-16 md:pt-24 mt-4 print:pt-4 print:mt-0">
            {/* Main Card */}
            <div className="bg-white dark:bg-slate-900/40 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm relative z-0 print:border-none print:shadow-none">
              
              {/* Highlighed Column Box (Absolute) */}
              <div className="absolute -top-6 md:-top-8 -bottom-4 start-[24%] w-[38%] bg-gradient-to-b from-emerald-500 to-emerald-700 print:bg-emerald-600 rounded-3xl shadow-2xl shadow-emerald-500/30 print:shadow-none z-10 border border-emerald-400/20"></div>

              {/* Table Content */}
              <div className="relative z-20">
                
                {/* Header Row */}
                <div className="flex">
                  {/* Col 1 */}
                  <div className="w-[24%] shrink-0"></div>
                  {/* Col 2 GUARDX */}
                  <div className="w-[38%] flex flex-col sm:flex-row items-center justify-center pt-6 md:pt-8 pb-6 px-2 gap-2 md:gap-4">
                    <div className="h-10 md:h-14 flex items-center justify-center">
                      <img src={guardxImg} alt="GUARDX" className="max-h-full object-contain drop-shadow-xl" />
                    </div>
                    <div className="flex flex-col items-center sm:items-start text-center sm:text-start">
                      <div className="font-black text-white text-md md:text-xl tracking-wider leading-tight">GUARDX</div>
                      <div className="text-emerald-100 font-bold text-sm md:text-sm mt-0.5 md:mt-1 bg-white/20 px-2 md:px-3 py-0.5 md:py-1 rounded-full">{t('guardx.comparison.guardxBadge')}</div>
                    </div>
                  </div>
                  {/* Col 3 Traditional */}
                  <div className="w-[38%] flex flex-col sm:flex-row items-center justify-center pt-6 md:pt-8 pb-6 px-2 gap-2 md:gap-4">
                    <div className="h-10 md:h-14 flex items-center justify-center">
                      <img src={traditionalImg} alt={t('guardx.comparison.traditionalTitle')} className="max-h-full object-contain opacity-90 drop-shadow-md mix-blend-multiply dark:mix-blend-normal" />
                    </div>
                    <div className="flex flex-col items-center sm:items-start text-center sm:text-start">
                      <div className="font-bold text-slate-700 dark:text-slate-300 text-xl md:text-xl">{t('guardx.comparison.traditionalTitle')}</div>
                    </div>
                  </div>
                </div>

                {/* Data Rows */}
                <div className="flex flex-col pb-6">
                  
                  {/* Row 1 */}
                  <div className="flex items-stretch min-h-[60px] md:min-h-[72px] group relative z-20">
                    <div className="w-[24%] shrink-0 flex items-center justify-end md:justify-start gap-2 md:gap-3 px-4 md:px-8 border-b border-slate-100 dark:border-slate-800/50 text-slate-500 dark:text-slate-400">
                      <Target className="w-4 h-4 md:w-5 md:h-5 text-emerald-600 dark:text-emerald-500" />
                      <span className="font-semibold text-xs md:text-sm">{t('guardx.comparison.rows.0.label')}</span>
                    </div>
                    <div className="w-[38%] flex items-center justify-start px-4 md:px-8 border-b border-emerald-400/20">
                      <div className="flex items-center gap-2 md:gap-3">
                        <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-yellow-400 text-white text-sm md:text-xs font-black flex items-center justify-center shrink-0">1</div>
                        <span className="text-white font-medium text-xs md:text-base leading-tight">{t('guardx.comparison.rows.0.guardx')}</span>
                      </div>
                    </div>
                    <div className="w-[38%] flex items-center justify-center px-2 md:px-6 text-slate-600 dark:text-slate-400 text-xs md:text-sm font-medium text-center border-b border-slate-100 dark:border-slate-800/50">
                      {t('guardx.comparison.rows.0.traditional')}
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="flex items-stretch min-h-[60px] md:min-h-[72px] group relative z-20">
                    <div className="w-[24%] shrink-0 flex items-center justify-end md:justify-start gap-2 md:gap-3 px-4 md:px-8 border-b border-slate-100 dark:border-slate-800/50 text-slate-500 dark:text-slate-400">
                      <Zap className="w-4 h-4 md:w-5 md:h-5 text-emerald-600 dark:text-emerald-500" />
                      <span className="font-semibold text-xs md:text-sm">{t('guardx.comparison.rows.1.label')}</span>
                    </div>
                    <div className="w-[38%] flex items-center justify-start px-4 md:px-8 border-b border-emerald-400/20">
                      <div className="flex items-center gap-2 md:gap-3">
                        <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-yellow-400 text-white text-sm md:text-xs font-black flex items-center justify-center shrink-0">2</div>
                        <span className="text-white font-medium text-xs md:text-base leading-tight">{t('guardx.comparison.rows.1.guardx')}</span>
                      </div>
                    </div>
                    <div className="w-[38%] flex items-center justify-center px-2 md:px-6 text-slate-600 dark:text-slate-400 text-xs md:text-sm font-medium text-center border-b border-slate-100 dark:border-slate-800/50">
                      {t('guardx.comparison.rows.1.traditional')}
                    </div>
                  </div>

                  {/* Row 3: 探测目标种类 */}
                  <div className="flex items-stretch min-h-[60px] md:min-h-[72px] group relative z-20">
                    <div className="w-[24%] shrink-0 flex items-center justify-end md:justify-start gap-2 md:gap-3 px-4 md:px-8 border-b border-slate-100 dark:border-slate-800/50 text-slate-500 dark:text-slate-400">
                      <Eye className="w-4 h-4 md:w-5 md:h-5 text-emerald-600 dark:text-emerald-500" />
                      <span className="font-semibold text-xs md:text-sm">{t('guardx.comparison.rows.2.label')}</span>
                    </div>
                    <div className="w-[38%] flex items-center justify-start px-4 md:px-8 border-b border-emerald-400/20">
                      <div className="flex items-center gap-2 md:gap-3">
                        <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-yellow-400 text-white text-sm md:text-xs font-black flex items-center justify-center shrink-0">3</div>
                        <span className="text-white font-medium text-xs md:text-base leading-tight">{t('guardx.comparison.rows.2.guardx')}</span>
                      </div>
                    </div>
                    <div className="w-[38%] flex items-center justify-center px-2 md:px-6 text-slate-600 dark:text-slate-400 text-xs md:text-sm font-medium text-center border-b border-slate-100 dark:border-slate-800/50">
                      {t('guardx.comparison.rows.2.traditional')}
                    </div>
                  </div>

                  {/* Row 4: 无效数据 */}
                  <div className="flex items-stretch min-h-[60px] md:min-h-[72px] group relative z-20">
                    <div className="w-[24%] shrink-0 flex items-center justify-end md:justify-start gap-2 md:gap-3 px-4 md:px-8 border-b border-slate-100 dark:border-slate-800/50 text-slate-500 dark:text-slate-400">
                      <Database className="w-4 h-4 md:w-5 md:h-5 text-emerald-600 dark:text-emerald-500" />
                      <span className="font-semibold text-xs md:text-sm">{t('guardx.comparison.rows.3.label')}</span>
                    </div>
                    <div className="w-[38%] flex items-center justify-start px-4 md:px-8 border-b border-emerald-400/20">
                      <div className="flex items-center gap-2 md:gap-3">
                        <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-yellow-400 text-white text-sm md:text-xs font-black flex items-center justify-center shrink-0">4</div>
                        <span className="text-white font-medium text-xs md:text-base leading-tight">{t('guardx.comparison.rows.3.guardx')}</span>
                      </div>
                    </div>
                    <div className="w-[38%] flex items-center justify-center px-2 md:px-6 text-slate-600 dark:text-slate-400 text-xs md:text-sm font-medium text-center border-b border-slate-100 dark:border-slate-800/50">
                      {t('guardx.comparison.rows.3.traditional')}
                    </div>
                  </div>

                  {/* Row 5：取证能力（高清彩色抓拍，告警即取证） */}
                  <div className="flex items-stretch min-h-[60px] md:min-h-[72px] group relative z-20">
                    <div className="w-[24%] shrink-0 flex items-center justify-end md:justify-start gap-2 md:gap-3 px-4 md:px-8 border-b border-slate-100 dark:border-slate-800/50 text-slate-500 dark:text-slate-400">
                      <CheckSquare className="w-4 h-4 md:w-5 md:h-5 text-emerald-600 dark:text-emerald-500" />
                      <span className="font-semibold text-xs md:text-sm">{t('guardx.comparison.rows.4.label')}</span>
                    </div>
                    <div className="w-[38%] flex items-center justify-start px-4 md:px-8 border-b border-emerald-400/20">
                      <div className="flex items-center gap-2 md:gap-3">
                        <div className="w-5 h-5 md:w-6 md:h-6 flex items-center justify-center shrink-0"><Check className="w-4 h-4 md:w-5 md:h-5 text-emerald-300" /></div>
                        <span className="text-white font-medium text-xs md:text-base leading-tight">{t('guardx.comparison.rows.4.guardx')}</span>
                      </div>
                    </div>
                    <div className="w-[38%] flex items-center justify-center px-2 md:px-6 text-slate-600 dark:text-slate-400 text-xs md:text-sm font-medium text-center border-b border-slate-100 dark:border-slate-800/50">
                      {t('guardx.comparison.rows.4.traditional')}
                    </div>
                  </div>

                  {/* Row 6: 部署难度 */}
                  <div className="flex items-stretch min-h-[60px] md:min-h-[72px] group relative z-20">
                    <div className="w-[24%] shrink-0 flex items-center justify-end md:justify-start gap-2 md:gap-3 px-4 md:px-8 text-slate-500 dark:text-slate-400">
                      <Rocket className="w-4 h-4 md:w-5 md:h-5 text-emerald-600 dark:text-emerald-500" />
                      <span className="font-semibold text-xs md:text-sm">{t('guardx.comparison.rows.5.label')}</span>
                    </div>
                    <div className="w-[38%] flex items-center justify-start px-4 md:px-8">
                      <div className="flex items-center gap-2 md:gap-3">
                        <div className="w-5 h-5 md:w-6 md:h-6 flex items-center justify-center shrink-0"><Check className="w-4 h-4 md:w-5 md:h-5 text-emerald-300" /></div>
                        <span className="text-white font-medium text-xs md:text-base leading-tight">{t('guardx.comparison.rows.5.guardx')}</span>
                      </div>
                    </div>
                    <div className="w-[38%] flex items-center justify-center px-2 md:px-6 text-slate-600 dark:text-slate-400 text-xs md:text-sm font-medium text-center">
                      {t('guardx.comparison.rows.5.traditional')}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. 配套清单 (Packing List) */}
      <section id="packing-list" className="w-full py-24 bg-white dark:bg-slate-950 transition-colors duration-300 print:hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">{t('guardx.packing.title')}</h2>
            <p className="text-slate-600 dark:text-slate-400">{t('guardx.packing.subtitle')}</p>
          </div>

          <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-center justify-center mb-24">
            {/* Left side: Main device */}
            <div className="flex flex-col items-center">
              <div className="w-64 h-64 md:w-80 md:h-80 flex items-center justify-center mb-4">
                <img src={guardxRealImg} alt={t('guardx.packing.mainDeviceAlt')} className="max-w-full max-h-full object-contain drop-shadow-2xl" />
              </div>
              <p className="text-xl font-bold text-slate-700 dark:text-slate-300">{t('guardx.packing.mainDeviceCount')}</p>
            </div>

            {/* Right side: Accessories grid */}
            <div className="flex flex-col gap-10 sm:gap-16 mt-8 md:mt-0">
              {/* Top Row: 3 items */}
              <div className="grid grid-cols-3 gap-6 sm:gap-12">
                {/* Box */}
                <div className="flex flex-col items-center gap-4">
                  <div className="h-28 w-28 flex items-end justify-center">
                    <img src={boxImg} alt={t('guardx.packing.items.0.alt')} className="max-h-full max-w-full object-contain drop-shadow-md" />
                  </div>
                  <p className="text-base font-medium text-slate-600 dark:text-slate-400">{t('guardx.packing.items.0.text')}</p>
                </div>
                
                {/* Pad */}
                <div className="flex flex-col items-center gap-4">
                  <div className="h-28 w-28 flex items-end justify-center">
                    <img src={padImg} alt={t('guardx.packing.items.1.alt')} className="max-h-full max-w-full object-contain drop-shadow-md" />
                  </div>
                  <p className="text-base font-medium text-slate-600 dark:text-slate-400">{t('guardx.packing.items.1.text')}</p>
                </div>

                {/* Power line */}
                <div className="flex flex-col items-center gap-4">
                  <div className="h-28 w-28 flex items-end justify-center">
                    <img src={eleLineImg} alt={t('guardx.packing.items.2.alt')} className="max-h-full max-w-full object-contain drop-shadow-md" />
                  </div>
                  <p className="text-base font-medium text-slate-600 dark:text-slate-400">{t('guardx.packing.items.2.text')}</p>
                </div>
              </div>

              {/* Bottom Row: 2 items centered */}
              <div className="flex justify-center gap-16 sm:gap-24">
                {/* Screws */}
                <div className="flex flex-col items-center gap-4">
                  <div className="h-28 w-28 flex items-end justify-center">
                    <img src={luosiImg} alt={t('guardx.packing.items.3.alt')} className="max-h-full max-w-full object-contain drop-shadow-md" />
                  </div>
                  <p className="text-base font-medium text-slate-600 dark:text-slate-400">{t('guardx.packing.items.3.text')}</p>
                </div>

                {/* User Guide */}
                <div className="flex flex-col items-center gap-4">
                  <div className="h-28 w-28 flex items-end justify-center">
                    <img src={guardBookImg} alt={t('guardx.packing.items.4.alt')} className="max-h-full max-w-full object-contain shadow-sm" />
                  </div>
                  <p className="text-base font-medium text-slate-600 dark:text-slate-400">{t('guardx.packing.items.4.text')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom section: Mobile notification setting mockup inside wide banner */}
          <div className="relative max-w-5xl mx-auto mt-32">
            <div className="w-full bg-slate-100 dark:bg-slate-900/50 rounded-3xl h-24 border border-slate-200 dark:border-slate-800 flex items-center justify-center md:justify-start md:ps-16 shadow-inner">
              <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 font-medium flex items-center gap-2">
                <span className="text-rose-500 font-bold">*</span> {t('guardx.packing.notificationBanner')}
              </p>
            </div>
            
            {/* 移动端 APP Mockup (Overlapping) */}
            <div className="absolute -bottom-24 end-1/2 translate-x-1/2 md:translate-x-0 md:end-16 w-64 h-64 z-10 hidden sm:block">
              <div className="w-full h-full rounded-t-3xl border-x-[6px] border-t-[6px] border-slate-800 bg-slate-100 overflow-hidden flex flex-col shadow-xl">
                <div className="h-6 bg-slate-100 w-full flex justify-between items-center px-4 text-[10px] font-medium text-black">
                  <span>13:36</span>
                  <div className="flex gap-1 items-center">
                    <div className="font-bold tracking-tighter">4G</div>
                    <div className="w-3 h-2.5 border border-black rounded-[2px] relative p-px">
                      <div className="w-full h-full bg-black rounded-[1px]"></div>
                      <div className="absolute -end-[2px] top-1 w-[1px] h-1 bg-black"></div>
                    </div>
                  </div>
                </div>
                <div className="h-10 flex items-center px-2 gap-1 border-b border-slate-200 bg-slate-100">
                  <ChevronRight className="w-4 h-4 rotate-180 text-blue-500" />
                  <span className="text-xs text-blue-500 font-medium">{t('guardx.packing.mockup.notificationsTitle')}</span>
                  <span className="text-[11px] font-bold text-slate-800 flex-1 text-center pe-10">{t('guardx.packing.mockup.appTitle')}</span>
                </div>
                <div className="flex-1 p-3 bg-slate-50">
                  <div className="bg-white px-3 py-2.5 rounded-lg border border-slate-200 flex justify-between items-center mb-3 shadow-sm">
                    <span className="text-xs font-medium text-slate-800">{t('guardx.packing.mockup.allowNotifications')}</span>
                    <div className="w-10 h-6 bg-emerald-500 rounded-full relative shadow-inner">
                      <div className="absolute end-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow-sm"></div>
                    </div>
                  </div>
                  <div className="px-1">
                    <span className="text-[10px] text-slate-500 uppercase font-semibold">{t('guardx.packing.mockup.reminders')}</span>
                    <div className="flex justify-between mt-3 px-2">
                      <div className="flex flex-col items-center gap-1.5">
                        <div className="w-8 h-12 bg-white rounded border border-slate-300 flex justify-center pt-2 relative shadow-sm">
                          <div className="w-4 h-1 bg-slate-200 rounded-full"></div>
                          <div className="absolute -bottom-2 w-3 h-3 bg-blue-500 rounded-full text-white flex items-center justify-center text-[8px] font-bold">✓</div>
                        </div>
                        <span className="text-[8px] text-slate-600 mt-1 font-medium">{t('guardx.packing.mockup.lockScreen')}</span>
                      </div>
                      <div className="flex flex-col items-center gap-1.5">
                        <div className="w-8 h-12 bg-white rounded border border-slate-300 flex justify-center pt-2 relative shadow-sm">
                          <div className="w-6 h-4 bg-slate-200 rounded"></div>
                          <div className="absolute -bottom-2 w-3 h-3 bg-blue-500 rounded-full text-white flex items-center justify-center text-[8px] font-bold">✓</div>
                        </div>
                        <span className="text-[8px] text-slate-600 mt-1 font-medium">{t('guardx.packing.mockup.notificationCenter')}</span>
                      </div>
                      <div className="flex flex-col items-center gap-1.5">
                        <div className="w-8 h-12 bg-white rounded border border-slate-300 flex justify-center pt-1 relative shadow-sm">
                          <div className="w-6 h-2 bg-slate-200 rounded-full"></div>
                          <div className="absolute -bottom-2 w-3 h-3 bg-blue-500 rounded-full text-white flex items-center justify-center text-[8px] font-bold">✓</div>
                        </div>
                        <span className="text-[8px] text-slate-600 mt-1 font-medium">{t('guardx.packing.mockup.banner')}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. 底部呼吁 (CTA) */}
      <section className="w-full py-16 text-center border-t print:border-t-1 print:mt-12 border-slate-200 dark:border-slate-900 bg-white dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">{t('guardx.cta.title')}</h2>
          <p className="max-w-xl mx-auto text-sm text-slate-600 dark:text-slate-400">
            {t('guardx.cta.desc')}
          </p>
          <div className="flex justify-center gap-4">
            <button 
              data-html2canvas-ignore="true"
              onClick={handleDownloadImage}
              className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-3 rounded-lg font-semibold transition-all shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isDownloading}
            >
              <Book className="w-6 h-6" />
              {isDownloading ? t('guardx.cta.generating') : t('guardx.cta.download')}
            </button>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm transition-opacity">
          <div 
            className="absolute inset-0" 
            onClick={() => setIsVideoModalOpen(false)}
            aria-label={t('guardx.a11y.closeVideo')}
          />
          <div className="relative w-full max-w-5xl bg-black rounded-2xl overflow-hidden shadow-2xl z-10 border border-white/10">
            <button 
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute top-4 end-4 w-10 h-10 bg-black/50 hover:bg-black/80 text-white rounded-full flex items-center justify-center backdrop-blur transition-colors z-20"
              aria-label={t('guardx.a11y.closeVideo')}
            >
              <X className="w-6 h-6" />
            </button>
            <div className="aspect-video w-full bg-black flex items-center justify-center">
              <video 
                src={`${import.meta.env.BASE_URL}guard-x.mp4`} 
                className="w-full h-full object-contain outline-none"
                autoPlay 
                controls 
                playsInline
              />
            </div>
          </div>
        </div>
      )}

      {/* Image Preview Modal */}
      {previewImage && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md transition-opacity">
          <div 
            className="absolute inset-0" 
            onClick={() => setPreviewImage(null)}
            aria-label={t('guardx.a11y.closePreview')}
          />
          <div className="relative w-full max-w-4xl h-full max-h-[80vh] flex items-center justify-center z-10">
            <button 
              onClick={() => setPreviewImage(null)}
              className="absolute -top-4 -end-4 md:top-0 md:-end-12 w-10 h-10 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center backdrop-blur transition-colors z-20"
              aria-label={t('guardx.a11y.closePreview')}
            >
              <X className="w-6 h-6" />
            </button>
            <img 
              src={previewImage} 
              alt={t('guardx.a11y.previewImageAlt')} 
              className="max-w-full max-h-full object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      )}

    </div>
  );
}
