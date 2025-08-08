 # Minecraft 教程

[![Netlify Status](https://api.netlify.com/api/v1/badges/154af654-a82a-4ada-a554-003f947e3de9/deploy-status)](https://app.netlify.com/projects/mc-guide/deploys)
[![MIT](https://img.shields.io/badge/License-MIT-red.svg)](LICENSE)

这是一个使用 VitePress 搭建的 Minecraft 入门教程网站

## 参与贡献
- 环境要求
  - Node.js 20+
  - npm
- 安装依赖
  ```bash
  npm install
  ```
- 开发模式
  ```bash
  npm run docs:dev
  ```
  开发服务器将运行在 [http://localhost:5173](http://localhost:5173)
- 构建生产版本
  ```bash
  npm run docs:build
  ```
  构建结果将输出到 `.vitepress/dist` 目录
- 预览生产版本
  ```bash
  npm run docs:preview
- 内容编写指南
  - 所有文档使用 Markdown 格式编写
  - 在 docs 目录下创建新的 .md 文件即可自动生成对应页面和侧边栏
  - 使用 Frontmatter 配置页面元数据
  - 在 `/docs/.vitepress/config.mts` 中配置站点

## 贡献指南
- Fork 本项目
- 提交更改
- 推送到远程仓库
- 创建 Pull Request