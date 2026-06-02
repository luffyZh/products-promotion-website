import { useState, useEffect, useRef } from 'react';
import html2canvas from 'html2canvas';
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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [isDownloading, setIsDownloading] = useState(false);
  const pdfRef = useRef<HTMLDivElement>(null);

  // 动态修改页面标题，适配微信等浏览器的标题展示
  useEffect(() => {
    // 动态设置标题
    document.title = 'GuardX 电子哨兵 | CETC';
    
    // 动态设置微信分享的 Fallback 图片
    const fallbackDiv = document.getElementById('wechat-share-fallback');
    if (fallbackDiv) {
      fallbackDiv.innerHTML = `<img src="${import.meta.env.BASE_URL}guardx-share.jpg" alt="GuardX 电子哨兵" />`;
    }

    // 组件卸载时恢复默认状态
    return () => {
      document.title = 'CETC | 中国电子科技南湖研究院';
      if (fallbackDiv) {
        fallbackDiv.innerHTML = '';
      }
    };
  }, []);

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
                if (baseClass === 'text-left') htmlEl.classList.remove('text-center');
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
      link.download = '电子哨兵产品宣传长图.jpg';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Image generation failed:', error);
      alert('下载失败，请重试');
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
              <Cpu className="w-4 h-4 mr-2" />
              基于 AIoT 的感算一体化超低功耗侦察装备
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white" style={{ lineHeight: '1.5' }}>
              有动才报 <span className="bg-gradient-to-r from-emerald-500 to-teal-600 dark:from-emerald-400 dark:to-teal-500 bg-clip-text text-transparent">长时值守</span><br />
              <span className="bg-gradient-to-r from-emerald-500 to-teal-600 dark:from-emerald-400 dark:to-teal-500 bg-clip-text text-transparent">智能识别 </span> 态势感知
            </h1>
            <p className="text-lg max-w-xl leading-relaxed text-slate-600 dark:text-slate-400">
              面向边境、周界、要地防卫与临时布控场景。通过“事件视觉感知 + 端侧AI识别 + 低功耗取证”三位一体，实现长期无人值守下的精准目标探测、告警与高清证据获取。
            </p>
            <div className="flex flex-wrap gap-4 pt-4 print:hidden">
              <button 
                data-html2canvas-ignore="true"
                onClick={() => setIsVideoModalOpen(true)}
                className="bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-lg flex items-center gap-2"
              >
                查看视频 <ChevronRight className="w-4 h-4" />
              </button>
              <button 
                data-html2canvas-ignore="true"
                onClick={() => {
                  document.getElementById('camouflage')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-3 rounded-lg font-semibold border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-700 dark:text-slate-300 transition-all"
              >
                了解隐蔽部署
              </button>
            </div>
          </div>
          <div className="lg:col-span-5 relative group">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800/50 bg-white dark:bg-slate-900/20 shadow-xl dark:shadow-none aspect-[1/1]">
              {heroImages.map((img, index) => (
                <img 
                  key={index}
                  src={img} 
                  alt={`GuardX 电子哨兵主机展示 ${index + 1}`} 
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                    index === currentImageIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  } ${index === 0 ? 'print:!opacity-100 print:!z-10' : 'print:!opacity-0 print:!hidden'}`}
                />
              ))}
              
              {/* 左右切换按钮 */}
              <button 
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/50 dark:bg-black/50 backdrop-blur hover:bg-white dark:hover:bg-black text-slate-800 dark:text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 print:hidden"
                aria-label="上一张"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/50 dark:bg-black/50 backdrop-blur hover:bg-white dark:hover:bg-black text-slate-800 dark:text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 print:hidden"
                aria-label="下一张"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* 底部指示器 */}
              <div className="absolute bottom-24 left-0 right-0 flex justify-center gap-2 z-10 print:hidden">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentImageIndex 
                        ? 'bg-emerald-500 w-6' 
                        : 'bg-white/60 hover:bg-white'
                    }`}
                    aria-label={`切换到第 ${index + 1} 张图片`}
                  />
                ))}
              </div>

              <div className="absolute bottom-4 left-4 right-4 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border border-slate-200 dark:border-slate-800 p-4 rounded-xl flex items-center justify-between z-10 print:hidden">
                <div>
                  <h4 className="text-slate-900 dark:text-white font-bold text-sm">GuardX 电子哨兵</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-xs">全天候智能侦察，防线隐于无形</p>
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
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">核心技术亮点</h2>
            <p className="text-slate-600 dark:text-slate-400">
              突破传统监控限制，专为极端野外与无电无网环境设计
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 print:!grid-cols-2 gap-8 print:gap-4">
            
            <div className="p-6 print:p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 transition-all">
              <div className="w-12 h-12 print:w-12 print:h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-6 print:mb-2">
                <Eye className="w-6 h-6 print:w-6 print:h-6 text-emerald-600 dark:text-emerald-500" />
              </div>
              <h3 className="text-xl print:text-xl font-bold mb-2 print:my-3 text-slate-900 dark:text-white">事件驱动感知</h3>
              <p className="text-md print:text-md leading-relaxed text-slate-600 dark:text-slate-400">
                有动才报。采用先进的 <span className="bg-gradient-to-r font-bold from-emerald-500 to-teal-600 dark:from-emerald-400 dark:to-teal-500 bg-clip-text text-transparent">DVS 事件相机</span>技术，仅在视野内有物体移动时触发，有效过滤无效信息。
              </p>
            </div>

            <div className="p-6 print:p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 transition-all">
              <div className="w-12 h-12 print:w-12 print:h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-6 print:mb-2">
                <BatteryCharging className="w-6 h-6 print:w-6 print:h-6 text-emerald-600 dark:text-emerald-500" />
              </div>
              <h3 className="text-xl print:text-xl font-bold mb-2 print:my-3 text-slate-900 dark:text-white">超低功耗值守</h3>
              <p className="text-md print:text-md leading-relaxed text-slate-600 dark:text-slate-400">
                 <span className="bg-gradient-to-r font-bold from-emerald-500 to-teal-600 dark:from-emerald-400 dark:to-teal-500 bg-clip-text text-transparent">μW 级待机、mW 级运行</span>。支持长时间无人值守，单次部署续航可达数月，无惧野外断电。
              </p>
            </div>

            <div className="p-6 print:p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 transition-all">
              <div className="w-12 h-12 print:w-12 print:h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-6 print:mb-2">
                <Cpu className="w-6 h-6 print:w-6 print:h-6 text-emerald-600 dark:text-emerald-500" />
              </div>
              <h3 className="text-xl print:text-xl font-bold mb-2 print:my-3 text-slate-900 dark:text-white">端侧 AI 识别</h3>
              <p className="text-md print:text-md leading-relaxed text-slate-600 dark:text-slate-400">
                边缘智能。内置 AI 芯片，支持<span className="bg-gradient-to-r font-bold from-emerald-500 to-teal-600 dark:from-emerald-400 dark:to-teal-500 bg-clip-text text-transparent">人、车、无人机</span>等目标的本地探测，过滤风吹草动误报。
              </p>
            </div>

            <div className="p-6 print:p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 transition-all">
              <div className="w-12 h-12 print:w-12 print:h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-6 print:mb-2">
                <Layers className="w-6 h-6 print:w-6 print:h-6 text-emerald-600 dark:text-emerald-500" />
              </div>
              <h3 className="text-xl print:text-xl font-bold mb-2 print:my-3 text-slate-900 dark:text-white">双模协同取证</h3>
              <p className="text-md print:text-md leading-relaxed text-slate-600 dark:text-slate-400">
                <span className="bg-gradient-to-r font-bold from-emerald-500 to-teal-600 dark:from-emerald-400 dark:to-teal-500 bg-clip-text text-transparent">兼顾续航与证据</span>。 低功耗 DVS 传感器持续守候，初筛目标，瞬间唤醒高清 RGB 相机抓拍取证，确保监控效率与证据质量。
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* 4. 隐蔽伪装与设备形态 (Camouflage & Forms) - Xmind Style */}
      <section id="camouflage" className="w-full py-24 print:py-6 print:border-y-0 border-y border-slate-200 dark:border-slate-900 bg-white dark:bg-slate-950 transition-colors duration-300 overflow-hidden print:break-before-page">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20 print:mb-6 space-y-4">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">生态级隐蔽伪装</h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              基于极其小巧的核心模组，可根据场景需求扩展出千变万化的伪装形态
            </p>
          </div>

          <div className="relative flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 print:gap-4">
            
            {/* 左侧：核心模组 */}
            <div className="relative z-10 w-full md:w-1/3 max-w-sm">
              <div className="rounded-2xl border-2 border-emerald-500/30 bg-emerald-50/50 dark:bg-emerald-900/10 p-6 shadow-2xl shadow-emerald-500/10 relative backdrop-blur-sm">
                <div className="absolute -top-3 -right-3">
                  <span className="relative flex h-6 w-6">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-6 w-6 bg-emerald-500 items-center justify-center">
                      <Cpu className="w-3 h-3 text-white" />
                    </span>
                  </span>
                </div>
                <div className="aspect-[4/3] flex items-center justify-center mb-6">
                  <img src={moduleImg} alt="哨兵核心模组" className="w-full h-full object-contain hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="text-center space-y-2">
                  <span className="inline-block px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-xs font-bold rounded-full mb-2">核心大脑</span>
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white">微型智能模组</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    高度集成的微型电路板，搭载超低功耗图像传感器与端侧AI算力芯片，尺寸仅与普通积木相当。
                  </p>
                </div>
              </div>
            </div>

            {/* 连接线 (仅 PC 端显示) */}
            <div className="hidden md:block absolute left-1/3 right-1/3 top-1/2 -translate-y-1/2 z-0 print:hidden">
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
                    <img src={stoneImg} alt="仿生岩石哨兵" className="w-full h-full object-contain group-hover/img:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/10 flex items-center justify-center transition-colors">
                      <Eye className="text-white opacity-0 group-hover/img:opacity-100 w-8 h-8 drop-shadow-md transition-opacity" />
                    </div>
                  </div>
                  <div className="space-y-2 text-center sm:text-left">
                    <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-500">形态扩展 01</span>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white">仿生岩石哨兵</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      模组嵌入高仿真岩石外壳，双镜头孔径极小。置于山地、荒漠或边境线一侧，肉眼极难察觉。
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
                    <img src={woodImg} alt="枯木仿生哨兵" className="w-full h-full object-contain group-hover/img:scale-110 transition-transform duration-500 drop-shadow-md" />
                    <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/10 flex items-center justify-center transition-colors">
                      <Eye className="text-white opacity-0 group-hover/img:opacity-100 w-8 h-8 drop-shadow-md transition-opacity" />
                    </div>
                  </div>
                  <div className="space-y-2 text-center sm:text-left">
                    <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-500">形态扩展 02</span>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white">枯木仿生哨兵</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      完美融入枯木、树干纹理。适合林区、灌木丛、果园等植被茂密区域的长期潜伏与防范。
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
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">智慧大屏态势感知</h2>
            <p className="text-slate-600 dark:text-slate-400">
              后端大屏实时联动，哨兵部署位置、运行状态、告警轨迹一目了然
            </p>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:grid grid-cols-12 gap-8 items-center max-w-[1400px] mx-auto print:flex print:flex-col print:gap-2">
            {/* Left Features */}
            <div className="col-span-3 space-y-40 print:space-y-2 text-right relative print:flex print:justify-around print:w-full print:text-center print:mt-2">
              <div className="relative pr-8 print:pr-0 print:flex-1">
                <div className="absolute top-1/2 right-0 w-8 h-px bg-emerald-500/50 transform -translate-y-1/2 print:hidden"></div>
                <div className="w-2 h-2 rounded-full bg-emerald-500 absolute top-1/2 -right-1 transform -translate-y-1/2 print:hidden"></div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">GIS地图态势融合</h4>
                <p className="text-sm text-slate-500 leading-relaxed">大屏直观展示各哨兵地理位置，动态绘制入侵目标轨迹。</p>
              </div>
              <div className="relative pr-8 print:pr-0 print:flex-1">
                <div className="absolute top-1/2 right-0 w-8 h-px bg-emerald-500/50 transform -translate-y-1/2 print:hidden"></div>
                <div className="w-2 h-2 rounded-full bg-emerald-500 absolute top-1/2 -right-1 transform -translate-y-1/2 print:hidden"></div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">左侧告警面板</h4>
                <p className="text-sm text-slate-500 leading-relaxed">实时回传目标截图，秒级推送高清抓拍证据。</p>
              </div>
            </div>

            {/* Center Image */}
            <div className="col-span-6 relative z-10 print:w-full">
              <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl relative group">
                <img src={dashboardImg} alt="GuardX 智慧大屏" className="w-full h-auto transform group-hover:scale-[1.02] transition-transform duration-700" />
                <div className="absolute top-4 right-4 bg-red-500/90 backdrop-blur text-white text-xs px-3 py-1.5 rounded-md font-bold flex items-center gap-2 print:hidden">
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                  实时联动中
                </div>
              </div>
            </div>

            {/* Right Features */}
            <div className="col-span-3 space-y-40 print:space-y-2 text-left relative print:flex print:justify-around print:w-full print:text-center print:mt-2">
              <div className="relative pl-8 print:pl-0 print:flex-1">
                <div className="absolute top-1/2 left-0 w-8 h-px bg-emerald-500/50 transform -translate-y-1/2 print:hidden"></div>
                <div className="w-2 h-2 rounded-full bg-emerald-500 absolute top-1/2 -left-1 transform -translate-y-1/2 print:hidden"></div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">右侧告警趋势</h4>
                <p className="text-sm text-slate-500 leading-relaxed">多维数据看板，直观呈现告警趋势与目标分类统计。</p>
              </div>
              <div className="relative pl-8 print:pl-0 print:flex-1">
                <div className="absolute top-1/2 left-0 w-8 h-px bg-emerald-500/50 transform -translate-y-1/2 print:hidden"></div>
                <div className="w-2 h-2 rounded-full bg-emerald-500 absolute top-1/2 -left-1 transform -translate-y-1/2 print:hidden"></div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">设备健康度监控</h4>
                <p className="text-sm text-slate-500 leading-relaxed">实时回传剩余电量、信号强度、在线状态，异常自动告警。</p>
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden flex flex-col items-center space-y-8">
            <div className="w-full rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl relative">
              <img src={dashboardImg} alt="GuardX 智慧大屏" className="w-full h-auto" />
              <div className="absolute top-3 right-3 bg-red-500/90 backdrop-blur text-white text-xs px-3 py-1.5 rounded-md font-bold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                实时联动中
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 w-full">
              <div className="bg-white dark:bg-slate-900/50 p-5 rounded-xl border border-slate-200 dark:border-slate-800">
                <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1 text-emerald-600 dark:text-emerald-500">GIS地图态势融合</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400">大屏直观展示各哨兵地理位置，动态绘制入侵目标轨迹。</p>
              </div>
              <div className="bg-white dark:bg-slate-900/50 p-5 rounded-xl border border-slate-200 dark:border-slate-800">
                <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1 text-emerald-600 dark:text-emerald-500">左侧告警面板</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400">实时回传目标截图，秒级推送高清抓拍证据。</p>
              </div>
              <div className="bg-white dark:bg-slate-900/50 p-5 rounded-xl border border-slate-200 dark:border-slate-800">
                <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1 text-emerald-600 dark:text-emerald-500">右侧告警趋势</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400">多维数据看板，直观呈现告警趋势与目标分类统计。</p>
              </div>
              <div className="bg-white dark:bg-slate-900/50 p-5 rounded-xl border border-slate-200 dark:border-slate-800">
                <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1 text-emerald-600 dark:text-emerald-500">设备健康度监控</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400">实时回传剩余电量、信号强度、在线状态，异常自动告警。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. 夜视对比 (Night Vision) */}
      <section id="night-vision" className="w-full py-24 print:py-12 bg-black print:bg-white transition-colors duration-300 overflow-hidden relative print:break-before-page">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl font-bold tracking-tight text-white print:text-slate-900">智能出彩，夜间也出色</h2>
            <p className="text-slate-400 print:text-slate-600 text-lg">
              AI-ISP 全彩夜视，≧ 1Lux 极暗光线下依然精准框选目标
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden border border-slate-800 shadow-2xl aspect-[4/3] md:aspect-[21/9] group">
            {/* Left Image: GuardX */}
            <div className="absolute inset-0 z-10 transition-all duration-500 ease-in-out" style={{ clipPath: 'polygon(0 0, 55% 0, 45% 100%, 0 100%)' }}>
              <img src={guardxNightImg} alt="全彩夜视" className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000" />
              {/* Left Timestamp */}
              <div className="absolute top-4 left-4 md:top-6 md:left-8 font-mono text-emerald-400 font-bold tracking-wider text-sm md:text-base z-20 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                2024-05-27 20:16:32
              </div>
              <div className="absolute bottom-6 left-6 md:left-12 bg-black/60 backdrop-blur px-6 py-2 rounded-full text-white font-bold border border-white/10 shadow-lg z-20">
                <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">全彩夜视</span>
              </div>
            </div>

            {/* Right Image: Traditional */}
            <div className="absolute inset-0 z-0">
              <img src={otherNightImg} alt="普通红外夜视" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000" />
              {/* Right Timestamp */}
              <div className="absolute top-4 right-4 md:top-6 md:right-8 font-mono text-slate-300 font-bold tracking-wider text-sm md:text-base z-20 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                2024-05-27 20:16:32
              </div>
              <div className="absolute bottom-6 right-6 md:right-12 bg-black/60 backdrop-blur px-6 py-2 rounded-full text-white font-bold border border-white/10 shadow-lg z-20">
                <span className="text-slate-300">普通红外夜视</span>
              </div>
            </div>

            {/* Diagonal Divider Line */}
            <div className="absolute top-[-10%] bottom-[-10%] left-[45%] w-[10%] z-20 pointer-events-none">
              <svg className="w-full h-full drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" preserveAspectRatio="none" viewBox="0 0 100 100">
                <line x1="100" y1="0" x2="0" y2="100" stroke="rgba(255,255,255,0.8)" strokeWidth="0.5" vectorEffect="non-scaling-stroke" />
              </svg>
            </div>

            {/* VS Badge */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black text-white w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center font-black italic text-lg md:text-2xl border-[3px] border-slate-800 shadow-[0_0_30px_rgba(0,0,0,0.8)] z-30">
              VS
            </div>
          </div>
        </div>
      </section>

      {/* 7. 应用场景 (Scenarios) */}
      <section id="scenarios" className="w-full py-20 border-t border-slate-200 dark:border-slate-900 bg-white dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">典型应用场景</h2>
            <p className="text-slate-600 dark:text-slate-400">
              针对不同行业安防痛点，提供灵活、高效、低维护成本的布防方案
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl border border-slate-200 dark:border-slate-800 flex gap-6 bg-slate-50 dark:bg-slate-900/20 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0">
                <MapPin className="text-emerald-600 dark:text-emerald-500 w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">边境与野外长期潜伏值守</h3>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  部署于边境线、无人区、山地林区、野外通道等。解决传统监控设备频繁维护、野外供电极度困难的行业顽疾。
                </p>
              </div>
            </div>

            <div className="p-8 rounded-2xl border border-slate-200 dark:border-slate-800 flex gap-6 bg-slate-50 dark:bg-slate-900/20 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0">
                <Shield className="text-emerald-600 dark:text-emerald-500 w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">要地周界与敏感区域防护</h3>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  适用于机场、油气管道、军事禁区、核心物资仓库等周界盲区补漏。实现对人员、车辆等异常目标的持续感知与秒级告警。
                </p>
              </div>
            </div>

            <div className="p-8 rounded-2xl border border-slate-200 dark:border-slate-800 flex gap-6 bg-slate-50 dark:bg-slate-900/20 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0">
                <Camera className="text-emerald-600 dark:text-emerald-500 w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">公安与安保临时布控</h3>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  大型户外活动、临时突发任务、重点嫌疑车辆/人员轨迹布控。设备开箱即用，支持快速磁吸或绑带安装，机动性极强。
                </p>
              </div>
            </div>

            <div className="p-8 rounded-2xl border border-slate-200 dark:border-slate-800 flex gap-6 bg-slate-50 dark:bg-slate-900/20 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0">
                <Monitor className="text-emerald-600 dark:text-emerald-500 w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">车辆与人员目标取证</h3>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  当目标进入防区，系统不仅发出告警，更会瞬间抓拍并回传目标颜色、外观细节、行为特征等关键高清图片，为后续执法提供坚实证据。
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
            <h2 className="text-3xl print:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">为什么选择电子哨兵？</h2>
            <p className="text-slate-600 print:text-md dark:text-slate-400">
              直面野外、临时布控场景下的三大核心痛点，给出更优解
            </p>
          </div>

          <div className="space-y-8 print:space-y-4">
            <div className="grid md:grid-cols-2 gap-6 p-8 print:p-4 print:gap-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white print:bg-white dark:bg-slate-900/20 shadow-sm transition-colors duration-300">
              <div className="space-y-4 print:space-y-2">
                <div className="inline-flex items-center gap-2 text-rose-600 dark:text-rose-500 font-semibold text-lg print:text-xl">
                  <AlertTriangle className="w-5 h-5 print:w-5 print:h-5" /> 痛点一：传统摄像设备续航短
                </div>
                <p className="text-base print:text-md text-slate-600 dark:text-slate-400">
                  野外无电环境部署传统摄像头，需要拖带沉重的太阳能电池板或频繁更换电池，维护成本极高，极易因断电导致监控中断。
                </p>
              </div>
              <div className="space-y-4 print:space-y-2 md:border-l md:pl-8 print:pl-4 border-slate-200 dark:border-slate-800">
                <div className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-500 font-semibold text-lg print:text-xl">
                  <CheckCircle2 className="w-5 h-5 print:w-5 print:h-5" /> 电子哨兵解决方式：毫瓦（mW）级极低功耗
                </div>
                <p className="text-base print:text-md text-slate-700 dark:text-slate-300">
                  采用事件驱动唤醒机制，无事件时整机处于极低功耗休眠状态。配合小体积电池即可实现长达数月的野外潜伏值守。
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 p-8 print:p-4 print:gap-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white print:bg-white dark:bg-slate-900/20 shadow-sm transition-colors duration-300">
              <div className="space-y-4 print:space-y-2">
                <div className="inline-flex items-center gap-2 text-rose-600 dark:text-rose-500 font-semibold text-lg print:text-xl">
                  <AlertTriangle className="w-5 h-5 print:w-5 print:h-5" /> 痛点二：无效视频多，传输与研判成本高
                </div>
                <p className="text-base print:text-md text-slate-600 dark:text-slate-400">
                  传统设备持续录像，回传大量风吹草动、光影变化的无效视频。不仅浪费宝贵的4G流量，也给后台人工研判带来极大的工作量。
                </p>
              </div>
              <div className="space-y-4 print:space-y-2 md:border-l md:pl-8 print:pl-4 border-slate-200 dark:border-slate-800">
                <div className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-500 font-semibold text-lg print:text-xl">
                  <CheckCircle2 className="w-5 h-5 print:w-5 print:h-5" /> 电子哨兵解决方式：端侧 AI 过滤与精准推送
                </div>
                <p className="text-base print:text-md text-slate-700 dark:text-slate-300">
                  本地端侧爽识别，DVS 初筛感知动目标是否是预期目标，唤醒 RGB 拍照 AI 智能识别，只有当检测到人、车、无人机等真实威胁目标时才进行告警，确保回传的每一帧都是关键证据。
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 p-8 print:p-4 print:gap-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white print:bg-white dark:bg-slate-900/20 shadow-sm transition-colors duration-300">
              <div className="space-y-4 print:space-y-2">
                <div className="inline-flex items-center gap-2 text-rose-600 dark:text-rose-500 font-semibold text-lg print:text-xl">
                  <AlertTriangle className="w-5 h-5 print:w-5 print:h-5" /> 痛点三：野外和临时场景部署难
                </div>
                <p className="text-base print:text-md text-slate-600 dark:text-slate-400">
                  传统监控设备体积大、重量重，安装需要立杆、布线。在边境山林、临时安保等场景下，无法做到快速、隐蔽、灵活的部署。
                </p>
              </div>
              <div className="space-y-4 print:space-y-2 md:border-l md:pl-8 print:pl-4 border-slate-200 dark:border-slate-800">
                <div className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-500 font-semibold text-lg print:text-xl">
                  <CheckCircle2 className="w-5 h-5 print:w-5 print:h-5" /> 电子哨兵解决方式：极简隐蔽便携部署
                </div>
                <p className="text-base print:text-md text-slate-700 dark:text-slate-300">
                  哨兵模组体积仅如积木般大小（≤ 80mm * 80mm * 80mm），支持无损快速安装。可轻松融入石头、枯木等自然环境进行生态级伪装，实现真正的“隐形防线”。
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
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">重新定义野外与临时布控标准</h2>
            <p className="text-slate-600 dark:text-slate-400">突破传统监控限制，更智能、更隐蔽、更省心</p>
          </div>

          <div className="relative mx-auto max-w-4xl pt-16 md:pt-24 mt-4 print:pt-4 print:mt-0">
            {/* Main Card */}
            <div className="bg-white dark:bg-slate-900/40 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm relative z-0 print:border-none print:shadow-none">
              
              {/* Highlighed Column Box (Absolute) */}
              <div className="absolute -top-6 md:-top-8 -bottom-4 left-[24%] w-[38%] bg-gradient-to-b from-emerald-500 to-emerald-700 print:bg-emerald-600 rounded-3xl shadow-2xl shadow-emerald-500/30 print:shadow-none z-10 border border-emerald-400/20"></div>

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
                    <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                      <div className="font-black text-white text-md md:text-xl tracking-wider leading-tight">GUARDX</div>
                      <div className="text-emerald-100 font-bold text-sm md:text-sm mt-0.5 md:mt-1 bg-white/20 px-2 md:px-3 py-0.5 md:py-1 rounded-full">电子哨兵</div>
                    </div>
                  </div>
                  {/* Col 3 Traditional */}
                  <div className="w-[38%] flex flex-col sm:flex-row items-center justify-center pt-6 md:pt-8 pb-6 px-2 gap-2 md:gap-4">
                    <div className="h-10 md:h-14 flex items-center justify-center">
                      <img src={traditionalImg} alt="传统安防摄像头" className="max-h-full object-contain opacity-90 drop-shadow-md mix-blend-multiply dark:mix-blend-normal" />
                    </div>
                    <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                      <div className="font-bold text-slate-700 dark:text-slate-300 text-xl md:text-xl">传统安防摄像头</div>
                    </div>
                  </div>
                </div>

                {/* Data Rows */}
                <div className="flex flex-col pb-6">
                  
                  {/* Row 1 */}
                  <div className="flex items-stretch min-h-[60px] md:min-h-[72px] group relative z-20">
                    <div className="w-[24%] shrink-0 flex items-center justify-end md:justify-start gap-2 md:gap-3 px-4 md:px-8 border-b border-slate-100 dark:border-slate-800/50 text-slate-500 dark:text-slate-400">
                      <Target className="w-4 h-4 md:w-5 md:h-5 text-emerald-600 dark:text-emerald-500" />
                      <span className="font-semibold text-xs md:text-sm">感知方式</span>
                    </div>
                    <div className="w-[38%] flex items-center justify-start px-4 md:px-8 border-b border-emerald-400/20">
                      <div className="flex items-center gap-2 md:gap-3">
                        <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-yellow-400 text-white text-sm md:text-xs font-black flex items-center justify-center shrink-0">1</div>
                        <span className="text-white font-medium text-xs md:text-base leading-tight">事件驱动 / 有动才报</span>
                      </div>
                    </div>
                    <div className="w-[38%] flex items-center justify-center px-2 md:px-6 text-slate-600 dark:text-slate-400 text-xs md:text-sm font-medium text-center border-b border-slate-100 dark:border-slate-800/50">
                      持续录像 / 高频唤醒
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="flex items-stretch min-h-[60px] md:min-h-[72px] group relative z-20">
                    <div className="w-[24%] shrink-0 flex items-center justify-end md:justify-start gap-2 md:gap-3 px-4 md:px-8 border-b border-slate-100 dark:border-slate-800/50 text-slate-500 dark:text-slate-400">
                      <Zap className="w-4 h-4 md:w-5 md:h-5 text-emerald-600 dark:text-emerald-500" />
                      <span className="font-semibold text-xs md:text-sm">功耗与续航</span>
                    </div>
                    <div className="w-[38%] flex items-center justify-start px-4 md:px-8 border-b border-emerald-400/20">
                      <div className="flex items-center gap-2 md:gap-3">
                        <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-yellow-400 text-white text-sm md:text-xs font-black flex items-center justify-center shrink-0">2</div>
                        <span className="text-white font-medium text-xs md:text-base leading-tight">毫瓦级待机 / ≥ 60天</span>
                      </div>
                    </div>
                    <div className="w-[38%] flex items-center justify-center px-2 md:px-6 text-slate-600 dark:text-slate-400 text-xs md:text-sm font-medium text-center border-b border-slate-100 dark:border-slate-800/50">
                      耗电大，需配太阳能板 / ≤ 14天
                    </div>
                  </div>

                  {/* Row 3: 探测目标种类 */}
                  <div className="flex items-stretch min-h-[60px] md:min-h-[72px] group relative z-20">
                    <div className="w-[24%] shrink-0 flex items-center justify-end md:justify-start gap-2 md:gap-3 px-4 md:px-8 border-b border-slate-100 dark:border-slate-800/50 text-slate-500 dark:text-slate-400">
                      <Eye className="w-4 h-4 md:w-5 md:h-5 text-emerald-600 dark:text-emerald-500" />
                      <span className="font-semibold text-xs md:text-sm">探测目标种类</span>
                    </div>
                    <div className="w-[38%] flex items-center justify-start px-4 md:px-8 border-b border-emerald-400/20">
                      <div className="flex items-center gap-2 md:gap-3">
                        <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-yellow-400 text-white text-sm md:text-xs font-black flex items-center justify-center shrink-0">3</div>
                        <span className="text-white font-medium text-xs md:text-base leading-tight">人、车、无人机 / 支持自定义</span>
                      </div>
                    </div>
                    <div className="w-[38%] flex items-center justify-center px-2 md:px-6 text-slate-600 dark:text-slate-400 text-xs md:text-sm font-medium text-center border-b border-slate-100 dark:border-slate-800/50">
                      人、宠物 / 不支持自定义
                    </div>
                  </div>

                  {/* Row 4: 无效数据 */}
                  <div className="flex items-stretch min-h-[60px] md:min-h-[72px] group relative z-20">
                    <div className="w-[24%] shrink-0 flex items-center justify-end md:justify-start gap-2 md:gap-3 px-4 md:px-8 border-b border-slate-100 dark:border-slate-800/50 text-slate-500 dark:text-slate-400">
                      <Database className="w-4 h-4 md:w-5 md:h-5 text-emerald-600 dark:text-emerald-500" />
                      <span className="font-semibold text-xs md:text-sm">无效数据</span>
                    </div>
                    <div className="w-[38%] flex items-center justify-start px-4 md:px-8 border-b border-emerald-400/20">
                      <div className="flex items-center gap-2 md:gap-3">
                        <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-yellow-400 text-white text-sm md:text-xs font-black flex items-center justify-center shrink-0">4</div>
                        <span className="text-white font-medium text-xs md:text-base leading-tight">端侧 AI 过滤 / 误报率 ≤ 90%</span>
                      </div>
                    </div>
                    <div className="w-[38%] flex items-center justify-center px-2 md:px-6 text-slate-600 dark:text-slate-400 text-xs md:text-sm font-medium text-center border-b border-slate-100 dark:border-slate-800/50">
                      海量 (风吹草动皆录)
                    </div>
                  </div>

                  {/* Row 5：取证能力（高清彩色抓拍，告警即取证） */}
                  <div className="flex items-stretch min-h-[60px] md:min-h-[72px] group relative z-20">
                    <div className="w-[24%] shrink-0 flex items-center justify-end md:justify-start gap-2 md:gap-3 px-4 md:px-8 border-b border-slate-100 dark:border-slate-800/50 text-slate-500 dark:text-slate-400">
                      <CheckSquare className="w-4 h-4 md:w-5 md:h-5 text-emerald-600 dark:text-emerald-500" />
                      <span className="font-semibold text-xs md:text-sm">取证能力</span>
                    </div>
                    <div className="w-[38%] flex items-center justify-start px-4 md:px-8 border-b border-emerald-400/20">
                      <div className="flex items-center gap-2 md:gap-3">
                        <div className="w-5 h-5 md:w-6 md:h-6 flex items-center justify-center shrink-0"><Check className="w-4 h-4 md:w-5 md:h-5 text-emerald-300" /></div>
                        <span className="text-white font-medium text-xs md:text-base leading-tight">高清彩色抓拍，告警即取证</span>
                      </div>
                    </div>
                    <div className="w-[38%] flex items-center justify-center px-2 md:px-6 text-slate-600 dark:text-slate-400 text-xs md:text-sm font-medium text-center border-b border-slate-100 dark:border-slate-800/50">
                      找关键帧费时费力
                    </div>
                  </div>

                  {/* Row 6: 部署难度 */}
                  <div className="flex items-stretch min-h-[60px] md:min-h-[72px] group relative z-20">
                    <div className="w-[24%] shrink-0 flex items-center justify-end md:justify-start gap-2 md:gap-3 px-4 md:px-8 text-slate-500 dark:text-slate-400">
                      <Rocket className="w-4 h-4 md:w-5 md:h-5 text-emerald-600 dark:text-emerald-500" />
                      <span className="font-semibold text-xs md:text-sm">部署难度</span>
                    </div>
                    <div className="w-[38%] flex items-center justify-start px-4 md:px-8">
                      <div className="flex items-center gap-2 md:gap-3">
                        <div className="w-5 h-5 md:w-6 md:h-6 flex items-center justify-center shrink-0"><Check className="w-4 h-4 md:w-5 md:h-5 text-emerald-300" /></div>
                        <span className="text-white font-medium text-xs md:text-base leading-tight">生态伪装，免布线</span>
                      </div>
                    </div>
                    <div className="w-[38%] flex items-center justify-center px-2 md:px-6 text-slate-600 dark:text-slate-400 text-xs md:text-sm font-medium text-center">
                      需立杆布线，目标明显
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
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">装箱清单</h2>
            <p className="text-slate-600 dark:text-slate-400">软硬一体，开箱即用的完整作战包</p>
          </div>

          <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-center justify-center mb-24">
            {/* Left side: Main device */}
            <div className="flex flex-col items-center">
              <div className="w-64 h-64 md:w-80 md:h-80 flex items-center justify-center mb-4">
                <img src={guardxRealImg} alt="GUARDX 设备" className="max-w-full max-h-full object-contain drop-shadow-2xl" />
              </div>
              <p className="text-xl font-bold text-slate-700 dark:text-slate-300">设备 × 10</p>
            </div>

            {/* Right side: Accessories grid */}
            <div className="flex flex-col gap-10 sm:gap-16 mt-8 md:mt-0">
              {/* Top Row: 3 items */}
              <div className="grid grid-cols-3 gap-6 sm:gap-12">
                {/* Box */}
                <div className="flex flex-col items-center gap-4">
                  <div className="h-28 w-28 flex items-end justify-center">
                    <img src={boxImg} alt="装备箱" className="max-h-full max-w-full object-contain drop-shadow-md" />
                  </div>
                  <p className="text-base font-medium text-slate-600 dark:text-slate-400">装备箱 × 1</p>
                </div>
                
                {/* Pad */}
                <div className="flex flex-col items-center gap-4">
                  <div className="h-28 w-28 flex items-end justify-center">
                    <img src={padImg} alt="显控平板" className="max-h-full max-w-full object-contain drop-shadow-md" />
                  </div>
                  <p className="text-base font-medium text-slate-600 dark:text-slate-400">显控平板 × 1</p>
                </div>

                {/* Power line */}
                <div className="flex flex-col items-center gap-4">
                  <div className="h-28 w-28 flex items-end justify-center">
                    <img src={eleLineImg} alt="电源线" className="max-h-full max-w-full object-contain drop-shadow-md" />
                  </div>
                  <p className="text-base font-medium text-slate-600 dark:text-slate-400">电源线 × 1</p>
                </div>
              </div>

              {/* Bottom Row: 2 items centered */}
              <div className="flex justify-center gap-16 sm:gap-24">
                {/* Screws */}
                <div className="flex flex-col items-center gap-4">
                  <div className="h-28 w-28 flex items-end justify-center">
                    <img src={luosiImg} alt="螺丝配件" className="max-h-full max-w-full object-contain drop-shadow-md" />
                  </div>
                  <p className="text-base font-medium text-slate-600 dark:text-slate-400">螺丝配件 × 1</p>
                </div>

                {/* User Guide */}
                <div className="flex flex-col items-center gap-4">
                  <div className="h-28 w-28 flex items-end justify-center">
                    <img src={guardBookImg} alt="用户指南" className="max-h-full max-w-full object-contain shadow-sm" />
                  </div>
                  <p className="text-base font-medium text-slate-600 dark:text-slate-400">用户指南 × 1</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom section: Mobile notification setting mockup inside wide banner */}
          <div className="relative max-w-5xl mx-auto mt-32">
            <div className="w-full bg-slate-100 dark:bg-slate-900/50 rounded-3xl h-24 border border-slate-200 dark:border-slate-800 flex items-center justify-center md:justify-start md:pl-16 shadow-inner">
              <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 font-medium flex items-center gap-2">
                <span className="text-rose-500 font-bold">*</span> 消息推送功能需要开启手机系统通知权限
              </p>
            </div>
            
            {/* 移动端 APP Mockup (Overlapping) */}
            <div className="absolute -bottom-24 right-1/2 translate-x-1/2 md:translate-x-0 md:right-16 w-64 h-64 z-10 hidden sm:block">
              <div className="w-full h-full rounded-t-3xl border-x-[6px] border-t-[6px] border-slate-800 bg-slate-100 overflow-hidden flex flex-col shadow-xl">
                <div className="h-6 bg-slate-100 w-full flex justify-between items-center px-4 text-[10px] font-medium text-black">
                  <span>13:36</span>
                  <div className="flex gap-1 items-center">
                    <div className="font-bold tracking-tighter">4G</div>
                    <div className="w-3 h-2.5 border border-black rounded-[2px] relative p-px">
                      <div className="w-full h-full bg-black rounded-[1px]"></div>
                      <div className="absolute -right-[2px] top-1 w-[1px] h-1 bg-black"></div>
                    </div>
                  </div>
                </div>
                <div className="h-10 flex items-center px-2 gap-1 border-b border-slate-200 bg-slate-100">
                  <ChevronRight className="w-4 h-4 rotate-180 text-blue-500" />
                  <span className="text-xs text-blue-500 font-medium">通知</span>
                  <span className="text-[11px] font-bold text-slate-800 flex-1 text-center pr-10">GuardX 电子哨兵</span>
                </div>
                <div className="flex-1 p-3 bg-slate-50">
                  <div className="bg-white px-3 py-2.5 rounded-lg border border-slate-200 flex justify-between items-center mb-3 shadow-sm">
                    <span className="text-xs font-medium text-slate-800">允许通知</span>
                    <div className="w-10 h-6 bg-emerald-500 rounded-full relative shadow-inner">
                      <div className="absolute right-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow-sm"></div>
                    </div>
                  </div>
                  <div className="px-1">
                    <span className="text-[10px] text-slate-500 uppercase font-semibold">提醒</span>
                    <div className="flex justify-between mt-3 px-2">
                      <div className="flex flex-col items-center gap-1.5">
                        <div className="w-8 h-12 bg-white rounded border border-slate-300 flex justify-center pt-2 relative shadow-sm">
                          <div className="w-4 h-1 bg-slate-200 rounded-full"></div>
                          <div className="absolute -bottom-2 w-3 h-3 bg-blue-500 rounded-full text-white flex items-center justify-center text-[8px] font-bold">✓</div>
                        </div>
                        <span className="text-[8px] text-slate-600 mt-1 font-medium">锁定屏幕</span>
                      </div>
                      <div className="flex flex-col items-center gap-1.5">
                        <div className="w-8 h-12 bg-white rounded border border-slate-300 flex justify-center pt-2 relative shadow-sm">
                          <div className="w-6 h-4 bg-slate-200 rounded"></div>
                          <div className="absolute -bottom-2 w-3 h-3 bg-blue-500 rounded-full text-white flex items-center justify-center text-[8px] font-bold">✓</div>
                        </div>
                        <span className="text-[8px] text-slate-600 mt-1 font-medium">通知中心</span>
                      </div>
                      <div className="flex flex-col items-center gap-1.5">
                        <div className="w-8 h-12 bg-white rounded border border-slate-300 flex justify-center pt-1 relative shadow-sm">
                          <div className="w-6 h-2 bg-slate-200 rounded-full"></div>
                          <div className="absolute -bottom-2 w-3 h-3 bg-blue-500 rounded-full text-white flex items-center justify-center text-[8px] font-bold">✓</div>
                        </div>
                        <span className="text-[8px] text-slate-600 mt-1 font-medium">横幅</span>
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
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">开启智能、隐蔽、长续航的侦察新时代</h2>
          <p className="max-w-xl mx-auto text-sm text-slate-600 dark:text-slate-400">
            联系我们的产品专家，获取量身定制的行业部署方案与设备报价清单。
          </p>
          <div className="flex justify-center gap-4">
            <button 
              data-html2canvas-ignore="true"
              onClick={handleDownloadImage}
              className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-3 rounded-lg font-semibold transition-all shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isDownloading}
            >
              <Book className="w-6 h-6" />
              {isDownloading ? '正在生成产品手册...' : '下载产品手册'}
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
            aria-label="关闭视频"
          />
          <div className="relative w-full max-w-5xl bg-black rounded-2xl overflow-hidden shadow-2xl z-10 border border-white/10">
            <button 
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/80 text-white rounded-full flex items-center justify-center backdrop-blur transition-colors z-20"
              aria-label="关闭视频"
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
            aria-label="关闭预览"
          />
          <div className="relative w-full max-w-4xl h-full max-h-[80vh] flex items-center justify-center z-10">
            <button 
              onClick={() => setPreviewImage(null)}
              className="absolute -top-4 -right-4 md:top-0 md:-right-12 w-10 h-10 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center backdrop-blur transition-colors z-20"
              aria-label="关闭预览"
            >
              <X className="w-6 h-6" />
            </button>
            <img 
              src={previewImage} 
              alt="大图预览" 
              className="max-w-full max-h-full object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      )}

    </div>
  );
}