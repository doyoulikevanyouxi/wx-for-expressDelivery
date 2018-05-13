let util = require("../../utils/util");
// 获取应用实例
// const app = getApp();
Page({
  data: {
    userInfo: undefined,
    motto: "Welcome to 快递帮",
    //是否加载完成
    isLoaded: false,
  },
  onLoad: function() {
    console.log("onLoad!");
  },
  // 注意:此处获取userInfo要在,onShow生命周期,而不能在onLoad中
  onShow: function(options) {
    console.log("onShow!");
    let that = this;
    let userInfo = that.data.userInfo;
    //如果为空
    if(!userInfo) {
      this.userLogin(options);
    }
  },
  onHide: function() {

  },
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
    })
  },
  // 调用微信getUserInfo api
  getUserInfo: function(code, options) {
    let that = this;
    util.loadingToast(true, {title: "正在获取用户资料"});
    // 此处需要用户授权,造成异步
    wx.getUserInfo({
      lang: "zh_CN",
      encryptedData: true,
      success: function(res) {
        // wx.setStorageSync("userInfo",res.userInfo);
        // eslint-disable-next-line
        that.setData({
          userInfo : res.userInfo,
          isLoaded: true
        });
        console.log(that.data.userInfo);
        util.loadingToast(false);
      },
      // 用户拒绝获取用户信息
      fail: function() {
        util.loadingToast(false);
        util.dialog({
          content: "您没有授权,无法获取信息",
          showCancel: false
        });
        that.setData({
          isLoaded: true
        });
        // 获取失败或者用户拒绝:后需要处理!
        // that.userLogin(options);
      },
      complete: function() {

      }
    });
  },
  bindGetUserInfo: function() {
    let that = this;
    console.log("bindGetUserInfo");
    wx.getUserInfo({
      lang: "zh_CN",
      encryptedData: true,
      success: function(res) {
        // wx.setStorageSync("userInfo",res.userInfo);
        // eslint-disable-next-line
        that.setData({
          userInfo : res.userInfo,
          isLoaded: true
        });
        // console.log(that.data.userInfo);
        util.loadingToast(false);
      }
    });
  },
  bindViewTap: function() {

  },
  exD: function() {
    wx.navigateTo({
      url: "../expressDelivery/expressDelivery"
    })
  }
});
