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

const SpiritualEyes: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-slate-50 dark:bg-[#030712] min-h-screen text-slate-900 dark:text-slate-300 font-sans selection:bg-blue-500/30 selection:text-blue-900 dark:selection:text-blue-200 overflow-hidden transition-colors duration-300">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden border-b border-blue-200 dark:border-blue-900/30">
        {/* Background Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-400/20 dark:bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 dark:opacity-10 mix-blend-overlay pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600 dark:bg-blue-950/50 border border-blue-500 dark:border-blue-800/50 text-white dark:text-blue-400 text-sm font-medium mb-8 backdrop-blur-sm shadow-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-300 dark:bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-100 dark:bg-blue-500"></span>
            </span>
            隐私防护防泄密监控设备
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
            灵眸 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-500">Spiritual Eyes</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-12 font-light tracking-wide">
            一探设备，二识行为<br/>
            <span className="text-blue-600 dark:text-blue-400 font-medium">双模融合，精准告警</span>
          </p>

          <div className="w-full max-w-5xl mx-auto rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 shadow-[0_0_40px_rgba(37,99,235,0.1)] dark:shadow-[0_0_40px_rgba(37,99,235,0.15)] relative aspect-video flex items-center justify-center">
            {/* Image Placeholder */}
            <div className="text-center p-8">
              <Eye className="w-16 h-16 text-blue-500 dark:text-blue-700 mx-auto mb-4 opacity-50" />
              <p className="text-blue-600 font-mono text-sm">主视觉图占位 (建议尺寸: 1920x1080)</p>
              <p className="text-slate-500 text-xs mt-2 max-w-md mx-auto">请放置一张体现高科技、深蓝色调、带有红外/DVS感知特效的产品渲染图或应用场景合成图。</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- CORE PILLARS --- */}
      <section className="py-24 relative bg-white dark:bg-slate-950 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">全场景防泄密监控系统</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              首创 <span className="text-blue-600 dark:text-blue-400">“DVS事件相机 + IR红外传感”</span> 多模态融合架构，彻底颠覆传统依赖无线信号的检测手段。通过“设备探测+行为识别”双重锁定，从物理底层确保监控设备自身“零泄密”风险。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group p-8 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 dark:hover:border-blue-700/50 transition-colors relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 dark:bg-blue-600/10 blur-[40px] group-hover:bg-blue-200 dark:group-hover:bg-blue-500/20 transition-colors" />
              <div className="w-14 h-14 rounded-xl bg-blue-100 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400">
                <WifiOff className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">不怕断网，无惧屏蔽</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                突破传统信号检测盲区，不依赖WiFi、蓝牙或蜂窝网络信号。无论偷拍设备处于“飞行模式”、未插卡，还是在开启信号屏蔽仪的绝密会议室，依然精准识别。
              </p>
            </div>
            {/* Feature 2 */}
            <div className="group p-8 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 dark:hover:border-indigo-700/50 transition-colors relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-100 dark:bg-indigo-600/10 blur-[40px] group-hover:bg-indigo-200 dark:group-hover:bg-indigo-500/20 transition-colors" />
              <div className="w-14 h-14 rounded-xl bg-indigo-100 dark:bg-indigo-950 border border-indigo-200 dark:border-indigo-800 flex items-center justify-center mb-6 text-indigo-600 dark:text-indigo-400">
                <Crosshair className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">设备+行为 双重锁定</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                红外(IR)传感器敏锐捕捉光学设备特征；DVS事件相机毫秒级感知“举机、对准、按下快门”等动态偷拍行为。融合算法极速精准打击，误报率极低。
              </p>
            </div>
            {/* Feature 3 */}
            <div className="group p-8 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-sky-500/50 dark:hover:border-sky-700/50 transition-colors relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-100 dark:bg-sky-600/10 blur-[40px] group-hover:bg-sky-200 dark:group-hover:bg-sky-500/20 transition-colors" />
              <div className="w-14 h-14 rounded-xl bg-sky-100 dark:bg-sky-950 border border-sky-200 dark:border-sky-800 flex items-center justify-center mb-6 text-sky-600 dark:text-sky-400">
                <Lock className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">监控者不泄密</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                物理级隐私安全保障。DVS技术仅输出动态像素变化（轮廓与动作），不记录高清静态图像与文字细节，从硬件源头杜绝了“二次泄密”的可能。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- PRODUCT FORMS --- */}
      <section className="py-24 relative bg-slate-50 dark:bg-[#050b14] border-y border-slate-200 dark:border-slate-800/50 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">两大产品形态，全方位防护</h2>
            <p className="text-slate-600 dark:text-slate-400">从“固定空间”到“移动办公”，满足不同涉密等级与场景</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Pro Version */}
            <div className="bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-950 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col shadow-sm dark:shadow-none">
              <div className="p-10 pb-0 flex-grow">
                <div className="inline-block px-3 py-1 rounded-md bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-400 text-xs font-bold tracking-wider mb-4 border border-blue-200 dark:border-blue-800/50">PRO 版</div>
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">灵眸·穹顶</h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-6">固定式空间防卫</p>
                <ul className="space-y-4 text-slate-700 dark:text-slate-300 text-sm mb-8">
                  <li className="flex items-start gap-3"><span className="text-blue-500 dark:text-blue-500 mt-0.5">✦</span> <span><strong>部署形态：</strong> 房间顶部/墙壁隐蔽式固定安装</span></li>
                  <li className="flex items-start gap-3"><span className="text-blue-500 dark:text-blue-500 mt-0.5">✦</span> <span><strong>防护范围：</strong> 2米 ~ 8米中远距离广角覆盖</span></li>
                  <li className="flex items-start gap-3"><span className="text-blue-500 dark:text-blue-500 mt-0.5">✦</span> <span><strong>产品特性：</strong> 全天候无死角监控，支持多台组网联动，形成全屋防偷拍穹顶网络</span></li>
                </ul>
              </div>
              <div className="h-64 bg-slate-100 dark:bg-slate-900 relative border-t border-slate-200 dark:border-slate-800 flex items-center justify-center">
                 {/* Image Placeholder */}
                <div className="text-center px-4">
                  <p className="text-blue-600 dark:text-blue-700 font-mono text-sm mb-2">穹顶版产品图占位 (建议尺寸: 800x600)</p>
                  <p className="text-slate-500 dark:text-slate-600 text-xs">展示安装在天花板或墙角的固定式设备，体现广角覆盖感。</p>
                </div>
              </div>
            </div>

            {/* Air Version */}
            <div className="bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-950 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col shadow-sm dark:shadow-none">
              <div className="p-10 pb-0 flex-grow">
                <div className="inline-block px-3 py-1 rounded-md bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-400 text-xs font-bold tracking-wider mb-4 border border-indigo-200 dark:border-indigo-800/50">AIR 版</div>
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">灵眸·随行</h3>
                <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-6">便携夹戴式贴身护卫</p>
                <ul className="space-y-4 text-slate-700 dark:text-slate-300 text-sm mb-8">
                  <li className="flex items-start gap-3"><span className="text-indigo-500 mt-0.5">✦</span> <span><strong>部署形态：</strong> 迷你夹戴式设计（夹于屏幕上方、文件夹或随身放置）</span></li>
                  <li className="flex items-start gap-3"><span className="text-indigo-500 mt-0.5">✦</span> <span><strong>防护范围：</strong> 0.5米 ~ 2米近场精准防护</span></li>
                  <li className="flex items-start gap-3"><span className="text-indigo-500 mt-0.5">✦</span> <span><strong>产品特性：</strong> 即插即用超长待机，专防“背后偷拍”与“越肩窥视”，自带安全结界</span></li>
                </ul>
              </div>
              <div className="h-64 bg-slate-100 dark:bg-slate-900 relative border-t border-slate-200 dark:border-slate-800 flex items-center justify-center">
                 {/* Image Placeholder */}
                 <div className="text-center px-4">
                  <p className="text-indigo-600 dark:text-indigo-700 font-mono text-sm mb-2">随行版产品图占位 (建议尺寸: 800x600)</p>
                  <p className="text-slate-500 dark:text-slate-600 text-xs">展示夹在笔记本屏幕上或放置在桌面上的小巧便携设备。</p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">四大核心应用场景</h2>
              <p className="text-slate-600 dark:text-slate-400">针对高密级空间及行为，提供针对性的防泄密解决方案</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Scenario 1 */}
            <div className="group rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col sm:flex-row shadow-sm hover:shadow-md transition-shadow">
              <div className="sm:w-2/5 h-48 sm:h-auto bg-slate-200 dark:bg-slate-800 relative flex items-center justify-center border-b sm:border-b-0 sm:border-r border-slate-300 dark:border-slate-700">
                <div className="text-center p-4">
                  <Briefcase className="w-8 h-8 text-slate-400 dark:text-slate-600 mx-auto mb-2" />
                  <p className="text-slate-500 text-xs font-mono">场景图 600x600</p>
                </div>
              </div>
              <div className="p-6 sm:w-3/5">
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">涉密办公室</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2">防范内部人员违规携带手机、录音笔等设备进入并实施偷拍、录音。</p>
                <div className="space-y-1">
                  <p className="text-xs text-slate-500 dark:text-slate-500 flex items-center gap-2"><AlertTriangle className="w-3 h-3 text-red-500 dark:text-red-400/70"/> 手机带入涉密办公区</p>
                  <p className="text-xs text-slate-500 dark:text-slate-500 flex items-center gap-2"><AlertTriangle className="w-3 h-3 text-red-500 dark:text-red-400/70"/> 拍摄电脑屏幕、文件资料</p>
                </div>
              </div>
            </div>

            {/* Scenario 2 */}
            <div className="group rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col sm:flex-row shadow-sm hover:shadow-md transition-shadow">
              <div className="sm:w-2/5 h-48 sm:h-auto bg-slate-200 dark:bg-slate-800 relative flex items-center justify-center border-b sm:border-b-0 sm:border-r border-slate-300 dark:border-slate-700">
                <div className="text-center p-4">
                  <Users className="w-8 h-8 text-slate-400 dark:text-slate-600 mx-auto mb-2" />
                  <p className="text-slate-500 text-xs font-mono">场景图 600x600</p>
                </div>
              </div>
              <div className="p-6 sm:w-3/5">
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">保密会议室</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2">防止会议内容、汇报材料、投影屏幕被违规拍摄或桌面下隐蔽录音。</p>
                <div className="space-y-1">
                  <p className="text-xs text-slate-500 dark:text-slate-500 flex items-center gap-2"><AlertTriangle className="w-3 h-3 text-red-500 dark:text-red-400/70"/> 参会人员举手机拍屏幕</p>
                  <p className="text-xs text-slate-500 dark:text-slate-500 flex items-center gap-2"><AlertTriangle className="w-3 h-3 text-red-500 dark:text-red-400/70"/> 会议资料被快速翻拍</p>
                </div>
              </div>
            </div>

            {/* Scenario 3 */}
            <div className="group rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col sm:flex-row shadow-sm hover:shadow-md transition-shadow">
              <div className="sm:w-2/5 h-48 sm:h-auto bg-slate-200 dark:bg-slate-800 relative flex items-center justify-center border-b sm:border-b-0 sm:border-r border-slate-300 dark:border-slate-700">
                <div className="text-center p-4">
                  <Building2 className="w-8 h-8 text-slate-400 dark:text-slate-600 mx-auto mb-2" />
                  <p className="text-slate-500 text-xs font-mono">场景图 600x600</p>
                </div>
              </div>
              <div className="p-6 sm:w-3/5">
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">核心研发中心</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2">防止技术图纸、算法代码、实验数据、样机信息等敏感资料被拍摄外传。</p>
                <div className="space-y-1">
                  <p className="text-xs text-slate-500 dark:text-slate-500 flex items-center gap-2"><AlertTriangle className="w-3 h-3 text-red-500 dark:text-red-400/70"/> 手机偷拍研发屏幕</p>
                  <p className="text-xs text-slate-500 dark:text-slate-500 flex items-center gap-2"><AlertTriangle className="w-3 h-3 text-red-500 dark:text-red-400/70"/> 拍摄实验设备或样机</p>
                </div>
              </div>
            </div>

            {/* Scenario 4 */}
            <div className="group rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col sm:flex-row shadow-sm hover:shadow-md transition-shadow">
              <div className="sm:w-2/5 h-48 sm:h-auto bg-slate-200 dark:bg-slate-800 relative flex items-center justify-center border-b sm:border-b-0 sm:border-r border-slate-300 dark:border-slate-700">
                <div className="text-center p-4">
                  <Database className="w-8 h-8 text-slate-400 dark:text-slate-600 mx-auto mb-2" />
                  <p className="text-slate-500 text-xs font-mono">场景图 600x600</p>
                </div>
              </div>
              <div className="p-6 sm:w-3/5">
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">机房、档案室</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2">对进入高密级空间人员的电子设备携带与可疑操作行为进行持续感知。</p>
                <div className="space-y-1">
                  <p className="text-xs text-slate-500 dark:text-slate-500 flex items-center gap-2"><AlertTriangle className="w-3 h-3 text-red-500 dark:text-red-400/70"/> 拍摄服务器/网络拓扑</p>
                  <p className="text-xs text-slate-500 dark:text-slate-500 flex items-center gap-2"><AlertTriangle className="w-3 h-3 text-red-500 dark:text-red-400/70"/> 私自复制记录涉密内容</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-12 text-center">多模态融合，降维打击传统方案</h2>
            
            {/* Image Comparison Placeholder */}
            <div className="mb-16 bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 flex flex-col md:flex-row gap-6 items-center shadow-sm">
               <div className="flex-1 w-full aspect-video bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg flex items-center justify-center relative">
                  <div className="absolute top-2 left-2 bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs px-2 py-1 rounded">普通摄像头画面</div>
                  <div className="text-center">
                    <p className="text-slate-500 font-mono text-sm">对比图占位 (600x400)</p>
                    <p className="text-slate-500 dark:text-slate-600 text-xs mt-1">清晰可见桌上文件（二次泄密风险）</p>
                  </div>
               </div>
               <div className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 font-bold border border-slate-200 dark:border-slate-700 shadow-inner">VS</div>
               <div className="flex-1 w-full aspect-video bg-blue-50 dark:bg-slate-950 border border-blue-300 dark:border-blue-800/50 rounded-lg flex items-center justify-center relative shadow-[0_0_20px_rgba(37,99,235,0.05)] dark:shadow-[0_0_20px_rgba(37,99,235,0.1)]">
                  <div className="absolute top-2 left-2 bg-blue-600 dark:bg-blue-950 text-white dark:text-blue-400 border border-blue-500 dark:border-blue-800/50 text-xs px-2 py-1 rounded shadow-sm">灵眸 DVS事件相机画面</div>
                  <div className="text-center">
                    <p className="text-blue-600 dark:text-blue-700 font-mono text-sm">对比图占位 (600x400)</p>
                    <p className="text-blue-800 dark:text-blue-900 text-xs mt-1">仅显示人体动作轮廓，无字迹细节</p>
                  </div>
               </div>
            </div>

            {/* Performance Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 text-center hover:border-blue-400 dark:hover:border-blue-800/50 transition-colors shadow-sm">
                <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">≤ 3秒</div>
                <div className="text-blue-600 dark:text-blue-400 text-sm mb-2 font-medium">极速响应</div>
                <p className="text-slate-500 text-xs">毫秒级抓拍，秒级响应</p>
              </div>
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 text-center hover:border-blue-400 dark:hover:border-blue-800/50 transition-colors shadow-sm">
                <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">8米</div>
                <div className="text-blue-600 dark:text-blue-400 text-sm mb-2 font-medium">探测纵深</div>
                <p className="text-slate-500 text-xs">0.5m-8m 广角覆盖防护</p>
              </div>
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 text-center hover:border-blue-400 dark:hover:border-blue-800/50 transition-colors shadow-sm">
                <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">≥ 80%</div>
                <div className="text-blue-600 dark:text-blue-400 text-sm mb-2 font-medium">识别精度</div>
                <p className="text-slate-500 text-xs">复杂光线与遮挡环境适用</p>
              </div>
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 text-center hover:border-blue-400 dark:hover:border-blue-800/50 transition-colors shadow-sm">
                <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">≤ 10%</div>
                <div className="text-blue-600 dark:text-blue-400 text-sm mb-2 font-medium">极低误报率</div>
                <p className="text-slate-500 text-xs">精准过滤喝水挠头等日常动作</p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default SpiritualEyes;