import React, {Component} from 'react';
import {FilterStyle, FilterClassItem, FilterItemList, FilterItem} from './styledComponent'

class Filter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ...props,
            active: [0, 0, 0]
        }
    }

    componentWillReceiveProps(param) {
        this.setState(Provider => {
            Provider.props = param.props
        })
    }

    render() {
        return (
                <FilterStyle>
                    {this.jobClass()}
                </FilterStyle>
        )
    }

    jobClass() {
        return this.state.props.map((item, index) =>
                <FilterClassItem key={index}>
                    <p>{item.filterName}</p>
                    <FilterItemList>
                        {this.jobItem(item, this.state.active[index])}
                    </FilterItemList>
                </FilterClassItem>
        )

    }

    jobItem(item,activeIndex) {
        return item.filterList.map((_item, index) =>
            <FilterItem className={index === activeIndex ? "active" : ""} key={_item["data-id"]}>
                {_item.filter}
            </FilterItem>
        )
    }

}


export default Filter;

