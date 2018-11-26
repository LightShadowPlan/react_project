import React, {Component} from 'react';
import {JobStyle, JobClassItem, JobItemList, JobItem} from './styledComponent'

class Job extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ...props,
            active: [0, 0, 0]
        }
    }

    componentWillReceiveProps(param) {
        this.setState(Provider => {
            Provider.props = param.props
        })
    }

    render() {
        return (
                <JobStyle>
                    {this.jobClass()}
                </JobStyle>
        )
    }

    jobClass() {
        return this.state.props.map((item, index) =>
                <JobClassItem key={index}>
                    <p>{item['job-type']}</p>
                    <JobItemList>
                        {this.jobItem(item, this.state.active[index])}
                    </JobItemList>
                </JobClassItem>
        )

    }

    jobItem(item,activeIndex) {
        return item.jobList.map((_item, index) =>
            <JobItem className={index === activeIndex ? "active" : ""} key={_item["data-id"]}>
                {_item.job}
            </JobItem>
        )
    }

}


export default Job;

