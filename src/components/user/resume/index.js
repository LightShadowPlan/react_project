import React, {Component} from 'react'
import { ResumeStyle, MyResume, Percentage, ShowPercentage, BgColor, BgPercentage } from './styledComponent'
import { ActiveNavLink} from "@C/commons/router";
import bgImg from "@As/images/k.png"


class Resume extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ...props,
            bgImg,
            resume: 0
        }
    }
    componentWillMount() {

    }
    render() {
        return (
                <ResumeStyle>
                    <MyResume>
                        <span>我的简历</span>
                        <span>编辑</span>
                    </MyResume>
                    <Percentage>
                        <p><span>{this.state.resume}</span>%</p>
                        <p><span>完整度</span></p>
                    </Percentage>
                    <ShowPercentage>
                        <BgColor className="bgPercentage" bgWidth={this.state.resume}/>
                        <BgPercentage className="bgPercentage" bgImg={ this.state.bgImg } />
                    </ShowPercentage>
                </ResumeStyle>
        )
    }
    componentDidMount() {
        setTimeout(() => {
           this.setState({ resume: this.state.props.user.resume })
        },0)
    }
}

export default Resume;
