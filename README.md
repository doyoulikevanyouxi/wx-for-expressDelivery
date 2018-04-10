# wx-for-expressDelivery
## 项目说明:
- 基于微信小程序开发的一款处理快递业务的类商城项目

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

## 如何解决微信小程序无package.json的问题?暂时用全局安装
## Eslint:
   npm install -g eslint
   添加基于recommended的eslint.
   后面考虑添加Airbnb代码规范

## CSSlint:
   npm install -g csslint
   添加css代码规范

## 添加jest测试:
   npm install -g jest
## 添加gulp打包:

##  个人笔记:
1.思考下在app.js还是index.js处理用户登录和userInfo.
2.index.js 如何获取 app.js 的全局变量.
3.注意在app.js中不能调用this.setData()函数,用this.global.userInfo = res.userInfo. 或者用缓存
4.如何处理用户拒绝权限后,再次请求.
5.注意添加到tabBar中的页面不再用于 navagator.