let timeout;
Page({
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
        isAuthed: false,
        showTopTips: false
    },
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
        if(timeout) {
            clearTimeout(timeout);
            timeout = null;
        }
        timeout = setTimeout(() => {
            let societyInput = e.detail.value;
            if(this.data.society.find((n) => n === societyInput)){
                let index = this.data.society.indexOf(societyInput);
                console.log("已有该社团");
                this.setData({
                    isAuthed: true,
                    societyIndex: index,
                    societyInput: societyInput
                })
                console.log(this.data.isAuthed);
            }
            else {
                console.log("无该社团");
                this.setData({
                    societyInput: societyInput,
                    isAuthed: false
                })
            }
        }, 700)
    },
    bindNameInput: function (e) {
        //事件防抖
        if (timeout) {
            clearTimeout(timeout);
            timeout = null;
        }
        timeout = setTimeout(() => {
            let nameInput = e.detail.value;
            console.log(nameInput);
            this.setData({
                name: nameInput
            })
        }, 700)
    },
    openSuccess: function () {
        if(!this.data.name || !this.data.universityIndex || !this.data.societyInput){
            console.log("请输入全部信息");
            this.setData({
                showTopTips: true
            })
        }
        else{
            wx.redirectTo({
                url: 'Login_success'
            })
        }
    },
});