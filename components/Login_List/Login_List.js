// components/Login_List/Login_List.js
const util = require('../../utils/util.js');

Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },
    options: {
        addGlobalClass: true,
    },
    /**
     * 组件的初始数据
     */
    data: {
        //姓名
        name: "",
        //大学、社团信息
        university: ["请选择你的学校", "清华大学", "北京大学", "复旦大学", "西安交通大学", "上海交通大学", "北京理工大学"],
        universityIndex: 0,

        society: ["请选择你的社团", "话剧社", "文艺社", "美术社", "书法社", "合唱团", "舞蹈社"],
        societyIndex: 0,

        //监听用户输入信息
        societyInput: "",
        //判断社团名是否被注册
        isOccupied: false,
        showTopTips: false,
        deBounceCallback: null
    },
    
    attached: function() {
        //初始化防抖函数，利用闭包防止重复定义 timeout
        this.setData({
            deBounceCallback: util.deBounce(500)
        })
    },
    /**
     * 组件的方法列表
     */
    methods: {
        bindUniversityChange: function(e) {
            let Index = e.detail.value;
            console.log('picker University 发生选择改变，携带值为', this.data.university[Index]);

            this.setData({
                universityIndex: e.detail.value
            })
        },
        bindSocietyChange: function(e) {
            //向后端请求当前选择大学的社团信息，并注入 society 中
            let Index = e.detail.value;
            console.log('picker Society 发生选择改变，携带值为', this.data.society[Index]);

            this.setData({
                societyIndex: e.detail.value
            })
        },
        bindSociietyInput: function(e) {
            //事件防抖
            const that = this;
            this.data.deBounceCallback(e, that, this.SocietyInputCheck);
        },
        SocietyInputCheck: function (e, that) {
            let societyInput = e.detail.value;
            console.log(societyInput);
            if (that.data.society.find((n) => n === societyInput)) {
                let index = that.data.society.indexOf(societyInput);
                console.log("已有该社团");
                that.setData({
                    isOccupied: true,
                    societyIndex: index,
                    societyInput: societyInput
                })
                console.log(that.data.isOccupied);
            } else {
                console.log("无该社团");
                that.setData({
                    societyInput: societyInput,
                    isOccupied: false
                })
            }
        },
        bindNameInput: function(e) {
            //事件防抖
            const that = this;
            this.data.deBounceCallback(e, that ,this.NameInputCheck);
        },
        NameInputCheck: function(e, that) {
            console.log(that);
            let nameInput = e.detail.value;
            console.log(nameInput);
            that.setData({
                name: nameInput
            })
        },
        openSuccess: function() {
            if (!this.data.name || !this.data.universityIndex || !this.data.societyInput) {
                console.log("请输入全部信息");
                this.setData({
                    showTopTips: true
                })
            } else {
                //获取全部信息并传递
                wx.redirectTo({
                    url: "../Login_success/Login_success"
                })
            }
        },
    }
})