import React, {Component} from 'react';
import {HeaderSwiper, SwiperContainer, SwiperWrapper, SlideSwiper, SwiperPagination, HeaderSearch} from './styledComponent'
import Swiper from 'swiper'

let bannerImg = {
    Img: [
        {id: 239, url: 'https://img.shixijob.net/Uploads/u/adimg5bf25ed20e670.png'},
        {id: 238, url: 'https://img.shixijob.net/Uploads/u/adimg5bf25ef7a3c9c.png'},
        {id: 236, url: 'https://img.shixijob.net/Uploads/u/adimg5be01c3ae0482.jpg'}
    ]
}

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
                ...props
        }
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
                    <HeaderSearch href="">
                        <span>搜索你感兴趣的职位/公司</span>
                        <i className="fa fa-search"/>
                    </HeaderSearch>
                </HeaderSwiper>
        )
    }

    componentDidMount() {
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


    slideSwiper() {
        return this.state.Img.map((item) => (
                <SlideSwiper className="swiper-slide" key={item.id} item={item}/>
        ))


    }
}

Header.defaultProps = bannerImg

export default Header;

