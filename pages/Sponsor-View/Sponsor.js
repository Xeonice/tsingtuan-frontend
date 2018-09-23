var sliderWidth = 80; // 需要设置slider的宽度，用于计算中间位置
// pages/Sponsor-View/Sponsor.js
Page({

    /**
     * 页面的初始数据
     */

    data: {
        tabs: ["赞助商", "社团联动"],
        activeIndex: 0,
        sliderOffset: 0,
        sliderLeft: 0,
        sponser_data: [
            {
                title: "体育用品",
                items: [
                    {
                        name: "懒熊体育1",
                        school: ""
                    },
                    {
                        name: "懒熊体育2",
                        school: ""
                    },
                    {
                        name: "懒熊体育3",
                        school: ""
                    },
                    {
                        name: "懒熊体育4",
                        school: ""
                    },
                    {
                        name: "懒熊体育1",
                        school: ""
                    },
                    {
                        name: "懒熊体育1",
                        school: ""
                    },
                    {
                        name: "懒熊体育1",
                        school: ""
                    },
                    {
                        name: "懒熊体育1",
                        school: ""
                    },
                    {
                        name: "懒熊体育1",
                        school: ""
                    }
                ]
            },
            {
                title: "海报打印",
                items: [
                    {
                        name: "懒熊体育1",
                        school: ""
                    },
                    {
                        name: "懒熊体育2",
                        school: ""
                    }
                ]
            },
            {
                title: "啤酒饮料矿泉水",
                items: [
                    {
                        name: "懒熊体育1",
                        school: ""
                    },
                    {
                        name: "懒熊体育2",
                        school: ""
                    },
                    {
                        name: "懒熊体育3",
                        school: ""
                    }
                ]
            },
            {
                title: "书包文具",
                items: [
                    {
                        name: "懒熊体育1",
                        school: ""
                    },
                    {
                        name: "懒熊体育2",
                        school: ""
                    },
                    {
                        name: "懒熊体育3",
                        school: ""
                    },
                    {
                        name: "懒熊体育4",
                        school: ""
                    }

                ]
            },
            {
                title: "休闲零食",
                items: [
                    {
                        name: "懒熊体育1",
                        school: ""
                    },
                    {
                        name: "懒熊体育2",
                        school: ""
                    },
                    {
                        name: "懒熊体育3",
                        school: ""
                    },
                    {
                        name: "懒熊体育4",
                        school: ""
                    },
                    {
                        name: "懒熊体育1",
                        school: ""
                    }
                ]
            }
        ],
        society_data: [
            {
                title: "竞技体育",
                items: [
                    {
                        name: "懒熊体育1",
                        school: "a"
                    },
                    {
                        name: "懒熊体育2",
                        school: "b"
                    },
                    {
                        name: "懒熊体育3",
                        school: "c"
                    },
                    {
                        name: "懒熊体育4",
                        school: "d"
                    },
                    {
                        name: "懒熊体育1",
                        school: "e"
                    },
                    {
                        name: "懒熊体育1",
                        school: "f"
                    }
                ]
            },
            {
                title: "空手道",
                items: [
                    {
                        name: "懒熊体育1",
                        school: "b"
                    },
                    {
                        name: "懒熊体育2",
                        school: "c"
                    },
                    {
                        name: "懒熊体育3",
                        school: "d"
                    },
                    {
                        name: "懒熊体育4",
                        school: "e"
                    },
                    {
                        name: "懒熊体育1",
                        school: "f"
                    },
                    {
                        name: "懒熊体育1",
                        school: "g"
                    },
                    {
                        name: "懒熊体育1",
                        school: "h"
                    },
                    {
                        name: "懒熊体育1",
                        school: "i"
                    },
                    {
                        name: "懒熊体育1",
                        school: "j"
                    }
                ]
            },
            {
                title: "MMA/WWE",
                items: [
                    {
                        name: "懒熊体育1",
                        school: "b"
                    },
                    {
                        name: "懒熊体育2",
                        school: "c"
                    },
                    {
                        name: "懒熊体育3",
                        school: "d"
                    },
                    {
                        name: "懒熊体育4",
                        school: "e"
                    },
                    {
                        name: "懒熊体育1",
                        school: "f"
                    },
                    {
                        name: "懒熊体育1",
                        school: "g"
                    },
                    {
                        name: "懒熊体育1",
                        school: "h"
                    },
                    {
                        name: "懒熊体育1",
                        school: "i"
                    },
                    {
                        name: "懒熊体育1",
                        school: "j"
                    }
                ]
            },
            {
                title: "二次元/动漫",
                items: [
                    {
                        name: "懒熊体育1",
                        school: "b"
                    },
                    {
                        name: "懒熊体育2",
                        school: "c"
                    },
                    {
                        name: "懒熊体育3",
                        school: "d"
                    },
                    {
                        name: "懒熊体育4",
                        school: "e"
                    },
                    {
                        name: "懒熊体育1",
                        school: "f"
                    },
                    {
                        name: "懒熊体育1",
                        school: "g"
                    },
                    {
                        name: "懒熊体育1",
                        school: "h"
                    },
                    {
                        name: "懒熊体育1",
                        school: "i"
                    },
                    {
                        name: "懒熊体育1",
                        school: "j"
                    }
                ]
            },
            {
                title: "历史",
                items: [
                    {
                        name: "懒熊体育1",
                        school: "b"
                    },
                    {
                        name: "懒熊体育2",
                        school: "c"
                    },
                    {
                        name: "懒熊体育3",
                        school: "d"
                    },
                    {
                        name: "懒熊体育4",
                        school: "e"
                    },
                    {
                        name: "懒熊体育1",
                        school: "f"
                    },
                    {
                        name: "懒熊体育1",
                        school: "g"
                    },
                    {
                        name: "懒熊体育1",
                        school: "h"
                    },
                    {
                        name: "懒熊体育1",
                        school: "i"
                    },
                    {
                        name: "懒熊体育1",
                        school: "j"
                    }
                ]
            }
        ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function() {
        var that = this;
        wx.getSystemInfo({
            success: function(res) {
                that.setData({
                    sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
                    sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
                });
            }
        });
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    },
    tabClick: function(e) {
        this.setData({
            sliderOffset: e.currentTarget.offsetLeft,
            activeIndex: e.currentTarget.id
        });
    }

})