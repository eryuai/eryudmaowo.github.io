# 二鱼的猫窝

一位写作者用文字喂养小猫的地方——以作品承载为核心、以养猫式打卡为乐趣、逐步沉淀成个人品牌的轻量级写作者个人站。

🌐 在线访问：<https://eryuai.github.io/eryudmaowo.github.io/>

## 技术栈

- **Vue 3** — Composition API
- **Vite** — 极速构建
- **Vue Router 4** — 客户端路由（HTML5 History 模式）
- **Tailwind CSS** — 原子化样式
- **GitHub Actions** — 自动部署到 GitHub Pages

## 本地开发

```bash
npm install
npm run dev      # 启动开发服务器 http://localhost:5173
npm run build    # 生产构建
npm run preview  # 预览构建产物
```

## 项目结构

```
src/
├── main.js
├── App.vue                # 路由出口 + 页面切换动效
├── assets/main.css        # Tailwind + 全局样式
├── router/index.js        # 7 条路由
├── components/
│   ├── NavBar.vue         # 顶部导航 + 移动端汉堡菜单
│   └── AppFooter.vue
└── views/
    ├── HomeView.vue       # 猫窝首页
    ├── CatsView.vue       # 字粮（养猫系统）⭐
    ├── WorksView.vue      # 字房（作品集）
    ├── WorkDetailView.vue # 单篇阅读页
    ├── BookshelfView.vue  # 书架
    ├── QuotesView.vue     # 金句墙
    ├── GuestbookView.vue  # 留言板
    └── AboutView.vue      # 关于
```

## 部署

每次推送到 `main` 分支时，GitHub Actions 会自动构建并发布到 GitHub Pages。
具体配置见 `.github/workflows/deploy.yml`。

## 设计文档

完整设计规格见 [`design.md`](./design.md)。

## License

[Apache-2.0](./LICENSE)
