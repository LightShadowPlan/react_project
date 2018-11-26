import React, {Component} from 'react';
import { DefaultListStyle } from './styledComponent'
import JobList from '@C/commons/jobList'
class DefaultList extends Component {
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
                <DefaultListStyle>
                    <JobList/>
                </DefaultListStyle>
        )
    }
}


export default DefaultList;

