import React, {Component} from 'react';
import { Get } from '@Lib/axios'
import { DefaultListStyle } from './styledComponent'
import JobList from '@C/commons/jobList'

let definedProps = [
    {
        "jobid": 106173,
        "title": "新房/二手房/商铺销售顾问",
        "salay": "4000-6000元/月",
        "job_class": 1,
        "company_id": 21782,
        "addtime": "2018-11-27",
        "ispositive": 1,
        "apply": 0,
        "fulltimeString": "至少5天",
        "education": "本科",
        "comfullname": "四川链家房地产经纪有限公司",
        "comname": "链家",
        "jobClassString": "实习",
        "isover": 0,
        "fstatus": "0",
        "baomingendtime": "2019-03-31",
        "cityName": "成都",
        "companyData": {
            "logo": "https://img.shixijob.net/Uploads/logo/20170807/1cdaab779b4c4af2cba88fe9c93eb17b.jpg",
            "special": "规模大；范围广；发展迅速；公益",
            "industryName": "房地产/建筑/建材/工程",
            "fstatus": "1"
        }
    },
    {
        "jobid": 116891,
        "title": "人事助理",
        "salay": "4000-6000元/月",
        "job_class": 2,
        "company_id": 24666,
        "addtime": "2018-11-27",
        "ispositive": 0,
        "apply": 0,
        "fulltimeString": "",
        "education": "本科",
        "comfullname": "圣才电子书（武汉）有限公司",
        "comname": "圣才电子书",
        "jobClassString": "校招",
        "isover": 0,
        "fstatus": "0",
        "baomingendtime": "2019-05-23",
        "cityName": "武汉",
        "companyData": {
            "logo": "https://img.shixijob.net/Uploads/logo/20181106/45480e6b664cb1bae53bad269fea8a95.jpg",
            "special": null,
            "industryName": "教育/培训/科研",
            "fstatus": "1"
        }
    },
    {
        "jobid": 117210,
        "title": "电子书编辑",
        "salay": "2000-4000元/月",
        "job_class": 1,
        "company_id": 24690,
        "addtime": "2018-11-27",
        "ispositive": 1,
        "apply": 0,
        "fulltimeString": "至少1天",
        "education": "硕士",
        "comfullname": "圣才电子书（武汉）有限公司",
        "comname": "圣才电子书",
        "jobClassString": "实习",
        "isover": 0,
        "fstatus": "0",
        "baomingendtime": "2019-05-15",
        "cityName": "武汉",
        "companyData": {
            "logo": "https://img.shixijob.net/Uploads/logo/20181106/45480e6b664cb1bae53bad269fea8a95.jpg",
            "special": null,
            "industryName": "教育/培训/科研",
            "fstatus": "1"
        }
    },
    {
        "jobid": 116516,
        "title": "销售业务员",
        "salay": "6000-8000元/月",
        "job_class": 1,
        "company_id": 22938,
        "addtime": "2018-11-27",
        "ispositive": 1,
        "apply": 0,
        "fulltimeString": "至少5天",
        "education": "大专",
        "comfullname": "中国人寿保险股份有限公司广州市分公司第十营销服务部",
        "comname": "中国人寿",
        "jobClassString": "实习",
        "isover": 0,
        "fstatus": "0",
        "baomingendtime": "2019-03-02",
        "cityName": "广州",
        "companyData": {
            "logo": "https://img.shixijob.net/Uploads/logo/20180809/8c68f0176b681dab57c89ace18718a08.jpg",
            "special": "中国人寿保险（集团）公司属国家大型金融保险企业。",
            "industryName": "保险",
            "fstatus": "1"
        }
    },
    {
        "jobid": 116282,
        "title": "电子书视频制作",
        "salay": "100-150元/天",
        "job_class": 1,
        "company_id": 24697,
        "addtime": "2018-11-27",
        "ispositive": 1,
        "apply": 0,
        "fulltimeString": "至少3天",
        "education": "本科",
        "comfullname": "圣才（武汉）电子书有限公司",
        "comname": "圣才电子书",
        "jobClassString": "实习",
        "isover": 0,
        "fstatus": "0",
        "baomingendtime": "2019-05-21",
        "cityName": "武汉",
        "companyData": {
            "logo": "https://img.shixijob.net/Uploads/logo/20181115/39ca4c771c4de9afe67c59ff060cd13d.jpg",
            "special": null,
            "industryName": "教育/培训/科研",
            "fstatus": "1"
        }
    },
    {
        "jobid": 114481,
        "title": "营销储备生",
        "salay": "6000-8000元/月",
        "job_class": 2,
        "company_id": 24600,
        "addtime": "2018-11-27",
        "ispositive": 0,
        "apply": 0,
        "fulltimeString": "",
        "education": "本科",
        "comfullname": "上海孚厘金融信息服务有限公司",
        "comname": "磁金融",
        "jobClassString": "校招",
        "isover": 0,
        "fstatus": "0",
        "baomingendtime": "2019-05-08",
        "cityName": "上海",
        "companyData": {
            "logo": "https://img.shixijob.net/Uploads/logo/20180315/40ae38e39d57a678122c7200378afd33.jpg",
            "special": "致力于普惠金融资产供应及小微企业融资方案开发",
            "industryName": "基金/证券/期货/投资",
            "fstatus": "1"
        }
    }
]

class DefaultList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            props: definedProps,
            type: props

        }
    }
    componentWillMount() {
        let type = this.state.type === 'shixi'? 1 : 2
        Get('/api/jobsearch/ajax?search='+type, {}).then((res) => {
            console.log(res.data);
            this.setState({ props: res.data.lists })
        }, (err) => {
            console.log(err)
        })
    }
    render() {
        return (
                <DefaultListStyle>
                    <JobList props={this.state.props}/>
                </DefaultListStyle>
        )
    }
    componentWillReceiveProps(param) {
        this.setState({ type: param.type })
    }
}


export default DefaultList;

