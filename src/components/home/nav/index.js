import React, {Component} from 'react';
import {NavStyle, NavItem} from './styledComponent'

let navImg = {
    Img: [
        {
            "id": 256,
            "picurl": "https://img.shixijob.net/Uploads/u/adimg5941f0b4ba730.png",
            "title": "刺猬体验",
            "desc": "刺猬体验",
            "target": "https://m.ciweilive.com",
            "sort": 0,
            "type": "url"
        },
        {
            "id": 257,
            "picurl": "https://img.shixijob.net/Uploads/u/adimg5941f0c493187.png",
            "title": "刺猬学院",
            "desc": "刺猬学院",
            "target": "https://wx7e31f304e5b98c15.h5.xiaoe-tech.com//homepage?entry=2&entry_type=2001",
            "sort": 0,
            "type": "url"
        },
        {
            "id": 258,
            "picurl": "https://img.shixijob.net/Uploads/u/adimg5941f0d3d3b8a.png",
            "title": "世界500强",
            "desc": "世界500强",
            "target": "http://m.ciweishixi.com/jobsearch?key=500%E5%BC%BA+%E4%BA%94%E7%99%BE%E5%BC%BA&city=0",
            "sort": 0,
            "type": "url"
        },
        {
            "id": 259,
            "picurl": "https://img.shixijob.net/Uploads/u/adimg594347efb4c5d.png",
            "title": "月薪过万",
            "desc": "月薪过万",
            "target": "http://m.ciweishixi.com/jobsearch?s_c=0&s_s=106",
            "sort": 0,
            "type": "url"
        }
    ]
}

class Nav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ...props
        }
    }

    render() {
        return (
                <NavStyle>
                    {this.navList()}
                </NavStyle>
        )
    }


    navList() {
        return this.state.Img.map((item) => (

                    <NavItem key={item.id}>
                        <img src={item.picurl} alt=""/>
                        <span>{item.title}</span>
                    </NavItem>

        ))
    }
}

Nav.defaultProps = navImg

export default Nav;

