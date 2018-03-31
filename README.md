# wx-for-expressDelivery
build the wx frame.

1.思考下在app.js还是index.js处理用户登录和userInfo.
2.index.js 如何获取 app.js 的全局变量.
3.注意在app.js中不能调用this.setData()函数,用this.global.userInfo = res.userInfo. 或者用缓存
4.如何处理用户拒绝权限后,再次请求.