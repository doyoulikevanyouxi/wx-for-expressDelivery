/* 修改后的app.js */
let util = require("./utils/util.js");

App({
  globalData: {
    userInfo: null
    // domain: "http://xxx.com/"
  },
  onLaunch: function() {
    //调用API从本地缓存获取数据.用数组记录登陆时间
    let logs = wx.getStorageSync("logs") || [];
    logs.unshift(Date.now());
    wx.setStorageSync("logs",logs);
    console.log("调用getUserInfo");
    this.getUserInfo();
  },
  getUserInfo: function(cb) {
    let that = this;
    // 执行回调函数
    if(this.globalData.userInfo) {
      typeof cb === "function" && cb(this.globalData.userInfo);
    } else {
      // 调用登陆接口,login
      wx.login({
        success: function() {
          // 获取用户信息jiekougetUserInfo
          wx.getUserInfo({
            success: function(res) {
              that.globalData.userInfo = res.userInfo;
              typeof cb === "function" && cb(this.globalData.userInfo);
            }
          })
        }
      })
    };
  }
});
//导出模块
module.exports = {
  getApp : getApp(),
  userInfo : getApp().globalData.userInfo
}
