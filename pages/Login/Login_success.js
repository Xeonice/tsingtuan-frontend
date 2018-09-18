const app = getApp();
Page({
    backToIndex: function () {
        app.globalData.isLogin = true;
        wx.reLaunch({
            url: '../index/index'
        })
    },
});