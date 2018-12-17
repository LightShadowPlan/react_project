import React, {Component, Fragment} from 'react';
import { DetailsStyle } from './styledComponent'
class Details extends Component {
    constructor(props) {
        super(props)
        this.state = {
            props: ~~props.location.search.split('=')[1],
        }
    }
    componentWillMount() {

    }
    render() {
        return (
                <DetailsStyle>
                    <p>详情id: {this.state.props}</p>
                    <p>服务器渲染</p>
                    <p>没有数据</p>
                    <p>告辞</p>
                </DetailsStyle>

        )
    }
}


export default Details;

