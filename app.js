let util = require("./utils/util.js");

App({
  //全局变量    
  globalDate: {
    userInfo: {},
    // api请求接口
    domain: "https://xxx.com/",
  },
  onHide: function() {
    wx.removeStorageSync("TY_storage");  //隐藏后清除"TY_storage"缓存
  },
  onShow: function(options) {
    // let userInfo = wx.getStorageSync("userInfo");
    // if (!userInfo) {
    //   this.userLogin(options);
    // }
  },
  //登陆函数
  // userLogin: function(options) {
  //   let that = this;
  //   wx.login({
  //     success: function(res) {
  //       if (res.code) {
  //         //发起网络请求
  //         that.getUserInfo(res.code, options);
  //       } else {
  //         util.loadingToast(true, {
  //           title: res.errMsg
  //         });
  //       }
  //     },
  //   });
  // },
  // //调用微信getUserInfo api
  // getUserInfo: function() {
  //   let that = this;
  //   util.loadingToast(true, {
  //     title: "获取用户资料"
  //   });
  //   wx.getUserInfo({
  //     lang: "zh_CN"
  //   });
  // },

  //默认配置
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null
  }
});

module.exports = getApp();