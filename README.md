# 开撕

使用原生 HTML、CSS、JavaScript 实现的移动端优先撕纸解压工具。文字和图片仅在浏览器本地处理。

## 功能

- 输入最多 100 个字，或上传 JPG、PNG、WebP 等常见图片。
- 使用鼠标或手指反复撕开纸张，并播放撕纸音效和震动反馈。
- 支持清空文字、移除图片、重置纸张以及中英文切换。
- 所有碎片消失后显示彩纸礼花和完成提示。

## 项目结构

```text
dist/index.html              正式页面，包含全部 HTML、CSS 和 JavaScript
scripts/check-html.mjs       页面内联脚本语法检查
server.mjs                   本地静态文件服务器
package.json                 本地运行与检查命令
.github/workflows/pages.yml  GitHub Pages 自动部署配置
.openai/hosting.json         OpenAI Sites 静态目录配置
```

项目只有一个正式页面：`dist/index.html`。GitHub Pages 工作流也只会发布 `dist/`，不会把 README 当作网站首页。

## 本地运行

```bash
npm run dev
```

访问 `http://localhost:5173/`。

## 检查

```bash
npm run check
```

## GitHub Pages

在仓库的 **Settings → Pages** 中将 **Source** 设置为 **GitHub Actions**。推送到 `main` 后，工作流会自动发布 `dist/`。
