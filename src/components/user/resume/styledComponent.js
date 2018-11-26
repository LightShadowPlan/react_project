import styled from 'styled-components'

export const ResumeStyle = styled.div`
    width: 100%;
    height: auto;
    overflow: hidden;
    color: tomato;
`
export const MyResume = styled.div`
    height: 0.80rem;
    margin: 0.40rem 0.53rem 0;
    text-align: center;
    font-size: .49rem;
    color: #999;
    overflow: hidden;
    position: relative;
    & span:last-child{
        position: absolute;
        right: 0;
        top: 0;
        font-size: 0.32rem;
        color: #34B8BE;
        margin-top: 0.13rem;
    }
`
export const Percentage = styled.div`
    width: 100%;
    height: auto;
    text-align: center;
    overflow: hidden;
    & p:first-child{
        height: 1.20rem;
        line-height: 1.20rem;
        color: #34b9be;
        font-size: 0.48rem;
        & span{
            font-size: 1.20rem;
        }
    }
     & p:last-child{
        height: 0.40rem;
        line-height: 0.40rem;
        font-size: 0.32rem;
        color: #999;
        
    }
`
export const ShowPercentage = styled.div`
    width: 100%;
    height: 0.80rem;
    position: relative;
    overflow: hidden;
`
export const BgColor = styled.div`
    width: 100%;
    height: 0.50rem;
    position: absolute;
    top: 0.33rem;
    background: linear-gradient(to right, #00ff20, #ffe400, #ff0900);
    overflow: hidden;
    &::after{
        content: '';
        display: block;
        width: ${ props => 100 - props.bgWidth }%;
        background: #dedede;
        height: 100%;
        position: absolute;
        top: 0;
        right: 0;
        transition: 0.5s;
    }
`
export const BgPercentage = styled.div`
    width: 100%;
    height: 0.80rem;
    position: absolute;
    top: 0;
    background: url(${ props => props.bgImg });
    background-size: 100% 100%;
    overflow: hidden;
`
