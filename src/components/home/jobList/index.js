import React, {Component} from 'react';
import { JobBox} from './styledComponent'
import { ActiveNavLink} from "@C/commons/router";
class JobList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ...props
        }
    }
    render() {
        return (
                <JobBox>
                    {this.jobList()}
                </JobBox>

        )
    }
    componentWillReceiveProps(param) {
        this.setState({ props: param.props })
    }


    jobList() {
        return this.state.props.map((item) => (
                    <ActiveNavLink tag={"div"} className={"jobitem"} key={item.jobid} to={"/details?jobid="+item.jobid} >
                        <img src={item.logo} alt=""/>
                        <div className="rightInfo">
                            <p className="left jobName">{item.title}</p>
                            <p className="right jobTime">{item.addtime}</p>
                            <p className="left jobCity">{item.comname}[{item.city}]</p>
                            <p className="left jobClass">行业: {item.industryName}</p>
                            <p className="right jobSalary">{item.salary}</p>
                        </div>
                    </ActiveNavLink>
        ))


    }
}


export default JobList;

