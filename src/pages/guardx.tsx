import React, { useState, useEffect } from 'react';
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
  Package
} from 'lucide-react';

// 本地素材导入
import heroImg1 from '../assets/guard-x/GuardX-01.jpg';
import heroImg2 from '../assets/guard-x/GuardX-02.jpg';
import heroImg3 from '../assets/guard-x/GuardX-03.jpg';
import heroImg4 from '../assets/guard-x/GuardX-04.jpg';
import heroImg5 from '../assets/guard-x/GuardX-05.jpg';

import boxImg from '../assets/guard-x/guardx-box.png';
import moduleImg from '../assets/guard-x/module.png';
import stoneImg from '../assets/guard-x/bone.png'; // 根据文件夹中的实际命名为 bone.png
import woodImg from '../assets/guard-x/tree.png';
import dashboardImg from '../assets/guard-x/web-screen.png';
import nightImg from '../assets/guard-x/guardx-night.jpeg';
import dayImg from '../assets/guard-x/GuardX-02.jpg'; 

const heroImages = [heroImg1, heroImg2, heroImg3, heroImg4, heroImg5];

export default function ProductLandingPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
    <div className="w-full">
      {/* 1. 首屏 (Hero Section) */}
      <header className="relative w-full py-20 lg:py-32 overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              <Cpu className="w-3.5 h-3.5" />
              超低功耗智能侦察终端
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none text-slate-900 dark:text-white">
              有动才报 <br />
              <span className="bg-gradient-to-r from-emerald-500 to-teal-600 dark:from-emerald-400 dark:to-teal-500 bg-clip-text text-transparent">
                长时值守 智能取证
              </span>
            </h1>
            <p className="text-lg max-w-xl leading-relaxed text-slate-600 dark:text-slate-400">
              面向边境、周界、要地防卫与临时布控场景。通过“事件视觉感知 + 端侧AI识别 + 低功耗取证”三位一体，实现长期无人值守下的精准目标探测、告警与高清证据获取。
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#dashboard" className="bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-lg flex items-center gap-2">
                查看演示大屏 <ChevronRight className="w-4 h-4" />
              </a>
              <a href="#camouflage" className="px-6 py-3 rounded-lg font-semibold border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-700 dark:text-slate-300 transition-all">
                了解隐蔽部署
              </a>
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
                  }`}
                />
              ))}
              
              {/* 左右切换按钮 */}
              <button 
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/50 dark:bg-black/50 backdrop-blur hover:bg-white dark:hover:bg-black text-slate-800 dark:text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                aria-label="上一张"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/50 dark:bg-black/50 backdrop-blur hover:bg-white dark:hover:bg-black text-slate-800 dark:text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                aria-label="下一张"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* 底部指示器 */}
              <div className="absolute bottom-24 left-0 right-0 flex justify-center gap-2 z-10">
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

              <div className="absolute bottom-4 left-4 right-4 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border border-slate-200 dark:border-slate-800 p-4 rounded-xl flex items-center justify-between z-10">
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
      <section id="features" className="w-full py-20 border-t border-slate-200 dark:border-slate-900 bg-white dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">四大核心技术亮点</h2>
            <p className="text-slate-600 dark:text-slate-400">
              突破传统监控限制，专为极端野外与无电无网环境设计
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <div className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 transition-all">
              <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-6">
                <Eye className="w-6 h-6 text-emerald-600 dark:text-emerald-500" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">事件驱动感知</h3>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                有动才报。采用先进的事件相机技术，仅在视野内有物体移动时触发，彻底告警无效视频。
              </p>
            </div>

            <div className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 transition-all">
              <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-6">
                <BatteryCharging className="w-6 h-6 text-emerald-600 dark:text-emerald-500" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">超低功耗值守</h3>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                微瓦级待机。支持长时间无人值守，单次部署续航可达数月甚至数年，无惧野外断电。
              </p>
            </div>

            <div className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 transition-all">
              <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-6">
                <Cpu className="w-6 h-6 text-emerald-600 dark:text-emerald-500" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">端侧AI识别</h3>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                边缘智能。内置高效AI芯片，支持人、车、无人机目标本地探测，过滤风吹草动误报。
              </p>
            </div>

            <div className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 transition-all">
              <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-6">
                <Layers className="w-6 h-6 text-emerald-600 dark:text-emerald-500" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">双模协同取证</h3>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                兼顾续航与证据。低功耗传感器持续守候，一旦锁定目标，瞬间唤醒高清相机抓拍取证。
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. 痛点问题与解决方案对比 (Painpoints vs Solutions) */}
      <section id="painpoints" className="w-full py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">为什么选择电子哨兵？</h2>
            <p className="text-slate-600 dark:text-slate-400">
              直面野外、临时布控场景下的三大核心痛点，给出更优解
            </p>
          </div>

          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/20 shadow-sm transition-colors duration-300">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 text-rose-600 dark:text-rose-500 font-semibold text-sm">
                  <AlertTriangle className="w-4 h-4" /> 痛点一：传统摄像设备续航短
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  野外无电环境部署传统摄像头，需要拖带沉重的太阳能电池板或频繁更换电池，维护成本极高，极易因断电导致监控中断。
                </p>
              </div>
              <div className="space-y-4 md:border-l md:pl-8 border-slate-200 dark:border-slate-800">
                <div className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-500 font-semibold text-sm">
                  <CheckCircle2 className="w-4 h-4" /> 电子哨兵解决方式：毫瓦级极低功耗
                </div>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  采用事件驱动唤醒机制，无事件时整机处于极低功耗休眠状态。配合小体积电池即可实现长达数月的野外潜伏值守。
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/20 shadow-sm transition-colors duration-300">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 text-rose-600 dark:text-rose-500 font-semibold text-sm">
                  <AlertTriangle className="w-4 h-4" /> 痛点二：无效视频多，传输与研判成本高
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  传统设备持续录像，回传大量风吹草动、光影变化的无效视频。不仅浪费宝贵的4G流量，也给后台人工研判带来极大的工作量。
                </p>
              </div>
              <div className="space-y-4 md:border-l md:pl-8 border-slate-200 dark:border-slate-800">
                <div className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-500 font-semibold text-sm">
                  <CheckCircle2 className="w-4 h-4" /> 电子哨兵解决方式：端侧AI过滤与精准推送
                </div>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  本地端侧实时进行AI目标识别，只有当检测到人、车、无人机等真实威胁目标时才唤醒传输，确保回传的每一帧都是关键证据。
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/20 shadow-sm transition-colors duration-300">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 text-rose-600 dark:text-rose-500 font-semibold text-sm">
                  <AlertTriangle className="w-4 h-4" /> 痛点三：野外和临时场景部署难
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  传统监控设备体积大、重量重，安装需要立杆、布线。在边境山林、临时安保等场景下，无法做到快速、隐蔽、灵活的部署。
                </p>
              </div>
              <div className="space-y-4 md:border-l md:pl-8 border-slate-200 dark:border-slate-800">
                <div className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-500 font-semibold text-sm">
                  <CheckCircle2 className="w-4 h-4" /> 电子哨兵解决方式：极简隐蔽便携部署
                </div>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  哨兵模组体积仅如积木般大小，支持无损快速安装。可轻松融入石头、枯木等自然环境进行生态级伪装，实现真正的“隐形防线”。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. 隐蔽伪装与设备形态 (Camouflage & Forms) */}
      <section id="camouflage" className="w-full py-20 border-y border-slate-200 dark:border-slate-900 bg-white dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">生态级隐蔽伪装</h2>
            <p className="text-slate-600 dark:text-slate-400">
              哨兵模组极致小巧，可完美融入野外自然环境，让防线于无形中建立
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col bg-slate-50 dark:bg-slate-900/30 transition-colors">
              <div className="p-4 flex-1 flex items-center justify-center bg-slate-100 dark:bg-slate-950/40">
                <img src={moduleImg} alt="哨兵核心模组" className="max-h-64 object-contain rounded-lg hover:scale-105 transition-transform" />
              </div>
              <div className="p-6 space-y-2">
                <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-500 uppercase tracking-wider">核心硬件</span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">哨兵微型模组</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  高度集成的微型电路板，搭载超低功耗图像传感器与端侧AI算力芯片，尺寸仅与普通积木相当。
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col bg-slate-50 dark:bg-slate-900/30 transition-colors">
              <div className="p-4 flex-1 flex items-center justify-center bg-slate-100 dark:bg-slate-950/40">
                <img src={stoneImg} alt="石头伪装" className="max-h-64 object-contain rounded-lg hover:scale-105 transition-transform" />
              </div>
              <div className="p-6 space-y-2">
                <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-500 uppercase tracking-wider">野外伪装形态 A</span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">仿生岩石哨兵</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  模组嵌入高仿真岩石外壳中，双镜头孔径极小。置于山地、荒漠或边境线一侧，肉眼极难察觉。
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col bg-slate-50 dark:bg-slate-900/30 transition-colors">
              <div className="p-4 flex-1 flex items-center justify-center bg-slate-100 dark:bg-slate-950/40">
                <img src={woodImg} alt="树枝伪装" className="max-h-64 object-contain rounded-lg hover:scale-105 transition-transform" />
              </div>
              <div className="p-6 space-y-2">
                <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-500 uppercase tracking-wider">野外伪装形态 B</span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">枯木仿生哨兵</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  完美融入枯木、树干纹理。适合林区、灌木丛、果园等植被茂密区域的长期潜伏与防范。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. 智慧大屏与实拍效果 (Dashboard & Real Shots) */}
      <section id="dashboard" className="w-full py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">GuardX 智慧大屏态势感知</h2>
            <p className="text-slate-600 dark:text-slate-400">
              后端大屏实时联动，哨兵部署位置、运行状态、告警轨迹一目了然
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 shadow-lg transition-colors">
                <img src={dashboardImg} alt="GuardX 智慧大屏" className="w-full h-auto" />
                <div className="absolute top-3 right-3 bg-red-500 text-white text-xs px-2.5 py-1 rounded font-semibold animate-pulse">
                  实时联动中
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 space-y-6">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">全天候目标捕获与取证</h3>
              <p className="text-slate-600 dark:text-slate-400">
                前端哨兵模组具备极强的光线适应能力，配合端侧算法，无论烈日当空还是极暗深夜，均能精准框选并识别目标。
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="relative rounded-lg overflow-hidden border border-slate-200 dark:border-slate-800">
                    <img src={dayImg} alt="白天实拍" className="w-full h-auto aspect-video object-cover" />
                    <span className="absolute bottom-2 left-2 bg-slate-900/80 dark:bg-slate-950/80 text-white text-[10px] px-1.5 py-0.5 rounded">白天抓拍</span>
                  </div>
                  <p className="text-xs text-slate-500 text-center">高清目标细节与色彩还原</p>
                </div>
                <div className="space-y-2">
                  <div className="relative rounded-lg overflow-hidden border border-slate-200 dark:border-slate-800">
                    <img src={nightImg} alt="夜晚实拍" className="w-full h-auto aspect-video object-cover" />
                    <span className="absolute bottom-2 left-2 bg-slate-900/80 dark:bg-slate-950/80 text-white text-[10px] px-1.5 py-0.5 rounded">夜晚抓拍</span>
                  </div>
                  <p className="text-xs text-slate-500 text-center">极暗光线下依然精准框选目标</p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-white">GIS地图态势融合</h4>
                    <p className="text-xs text-slate-500">大屏直观展示各哨兵地理位置，动态绘制入侵目标轨迹。</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-white">设备健康度监控</h4>
                    <p className="text-xs text-slate-500">实时回传剩余电量、信号强度、在线状态，异常自动告警。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. 应用场景 (Scenarios) */}
      <section id="scenarios" className="w-full py-20 border-t border-slate-200 dark:border-slate-900 bg-white dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">四大典型应用场景</h2>
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

      {/* 7. 产品优势对比 (Comparison) */}
      <section id="comparison" className="w-full py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">重新定义野外与临时布控标准</h2>
            <p className="text-slate-600 dark:text-slate-400">突破传统监控限制，更智能、更隐蔽、更省心</p>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-stretch relative mt-12">
            {/* 左侧文字标签 */}
            <div className="hidden md:flex flex-col justify-between py-16 pr-8 text-right space-y-8 w-48 shrink-0">
              <div className="h-12 flex items-center justify-end font-semibold text-slate-500">感知方式</div>
              <div className="h-12 flex items-center justify-end font-semibold text-slate-500">功耗与续航</div>
              <div className="h-12 flex items-center justify-end font-semibold text-slate-500">无效数据</div>
              <div className="h-12 flex items-center justify-end font-semibold text-slate-500">取证能力</div>
              <div className="h-12 flex items-center justify-end font-semibold text-slate-500">部署难度</div>
              <div className="h-12 flex items-center justify-end font-semibold text-slate-500">维护频率</div>
            </div>

            {/* GuardX 高亮对比列 */}
            <div className="relative z-10 w-full md:w-80 bg-[#4F84E6] rounded-3xl shadow-[0_20px_50px_rgba(79,132,230,0.4)] text-white transform md:-translate-y-4 flex flex-col overflow-hidden">
              <div className="h-32 flex flex-col items-center justify-center">
                <div className="bg-white/20 px-6 py-2 rounded-full text-base font-bold tracking-wider mb-2">GUARDX 电子哨兵</div>
                <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-slate-900 font-bold text-xs absolute right-4 top-4 shadow-lg shadow-yellow-400/50">1</div>
              </div>
              <div className="flex flex-col py-8 px-6 space-y-8 text-center flex-1">
                <div className="h-12 flex flex-col items-center justify-center relative">
                  <span className="md:hidden text-[#B0C8F5] text-xs mb-1">感知方式</span>
                  <span className="font-bold text-lg">事件驱动 (有动才报)</span>
                </div>
                <div className="w-full h-px bg-white/20 mx-auto"></div>
                <div className="h-12 flex flex-col items-center justify-center relative">
                  <span className="md:hidden text-[#B0C8F5] text-xs mb-1">功耗与续航</span>
                  <span className="font-bold text-lg">微瓦级待机 / ≥60天</span>
                  <div className="w-5 h-5 rounded-full bg-yellow-400 flex items-center justify-center text-slate-900 font-bold text-[10px] absolute -right-2 top-0 shadow-sm shadow-yellow-400/50">2</div>
                </div>
                <div className="w-full h-px bg-white/20 mx-auto"></div>
                <div className="h-12 flex flex-col items-center justify-center relative">
                  <span className="md:hidden text-[#B0C8F5] text-xs mb-1">无效数据</span>
                  <span className="font-bold text-lg">端侧AI过滤 (近乎无)</span>
                  <div className="w-5 h-5 rounded-full bg-yellow-400 flex items-center justify-center text-slate-900 font-bold text-[10px] absolute -right-2 top-0 shadow-sm shadow-yellow-400/50">3</div>
                </div>
                <div className="w-full h-px bg-white/20 mx-auto"></div>
                <div className="h-12 flex flex-col items-center justify-center">
                  <span className="md:hidden text-[#B0C8F5] text-xs mb-1">取证能力</span>
                  <span className="font-bold text-lg">高清彩色抓拍</span>
                </div>
                <div className="w-full h-px bg-white/20 mx-auto"></div>
                <div className="h-12 flex flex-col items-center justify-center">
                  <span className="md:hidden text-[#B0C8F5] text-xs mb-1">部署难度</span>
                  <span className="font-bold text-lg">生态伪装，免布线</span>
                </div>
                <div className="w-full h-px bg-white/20 mx-auto"></div>
                <div className="h-12 flex flex-col items-center justify-center">
                  <span className="md:hidden text-[#B0C8F5] text-xs mb-1">维护频率</span>
                  <span className="font-bold text-lg">极低 (数月一次)</span>
                </div>
              </div>
            </div>

            {/* 传统设备列 */}
            <div className="relative w-full md:w-80 bg-white dark:bg-slate-800 rounded-2xl md:rounded-l-none md:rounded-r-2xl border border-slate-200 dark:border-slate-700 shadow-lg mt-8 md:mt-0 flex flex-col overflow-hidden">
              <div className="h-32 flex flex-col items-center justify-center bg-slate-100 dark:bg-slate-900/50">
                <div className="bg-slate-700 dark:bg-slate-600 text-white px-6 py-2 rounded-full text-base font-bold tracking-wider">传统安防摄像头</div>
              </div>
              <div className="flex flex-col py-8 px-6 space-y-8 text-center text-slate-800 dark:text-slate-200 flex-1">
                <div className="h-12 flex flex-col items-center justify-center">
                  <span className="md:hidden text-slate-400 text-xs mb-1">感知方式</span>
                  <span className="font-semibold text-base">持续录像 / 高频唤醒</span>
                </div>
                <div className="w-full h-px bg-slate-200 dark:bg-slate-700 mx-auto"></div>
                <div className="h-12 flex flex-col items-center justify-center">
                  <span className="md:hidden text-slate-400 text-xs mb-1">功耗与续航</span>
                  <span className="font-semibold text-base">耗电大，需配太阳能板</span>
                </div>
                <div className="w-full h-px bg-slate-200 dark:bg-slate-700 mx-auto"></div>
                <div className="h-12 flex flex-col items-center justify-center">
                  <span className="md:hidden text-slate-400 text-xs mb-1">无效数据</span>
                  <span className="font-semibold text-base">海量 (风吹草动皆录)</span>
                </div>
                <div className="w-full h-px bg-slate-200 dark:bg-slate-700 mx-auto"></div>
                <div className="h-12 flex flex-col items-center justify-center">
                  <span className="md:hidden text-slate-400 text-xs mb-1">取证能力</span>
                  <span className="font-semibold text-base">找关键帧费时费力</span>
                </div>
                <div className="w-full h-px bg-slate-200 dark:bg-slate-700 mx-auto"></div>
                <div className="h-12 flex flex-col items-center justify-center">
                  <span className="md:hidden text-slate-400 text-xs mb-1">部署难度</span>
                  <span className="font-semibold text-base">需立杆，目标明显</span>
                </div>
                <div className="w-full h-px bg-slate-200 dark:bg-slate-700 mx-auto"></div>
                <div className="h-12 flex flex-col items-center justify-center">
                  <span className="md:hidden text-slate-400 text-xs mb-1">维护频率</span>
                  <span className="font-semibold text-base">高 (频繁换电池)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. 配套清单 (Packing List) */}
      <section id="packing-list" className="w-full py-20 bg-white dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">装箱清单</h2>
            <p className="text-slate-600 dark:text-slate-400">软硬一体，开箱即用的完整作战包</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch mb-12">
            {/* 装备箱 */}
            <div className="flex flex-col items-center p-8 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800 transition-colors">
              <div className="h-48 flex items-center justify-center w-full mb-6">
                <img src={boxImg} alt="电子哨兵装备箱" className="max-h-full object-contain hover:scale-105 transition-transform" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">设备 × 1</h3>
              <p className="text-sm text-slate-500 mt-2 text-center">内含主机、配套伪装套件、安装螺丝及用户指南</p>
            </div>

            {/* Web平板 */}
            <div className="flex flex-col items-center p-8 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800 transition-colors">
              <div className="h-48 flex items-center justify-center w-full mb-6">
                <img src={dashboardImg} alt="显控大屏" className="max-h-full object-contain hover:scale-105 transition-transform drop-shadow-md" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">显控大屏 / Web终端 × 1</h3>
              <p className="text-sm text-slate-500 mt-2 text-center">支持后台研判，GIS态势融合与告警轨迹分析</p>
            </div>

            {/* 移动端 APP Mockup */}
            <div className="flex flex-col items-center p-8 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800 transition-colors lg:col-span-1 md:col-span-2">
              <div className="h-48 flex flex-col justify-end w-full mb-6 overflow-hidden relative items-center">
                {/* 手机上半身留空，仅展示系统通知设置 UI 底部 */}
                <div className="w-56 h-44 rounded-t-3xl border-x-[6px] border-t-[6px] border-slate-800 bg-slate-100 overflow-hidden flex flex-col relative shadow-xl transform translate-y-2">
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
                    <span className="text-[11px] font-bold text-slate-800 flex-1 text-center pr-10">GuardX 视频</span>
                  </div>
                  <div className="flex-1 p-3 bg-slate-50">
                    <div className="bg-white px-3 py-2.5 rounded-lg border border-slate-200 flex justify-between items-center mb-3">
                      <span className="text-xs font-medium text-slate-800">允许通知</span>
                      <div className="w-10 h-6 bg-emerald-500 rounded-full relative shadow-inner">
                        <div className="absolute right-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow-sm"></div>
                      </div>
                    </div>
                    <div className="px-1">
                      <span className="text-[10px] text-slate-500 uppercase">提醒</span>
                      <div className="flex justify-between mt-3 px-2">
                        <div className="flex flex-col items-center gap-1.5">
                          <div className="w-8 h-12 bg-white rounded border border-slate-300 flex justify-center pt-2 relative">
                            <div className="w-4 h-1 bg-slate-200 rounded-full"></div>
                            <div className="absolute -bottom-2 w-3 h-3 bg-blue-500 rounded-full text-white flex items-center justify-center text-[8px] font-bold">✓</div>
                          </div>
                          <span className="text-[8px] text-slate-600 mt-1">锁定屏幕</span>
                        </div>
                        <div className="flex flex-col items-center gap-1.5">
                          <div className="w-8 h-12 bg-white rounded border border-slate-300 flex justify-center pt-2 relative">
                            <div className="w-6 h-4 bg-slate-200 rounded"></div>
                            <div className="absolute -bottom-2 w-3 h-3 bg-blue-500 rounded-full text-white flex items-center justify-center text-[8px] font-bold">✓</div>
                          </div>
                          <span className="text-[8px] text-slate-600 mt-1">通知中心</span>
                        </div>
                        <div className="flex flex-col items-center gap-1.5">
                          <div className="w-8 h-12 bg-white rounded border border-slate-300 flex justify-center pt-1 relative">
                            <div className="w-6 h-2 bg-slate-200 rounded-full"></div>
                            <div className="absolute -bottom-2 w-3 h-3 bg-blue-500 rounded-full text-white flex items-center justify-center text-[8px] font-bold">✓</div>
                          </div>
                          <span className="text-[8px] text-slate-600 mt-1">横幅</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">移动端 APP × 1</h3>
              <p className="text-sm text-slate-500 mt-2 text-center">实时接收消息推送，掌上掌控防区动态</p>
            </div>
          </div>
          
          <div className="bg-slate-50 dark:bg-slate-900/80 rounded-xl p-4 text-center border border-slate-200 dark:border-slate-800">
            <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">
              * 应用外消息推送功能需要开启手机系统通知权限
            </p>
          </div>
        </div>
      </section>

      {/* 9. 底部呼吁 (CTA) */}
      <section className="w-full py-16 text-center border-t border-slate-200 dark:border-slate-900 bg-white dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">开启智能、隐蔽、长续航的侦察新时代</h2>
          <p className="max-w-xl mx-auto text-sm text-slate-600 dark:text-slate-400">
            联系我们的产品专家，获取量身定制的行业部署方案与设备报价清单。
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-3 rounded-lg font-semibold transition-all shadow-md">
              联系我们
            </button>
            <button className="px-8 py-3 rounded-lg font-semibold border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-700 dark:text-slate-300 transition-all">
              下载产品手册
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}