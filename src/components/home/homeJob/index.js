import React, {Component} from 'react';
import JobList from '@C/commons/jobList'
import {JobStyle} from './styledComponent'
import {Route, Switch, Redirect, withRouter} from 'react-router-dom'
import { OwnLink, OwnNavLink,  ActiveNavLink} from "@C/commons/router";
let jobImg = {
    Img: [
        {
            "jobid": 116825,
            "job_class": 1,
            "city": "北京",
            "education": "本科",
            "title": "市场公关实习生",
            "salary": "150-200元/天",
            "logo": "https://img.shixijob.net/Uploads/logo/20170804/b29885fc16d1cb1bf7759f9b38b91cab.jpg",
            "comfullname": "腾讯音乐娱乐科技（深圳）有限公司",
            "comname": "腾讯音乐",
            "job_class_string": "实习",
            "fulltimeString": "至少5天",
            "company_id": 13876,
            "addtime": "11-23 ",
            "industryName": "计算机软件",
            "ispositive": 0
        },
        {
            "jobid": 116824,
            "job_class": 1,
            "city": "上海",
            "education": "本科",
            "title": "项目管理实习生",
            "salary": "100-150元/天",
            "logo": "https://img.shixijob.net/Uploads/logo/20181116/5bc328285f6f07528bcf545b08ca41d3.jpg",
            "comfullname": "罗氏诊断产品（上海）有限公司",
            "comname": "罗氏诊断",
            "job_class_string": "实习",
            "fulltimeString": "至少3天",
            "company_id": 24721,
            "addtime": "11-23 ",
            "industryName": "医疗设备/器械",
            "ispositive": 0
        },
        {
            "jobid": 104316,
            "job_class": 1,
            "city": "北京",
            "education": "本科",
            "title": "产品运营实习生",
            "salary": "150-200元/天",
            "logo": "https://img.shixijob.net/Uploads/logo/20170608/f213e08185a5fb41426233b49671fded.jpg",
            "comfullname": "北京趣拿软件科技有限公司",
            "comname": "去哪儿网",
            "job_class_string": "实习",
            "fulltimeString": "至少4天",
            "company_id": 12674,
            "addtime": "09-04 ",
            "industryName": "互联网",
            "ispositive": 0
        },
        {
            "jobid": 111778,
            "job_class": 1,
            "city": "广州",
            "education": "大专",
            "title": "交互设计实习生",
            "salary": "150-200元/天",
            "logo": "https://img.shixijob.net/Uploads/logo/20180720/5a2a8ee0c6890ece431b573acb5c63bd.jpg",
            "comfullname": "广州博冠信息科技有限公司",
            "comname": "网易游戏",
            "job_class_string": "实习",
            "fulltimeString": "至少3天",
            "company_id": 1047,
            "addtime": "10-22 ",
            "industryName": "IT|通信|电子",
            "ispositive": 0
        },
        {
            "jobid": 113190,
            "job_class": 1,
            "city": "广州",
            "education": "不限",
            "title": "人力资源实习生",
            "salary": "4000-6000元/月",
            "logo": "https://img.shixijob.net/Uploads/logo/20181031/703ecd215d1b470536a0771d6f128652.jpg",
            "comfullname": "广州视源电子科技股份有限公司",
            "comname": "CVTE",
            "job_class_string": "实习",
            "fulltimeString": "至少4天",
            "company_id": 979,
            "addtime": "10-31 ",
            "industryName": "IT服务(系统/数据/维护)",
            "ispositive": 1
        },
        {
            "jobid": 113805,
            "job_class": 1,
            "city": "北京",
            "education": "本科",
            "title": "旅游编辑实习生",
            "salary": "150-200元/天",
            "logo": "https://img.shixijob.net/Uploads/logo/20171211/dc9770880dff14e9150ecf9bb57ea6a2.jpg",
            "comfullname": "北京搜狐新媒体信息技术有限公司",
            "comname": "搜狐",
            "job_class_string": "实习",
            "fulltimeString": "至少4天",
            "company_id": 22736,
            "addtime": "11-05 ",
            "industryName": "互联网",
            "ispositive": 1
        }
    ]
}

class HomeJob extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ...props
        }
    }

    render() {
        return (
                <JobStyle>
                    <p className="jobTitle">- 为你推荐的实习职位 -</p>
                    <JobList/>
                    <ActiveNavLink tag="p" to="/shixi" className="seeMoreJob">点击查看更多职位 >></ActiveNavLink>
                </JobStyle>
        )
    }

}

HomeJob.defaultProps = jobImg

export default HomeJob;

