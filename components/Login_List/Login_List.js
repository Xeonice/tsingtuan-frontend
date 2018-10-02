// components/Login_List/Login_List.js
const util = require('../../utils/util.js');
const request = require("../..//utils/http");

Component({
    /**
     * 组件的属性列表
     */
    properties: {
        university: {
            type: Array
        }
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
        universityIndex: 0,

        society: [],
        societyIndex: 0,
        society_ID: "",

        //监听用户输入信息
        societyInput: "",
        //判断社团名是否被注册
        isOccupied: false,
        showTopTips: false,
        deBounceCallback: null
    },
    onload: function () {

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
            let University = this.data.university[Index];
            let that = this;
            let tempSociety = null;
            console.log('picker University 发生选择改变，携带值为', this.data.university[Index]);

            request.POST("/getOrganizationByUniversityID", {
                university_code: University.university_code
            }).then(res => {
                tempSociety = res.data.result;
                that.setData({
                    society: tempSociety,
                    universityIndex: Index,
                    university_code: University.university_code
                });
                console.log(that.data);
            }).catch(err => {
                console.error(err);
            });

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
            let societyIndex = that.data.society.findIndex((item, index) => item.name == societyInput);
            console.log("Match: " + societyIndex);
            if (societyIndex === -1) {
                console.log("无该社团");
                that.setData({
                    societyInput,
                    isOccupied: false
                })
            }
            else {
                let society_ID = that.data.society[societyIndex].organization_id
                console.log("已有该社团", societyIndex);
                that.setData({
                    isOccupied: true,
                    societyIndex,
                    societyInput,
                    society_ID
                })
                console.log(that.data);
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
                this.triggerEvent('CheckTips', { showTopTips: true})
            } else {
                //获取全部信息并传递
                let that = this;
                if(this.data.isOccupied){
                    let societyID = this.data.society[this.data.societyIndex].organization_id;
                    console.log(societyID);
                    request.POST("/insertIntoStudent", {
                        name: that.data.name,
                        university_code: that.data.university_code,
                    }).then(res => {
                        console.log(res);
                    }).catch(err => {
                        console.error(err);
                    });
                    console.log(societyID, that.data.name);
                    request.POST("/insertIntorole", {
                        organization_id: that.data.society_ID,
                        division: "member", 
                        name: that.data.name,
                        wechat_id: "0"
                    }).then(res => {
                        console.log(res);
                    }).catch(err => {
                        console.error(err);
                    })
                }
                else {
                    let lastSocietyID = parseInt(this.data.society.pop().organization_id.split("").pop());
                    console.log(lastSocietyID);
                    request.POST("/insertIntoStudent", {
                        name: that.data.name,
                        university_code: that.data.university_code,
                    }).then(res => {
                        console.log(res);
                    }).catch(err => {
                        console.error(err);
                    });
                    request.POST("/insertIntoOrganization", {
                        name: that.data.societyInput,
                        university_code: that.data.university_code,
                        organization_id:`${that.data.university_code}-${lastSocietyID + 1}`
                    }).then(res => {
                        console.log(res);
                    }).catch(err => {
                        console.error(err);
                    });
                    request.POST("/insertIntorole", {
                        organization_id: `${that.data.university_code}-${lastSocietyID + 1}`,
                        division: "admin",
                        name: that.data.name,
                        wechat_id: "0"
                    }).then(res => {
                        console.log(res);
                    }).catch(err => {
                        console.error(err);
                    })
                }
                wx.redirectTo({
                    url: "../Login_success/Login_success"
                })
            }
        },
    }
})