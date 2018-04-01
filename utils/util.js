/*   项目基本配置  */
let util = {
  //通用loadingToast
  loadingToast: function(isShow, config) {
    if(isShow) {
      wx.showLoading({
        title: config.title || "LoadingToast",
        mask: true,
        success: function() {
          typeof config.successFn === "function" && config.successFn()
        },
        fail: function() {
          typeof config.failFn === "function" && config.failFn()
        },
        complete: function() {
          typeof config.completeFn === "function" && config.completeFn()
        }
      });
    } else {
      wx.hideLoading();
    };
  },

  //alert 提示弹窗
  alert: function(config) {
    wx.showToast({
      title: config.title || "showToast",
      icon: config.icon, //图标,有效值: "success", "loading"
      mask: true,
      image: config.image, //image优先级高于icon
      duration: config.duration || 1200, //提示延迟时间
      success: function() {
        typeof config.successFn === "function" && config.successFn()
      },
      fail: function() {
        typeof config.failFn === "function" && config.failFn()
      },
      complete: function() {
        typeof config.completeFn === "function" && config.completeFn()
      }
    });
  },

  //同于dialog 对话框
  dialog: function(config) {
    wx.showModal({
      title: config.title || "",
      content: config.content,
      showCancel: config.showCancel,
      cancelText: config.cancelText || "取消",
      cancelColor: config.cancelColor || "#000000",
      confirmText: config.confirmText || "确定",
      confirmColor: config.confirmColor || "#3cc51f",
      success: function(res) {
        //res,返回confirm Boolean为true,表示用户点击"确定";返回cancel Boolean为true,表示点击"取消"
        if(res.confirm) {
          typeof config.successFn === "function" && config.successFn()
        } else if(res.cancel) {
          typeof config.failFn === "function" && config.failFn()
        }
      },
      // 这里是调用接口失败和完成
      fail: function() {
        typeof config.failFn === "function" && config.failFn()
      },
      complete: function() {
        typeof config.completeFn === "function" && config.completeFn()
      }
    });
  },

  //通用ajax方法
  sendAjax: function(config) {
    if(config && config.url) {
      //发起网络请求
      wx.request({
        url: config.url,
        header: {
          "content-type" : "appliction/json;charset=utf8"
        },
        data: config.data || {}, //请求参数
        method: config.method || "GET",
        dataType: config.dataType || "JSON",
        success: function (res) {
          typeof config.success === 'function' && config.success(res);
          },
        fail: function (res) {
          typeof config.fail === 'function' && config.fail(res);
        }
      })
    } else {
      console.warn("[warn]:ajax url is undefined.");
    }
  },

  //深复制
  deepClone: function(obj) {
    let str,newobj = obj.constructor === Array ? [] : {}; //判断是数据还是对象
    if(typeof obj !== "object") {
      return ;
    } else {
      str = JSON.stringfly(obj), //系列化对象
      newobj = JSON.parse(str);
    }
    return newobj;
  },

  // 替换中文标点为英文标点
  changeMarkType : function(s) {
    s=s.replace(/：/g,':');  
    s=s.replace(/。/g,'.');  
    s=s.replace(/“/g,'"');  
    s=s.replace(/”/g,'"');  
    s=s.replace(/【/g,'[');  
    s=s.replace(/】/g,']');  
    s=s.replace(/《/g,'<');  
    s=s.replace(/》/g,'>');
    s=s.replace(/！/g,'!');  
    s=s.replace(/，/g,',');  
    s=s.replace(/？/g,'?');  
    s=s.replace(/、/g,',');  
    s=s.replace(/；/g,';');  
    s=s.replace(/（/g,'(');  
    s=s.replace(/）/g,')');
    s=s.replace(/“/g,"'");
    s=s.replace(/”/g,"'");
    s=s.replace(/‘/g,"'");  
    s=s.replace(/’/g,"'");  
    s=s.replace(/『/g,"[");  
    s=s.replace(/』/g,"]");  
    s=s.replace(/「/g,"[");  
    s=s.replace(/」/g,"]");  
    s=s.replace(/﹃/g,"[");  
    s=s.replace(/﹄/g,"]");  
    s=s.replace(/〔/g,"{");  
    s=s.replace(/〕/g,"}");  
    s=s.replace(/—/g,"-");  
    s=s.replace(/·/g,".");
    s=s.replace(/……/, "");
    s=s.replace(/。。。/g,"");
    s=s.replace(/。。。。。。/g,"");
    return s;
  },

  //正则通用表达式
  regularExpression: function(str, rule) {

  }
};
module.exports = util;














