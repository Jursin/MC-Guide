import { defineNavbarConfig } from 'vuepress-theme-plume'

export default defineNavbarConfig([
  { text: '概览', icon: 'material-symbols:book', link: '/guide/1.overview.html' },
  { text: '关于', icon: 'material-symbols:info', link: '/about' },
  { text: 'FAQ', icon: 'material-symbols:help', link: '/faq/' },
  { text: '友链', icon: 'material-symbols:link', link: '/friends' },
])
