---
pageLayout: doc
title: 联机教程
createTime: 2025/11/11 14:30:27
---

## 局域网联机
- 主机在游戏内点击对局域网开放
- 客机确保和好友在同一局域网内，在`多人游戏`中选择对应房间，点击`加入服务器`即可
  ![multiplayer](/images/JE/online/multiplayer.png)

## 内网穿透联机
### 在游戏内对局域网开放
- 在存档中点击`对局域网开放`
  ![对局域网开放](/images/JE/online/对局域网开放.png)
- 设置局域网游戏
  ![局域网游戏设置](/images/JE/online/局域网游戏设置.png)
  ::: tip
  上述是通过模组 [[更高级联机设置] LAN World Plug-n-Play](https://modrinth.com/mod/mcwifipnp) 实现的更多联机设置
  :::
- 聊天框将显示端口开放信息
  ![端口开启](/images/JE/online/端口开启.png)

### 通过 <img src="https://netplus.xingl.net/favicon.ico" width="20" /> [NetPlus](https://netplus.xingl.net/)
> 仅支持 Windows 端
- 注册账号后进入主界面
  ![image.png](/images/JE/online/image.png)
  > 点击`每日签到`可随机获得 0.1-0.3 元余额
- 点击`映射管理`，选择任意一个映射，点击`设置`；
  ![image.png](/images/JE/online/image1.png)
- 按以下表格填写
  | 映射<br>协议 | 映射<br>名称 | 选择地区 | 内网地址 | 内网端口 | 外网端口 |
  |:-:|:-:|:-:|:-:|:-:|:-:|
  | 默认 `TCP` | 自行填写 | 选择延迟最低的一项 | 127.0.0.1 | 默认的`25565`或online自定义端口 | 点击随机 |

  ![image.png](/images/JE/online/image2.png)
- 然后`保存映射`
- 返回映射管理后，点击`启动`，点击`复制连接地址`，分享给好友
- 好友通过复制的连接地址在`多人游戏`中加入服务器

### 通过 <img src="https://www.natfrp.com/favicon.ico" width="20" /> [Sakura Frp | 樱花内网穿透](https://www.natfrp.com/)
> 主流平台均支持
- 注册账号后进入首页
- 点击`用户-实名认证`，根据提示支付认证费用并完成实名认证 ***（需年满18周岁）***
  ![实名认证](/images/JE/online/实名认证.png)
- 点击`服务-隧道列表`，点击`创建隧道`
  ![隧道列表](/images/JE/online/隧道列表.png)
- 选择节点
  ![选择节点](/images/JE/online/选择节点.png)
- 填写隧道信息
  ![创建隧道](/images/JE/online/创建隧道.png)
  > 本地端口可选择 Minecraft Java 版默认端口 `25565`，也可以填写自定义端口，保证与游戏内聊天框显示的端口号一致即可。
- 点击`服务-软件下载`，下载对应的客户端软件并安装
  ![软件下载](/images/JE/online/软件下载.png)
  > 对于 Windows 端为避免系统误报，需按照网页提示将文件加入到白名单
    ![win](/images/JE/online/win.png)
- 回到网站首页，点击 ::fa-solid:key /#18a058:: `复制访问密钥`
  ![访问密钥](/images/JE/online/访问密钥.png)
- 打开客户端软件，粘贴访问密钥并点击登录
  ::: tabs

  @tab Windows
  ![W登录](/images/JE/online/W登录.png)

  @tab Android
  ![A登录](/images/JE/online/A登录.png)

  :::
- 点击`隧道`，开启创建的隧道
  ::: tabs

  @tab Windows
  ![W隧道](/images/JE/online/W隧道.png)

  @tab Android
  ![A隧道](/images/JE/online/A隧道.png)

  :::
- 点击日志，找到`使用 >>frp-xxx.com:xxxxx<< 连接到你的隧道`的提示，客机在多人游戏中使用这个连接地址来加入游戏
  > 也可使用[子域绑定隧道](https://doc.natfrp.com/bestpractice/domain-bind.html)

## IPv6 联机
- 主机在游戏内点击对局域网开放
- 通过 [IPv6地址查询](https://ipw.cn/ipv6/) 网站查询 IPv6 地址
- 或通过终端查询 IPv6 地址：
  - 打开 Windows PowerShell，输入以下内容并回车：
    ```shell
    ipconfig
    ```
  - 查看输出内容
    ```shell
    Wireless LAN adapter WLAN:
       Temporary IPv6 Address:
    ```
    该字段后地址即为 IPv6 地址
    ![terminal](/images/JE/online/terminal.png)
- 客机点击游戏内`多人游戏`，通过连接地址 `[IPv6 地址]:端口号` 加入服务器

## 服务器联机

- [搭建好服务器](../4.server.md)后，将服务器地址分享给好友
- 好友将服务器地址复制后，点击游戏内`多人游戏`，点击`添加服务器`并粘贴地址，保存到列表后进入；或点击`直接连接`，粘贴地址后加入服务器

> [更多联机方式教程](https://www.bilibili.com/video/BV14SXnYyEit)