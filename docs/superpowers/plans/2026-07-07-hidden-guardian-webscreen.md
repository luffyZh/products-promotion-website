# 隐卫 Web 大屏模块实现计划

> **面向 AI 代理的工作者：** 必需子技能：使用 superpowers:subagent-driven-development（推荐）或 superpowers:executing-plans 逐任务实现此计划。步骤使用复选框（`- [ ]`）语法来跟踪进度。

**目标：** 在隐卫页面新增一个 Web 大屏模块，使用真实素材展示统一总控能力，并补齐三套国际化文案。

**架构：** 在 `SpiritualEyes.tsx` 中新增一个独立 section，插入到“产品形态”和“四大核心场景”之间，采用左文右图布局。文案新增到 `spiritualEyes` 命名空间下，右侧接入 `web-screen.png`，验证方式以 `npm run build` 和编辑器诊断为准。

**技术栈：** React、TypeScript、Tailwind CSS、Vite、i18next

---

### 任务 1：接入大屏素材并搭建页面区块

**文件：**
- 修改：`/Users/luffyzh/luffyzh/github/nanhu/products-promotion-website/src/pages/SpiritualEyes.tsx`

- [ ] **步骤 1：读取现有页面中产品形态与场景模块的边界**

运行：查看 `SpiritualEyes.tsx` 中 `PRODUCT FORMS` 与 `SCENARIOS` 之间的代码区域。  
预期：确认新 section 插入在两者之间，不影响现有 Hero、场景和技术对比区块。

- [ ] **步骤 2：引入 Web 大屏图片素材**

```tsx
import webScreenImage from '../assets/hidden-guard/web-screen.png';
```

- [ ] **步骤 3：新增 Web 大屏 section 基础骨架**

```tsx
<section className="py-24 relative bg-white dark:bg-slate-950 transition-colors duration-300">
  <div className="container mx-auto px-6 max-w-7xl">
    <div className="grid lg:grid-cols-[0.92fr_1.08fr] gap-10 items-center">
      <div>{/* 文案区 */}</div>
      <div>{/* 图片区 */}</div>
    </div>
  </div>
</section>
```

- [ ] **步骤 4：在右侧图片区接入真实大屏图片**

```tsx
<div className="rounded-[28px] border border-slate-200 dark:border-slate-800 bg-gradient-to-br from-slate-950 to-[#07142b] p-3 shadow-[0_24px_60px_rgba(15,23,42,0.18)]">
  <div className="overflow-hidden rounded-[22px] border border-blue-400/20">
    <img
      src={webScreenImage}
      alt={t('spiritualEyes.webscreenTitle')}
      className="h-full w-full object-cover"
    />
  </div>
</div>
```

- [ ] **步骤 5：运行诊断，确认素材导入与 JSX 结构没有报错**

运行：获取 `file:///Users/luffyzh/luffyzh/github/nanhu/products-promotion-website/src/pages/SpiritualEyes.tsx` 的诊断。  
预期：无新增导入错误、无 JSX 结构错误。

### 任务 2：完善左侧文案与能力点结构

**文件：**
- 修改：`/Users/luffyzh/luffyzh/github/nanhu/products-promotion-website/src/pages/SpiritualEyes.tsx`

- [ ] **步骤 1：添加左侧标签、标题和副标题**

```tsx
<div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-semibold tracking-[0.14em] text-blue-700 dark:border-blue-900/60 dark:bg-blue-950/40 dark:text-blue-300">
  {t('spiritualEyes.webscreenBadge')}
</div>
<h2 className="mt-6 text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
  {t('spiritualEyes.webscreenTitle')}
</h2>
<p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">
  {t('spiritualEyes.webscreenSubtitle')}
</p>
```

- [ ] **步骤 2：添加 3 个能力点列表**

```tsx
[
  {
    title: t('spiritualEyes.webscreenFeature1Title'),
    desc: t('spiritualEyes.webscreenFeature1Desc')
  },
  {
    title: t('spiritualEyes.webscreenFeature2Title'),
    desc: t('spiritualEyes.webscreenFeature2Desc')
  },
  {
    title: t('spiritualEyes.webscreenFeature3Title'),
    desc: t('spiritualEyes.webscreenFeature3Desc')
  }
].map((item) => (
  <div key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-900/60">
    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{item.title}</h3>
    <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{item.desc}</p>
  </div>
))
```

- [ ] **步骤 3：微调整体视觉层次，避免与后面对比模块重复**

```tsx
<section className="py-24 relative bg-gradient-to-b from-slate-50 to-white dark:from-[#040b18] dark:to-slate-950 border-y border-slate-200 dark:border-slate-800/50 transition-colors duration-300">
```

- [ ] **步骤 4：运行诊断确认无新增 JSX / TypeScript 问题**

运行：获取 `file:///Users/luffyzh/luffyzh/github/nanhu/products-promotion-website/src/pages/SpiritualEyes.tsx` 的诊断。  
预期：无新增诊断。

### 任务 3：补齐国际化文案并验证构建

**文件：**
- 修改：`/Users/luffyzh/luffyzh/github/nanhu/products-promotion-website/src/i18n/locales/zh-CN.json`
- 修改：`/Users/luffyzh/luffyzh/github/nanhu/products-promotion-website/src/i18n/locales/en.json`
- 修改：`/Users/luffyzh/luffyzh/github/nanhu/products-promotion-website/src/i18n/locales/ar.json`

- [ ] **步骤 1：在中文文案中新增 Web 大屏模块相关键**

```json
"webscreenBadge": "SYSTEM OVERVIEW",
"webscreenTitle": "隐卫 · 实时监控大屏",
"webscreenSubtitle": "房间态势、设备在线、实时告警、处置回流，一屏掌握。",
"webscreenFeature1Title": "空间态势总览",
"webscreenFeature1Desc": "面向房间、区域和设备点位，统一查看部署状态、空间分布与风险热区。",
"webscreenFeature2Title": "实时告警联动",
"webscreenFeature2Desc": "偷拍识别结果、风险事件与告警流同步汇聚上屏，做到发现即上屏、告警即联动。",
"webscreenFeature3Title": "事件闭环追踪",
"webscreenFeature3Desc": "支持查看历史告警、处置状态与事件留痕，让风险处理可追溯、可复盘。"
```

- [ ] **步骤 2：同步补齐英文文案**

```json
"webscreenBadge": "SYSTEM OVERVIEW",
"webscreenTitle": "Hidden Guardian Monitoring Dashboard",
"webscreenSubtitle": "Room status, device online state, live alerts, and response updates, all in one screen.",
"webscreenFeature1Title": "Spatial Situation Overview",
"webscreenFeature1Desc": "View room layouts, device positions, deployment status, and risk hotspots from one unified dashboard.",
"webscreenFeature2Title": "Live Alert Coordination",
"webscreenFeature2Desc": "Spy-shot detection results, risk events, and alert streams are aggregated in real time for immediate response.",
"webscreenFeature3Title": "Closed-Loop Event Tracking",
"webscreenFeature3Desc": "Review alert history, handling status, and audit trails so every incident remains traceable and reviewable."
```

- [ ] **步骤 3：同步补齐阿拉伯语文案**

```json
"webscreenBadge": "SYSTEM OVERVIEW",
"webscreenTitle": "لوحة المراقبة الفورية لـ Hidden Guardian",
"webscreenSubtitle": "حالة الغرف، واتصال الأجهزة، والتنبيهات الفورية، وتحديثات المعالجة، كلها على شاشة واحدة.",
"webscreenFeature1Title": "نظرة شاملة على الوضع المكاني",
"webscreenFeature1Desc": "عرض توزيع الغرف ومواقع الأجهزة وحالة النشر ومناطق الخطر من خلال لوحة موحدة واحدة.",
"webscreenFeature2Title": "تنسيق التنبيهات الفورية",
"webscreenFeature2Desc": "تتجمع نتائج كشف التصوير السري والأحداث الخطرة وتدفقات التنبيه على الشاشة في الوقت الفعلي للاستجابة الفورية.",
"webscreenFeature3Title": "تتبع مغلق الحلقة للأحداث",
"webscreenFeature3Desc": "راجع سجل التنبيهات وحالة المعالجة وآثار التدقيق بحيث تبقى كل حادثة قابلة للتتبع والمراجعة."
```

- [ ] **步骤 4：运行构建验证所有语言文件和页面代码**

运行：`npm run build`  
预期：构建通过，仅允许已有的大资源体积告警存在。

- [ ] **步骤 5：检查本次变更文件的编辑器诊断**

运行：获取以下文件的诊断：
- `file:///Users/luffyzh/luffyzh/github/nanhu/products-promotion-website/src/pages/SpiritualEyes.tsx`
- `file:///Users/luffyzh/luffyzh/github/nanhu/products-promotion-website/src/i18n/locales/zh-CN.json`
- `file:///Users/luffyzh/luffyzh/github/nanhu/products-promotion-website/src/i18n/locales/en.json`
- `file:///Users/luffyzh/luffyzh/github/nanhu/products-promotion-website/src/i18n/locales/ar.json`

预期：无新增诊断。

- [ ] **步骤 6：提交实现**

```bash
git add src/pages/SpiritualEyes.tsx src/i18n/locales/zh-CN.json src/i18n/locales/en.json src/i18n/locales/ar.json
git commit -m "feat: add hidden guardian webscreen module"
```
