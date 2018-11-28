import React, {Component} from 'react';
import JobList from '../jobList'
import {JobStyle} from './styledComponent'
import {Route, Switch, Redirect, withRouter} from 'react-router-dom'
import { OwnLink, OwnNavLink,  ActiveNavLink} from "@C/commons/router";
let definedProps = [
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
        }
    ]


class HomeJob extends Component {
    constructor(props) {
        super(props)
        this.state = {
            props: definedProps
        }
    }

    render() {
        return (
                <JobStyle>
                    <p className="jobTitle">- 为你推荐的实习职位 -</p>
                    <JobList props={ this.state.props }/>
                    <ActiveNavLink tag="p" to="/shixi" className="seeMoreJob">点击查看更多职位 >></ActiveNavLink>
                </JobStyle>
        )
    }
    componentWillReceiveProps(param) {
        this.setState({ props: param.props })
    }

}


export default HomeJob;

