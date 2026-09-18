# 简历大师 · ResumeMaster

> **永久免费的在线简历生成器** —— 数据全部留在你自己的浏览器里，不上传服务器；不用注册、不收费、无自动续费；自带 **ATS 机器筛选检测**，帮你过企业机筛、更快到达 HR 面前。

[![GitHub stars](https://img.shields.io/github/stars/markmiller1/resume-master?style=flat-square&color=ff9800)](https://github.com/markmiller1/resume-master/stargazers)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square)](./LICENSE)
[![Made with HTML CSS JS](https://img.shields.io/badge/Made%20with-HTML%2FCSS%2FJS-orange?style=flat-square)](https://github.com/markmiller1/resume-master)
[![No backend](https://img.shields.io/badge/Backend-None%20(纯静态)-blue?style=flat-square)](https://github.com/markmiller1/resume-master)
[![Pages](https://img.shields.io/badge/Pages-64-blueviolet?style=flat-square)](https://markmiller1.github.io/resume-master/)

🌐 **立即使用：https://markmiller1.github.io/resume-master/**

---

![简历大师 模板展示](./docs/preview-templates.png)

---

## 为什么选简历大师

市面上的在线简历工具，大多要你先注册账号、把个人信息上传到他们服务器，导出 PDF 时再收一笔钱。简历大师反着来：

| | 简历大师 | 多数在线简历工具 |
|---|---|---|
| 费用 | **永久免费**，导出不收费 | 免费编辑，导出 PDF 收费 |
| 注册 | **不用注册**，打开即用 | 强制注册 / 手机号登录 |
| 隐私 | **纯本地**，数据只在你的浏览器里 | 上传到对方服务器 |
| 断网可用 | ✅ 打开后可离线编辑 | ❌ 依赖服务端 |
| ATS 检测 | ✅ 内置，帮你过机器筛选 | 多数要开会员 |
| 自动保存 | ✅ 本地多版本 | 云端（你无法控制） |
| 广告 | 极少量赞助位 | 大量弹窗 |

一句话：**你的简历，只属于你。**

---

## 核心功能

**编辑器**
- 实时预览，边写边看最终排版
- **自动保存 + 多版本管理**：本地保存多个简历版本，投递不同岗位随时切换
- **JD 关键词匹配**：粘贴招聘 JD，算出你的命中率并提示缺哪些关键词
- 一键导出 **PDF / Word(.doc) / TXT** 三种格式
- **AI 简历诊断**：结构、字数、动词强度、量化程度逐项体检
- **ATS 友好检测**：检查排版是否被机器筛选正确解析
- **智能短语库**（84 条）：不知道经历怎么写，一键插入专业表述

**内容资源（64 个页面）**
- **16 套简历模板**（4 套免费 + 12 套进阶）
- **18 大行业完整范文** + HR 点评 + 改写前后对比
- **7 篇行业专属简历指南**：教师 / 护士 / 会计 / 销售 / 设计师 / 行政 / 运营新媒体
- **简历动词库**（160+ 强动词）、**12 行业技能清单**
- **写作方法论**：STAR 法则、一页纸原则、量化写法、常见错误排查
- **求职全流程**：辞职信、空窗期解释、离职原因、自我介绍、谈薪、Offer 对比、背景调查
- **面试专题**：感谢信与跟进、电话面试、无领导小组讨论、二面、面试真题
- **2 个交互工具**：24 项简历自查清单、薪资总包计算器（真实时薪 + Offer 对比）
- **LinkedIn 资料优化指南**

---

## 页面地图

| 分类 | 代表页面 |
|---|---|
| 编辑器与工具 | `index.html` · `ats-check.html` · `resume-checklist.html` · `salary-calculator.html` |
| 模板与范文 | `template.html` · `example.html` · `resume-gallery.html` |
| 行业简历 | `teacher-resume.html` · `nurse-resume.html` · `accountant-resume.html` · `sales-resume.html` · `designer-resume.html` · `admin-resume.html` · `operation-resume.html` |
| 写作指南 | `guide.html` · `verbs.html` · `skills.html` · `resume-bullets.html` · `resume-summary.html` · `resume-photo.html` · `resume-mistakes.html` |
| 求职全流程 | `resignation.html` · `gap-year.html` · `leaving-reason.html` · `self-intro.html` · `salary-negotiation.html` · `offer-compare.html` · `background-check.html` |
| 面试 | `interview-questions.html` · `interview-thankyou.html` · `phone-interview.html` · `group-interview.html` · `second-interview.html` |
| 求职信 | `cover-letter.html` · `cover-letter-examples.html` · `email-body.html` · `follow-up.html` |
| 人群专题 | `campus.html`（校招）· `intern.html`（实习）· `developer.html`（程序员）· `mom-return.html` · `boss-zhipin.html` · `career-plan.html` |

完整清单见 [`sitemap.xml`](./sitemap.xml)，AI 检索入口见 [`llms.txt`](./llms.txt)。

---

## 隐私与安全

这点值得单独说，因为它是本项目最重要的设计约束：

- **没有后端**。整个项目是纯静态文件（HTML / CSS / JS），由 GitHub Pages 托管。
- 你在编辑器里填的姓名、电话、公司、经历，**全部保存在浏览器 `localStorage`**，不会离开你的设备。
- 没有埋点上报、没有用户账号体系、没有第三方统计脚本读取你的简历内容。
- 想彻底清除：浏览器清除站点数据即可。

---

## 本地运行

只需要一个静态服务器（或直接双击 `index.html` 也能打开大部分功能）：

```bash
git clone https://github.com/markmiller1/resume-master.git
cd resume-master
# 任选一种
python -m http.server 8080
# 或
npx serve .
```

然后访问 `http://localhost:8080`。

---

## 技术栈

- **零依赖、零构建**：原生 HTML + CSS + JavaScript，没有框架、没有打包步骤
- **存储**：`localStorage`（简历数据、多版本、自查清单进度）
- **导出**：PDF 走浏览器打印；Word 走 HTML-in-doc 方案；TXT 直接序列化
- **部署**：GitHub Pages（`main` 分支根目录）
- **SEO**：`sitemap.xml` + `robots.txt` + JSON-LD 结构化数据 + `llms.txt`

---

## 参与和支持

这个项目的成本几乎为零，但**让它被更多人找到**很难。如果你觉得有用：

1. ⭐ **给这个仓库点个 Star** —— 这是零成本但最有效的支持，能让 GitHub 和搜索引擎给它更高权重
2. 🔗 把 https://markmiller1.github.io/resume-master/ 发给正在找工作的朋友
3. 🐛 发现错别字、内容错误、排版 bug，欢迎 [提 Issue](https://github.com/markmiller1/resume-master/issues)
4. 🤝 想补充某个行业的内容（比如律师、工程师、产品经理简历），欢迎 PR

内容贡献最受欢迎的方向：新的行业专属简历指南、更真实的范文、更强的 ATS 检测规则。

---

## License

[MIT](./LICENSE) —— 你可以自由使用、修改、分发，包括商用。

> 站点内部分进阶模板需要小额解锁（用于覆盖运营成本），但**全部简历生成、导出、ATS 检测功能永久免费**。

---

**在线地址：https://markmiller1.github.io/resume-master/** · 搜「简历大师」或直接打开即用
