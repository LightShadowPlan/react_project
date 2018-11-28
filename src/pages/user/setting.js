import React, {Component, Fragment} from 'react'
import { CommonsHeaderStyle, SettingContainer } from './styledComponent'
import {Route, Switch, Redirect, withRouter} from 'react-router-dom'
import { ActiveNavLink} from "@C/commons/router";
class Setting extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    componentWillMount() {

    }
    render() {
        return (
                <Fragment>
                    <CommonsHeaderStyle>
                        <div className="header">
                            <p><ActiveNavLink tag={"i"} to="/user" className="fa fa-angle-left"/><span>设置</span></p>
                        </div>
                        <SettingContainer className="container">
                            <li><span>账号安全</span><i className="fa fa-angle-right"/></li>
                            <li><span>实名认证</span><i className="fa fa-angle-right"/></li>
                            <li><span>帮助中心</span><i className="fa fa-angle-right"/></li>
                            <li><span>客服帮助</span><i className="fa fa-angle-right"/></li>
                        </SettingContainer>
                        <div className="signup" onClick={ this.loginout }>退出</div>
                    </CommonsHeaderStyle>
                </Fragment>
        );
    }
    loginout() {
        localStorage.loginin = false
        return <Redirect to="/user"/>
    }
    componentDidMount() {

    }

}

export default Setting;
