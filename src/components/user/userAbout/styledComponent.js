import styled from 'styled-components'

export const UserAboutStyle = styled.header`
    width: 100%;
    height: 4.40rem;
    background: #34b9be;
    overflow: hidden;
`
export const Top = styled.p`
   height: 0.93rem;
   font-size: 0.60rem;
   color: #effafa;
   padding: 0 0.40rem;
   overflow: hidden;
   & span{
        float: left;
        margin-top: 0.33rem;
        &:last-child{
            float: right;
        }
   }
`
export const HeadPhone = styled.div`
    width: 1.73rem;
    height: 1.73rem;
    border-radius: 50%;
    overflow: hidden;
    margin: auto;
    border: 0.03rem solid #fff;
    background: url("http://static.ciweishixi.com/public/images/avatar.jpg") center no-repeat ;
    background-size: 100% 100%;
`
export const Username = styled.div`
    height: 0.80rem;
    line-height: 0.80rem;
    text-align: center;
    font-size: 0.47rem;
    color: #f4fcfc;
    margin: 0.07rem;
`
export const Authentication = styled.div`
    width: 2.00rem;
    height: 0.50rem;
    line-height: 0.50rem;
    text-align: center;
    margin: auto;
    color: #bbb;
    background: #fff;
    font-size: .3rem;
    border-radius: 0.20rem;
    & span:first-child{
        float: left;
        margin: 0.07rem 0 0.07rem 0.13rem;
        font-size: 0.32rem;
    }
`
