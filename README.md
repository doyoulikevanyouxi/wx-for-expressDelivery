# wx-for-expressDelivery
## 项目说明:
- 基于微信小程序开发的一款处理快递业务的类商城项目
- 暂定"校园快递帮"
- 自定义拓展插件
## 目录结构::

```
wx-for-expressDelivery/
	|-assets/						# 静态资源
		|-images/
		|-plugins/
		|-styles/
		|- ...
	|-pages/						# 小程序页面
		|-index/
			|-index.js
			|-index.wxml
			|-index.wxss
			|- ...
	|-utils/						# 配置文件和基础工具
		|-util.js
		|- ...
	|-app.js
	|-app.json
	|-app.wxss
	|-README.md
	|- ...
```

##	License:

## 如何解决微信小程序中package.json的问题

##项目参照bootstrap编码规范书写 http://codeguide.bootcss.com/

## 新增JSDoc重要注释规范 http://shouce.jb51.net/jsdoc/

## Eslint:
   安装:npm install -g eslint
   执行:eslint merge.js
   添加基于recommended的eslint.
   后面考虑添加Airbnb代码规范

## postcss stylelint stylefmt:
   使用标准格式stylelint-config-standard
   https://segmentfault.com/a/1190000005031503
   安装:npm install -g postcss stylelint stylefmt
   执行:stylelint app.wxss
   添加css代码规范

## 添加jest测试:
   安装:npm install -g jest
   执行:

## 添加gulp打包:
   https://www.jianshu.com/p/c179cb928ae4
   
## 新增插件页面拦截器 /plugins/wx-request

##  个人笔记:
1.思考下在app.js还是index.js处理用户登录和userInfo.
2.index.js 如何获取 app.js 的全局变量.
3.注意在app.js中不能调用this.setData()函数,用this.global.userInfo = res.userInfo. 或者用缓存
4.如何处理用户拒绝权限后,再次请求.
5.注意添加到tabBar中的页面不再用于 navagator.
6.用户授权:scope对象,wx.getSetting(object)方法.
7.