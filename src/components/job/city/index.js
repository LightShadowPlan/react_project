import React, {Component} from 'react';
import {CityStyle, CityClassItem, CityItemList, CityItem} from './styledComponent'

class City extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ...props
        }
    }

    componentWillReceiveProps(param) {
        this.setState(Provider => {
            Provider.props = param.props
        })
    }

    render() {
        return (
                <CityStyle>
                    {this.cityClass()}
                </CityStyle>
        )
    }

    cityClass() {
        return this.state.props.map((item, index) =>
                <CityClassItem key={index}>
                    <p>{item.cityClass}</p>
                    <CityItemList>
                        {this.cityItem(item)}
                    </CityItemList>
                </CityClassItem>
        )

    }

    cityItem(item) {
        return item.cityArr.map((_item) =>
            <CityItem key={_item["data-id"]}>
                {_item.city}
            </CityItem>
        )
    }

}


export default City;

