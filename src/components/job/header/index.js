import React, {Component} from 'react';
import {HeaderStyle, Top, Select} from './styledComponent'

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
                ...props
        }
    }
    componentWillReceiveProps(param) {
        this.setState( Provider => {
            Provider.props = param.props
        })
    }
    render() {
        return (
                <HeaderStyle>
                    <Top>
                        <p>
                            <span>请输入公司名称或职称关键字</span>
                            <i className="fa fa-search"/>
                        </p>
                    </Top>
                    <Select>
                        <p className={"city"+this.state.props.selectActive.id} onClick={this.changeSelect(1)}>全国</p>
                        <p className={"job"+this.state.props.selectActive.id} onClick={this.changeSelect(2)}>职位</p>
                        <p className={"filter"+this.state.props.selectActive.id} onClick={this.changeSelect(3)}>筛选</p>
                    </Select>
                </HeaderStyle>
        )
    }
    changeSelect = (num) =>  {
        return () => {
            this.state.props.changeSelect(num)
        }
    }

}


export default Header;

