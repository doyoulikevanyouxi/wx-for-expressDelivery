/* 原先的app.js */
let util = require("./utils/util.js");
let app = getApp();
// console.log(app);
App({
  // 全局变量
  globalData: {
    userInfo: undefined,
    // api请求接口
    domain: "https://xxx.com/"
  },

  onLaunch: function() {
    console.log("app-onLaunch");
  },
  onHide: function() {
    // wx.removeStorageSync("TY_storage");  //隐藏后清除"TY_storage"缓存
  },

  onLoad: function() {
    console.log("app-onLoad");
  },
  // 暂未使用 options, 需要跳转参数时使用
  onShow: function(options) {
    console.log("app-onShow");
    let userInfo = wx.getStorageSync("userInfo");
    if (!userInfo) {
      this.userLogin(options);
    }
  },
  // 登陆函数
  userLogin: function(options) {
    let that = this;
    wx.login({
      success: function(res) {
        if (res.code) {
          // 发起网络请求
          that.getUserInfo(res.code, options);
        } else {
          util.loadingToast(true, {
            title: res.errMsg
          });
        }
      }
    });
  },
  // 调用微信getUserInfo api
  getUserInfo: function(code, options) {
    // let that = this;
    util.loadingToast(true, {title: "获取用户资料"});

    // 此处需要用户授权,造成异步
    wx.getUserInfo({
      lang: "zh_CN",
      encryptedData: true,
      success: function(res) {
        console.log(res.userInfo);
        wx.setStorageSync("userInfo",res.userInfo);

        // console.log(app);
        // eslint-disable-next-line
        util.loadingToast(false);
      },
      // 用户拒绝获取用户信息
      fail: function() {
        util.loadingToast(false);
        util.dialog({
          content: "获取用户信息失败",
          showCancel: false
        });
        // 获取失败或者用户拒绝:后需要处理!
        // that.userLogin(options);
      },
      complete: function() {

      }
    });
  },

  // 与系统后台进行交互 传入获取的userInfo和code  方便后台存储用户信息. 暂不确定是否需要.
  submitUserInfo: function(wxRes, code, options) {
    let that = this;
    let userInfo = wxRes.userInfo;
    util.loadingToast(true, {
      title: "登录中..."
    });

    // 发送请求
    let config = {
      url: "",
      data: "",
      method: "POST",
      success: function() {

      }
    };
    // util.sendAjax(config);
  }
});
module.exports = getApp();
