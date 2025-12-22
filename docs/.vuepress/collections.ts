import { defineCollection, defineCollections } from 'vuepress-theme-plume'

const guide = defineCollection({
  type: 'doc',
  dir: 'guide',
  linkPrefix: '/guide',
  title: '教程',
  meta: {
    createTime: "long"
  },
  sidebar: [
    {
      text: 'Java 版',
      icon: 'fa-brands:java',
      prefix: '2.JE',
      items: 'auto',
    },
    { text: '基岩版', icon: 'simple-icons:cplusplus', link: '3.BE.md' },
    { text: '服务器', icon: 'fa-solid:server', link: '4.server.md' },
  ],
})

const faq = defineCollection({
  type: 'post',
  dir: 'faq',
  title: '常见问题',
  meta: {
    createTime: "long"
  },
  link: '/faq/',
  linkPrefix: '/faq/', // 相关文章的链接前缀
  //   postList: true, // 是否启用文章列表页
  //   tags: true, // 是否启用标签页
    archives: false, // 是否启用归档页
  //   categories: true, // 是否启用分类页
  //   postCover: 'right', // 文章封面位置
  //   pagination: 15, // 每页显示文章数量
})

export default defineCollections([
  guide,
  faq,
])
