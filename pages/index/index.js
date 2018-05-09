let util = require("../../utils/util");
// 获取应用实例
const app = getApp();

Page({
  data: {
    userInfo: undefined,
    motto: "Welcome to 快递帮"
    // hasUserInfo: false,
    // canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  onLoad: function() {
    console.log("onLoad!");
  },

  // 注意:此处获取userInfo要在,onShow生命周期,而不能在onLoad中
  onShow: function() {
    console.log("onShow");
    
    // this.setData({
    //   // userInfo : app.globalData.userInfo
    //   userInfo : wx.getStorageSync("userInfo")
    // });
    // console.log(this.data.userInfo);
  },

  onHide: function() {

  },

  bindViewTap: function() {

  }
});
