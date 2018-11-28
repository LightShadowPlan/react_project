import React, {Component} from 'react';
import {NavStyle, NavItem} from './styledComponent'

let definedProps = [
        {
            "id": 256,
            "picurl": "https://img.shixijob.net/Uploads/u/adimg5941f0b4ba730.png",
            "title": "刺猬体验"
        },
        {
            "id": 257,
            "picurl": "https://img.shixijob.net/Uploads/u/adimg5941f0c493187.png",
            "title": "刺猬学院"
        },
        {
            "id": 258,
            "picurl": "https://img.shixijob.net/Uploads/u/adimg5941f0d3d3b8a.png",
            "title": "世界500强"
        },
        {
            "id": 259,
            "picurl": "https://img.shixijob.net/Uploads/u/adimg594347efb4c5d.png",
            "title": "月薪过万"
        }
    ]


class Nav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            props: definedProps
        }
    }

    render() {
        return (
                <NavStyle>
                    {this.navList()}
                </NavStyle>
        )
    }
    componentWillReceiveProps(param) {
        console.log(param.props);
        this.setState({ props: param.props })
    }

    navList() {
        return this.state.props.map((item) => (

                    <NavItem key={item.id}>
                        <img src={item.picurl} alt=""/>
                        <span>{item.title}</span>
                    </NavItem>

        ))
    }
}


export default Nav;

