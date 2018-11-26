import React, {Component} from 'react'
import { FindWorkStyle, Tips, MyJobWant } from './styledComponent'
import { OwnLink, OwnNavLink,  ActiveNavLink} from "@C/commons/router";

class FindWork extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ...props
        }
    }
    componentWillMount() {

    }
    render() {
        return (
                <FindWorkStyle>
                    <Tips>
                        <p>Tips</p>
                        <p>你有 <span>{ this.state.props.user.jobNews }</span> 条投递反馈</p>
                    </Tips>
                    <MyJobWant><span>我的求职意向</span><span>></span></MyJobWant>
                </FindWorkStyle>
        )
    }
    componentDidMount() {

    }
}

export default FindWork;
