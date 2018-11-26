import React, {Component, Fragment} from 'react'
import { UserAboutStyle, Top, HeadPhone, Username, Authentication } from './styledComponent'
import {Route, Switch, Redirect, withRouter} from 'react-router-dom'
class UserAbout extends Component {
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
                <UserAboutStyle>
                    <Top className="top">
                        <span className="fa fa-cog"/>
                        <span className="fa fa-envelope"/>
                    </Top>
                    <HeadPhone/>
                    <Username className="username" key={this.state.props.user.id}>{this.state.props.user.username}</Username>
                    <Authentication className="authentication" >
                        <span className="fa fa-vimeo"/>
                        <span>{this.state.props.user.gradeTitle}</span>
                    </Authentication>
                </UserAboutStyle>
        );
    }

    componentDidMount() {

    }
}

export default UserAbout;
