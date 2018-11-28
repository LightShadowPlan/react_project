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

