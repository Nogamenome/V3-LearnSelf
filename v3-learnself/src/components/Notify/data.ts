export interface ListItem {
    // 头像
    avatar?: string
    title: string
    datetime?: string
    description?: string
    status?: "primary" | "success" | "warning" | "info" | "danger"
    extra?: string
}

// 通知
export const notifyData: ListItem[] = [
    {
        avatar: "https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png",
        title: "学习项目",
        datatime: "一年前",
        description:
            "用作一个中后台管理系统基础解决方案的学习，基于 Vue3、TypeScript、Element Plus 和 Pinia"
    },
    {
        avatar: "https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png",
        title: "第一则消息",
        datatime: "两年前",
        description: "测试"
    }
]

// 消息
export const messageData: ListItem[] = [
    {
        avatar: "https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",
        title: "《永世乐土》",
        datatime: "2022-04-08",
        description: 
            "某一日，祂从天坠落。 人们抬头仰望，于是看见了星空。 星月送来神的女儿，她愿成为人的伴侣。 长风化作她的轺车，四海落成她的园圃。 鸟雀衔来善的种子，百花编织爱的颂歌。 "
    },
    {
        avatar: "https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",
        title: "《诡秘之主》",
        datatime: "2018-03-03",
        description: "我们是守护者，同时也是时刻对抗着疯狂的可怜虫。"
    }
]

// 待办
export const todoData: ListItem[] = [
    {
        title: "task1",
        description: "完成本项目",
        extra: "未开始",
        status: "info"
    },
    {
        title: "task1",
        description: "完成本项目",
        extra: "进行中",
        status: "primary"
    },
    {
        title: "task1",
        description: "完成本项目",
        extra: "已超时",
        status: "danger"
    }
]