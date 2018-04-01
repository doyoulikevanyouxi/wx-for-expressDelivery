let util = require("../../utils/util");
let appjs = require("../../app.js");
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    motto: 'Welcome to "快递帮"',

    // hasUserInfo: false,
// -    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  onLoad: function() {
    this.setData({
      userInfo : appjs.globalData.userInfo
    });
    // console.log(this.data.userInfo);
  },

  onShow: function() {

  },

  onHide: function() {

  },

  bindViewTap: function() {
    
  }
})
