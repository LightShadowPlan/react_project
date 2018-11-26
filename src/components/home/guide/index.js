import React, {Component} from 'react';
import { GuideStyle, GuideItem } from './styledComponent'

let guideImg = {
    Img: [
        {
            "id": 254,
            "picurl": "https://img.shixijob.net/Uploads/u/adimg5a33918279f07.png",
            "title": "写一份100%通过筛选的简历",
            "desc": "写一份100%通过筛选的简历",
            "target": "http://study.163.com/course/introduction/1004727008.htm",
            "sort": 0,
            "type": "url"
        },
        {
            "id": 255,
            "picurl": "https://img.shixijob.net/Uploads/u/adimg593f5ffbe8892.png",
            "title": "从面试到offer，就差这5步！",
            "desc": "从面试到offer，就差这5步！",
            "target": "http://study.163.com/course/introduction/1004730009.htm",
            "sort": 0,
            "type": "url"
        }
    ]
}

class Guide extends Component {
    constructor(props) {
        super(props)
        this.state = {
                ...props
        }
    }
    render() {
        return (
            <GuideStyle>
                { this.guideList() }
            </GuideStyle>
        )
    }


    guideList() {
        return this.state.Img.map((item) => (
                <GuideItem key={item.id} src={item.picurl}/>
        ))


    }
}

Guide.defaultProps = guideImg

export default Guide;

