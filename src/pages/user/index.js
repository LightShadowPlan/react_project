import React, {Component, Fragment} from 'react'
import UserAbout from '@C/user/userAbout'
import Resume from '@C/user/resume'
import FindWork from '@C/user/findWork'
import Mine from '@C/user/mine'
import { UserStyle } from './styledComponent'
import {Route, Switch, Redirect, withRouter} from 'react-router-dom'
class User extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLogin: 1,
            user: {
                id: 0,
                username: "肖香成",
                grade: 0,
                gradeTitle: "未认证",
                resume: 80,
                jobNews: 11
            }
        }
    }
    componentWillMount() {

    }
    render() {
        return (
                <Fragment>
                    { this.isLogin() }
                </Fragment>
        );
    }

    componentDidMount() {

    }
    isLogin() {
        if(this.state.isLogin) {
            return <UserStyle>
                <UserAbout props={this.state}/>
                <Resume props={this.state}/>
                <FindWork props={this.state}/>
                <Mine props={this.state}/>
            </UserStyle>
        } else{
            return <Redirect to="fastLogin"/>
        }
    }
}

export default User;
