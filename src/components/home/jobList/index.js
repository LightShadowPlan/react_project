import React, {Component, Fragment} from 'react';
import { JobItem} from './styledComponent'

class JobList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ...props
        }
    }

    render() {
        return (
                <Fragment>
                    {this.jobList()}
                </Fragment>

        )
    }
    componentWillReceiveProps(param) {
        this.setState({ props: param.props })
    }


    jobList() {
        return this.state.props.map((item) => (
                    <JobItem key={item.jobid}>
                        <img src={item.logo} alt=""/>
                        <div className="rightInfo">
                            <p className="left jobName">{item.title}</p>
                            <p className="right jobTime">{item.addtime}</p>
                            <p className="left jobCity">{item.comname}[{item.city}]</p>
                            <p className="left jobClass">行业: {item.industryName}</p>
                            <p className="right jobSalary">{item.salary}</p>
                        </div>
                    </JobItem>
        ))


    }
}


export default JobList;

