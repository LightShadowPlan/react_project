import React, {Component} from 'react';
import { NavBottomStyle } from './styledComponent'
import {Route, Switch, Redirect, withRouter} from 'react-router-dom'
import { ActiveNavLink} from "@C/commons/router";

let navIcon = {
    icon: [
        {
            "id": 0,
            "iconname": "fa fa-home",
            "icontitle": "首页",
            "iconrouter": 'home'
        },
        {
            "id": 1,
            "iconname": "fa fa-briefcase",
            "icontitle": "实习",
            "iconrouter": 'shixi'
        },
        {
            "id": 2,
            "iconname": "fa fa-graduation-cap",
            "icontitle": "校招",
            "iconrouter": 'xiaozhao'
        },
        {
            "id": 3,
            "iconname": "fa fa-user",
            "icontitle": "我的",
            "iconrouter": 'user'
        }

    ]
}

class NavBottom extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ...props
        }
    }

    render() {
        return (
                <NavBottomStyle>
                    { this.navList() }
                </NavBottomStyle>
        )
    }

    navList() {
        return this.state.icon.map((item) => (

                    <ActiveNavLink tag="div" className="navItem" key={item.id} to={"/"+item.iconrouter}>
                        <i className={item.iconname}/>
                        <span>{item.icontitle}</span>
                    </ActiveNavLink>

        ))
    }
}

NavBottom.defaultProps = navIcon

export default NavBottom;

