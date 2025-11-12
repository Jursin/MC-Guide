import { defineClientConfig } from 'vuepress/client'
import Swiper from 'vuepress-theme-plume/features/Swiper.vue'
import Layout from './theme/components/Layout.vue'
import AsideNav from './theme/components/AsideNav.vue'

import './theme/styles/custom.css'

export default defineClientConfig({
  enhance({ app }) {
    app.component('Swiper', Swiper)
    app.component('AsideNav', AsideNav)
  },
  layouts: { Layout },
})
