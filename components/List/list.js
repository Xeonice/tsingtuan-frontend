// components/Index_List/list.js
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
        ListContent: [
            {
                title: "人事安排",
                intro: "招新、换届选举、权限开放、内部考评等",
                iconClass: "icon-HR",
                url: "/pages/Personnel-arrangement/Personnel-arr"
            },
            {
                title: "预算采购报销",
                intro: "活动预算申请、采购商推荐、统一报账管理",
                iconClass: "icon-Account",
                url: ""
            },
            {
                title: "拉赞助 & 社团联动",
                intro: "办活动却找不到赞助商？试试这里",
                iconClass: "icon-Coop",
                url: "/pages/Sponsor-View/Sponsor"
            },
            {
                title: "任务分配",
                intro: "活动任务分配、ddl提醒、历史任务备份",
                iconClass: "icon-Task",
                url: ""
            },
            {
                title: "一键签到",
                intro: "时间、地点、值班心情全纪录",
                iconClass: "icon-Assign",
                url: ""
            }
        ]
    },

    /**
     * 组件的方法列表
     */
    methods: {

    },

})