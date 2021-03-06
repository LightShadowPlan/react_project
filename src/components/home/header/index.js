import React, {Component} from 'react';
import {HeaderSwiper, SwiperContainer, SwiperWrapper, SlideSwiper, SwiperPagination, HeaderSearch} from './styledComponent'
import {Route, Switch, Redirect, withRouter} from 'react-router-dom'
import Swiper from 'swiper'

let defaultProps = [
        {id: 239, picurl: 'https://img.shixijob.net/Uploads/u/adimg5bf25ed20e670.png'}
    ]


class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            props: defaultProps
        }
    }
    componentWillReceiveProps(param) {
        this.setState({ props: param.props })
    }
    render() {
        return (
                <HeaderSwiper>
                    <SwiperContainer className="swiper-container">
                        <SwiperWrapper className="swiper-wrapper">
                            {this.slideSwiper()}
                        </SwiperWrapper>
                    </SwiperContainer>
                    <SwiperPagination className="swiper-pagination"/>
                    <HeaderSearch onClick={this.search}>
                        <span>搜索你感兴趣的职位/公司</span>
                        <i className="fa fa-search"/>
                    </HeaderSearch>
                </HeaderSwiper>
        )
    }
    search() {
        return <Redirect to={"/shixi"}/>
    }
    swiper = () => {
        new Swiper('.swiper-container', {
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            }
        });
    }
    // componentDidMount() {
    //     this.swiper()
    // }
    componentDidUpdate() {
        this.swiper()
    }


    slideSwiper() {
        return this.state.props.map((item) => (
                <SlideSwiper className="swiper-slide" key={item.id} item={item}/>
        ))


    }
}


export default Header;

