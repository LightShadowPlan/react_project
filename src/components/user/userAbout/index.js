import React, {Component} from 'react'
import { UserAboutStyle, Top, HeadPhone, Username, Authentication } from './styledComponent'
import { ActiveNavLink } from "@C/commons/router";
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
                        <ActiveNavLink tag={"span"} to={"/setting"} className="fa fa-cog"/>
                        <ActiveNavLink tag={"span"} to={"/message"} className="fa fa-envelope"/>
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
