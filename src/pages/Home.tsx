import { Link } from 'react-router-dom';
import { Shield, ChevronRight, ArrowRight, Cpu, Eye } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex-1 flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative w-full py-24 lg:py-32 overflow-hidden bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-8">
          <h1 className="text-5xl lg:text-7xl font-black tracking-tight text-slate-900 dark:text-white">
            赋能行业，<span className="text-emerald-600 dark:text-emerald-500">感知未来</span>
          </h1>
          <p className="text-lg lg:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            中国电子科技南湖研究院致力于打造下一代类脑智能方案。我们通过前沿的 AI 与低功耗技术，为复杂场景提供极致可靠的产品体验。
          </p>
          <div className="flex justify-center gap-4 pt-4">
            <a href="#products" className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-3 rounded-full font-semibold transition-all shadow-lg flex items-center gap-2">
              探索我们的产品 <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="w-full py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">明星产品</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              专为极端环境与严苛需求打造的智能设备线
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
                <h3 className="text-white text-xl font-bold tracking-wider z-10">GUARDX 电子哨兵</h3>
                <p className="text-emerald-400/80 text-sm mt-2 z-10">超低功耗智能侦察终端</p>
              </div>
              <div className="p-6">
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">GuardX 电子哨兵</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 line-clamp-2">
                  有动才报，长时值守。专为野外无电无网环境设计的微瓦级待机智能侦察设备，支持端侧AI识别。
                </p>
                <div className="flex items-center text-emerald-600 dark:text-emerald-500 font-semibold text-sm group-hover:gap-2 transition-all">
                  了解详情 <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </Link>

            {/* Product 2: Placeholder */}
            <div className="group block p-1 rounded-2xl bg-gradient-to-b from-slate-100 to-white dark:from-slate-800 dark:to-slate-900 border border-slate-200 dark:border-slate-800 transition-all duration-300 opacity-80">
              <div className="bg-slate-800 dark:bg-slate-900 rounded-xl aspect-video p-6 flex flex-col items-center justify-center relative overflow-hidden">
                <Cpu className="w-16 h-16 text-slate-400 dark:text-slate-600 mb-4" />
                <h3 className="text-slate-300 dark:text-slate-500 text-xl font-bold tracking-wider z-10">AI 边缘盒子</h3>
                <p className="text-slate-400/80 dark:text-slate-600 text-sm mt-2 z-10">即将推出</p>
              </div>
              <div className="p-6">
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">EdgeAI 计算平台</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 line-clamp-2">
                  强大的边缘计算能力，为前端感知设备提供算力支撑，实现海量数据本地化分析处理。
                </p>
                <div className="flex items-center text-slate-400 dark:text-slate-600 font-semibold text-sm">
                  敬请期待
                </div>
              </div>
            </div>

            {/* Product 3: Placeholder */}
            <div className="group block p-1 rounded-2xl bg-gradient-to-b from-slate-100 to-white dark:from-slate-800 dark:to-slate-900 border border-slate-200 dark:border-slate-800 transition-all duration-300 opacity-80">
              <div className="bg-slate-800 dark:bg-slate-900 rounded-xl aspect-video p-6 flex flex-col items-center justify-center relative overflow-hidden">
                <Eye className="w-16 h-16 text-slate-400 dark:text-slate-600 mb-4" />
                <h3 className="text-slate-300 dark:text-slate-500 text-xl font-bold tracking-wider z-10">全景态势雷达</h3>
                <p className="text-slate-400/80 dark:text-slate-600 text-sm mt-2 z-10">即将推出</p>
              </div>
              <div className="p-6">
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">OmniRadar 监测系统</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 line-clamp-2">
                  360度无死角态势感知，融合雷达与视觉双重探测技术，适应各种恶劣天气环境。
                </p>
                <div className="flex items-center text-slate-400 dark:text-slate-600 font-semibold text-sm">
                  敬请期待
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}