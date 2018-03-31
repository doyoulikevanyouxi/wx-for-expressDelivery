let util = require("./utils/util.js");

App({
  //全局变量    
  globalData: {
    text: "123",
    userInfo: {},
    // api请求接口
    domain: "https://xxx.com/",
  },
  onHide: function() {
    // wx.removeStorageSync("TY_storage");  //隐藏后清除"TY_storage"缓存
  },

  //暂未使用 options, 需要跳转参数时使用
  onShow: function(options) {
    let userInfo = wx.getStorageSync("userInfo");
    if (!userInfo) {
      this.userLogin(options);
    };
    this.globalData.text = "1111";
    // console.log(this.globalData.text);
  },
  //登陆函数
  userLogin: function(options) {
    let that = this;
    wx.login({
      success: function(res) {
        if (res.code) {
          //发起网络请求
          that.getUserInfo(res.code, options);
        } else {
          util.loadingToast(true, {
            title: res.errMsg
          });
        }
      },
    });
  },
  //调用微信getUserInfo api
  getUserInfo: function(code,options) {
    let that = this;
    util.loadingToast(true, {
      title: "获取用户资料"
    });
    wx.getUserInfo({
      lang: "zh_CN",
      encryptedData: true,
      success: function(res) {
        that.globalData.userInfo = res.userInfo;  //用户信息存入全局变量
        console.log(that.globalData.userInfo);
        util.loadingToast(false);
      },
      fail: function() {  //用户拒绝获取用户信息
        util.loadingToast(false);
        util.dialog({
          content: "获取用户信息失败",
          showCancel: false
        });
        //获取失败或者用户拒绝:后需要处理!
        // that.userLogin(options);
      },
      complete: function() {

      }
    });
  },

  // 与系统后台进行交互 传入获取的userInfo和code  方便后台存储用户信息. 暂不确定是否需要.
  submitUserInfo: function(wxRes,code,options) {
    let that = this;
    let userInfo = wxRes.userInfo;
    util.loadingToast(true,{
      title: "登录中..."
    });

    //发送请求
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







