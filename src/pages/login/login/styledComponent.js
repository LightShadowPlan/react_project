import styled from 'styled-components'

export const LoginStyle = styled.div`
    width: 100%;
    height: auto;
    background: #fff;
    overflow: hidden;
    padding-bottom: 1.33rem;
    & .gotoLoginin{
        height: 60px;
        line-height: 60px;
        text-align: center;
        color: #888;
        font-size: .4rem;
        & span:last-child{
            color: #34b9b4;
        }
    }
`
export const Logo = styled.div`
    width: 100%;
    height: 4.00rem;
    overflow: hidden;
    & img{
    display: block;
        width: 4.40rem;
        height: 2.00rem;
        margin: 1.00rem auto;
        overflow: hidden;
    }
`
export const Form = styled.form`
    width: 100%;
    height: auto;
    overflow: hidden;
    box-sizing: border-box;
    padding: 1rem 0.67rem 0 0.67rem;
    & input{
        width: 100%;
        height: 1.07rem;
        line-height: 1.07rem;
        padding: 0.47rem 0;
        margin: 2px 0;
        font-size: 0.50rem;
        border-bottom: 0.01rem solid #ddd;
        color: #262626;
        letter-spacing: 0.03rem;
        &::placeholder{
            color: #cccccc;
        }
    }
    & label{
        display: block;
        position: relative;
        top: -105px;
        left: 590px;
        width: 60px;
        height: 60px;
        line-height: 60px;
        text-align: center;
        font-size: 50px;
        color: #888;
        cursor: pointer;
        -webkit-tap-highlight-color:rgba(255,0,0,0);
    }
    & p{
        height: 1rem;
        line-height: 1rem;
        font-size: .4rem;
        & span:first-child{
            color: #34b9b4;
            float: left;
        }
        & span:last-child{
            color: #438aa8;
            float: right;
        }
    }
    & button{
         display: block; 
         width: 100%;
         height: 1.60rem;
         margin: 0.67rem 0;
         background: #34b9b4;
         border-radius: 0.13rem;
         font-size: 0.47rem;
         color: #fff;
    }
`

