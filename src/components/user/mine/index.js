import React, {Component} from 'react'
import { MineStyle } from './styledComponent'
import { OwnLink, OwnNavLink,  ActiveNavLink} from "@C/commons/router";

class Mine extends Component {
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
                <MineStyle>
                    <p><i className="fa fa-address-card"/><span>个人信息</span></p>
                    <p><i className="fa fa-star"/><span>我的收藏</span></p>
                    <p><i className="fa fa-weixin"/><span>绑定微信</span></p>
                </MineStyle>
        )
    }
    componentDidMount() {

    }
}

export default Mine;
