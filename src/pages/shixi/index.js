import React, {Component} from 'react'
import Job from '../job'
class Shixi extends Component {
    constructor(props) {
        super(props)
        this.state = {
            type: 1
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

export default Shixi;
