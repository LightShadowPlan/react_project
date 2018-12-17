import React, {Component, Fragment} from 'react';
import { JoblistStyle} from './styledComponent'
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
                <JoblistStyle>
                    {this.jobList()}
                </JoblistStyle>

        )
    }
    componentWillReceiveProps(param) {
        this.setState({ props: param.props })
    }


    jobList() {
        if( !this.state.props ) {
            return false
        }
        return this.state.props.map((item) => (
                    <ActiveNavLink key={item.jobid} tag={'div'} className={ 'jobitem' } to={'/details?jobid='+item.jobid}>
                        <img src={item.companyData.logo} alt=""/>
                        <div className="rightInfo">
                            <p className="left jobName">{item.title}</p>
                            <p className="right jobTime">{item.addtime}</p>
                            <p className="left jobCity">{item.comname}[{item.cityName}]</p>
                            <p className="left jobClass">行业: {item.companyData.industryName}</p>
                            <p className="right jobSalary">{item.salary}</p>
                        </div>
                    </ActiveNavLink>
        ))


    }
}


export default JobList;

