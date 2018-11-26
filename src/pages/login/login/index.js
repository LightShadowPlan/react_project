import React, {Component} from 'react'
import { LoginStyle, Logo, Form} from './styledComponent'
import { OwnLink, OwnNavLink,  ActiveNavLink} from "@C/commons/router";
class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            passwordNum: 0,
            passwordView: [
                { inputType: 'password', className: 'fa fa-eye-slash' },
                { inputType: 'text', className: 'fa fa-eye' }
            ]
        }
    }
    componentWillMount() {

    }
    render() {
        return (
                <LoginStyle>
                    <Logo className="logo">
                        <img src="https://passport.ciweishixi.com/public/images/logo.png" alt=""/>
                    </Logo>
                    <Form id="login">
                        <input type="text" name="username" id="username" placeholder="手机号码/邮箱"/>
                        <input type={this.state.passwordView[this.state.passwordNum].inputType} name="password" id="password" placeholder="密码"/>
                        <label htmlFor="password" className={this.state.passwordView[this.state.passwordNum].className} onClick={this.changePasswordView(this.state.passwordNum)}/>
                        <p>
                            <span>海外用户登录</span>
                            <span>忘记密码？</span>
                        </p>
                        <button type="submit" id="submit">登录</button>
                    </Form>
                    <p className="gotoLoginin"><span>还未有刺猬帐号，去 </span><ActiveNavLink tag="span"  to="/loginin">注册</ActiveNavLink></p>
                </LoginStyle>
        );
    }
    changePasswordView = (num) => {
        return () => {
            num = num ? 0 : 1
            this.setState({ passwordNum: num })
        }

    }
    componentDidMount() {

    }
}

export default Login;
