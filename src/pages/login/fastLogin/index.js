import React, {Component} from 'react'
import { FastLoginStyle, Logo, FastLoginWay, Way, Login } from './styledComponent'
import { ActiveNavLink} from "@C/commons/router";

class FastLogin extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    componentWillMount() {

    }
    render() {
        return (
                <FastLoginStyle>
                    <Logo className="logo">
                        <img src="https://passport.ciweishixi.com/public/images/logo.png" alt=""/>
                    </Logo>
                    <FastLoginWay className="login">
                        <p>快速登录</p>
                        <Way className="way">
                            <a href="https://graph.qq.com/oauth2.0/authorize?response_type=code&client_id=101360711&redirect_uri=https%3A%2F%2Fpassport.ciweishixi.com%2Fqq%2Fqq&scope=get_user_info&state=76b3fUJ0Kxa-bEVeZpdUoVD0LqxekI3veeBK7lVk1I6xM6Ke-MXjPKkMg4NzsQkOdwMDzhmVRNytOi9twkdSvqpXzespJhe5GK6LJM_T8VT5rBxJK2aTEDDe2Ercfg_dgSqsnsPBnAN3qoeiWF8q2dqh_i2mw-Jt1sSxle9hcTvrEFGm9sLl9Qud76zFGPnZqIErc0WC2lFwF3LdEtNF_fo9Wq1YGAiIc7Wrwgsb8UXg3DJIoSRs4qLmvp6yfUi8LhZFyb3tezLrVA&display=mobile"><i/></a>
                            <a href="https://api.weibo.com/oauth2/authorize?client_id=2808789237&redirect_uri=https%3A%2F%2Fpassport.ciweishixi.com%2Fweibo%2Fcallback&response_type=code&state=76b3fUJ0Kxa-bEVeZpdUoVD0LqxekI3veeBK7lVk1I6xM6Ke-MXjPKkMg4NzsQkOdwMDzhmVRNytOi9twkdSvqpXzespJhe5GK6LJM_T8VT5rBxJK2aTEDDe2Ercfg_dgSqsnsPBnAN3qoeiWF8q2dqh_i2mw-Jt1sSxle9hcTvrEFGm9sLl9Qud76zFGPnZqIErc0WC2lFwF3LdEtNF_fo9Wq1YGAiIc7Wrwgsb8UXg3DJIoSRs4qLmvp6yfUi8LhZFyb3tezLrVA&display=mobile"><i/></a>
                        </Way>
                    </FastLoginWay>
                    <Login>你也可以使用  <ActiveNavLink tag="span"  to="login">刺猬帐号去登录</ActiveNavLink></Login>
                    <Login>还未有刺猬帐号，去  <ActiveNavLink tag="span"  to="loginin">注册</ActiveNavLink></Login>
                </FastLoginStyle>
        );
    }
    componentDidMount() {

    }
}

export default FastLogin;
