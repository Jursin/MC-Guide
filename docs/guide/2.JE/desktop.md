---
pageLayout: doc
title: 桌面端教程
createTime: 2025/11/11 14:30:27
---

> [**资源分享**](https://www.123pan.com/s/0l7bVv-d5yHh.html)<br>

::: tip 注意
首先你需要一定基础电脑操作能力，本教程以 Windows 平台为例。
:::

## 基础技巧

### 启动器与 Java 的安装

- 启动器（任选一个）
  - <img src="/icon/PCL2.ico" width="16" /> PCL2 <a href="https://afdian.com/p/0164034c016c11ebafcb52540025c377" target="_blank">::fa-solid:download::</a>
  - <img src="/icon/HMCL.png" width="16" /> HMCL <a href="https://hmcl.huangyuhui.net/download/" target="_blank">::fa-solid:download::</a>
  - <img src="https://zh.minecraft.wiki/images/thumb/Minecraft_Twitter_logo.jpg/240px-Minecraft_Twitter_logo.jpg?49902" width="16" /> Minecraft 官方启动器 <a href="https://www.minecraft.net/zh-hans/download" target="_blank">::fa-solid:download::</a>

:::: tip
- 现在启动器基本都支持自动安装 Java 环境
  - PLCL2 在启动游戏时自动安装合适 Java 版本
  - HMCL 可以在设置-Java管理中点击`下载Java`来下载合适的 Java 版本
    ![0](/images/JE/desktop/0.png)
- 游戏资源路径
  - 官方启动器：`C:\Users\{用户名}\AppData\Roaming\.minecraft`
  - 第三方启动器：同目录下 `.minecraft`
  - 游戏文件夹管理
    ::: tabs

    @tab PCL2
    
    ![01](/images/JE/desktop/01.png)
    
    @tab HMCL
    
    ![02](/images/JE/desktop/02.png)
    
    :::
::::

- Java
  - Java 24 <a href="https://www.oracle.com/cn/java/technologies/downloads/#jdk24-windows" target="_blank">::fa-solid:download::</a>
  - Java 21 <a href="https://www.oracle.com/cn/java/technologies/downloads/#jdk21-windows" target="_blank">::fa-solid:download::</a>
  - Java 17 <a href="https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html" target="_blank">::fa-solid:download::</a>
  - Java 8 <a href="https://www.java.com/zh-CN/download/" target="_blank">::fa-solid:download::</a>

:::table
| Minecraft 版本 | Java 最低版本/推荐版本 |
|:-:|:-:|
| <1.7 | 8（不能高于8） |
| 1.8 ~ 1.15 | 8/11 |
| 1.16 | 11/16 |
| 1.17 ~ 1.19 | 13/17 |
| 1.20 | 17/21 |
| 1.21 | 21 |
:::

### 简单配置启动器

`版本隔离`与`自动选择合适的 Java`。

::: tabs

@tab PCL2

![1](/images/JE/desktop/1.png)

@tab HMCL

![2](/images/JE/desktop/2.png)

:::

:::: info
开启版本隔离后各游戏版本会分别存放在 `.minecraft\versions\{版本名称}` 文件夹下，各版本相互独立，便于管理。

::: file-tree icon="colored"
- config/ 模组配置
  - ...
- logs/ 日志
  - ...
- mods/ 模组
  - ...
- saves/ 存档
  - ...
- resourcepacks/ 资源包
  - ...
- shaderpacks/ 光影包
  - ...
- screenshots/ 游戏截图
  - ...
- options.txt 游戏设置
- servers.dat 服务器列表
:::
::::

### 下载游戏文件

安装游戏版本与模组加载器（如果需要）

::: tabs

@tab PCL2

![3](/images/JE/desktop/3.png)

@tab HMCL

![4](/images/JE/desktop/4.png)

:::

::: tip
- 如需装光影，1.14 以前需装 <img src="https://optifine.net/images/of16r.png" width="16" /> [OptiFine（高清修复）](https://optifine.net/home)，1.14以后 <img src="https://fabricmc.net/assets/logo.png" width="16" /> [Fabric](https://fabricmc.net/) 端推荐安装 <img src="https://cdn.modrinth.com/data/AANobbMI/295862f4724dc3f78df3447ad6072b2dcd3ef0c9_96.webp" width="16" /> [Sodium（钠）](https://modrinth.com/mod/sodium) 和 <img src="https://cdn.modrinth.com/data/YL57xq9U/18d0e7f076d3d6ed5bedd472b853909aac5da202_96.webp" width="16" /> [Iris Shaders](https://modrinth.com/mod/iris)，<img src="/icon/CurseForge.svg" width="16" /> [Forge](https://files.minecraftforge.net/net/minecraftforge/forge/) 端推荐安装 <img src="https://media.forgecdn.net/avatars/thumbnails/488/2/64/64/637791713768306590.jpeg" width="16" /> [Rubidium（铷）](https://www.curseforge.com/minecraft/mc-mods/rubidium) 和 <img src="https://media.forgecdn.net/avatars/thumbnails/260/218/64/64/637213826674310080.png" width="16" /> [Lithium（锂）](https://www.curseforge.com/minecraft/mc-mods/lithium-forge)
- 游戏优化建议选 <img src="https://fabricmc.net/assets/logo.png" width="16" /> [Fabric](https://fabricmc.net/), 拓展玩法建议选 <img src="/icon/CurseForge.svg" width="16" /> [Forge](https://files.minecraftforge.net/net/minecraftforge/forge/)
:::

### 游戏资源下载

- 通过启动器下载

::: tabs

@tab PCL2

![5](/images/JE/desktop/5.png)

@tab HMCL

![6](/images/JE/desktop/6.png)

:::

- 通过网站下载<br>
  通过国内 <img src="https://www.mcmod.cn/images/favicon.ico" width="16" /> [MC 百科](https://www.mcmod.cn) 等网站或国外 <img src="/icon/CurseForge.svg" width="16" /> [CurseForge](https://www.curseforge.com/minecraft)、<img src="https://toolb.cn/favicon/modrinth.com" width="16" /> [Modrinth](https://modrinth.com/) 等网站下载对应版本游戏资源

::: warning 注意
- 下载模组时注意要求的游戏版本与模组加载器，如果有**前置模组**则也要下载
- 注意将下载的资源文件放在**对应版本文件夹**的相应文件夹下
- <img src="https://www.mcmod.cn/images/favicon.ico" width="16" /> [MC 百科](https://www.mcmod.cn)只是提供相应资源的 <img src="/icon/CurseForge.svg" width="16" /> [CurseForge](https://www.curseforge.com/minecraft) 、<img src="https://toolb.cn/favicon/modrinth.com" width="16" /> [Modrinth](https://modrinth.com/) 和 ::fa-brands:github:: [GitHub](https://github.com/) 下载链接
:::

### 启动游戏
使用正版或离线账户启动游戏

::: tabs

@tab PCL2

![7](/images/JE/desktop/7.png)

@tab HMCL

![8](/images/JE/desktop/8.png)

:::

## 进阶技巧

### 自定义皮肤/披风

- 进入 <img src="https://littleskin.cn/favicon.png" width="16" /> [LittleSkin](https://littleskin.cn/) 网站，注册账号并登录

![image.png](/images/JE/desktop/image11.png)

![image.png](/images/JE/desktop/image13.png)

- 点击角色管理-添加新角色

![image.png](/images/JE/desktop/image14.png)

- 点击侧栏皮肤库，寻找喜欢的皮肤或披风

::: tabs

@tab 皮肤

![image.png](/images/JE/desktop/image15.png)

@tab 披风

![image.png](/images/JE/desktop/image16.png)

:::

- 进入详情页后，点击添加至衣柜

![image.png](/images/JE/desktop/image17.png)

- 回到我的衣柜，即可查看已保存的皮肤或披风，也可以自己上传材质

![image.png](/images/JE/desktop/image18.png)

- 回到仪表盘，如果使用HMCL启动器，则把将此按钮拖动到启动器拖动到启动器，完成登录
- 如果使用 PCL2 启动器，则点击启动页面的版本设置-设置-服务器-登录方式，选择第三方行登录：`Authlib Injector 或 LittleSkin`，点击下方设置为LittleSkin，返回后输入邮箱、密码，点击启动游戏
  ![9](/images/JE/desktop/9.png)

  ![10](/images/JE/desktop/10.png)

### 存档导入/导出

- 导入：将存档压缩包解压到 `saves` 文件夹下，重启游戏即可
- 导出：将 `saves` 文件夹下的存档文件夹压缩，得到的压缩包文件即为导出的文件

::: warning 注意
导入的存档的游戏版本应 ≤ 当前游戏版本

存档应用一个文件夹包裹后放在 `saves` 文件夹下
:::

### 修改游戏数据
- 可以使用[中文版本的NBTExplorer](https://github.com/wifi-left/ChineseNBTExplorer)编辑 `level.dat` 文件来修改存档设置
  ![image.png](/images/JE/desktop/image19.png)

- 也可使用 HMCL 编辑存档设置
  ![11](/images/JE/desktop/11.png)

## 其他

### 游戏快捷键

:::table
| 按键 | 功能说明 |
|:-:|:-:|
| **鼠标左键** | 破坏方块/攻击生物（按住持续破坏） |
| **鼠标右键** | 放置方块/使用物品（如拉弓、打开容器） |
| **鼠标中键** | 创造模式下复制准星对准的方块或生物蛋；生存模式下切换手持物品 |
| **`Esc`** | 打开游戏菜单 |
| **`W` `A` `S` `D`** | 前进/左移/后退/右移移动；双击W疾跑 |
| **空格键** | 跳跃；创造模式下双击起飞 |
| **左 `Shift`** | 潜行；飞行模式下下降 |
| **`Q`** | 丢弃单个物品；`Ctrl` + `Q` 丢弃整组（ Mac 需按 `Ctrl` + `Cmd` + `Q`） |
| **`E`** | 打开物品栏 |
| **`F`** | 交换主副手物品 |
| **`T`** | 打开聊天栏 |
| **`L`** | 查看进度 |
| **`1-9`** | 快捷栏物品切换；物品栏界面中快速移动物品 |
| **`F1`** | 隐藏界面（与F2配合截图无HUD） |
| **`F2`** | 截图并保存至游戏文件夹   |
| **`F3`** | 显示调试信息（坐标、帧率、生物群系等） |
| **`F3` + `A`** | 重载所有区块 |
| **`F3` + `B`** | 显示实体碰撞箱 |
| **`F3` + `C`** | 短按复制坐标；长按10秒强制崩溃 |
| **`F3` + `G`** | 显示区块边界 |
| **`F3` + `H`** | 显示物品耐久度、ID等高级信息 |
| **`F3` + `N`** | 切换旁观模式与上一模式 |
| **`F5`** | 切换第一/第三人称视角 |
| **`F11`** | 切换全屏/窗口模式 |
| **`Ctrl` + `中键`** | 复制带 NBT 标签的方块（如箱子内容、告示牌文字） |
| **`Ctrl` + 双击物品** | 快速整理分散的同种物品 |
| **`Tab`** | 多人游戏中显示玩家列表；聊天时补全命令 |
:::

### 键盘绑定图

![Minecraft的默认键盘绑定图](https://zh.minecraft.wiki/images/Kbd-minecraft_Simplified.svg?1f363)