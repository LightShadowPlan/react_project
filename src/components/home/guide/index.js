import React, {Component} from 'react';
import { GuideStyle, GuideItem } from './styledComponent'

let definedProps = [
        {
            "id": 254,
            "picurl": "https://img.shixijob.net/Uploads/u/adimg5a33918279f07.png"
        },
        {
            "id": 255,
            "picurl": "https://img.shixijob.net/Uploads/u/adimg593f5ffbe8892.png"
        }
    ]

class Guide extends Component {
    constructor(props) {
        super(props)
        this.state = {
                props: definedProps
        }
    }
    render() {
        return (
            <GuideStyle>
                { this.guideList() }
            </GuideStyle>
        )
    }
    componentWillReceiveProps(param) {
        this.setState({ props: param.props })
    }

    guideList() {
        return this.state.props.map((item) => (
                <GuideItem key={item.id} src={item.picurl}/>
        ))


    }
}


export default Guide;

