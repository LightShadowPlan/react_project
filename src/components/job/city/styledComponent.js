import styled  from 'styled-components'

export const CityStyle = styled.div`
    width: 100%;
    height: auto;
    overflow: hidden;
    box-sizing: border-box;
    padding-top: 2.48rem;
`
export const CityClassItem = styled.div`
    width: 100%;
    height: auto;
    overflow: hidden;
    box-sizing: border-box;
    & p{
        width: 100%;
        height: 0.80rem;
        border-top: 0.27rem solid #fff;
        text-align: center;
        line-height: 0.80rem;
        font-size: 0.40rem;
    }
    &:last-child ul{
        padding-bottom: 2.00rem;
    }
`
export const CityItemList = styled.ul`
    width: 100%;
    height: auto;
    background: #fff;
    padding: 0.20rem;
    box-sizing: border-box;
    &::after{
        content: '';
        display: block;
        height: 0;
        overflow: hidden;
        clear: both;
    }
`
export const CityItem = styled.li`
    width: 2.00rem;
    height: 0.83rem;
    float: left;
    margin: 0.13rem 0.20rem;
    overflow: hidden;
    border: 0.01rem solid #ccc;
    text-align: center;
    line-height: 0.80rem;
    box-sizing: border-box;
    font-size: 0.40rem;
    color: #666;
`
