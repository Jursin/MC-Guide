import { defineClientConfig } from 'vuepress/client'
import Swiper from 'vuepress-theme-plume/features/Swiper.vue'
import Layout from './theme/components/Layout.vue'
import AsideNav from './theme/components/AsideNav.vue'

import './theme/styles/var.css'
import './theme/styles/nav.css'
import './theme/styles/home.css'
import './theme/styles/doc.css'
import './theme/styles/faq.css'
import './theme/styles/friends.css'

export default defineClientConfig({
  enhance({ app }) {
    app.component('Swiper', Swiper)
    app.component('AsideNav', AsideNav)
  },
  layouts: { Layout },
})
