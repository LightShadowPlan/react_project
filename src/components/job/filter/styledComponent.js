import styled  from 'styled-components'

export const FilterStyle = styled.div`
    width: 100%;
    height: auto;
    overflow: hidden;
    box-sizing: border-box;
    padding-top: 2.48rem;
    background: #fff;
`
export const FilterClassItem = styled.div`
    width: 100%;
    height: auto;
    overflow: hidden;
    box-sizing: border-box;
    & p{
        width: 100%;
        height: 0.80rem;
        padding: 0 0.40rem;
        box-sizing: border-box;
        line-height: 0.80rem;
        font-size: 0.40rem;
    }
    &:last-child ul{
        padding-bottom: 2.00rem;
    }
`
export const FilterItemList = styled.ul`
    width: 100%;
    height: auto;
    padding: 0 0.20rem 0.20rem;
    box-sizing: border-box;
    &::after{
        content: '';
        display: block;
        height: 0;
        overflow: hidden;
        clear: both;
    }
`
export const FilterItem = styled.li`
    width: 2.80rem;
    height: 0.83rem;
    float: left;
    margin: 0.13rem 0.20rem;
    overflow: hidden;
    text-align: center;
    line-height: 0.80rem;
    box-sizing: border-box;
    background: #f0f0f0;
    color: #666;
    font-size: 24px;
    &.active{
        background: #34b9be;
        color: #fff;
    }
`
