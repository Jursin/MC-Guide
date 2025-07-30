import { defineConfig } from 'vitepress'
import { groupIconMdPlugin, groupIconVitePlugin, localIconLoader } from 'vitepress-plugin-group-icons'

export default defineConfig({
  title: "Minecraft 教程",
  description: "Minecraft 新手入门教程",
  base: '/',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],

  themeConfig: {
    logo: '/logo.png',
    
    // 导航栏配置
    nav: [
      { text: '首页', link: '/' },
      { text: '概览', link: '/overview' },
      { 
        text: '下载与使用',
        items: [
          { text: '电脑版教程', link: '/start/JE' },
          { text: '手机版教程', link: '/start/mobile' },
          { text: '联机教程', link: '/start/联机' },
          { text: '服务器搭建', link: '/start/server' }
        ]
      },
      { text: '链接聚合', link: '/links' },
      { text: '关于', link: '/about' }
    ],

    // 侧边栏配置
    sidebar: [
      { text: '概览', link: '/overview' },
      { 
        text: '下载与使用',
        collapsed: false,
        items: [
          { text: '电脑版教程', link: '/start/JE' },
          { text: '手机版教程', link: '/start/mobile' },
          { text: '联机教程', link: '/start/联机' },
          { text: '服务器搭建', link: '/start/server' }
        ]
      },
      { text: '链接聚合', link: '/links' },
      { text: '关于', link: '/about' },
      { text: '个人博客', link: 'https://blog.jursin.top' }
    ],

    search: {
  provider: "local",
  options: {
    translations: {
      button: {
        buttonText: "搜索文档",
        buttonAriaLabel: "搜索文档",
      },
      modal: {
        noResultsText: "没有找到结果",
        resetButtonTitle: "清除搜索条件",
        footer: {
          selectText: "选择",
          navigateText: "切换",
          closeText: "关闭",
        },
      },
    },
  },
},

    // 社交链接
    socialLinks: [
      { 
        icon: 'qq',
        link: 'https://qm.qq.com/q/GDUbBENduO',
        ariaLabel: 'QQ群'
      },
      { 
        icon: 'github',
        link: 'https://github.com/Jursin/MC-Guide',
        ariaLabel: 'GitHub仓库'
      }
    ],
    
    footer: {
      copyright: 'Copyright 2025 © Jursin | 本文档以 CC BY-NC-SA 4.0 许可协议授权'      
    },
    outline: {
      level: 'deep',
      label: '页面导航'
    },
    editLink: {
      pattern: 'https://github.com/Jursin/MC-Guide/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页面'
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    lastUpdated: {
      text: '最后更新于'
    },

    notFound: {
      title: '页面未找到',
      quote:
        '但如果你不改变方向，并且继续寻找，你可能最终会到达你所前往的地方。',
      linkLabel: '前往首页',
      linkText: '带我回首页'
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '目录',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    skipToContentLabel: '跳转到内容'
  },
  
  cleanUrls: true,

  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    },
    config(md) { 
      md.use(groupIconMdPlugin) //代码组图标
      md.use((md) => {
        const defaultRender = md.render
        md.render = (...args) => {
          const [content, env] = args
          const currentLang = env?.localeIndex || 'root'
          const isHomePage = env?.path === '/' || env?.relativePath === 'index.md'  // 判断是否是首页

          if (isHomePage) {
            return defaultRender.apply(md, args) // 如果是首页，直接渲染内容
          }
          // 调用原始渲染
          let defaultContent = defaultRender.apply(md, args)
          // 替换内容
          if (currentLang === 'root') {
            defaultContent = defaultContent.replace(/提醒/g, '提醒')
              .replace(/建议/g, '建议')
              .replace(/重要/g, '重要')
              .replace(/警告/g, '警告')
              .replace(/注意/g, '注意')
          }
          // 返回渲染的内容
          return defaultContent
        }

        // 获取原始的 fence 渲染规则
        const defaultFence = md.renderer.rules.fence?.bind(md.renderer.rules) ?? ((...args) => args[0][args[1]].content);

        // 重写 fence 渲染规则
        md.renderer.rules.fence = (tokens, idx, options, env, self) => {
          const token = tokens[idx];
          const info = token.info.trim();

          // 判断是否为 md:img 类型的代码块
          if (info.includes('md:img')) {
            // 只渲染图片，不再渲染为代码块
            return `<div class="rendered-md">${md.render(token.content)}</div>`;
          }

          // 其他代码块按默认规则渲染（如 java, js 等）
          return defaultFence(tokens, idx, options, env, self);
        };
      })
    },
    image: {
      // 开启图片懒加载
      lazyLoading: true
    },
    container: {
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '危险',
      infoLabel: '信息',
      detailsLabel: '详细信息'
    },
    lineNumbers: true
  },

  vite: {
    plugins: [
      groupIconVitePlugin({ 
        customIcon: {
          ts: 'logos:typescript',
          js: 'logos:javascript',
          md: 'logos:markdown',
          css: 'logos:css-3',
        },
      })
    ],
  }
})