<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [  
  {
    avatar: 'http://q2.qlogo.cn/headimg_dl?dst_uin=1836059252&spec=100',
    name: 'Jursin',
    title: '网站开发',
    links: [
      { icon: 'github', link: 'https://github.com/Jursin' },
      { icon: 'bilibili', link: 'https://space.bilibili.com/1575907920' }
    ]
  },
]
</script>


# 关于
<ArticleMetadata />

<VPTeamMembers size="small" :members="members" />

本教程为 Minecraft 入门教程，目的是帮助新玩家快速上手，熟悉 Minecraft 的基本操作。

玩家应具备一定基础电脑操作能力，如清楚 Windows 系统的文件管理，知道如何压缩/解压缩压缩包，能熟练访问浏览器和下载文件，会安装软件、打开运行程序等。

如有更多建议或希望反馈过时/错误信息，请提交 Issues 或  Pull Requests，或者直接[联系作者](https://blog.jursin.top)。