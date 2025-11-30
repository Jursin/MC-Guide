import { defineThemeConfig } from 'vuepress-theme-plume'
import navbar from './navbar'
import collections from './collections'

/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({
  logo: '/logo.png',

  appearance: true,  // 配置 深色模式

  social: [
    { icon: 'github', link: 'https://github.com/Jursin/MC-Guide' },
  ],
  // navbarSocialInclude: ['github'], // 允许显示在导航栏的 social 社交链接
  // aside: true, // 页内侧边栏， 默认显示在右侧
  // outline: [2, 3], // 页内大纲， 默认显示 h2, h3

  /**
   * 文章版权信息
   * @see https://theme-plume.vuejs.press/guide/features/copyright/
   */
  copyright: { 
    license: {
      name: 'MIT',
      url: 'https://github.com/Jursin/MC-Guide/blob/main/LICENSE'
    },
    author: {
      name: 'Jursin',
      url: 'https://github.com/Jursin'
    },
    creation: 'original'
  },

  // prevPage: true,   // 是否启用上一页链接
  // nextPage: true,   // 是否启用下一页链接
  // createTime: true, // 是否显示文章创建时间

  /* 站点页脚 */
  footer: {
    message: '使用 <a target="_blank" href="https://v2.vuepress.vuejs.org/">VuePress</a> & <a target="_blank" href="https://theme-plume.vuejs.press">vuepress-theme-plume</a> 构建 | 采用 MIT 协议',
    copyright: '<img src="/icon/miit.ico" width="14" height="14" style="margin-right: 5px; display: inline-block; vertical-align: middle;"><a href="http://beian.miit.gov.cn/" target="_blank" >鄂ICP备2025157296号-1</a> | 版权所有 © 2025 Jursin',
  },

  navbar,
  collections,

  /**
   * 公告板
   * @see https://theme-plume.vuejs.press/guide/features/bulletin/
   */
  // bulletin: {
  //   layout: 'top-right',
  //   contentType: 'markdown',
  //   title: '公告板标题',
  //   content: '公告板内容',
  // },

  /* 过渡动画 @see https://theme-plume.vuejs.press/config/basic/#transition */
  transition: {
  //   page: true,        // 启用 页面间跳转过渡动画
  //   postList: true,    // 启用 博客文章列表过渡动画
    appearance: 'circle-clip',  // 启用 深色模式切换过渡动画, 或配置过渡动画类型
  },

})
