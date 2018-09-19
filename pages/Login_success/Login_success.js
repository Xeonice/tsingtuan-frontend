// pages/components/Login_success.js
const app = getApp();
Page({
    /**
     * 页面的初始数据
     */
    data: {

    },
    backToIndex: function() {
        app.globalData.isLogin = true;
        wx.reLaunch({
            url: '../index/index'
        })
    },
})