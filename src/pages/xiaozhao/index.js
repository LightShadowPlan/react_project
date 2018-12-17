import React, {Component} from 'react'
import Job from '../job'
class Xiaozhao extends Component {
    constructor(props) {
        super(props)
        this.state = {
            type: 2
        }
    }
    render() {
        return (
                <Job type={this.state.type} />
        );
    }
    componentDidMount() {

    }
}

export default Xiaozhao;
