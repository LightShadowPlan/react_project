import styled from 'styled-components'

export const HeaderSwiper = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`
export const SwiperContainer = styled.div`
    height: 4.00rem;
`
export const SwiperWrapper = styled.div`
     height: 100%;
`
export const SlideSwiper = styled.div`
    height: 100%;
    background: url(${ props => props.item.picurl}) no-repeat;
    background-size: 100% 100%;
    
`
export const SwiperPagination = styled.div`
  width: 100%;
  margin: -0.53rem auto;
  & span{
    margin: 0 0.13rem;
    width: 0.16rem;
    height: 0.16rem;
  }
  & span.swiper-pagination-bullet-active{
    background: rgba(0,0,0,0.7);
  }
`
export const HeaderSearch = styled.a`
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    -webkit-user-select: none;
    -moz-user-select: none;
display: block;
   width: 9.20rem;
   height: 1.17rem;
    background: rgba(0,0,0,0.5);
    position: absolute;
    top: 0.25rem;
    left: 0.40rem;
    right: 0.40rem;
    border-radius: 0.75rem;
    z-index: 99;
    box-sizing: border-box;
    padding: 0.3rem 0.4rem;
    & span{
      line-height: 0.57rem;
      font-size: 0.4rem;
      color: #ccc;
    }
    & i{
      line-height: 0.57rem;
      font-size: 0.65rem;
      color: rgb(57, 177, 182);
      float: right;
    }
   
`
