import React, { useEffect } from 'react';
import { 
  Server, 
  ShieldCheck, 
  FileText, 
  Mic, 
  Cpu, 
  HardDrive, 
  Fingerprint, 
  Building, 
  Briefcase, 
  Users, 
  CheckCircle,
  Database,
  ArrowRight
} from 'lucide-react';

const AiOfficeBox: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-slate-50 dark:bg-[#09090b] min-h-screen text-slate-900 dark:text-slate-300 font-sans selection:bg-purple-500/30 selection:text-purple-900 dark:selection:text-purple-200 overflow-hidden transition-colors duration-300">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden border-b border-purple-100 dark:border-purple-900/20 bg-gradient-to-b from-purple-50/50 to-transparent dark:from-purple-900/10 dark:to-transparent">
        {/* Background Effects */}
        <div className="absolute top-0 right-1/4 w-[800px] h-[400px] bg-purple-400/20 dark:bg-purple-600/20 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute top-40 left-1/4 w-[600px] h-[300px] bg-indigo-400/10 dark:bg-indigo-600/10 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/50 border border-purple-200 dark:border-purple-700/50 text-purple-700 dark:text-purple-300 text-sm font-medium mb-8 backdrop-blur-sm shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
              </span>
              本地化大模型软硬一体产品
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight leading-tight">
              Secure AI OfficeBox <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400">
                安全防护 AI 办公一体机
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-10 font-light tracking-wide">
              让不能上云的涉密资料，<br className="md:hidden" />也能安全使用大模型。
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-16">
              {['本地部署', '专用介质导入', '脱敏反脱敏', 'AI会议纪要'].map((tag) => (
                <span key={tag} className="px-4 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 text-sm shadow-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="w-full max-w-5xl mx-auto rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 shadow-2xl dark:shadow-[0_0_50px_rgba(147,51,234,0.1)] relative aspect-video flex items-center justify-center group">
            {/* Image Placeholder */}
            <div className="text-center p-8 transition-transform group-hover:scale-105 duration-500">
              <Server className="w-16 h-16 text-purple-500 dark:text-purple-400 mx-auto mb-4 opacity-80" />
              <p className="text-purple-700 dark:text-purple-300 font-mono text-sm font-medium">产品外观渲染图占位 (建议尺寸: 1920x1080)</p>
              <p className="text-slate-500 dark:text-slate-500 text-xs mt-3 max-w-md mx-auto leading-relaxed">
                放置一张工业化精美盒子，带有小型LED状态屏和实体录音按钮，放置在政企桌面或机房环境。屏幕显示“本地大模型运行中”。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- CORE TECH ADVANTAGES --- */}
      <section className="py-24 relative bg-white dark:bg-[#09090b] transition-colors duration-300">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">核心技术优势</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
              通过国产化AI芯片与本地端侧大模型，彻底解决高安全单位“想用 AI 但不能上云”的核心痛点。
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Advantage 1 */}
            <div className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800/60 hover:shadow-lg dark:hover:border-purple-500/30 transition-all group">
              <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center mb-6 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">软硬一体化工业设计</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                精美工业化盒子形态，配备小型LED状态屏与实体录音按钮。免部署、免调试，支持办公室桌面、项目组或内网机房灵活部署，开箱即用。
              </p>
            </div>
            
            {/* Advantage 2 */}
            <div className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800/60 hover:shadow-lg dark:hover:border-purple-500/30 transition-all group">
              <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center mb-6 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">文本脱敏与反脱敏引擎</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                导入时自动对人名、地名、涉密代号进行遮蔽泛化。AI生成初稿后，授权用户可一键将脱敏词汇恢复为原文，兼顾推理安全与材料可用性。
              </p>
            </div>

            {/* Advantage 3 */}
            <div className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800/60 hover:shadow-lg dark:hover:border-purple-500/30 transition-all group">
              <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center mb-6 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform">
                <Database className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">本地 8B 大模型与 RAG</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                内置高性能端侧大模型，结合检索增强生成（RAG），实现精准文档解析、语义检索、多文档对比与答案溯源（直接显示引用来源）。
              </p>
            </div>

            {/* Advantage 4 */}
            <div className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800/60 hover:shadow-lg dark:hover:border-purple-500/30 transition-all group">
              <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center mb-6 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform">
                <HardDrive className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">专用介质安全导入</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                支持加密U盘、涉密红盘等专用移动存储介质。系统自动执行文件校验、病毒查杀与导入权限控制，确保资料流转合规。
              </p>
            </div>

            {/* Advantage 5 */}
            <div className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800/60 hover:shadow-lg dark:hover:border-purple-500/30 transition-all group lg:col-span-2">
              <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center mb-6 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform">
                <Fingerprint className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">细粒度权限管控与全量审计</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-2xl">
                提供完善的用户角色管理与知识库权限隔离。所有导入、问答、材料生成、脱敏/反脱敏、导出操作均记录在案生成完整日志，满足高安全单位最严格的审计要求。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SCENARIOS (DingTalk Style Wide Cards) --- */}
      <section className="py-24 relative bg-slate-50 dark:bg-slate-900/20 border-y border-slate-200 dark:border-slate-800/50 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">四大核心应用场景</h2>
            <p className="text-slate-600 dark:text-slate-400">将海量涉密数据转化为本地生产力</p>
          </div>

          <div className="space-y-8 max-w-6xl mx-auto">
            
            {/* Scenario 1 */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex-1 space-y-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 mb-2">
                  <Building className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">央企总部/政府机关职能部门材料助手</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  撰写工作总结、领导汇报、制度解读、年度规划。
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                    <CheckCircle className="w-5 h-5 text-purple-500 shrink-0" />
                    <span>将海量历史文档转化为本地知识库，快速查阅政策依据。</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                    <CheckCircle className="w-5 h-5 text-purple-500 shrink-0" />
                    <span>一键生成汇报材料初稿，大幅缩减起草时间。</span>
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-2/5 aspect-video bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-100 dark:border-slate-800 flex items-center justify-center">
                <div className="text-center px-4">
                  <FileText className="w-10 h-10 text-slate-300 dark:text-slate-700 mx-auto mb-2" />
                  <p className="text-slate-500 dark:text-slate-600 text-xs font-mono">场景图占位 (800x600)</p>
                </div>
              </div>
            </div>

            {/* Scenario 2 */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row-reverse items-center gap-10 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex-1 space-y-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 mb-2">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">研究院项目申报与技术方案助手</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  撰写项目申报材料、技术方案、阶段总结、验收材料。
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                    <CheckCircle className="w-5 h-5 text-indigo-500 shrink-0" />
                    <span>敏感技术资料本地化处理，通过脱敏引擎保护核心数据。</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                    <CheckCircle className="w-5 h-5 text-indigo-500 shrink-0" />
                    <span>辅助科研人员快速提炼技术路线与项目大纲。</span>
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-2/5 aspect-video bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-100 dark:border-slate-800 flex items-center justify-center">
                <div className="text-center px-4">
                  <FileText className="w-10 h-10 text-slate-300 dark:text-slate-700 mx-auto mb-2" />
                  <p className="text-slate-500 dark:text-slate-600 text-xs font-mono">场景图占位 (800x600)</p>
                </div>
              </div>
            </div>

            {/* Scenario 3 & 4 Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Scenario 3 */}
              <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-10 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-6">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">军工/涉密项目组过程文档管理</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-grow">
                  管理项目长周期内产生的会议纪要、测试记录、问题清单。保障项目资料不出内网，强化知识沉淀，支持过程可追溯和操作审计。
                </p>
                <div className="w-full h-40 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-100 dark:border-slate-800 flex items-center justify-center mt-auto">
                  <p className="text-slate-500 dark:text-slate-600 text-xs font-mono">场景配图 (600x400)</p>
                </div>
              </div>

              {/* Scenario 4 */}
              <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-10 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-fuchsia-50 dark:bg-fuchsia-900/30 text-fuchsia-600 dark:text-fuchsia-400 mb-6">
                  <Mic className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">保密会议记录与纪要生成</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-grow">
                  适用于涉密会议、封闭评标、核心讨论会。通过设备实体按键一键录音，会后自动转写文字并生成结构化会议纪要、提取待办事项。
                </p>
                <div className="w-full h-40 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-100 dark:border-slate-800 flex items-center justify-center mt-auto">
                  <p className="text-slate-500 dark:text-slate-600 text-xs font-mono">场景配图 (600x400)</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- CONCLUSION CTA --- */}
      <section className="py-24 relative bg-purple-900 dark:bg-purple-950 overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-600 rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-600 rounded-full blur-[100px]"></div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-4xl mx-auto bg-white/10 dark:bg-black/20 backdrop-blur-md border border-white/20 p-12 rounded-3xl shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-relaxed">
              普通大模型解决<span className="text-purple-300">“通用提效”</span>问题，<br />
              Secure AI OfficeBox 解决<span className="text-purple-300 border-b-2 border-purple-400 pb-1">“高安全环境下的合规提效”</span>问题。
            </h2>
            <button className="inline-flex items-center gap-2 bg-white text-purple-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-purple-50 transition-colors shadow-lg group">
              获取本地化部署方案
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AiOfficeBox;