# AI OfficeBox Agent 模块替换实现计划

> **面向 AI 代理的工作者：** 必需子技能：使用 superpowers:subagent-driven-development（推荐）或 superpowers:executing-plans 逐任务实现此计划。步骤使用复选框（`- [ ]`）语法来跟踪进度。

**目标：** 将 `AiOfficeBox` 页面的 Agent 模块替换为左侧轻量 `hover` 列表和右侧真实图片联动展示。

**架构：** 继续沿用 `AiOfficeBox.tsx` 内的单文件页面结构，保留现有 `activeAgent` 状态作为单一数据源。将左侧列表配置与右侧图片映射收敛到同一数组，用真实图片容器替换 `PlaceholderCard` 分支，并以 `onMouseEnter + onClick` 实现桌面端和移动端交互。

**技术栈：** React、TypeScript、Tailwind CSS、Vite

---

### 任务 1：整理素材与模块数据源

**文件：**
- 修改：`/Users/luffyzh/luffyzh/github/nanhu/products-promotion-website/src/pages/AiOfficeBox.tsx`

- [ ] **步骤 1：引入 4 张 Agent 模块图片素材**

```tsx
import agentDocImage from '../assets/ai-officebox/01-doc.png';
import agentKnowledgeImage from '../assets/ai-officebox/02-knowledge.png';
import agentMeetingImage from '../assets/ai-officebox/03-record.png';
import agentComplianceImage from '../assets/ai-officebox/04-docvalid.png';
```

- [ ] **步骤 2：将左侧列表和右侧图片统一为同一份配置**

```tsx
const agentItems = [
  {
    key: 'doc' as const,
    icon: FileText,
    title: t('aiOfficeBox.agent1.title'),
    desc: t('aiOfficeBox.agent1.desc'),
    image: agentDocImage
  },
  {
    key: 'kb' as const,
    icon: FileSearch,
    title: t('aiOfficeBox.agent2.title'),
    desc: t('aiOfficeBox.agent2.desc'),
    image: agentKnowledgeImage
  }
];
```

- [ ] **步骤 3：从配置中推导当前项**

```tsx
const currentAgent = agentItems.find((item) => item.key === activeAgent) ?? agentItems[0];
```

- [ ] **步骤 4：运行构建，确认素材导入和类型无误**

运行：`npm run build`  
预期：`AiOfficeBox.tsx` 无类型错误，图片导入正常参与构建。

### 任务 2：替换左侧交互样式与右侧展示区

**文件：**
- 修改：`/Users/luffyzh/luffyzh/github/nanhu/products-promotion-website/src/pages/AiOfficeBox.tsx`

- [ ] **步骤 1：将左侧按钮替换为轻量导航样式**

```tsx
<button
  type="button"
  onMouseEnter={() => setActiveAgent(item.key)}
  onClick={() => setActiveAgent(item.key)}
  className={`group w-full rounded-3xl p-5 text-left transition-all duration-300 ${
    active
      ? 'bg-white shadow-[0_12px_30px_rgba(88,82,156,0.08)] ring-1 ring-slate-200 dark:bg-white/8 dark:ring-white/10'
      : 'bg-transparent hover:bg-white/70 dark:hover:bg-white/5'
  }`}
>
```

- [ ] **步骤 2：保留图标，但削弱默认态存在感**

```tsx
<div
  className={`flex h-11 w-11 items-center justify-center rounded-2xl transition-colors ${
    active
      ? 'bg-purple-100 text-purple-700 dark:bg-purple-500/15 dark:text-purple-200'
      : 'bg-slate-100 text-slate-500 dark:bg-white/5 dark:text-slate-400'
  }`}
>
  <item.icon className="h-5 w-5" />
</div>
```

- [ ] **步骤 3：用真实图片容器替换现有 `PlaceholderCard`**

```tsx
<div className="relative h-full overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-xl dark:border-slate-800 dark:bg-white/5">
  <img
    src={currentAgent.image}
    alt={currentAgent.title}
    className="h-full w-full object-cover"
  />
</div>
```

- [ ] **步骤 4：为右侧图片容器补充统一的比例、圆角和背景**

```tsx
<div className="lg:col-span-7">
  <div className="h-full min-h-[360px] rounded-[28px] bg-gradient-to-br from-slate-100 to-purple-50 p-3 dark:from-white/5 dark:to-purple-500/5">
```

- [ ] **步骤 5：运行构建验证页面可编译**

运行：`npm run build`  
预期：构建通过，模块不再依赖 `placeholderAgent*` 条件渲染。

### 任务 3：清理、诊断与提交

**文件：**
- 修改：`/Users/luffyzh/luffyzh/github/nanhu/products-promotion-website/src/pages/AiOfficeBox.tsx`

- [ ] **步骤 1：检查 `AiOfficeBox.tsx` 诊断**

运行：获取 `file:///Users/luffyzh/luffyzh/github/nanhu/products-promotion-website/src/pages/AiOfficeBox.tsx` 的编辑器诊断。  
预期：没有新增 TypeScript / JSX 诊断。

- [ ] **步骤 2：执行最终构建验证**

运行：`npm run build`  
预期：构建通过，仅允许已有的大资源体积告警存在。

- [ ] **步骤 3：提交实现**

```bash
git add src/pages/AiOfficeBox.tsx
git commit -m "feat: refresh ai officebox agent module"
```
