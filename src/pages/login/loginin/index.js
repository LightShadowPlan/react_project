import React, {Component} from 'react'
import { LogininStyle, Logo } from './styledComponent'
import { OwnLink, OwnNavLink,  ActiveNavLink} from "@C/commons/router";
class Loginin extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    componentWillMount() {

    }
    render() {
        return (
                <LogininStyle>
                    <Logo className="logo">
                        <img src="https://passport.ciweishixi.com/public/images/logo.png" alt=""/>
                    </Logo>
                    <div className="title">注册，这辈子都不可能注册的。</div>
                    <ActiveNavLink className="login" tag="div"  to="/login">快去登陆</ActiveNavLink>
                </LogininStyle>
        );
    }
    componentDidMount() {

    }
}

export default Loginin;
