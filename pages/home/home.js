const app = getApp();

Page({
  userInfo: {},
  onLoad: function () {
    var that = this;
    app.getUserInfo(function (userInfo) {
      that.setData({
        userInfo
      })
    })
  }
})