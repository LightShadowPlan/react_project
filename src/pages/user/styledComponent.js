import styled from 'styled-components'

export const UserStyle = styled.div`
    width: 100%;
    overflow: hidden;
`
export const CommonsHeaderStyle = styled.div`
    width: 100%;
    height: auto;
    overflow: hidden;
    color: #222;
    font-size: 0.48rem;
    & .header{
        & p{
            height: 1.28rem;
            line-height: 1.28rem;
            text-align: center;
            background: #fff;
            padding: 0 0.40rem;
            & i{
                float: left;
                height: 1.28rem;
                line-height: 1.28rem;
                font-size: 0.80rem;
                color: #39bed2;
            }
        }
    }
    & .signup{
        width: 94%;
        height: 1.20rem;
        line-height: 1.20rem;
        text-align: center;
        margin: 0.27rem auto;
        border-radius: 10px;
        background: #eb4f38;
        color: #fff;
    }
`
export const SettingContainer = styled.ul`
    width: 100%;
    height: auto;
    overflow: hidden;
    margin-top: 0.27rem;
    & li{
        height: 1.33rem;
        line-height: 1.33rem;
        background: #fff;
        padding: 0 0.40rem;
        border-bottom: 0.01rem solid #ddd;
        letter-spacing: 10px;
        & i{
            float: right;
            height: 1.33rem;
            line-height: 1.33rem;
            font-size: 0.80rem;
            color: #7e7781;
            text-align: right;
        }
    }
`

export const MessageContainer = styled.div`
    width: 100%;
    height: auto;
    overflow: hidden;
    margin-top: 0.27rem;
`
export const Messageitem = styled.div`
    width: 100%;
    height: 1.20rem;
    padding: 0.40rem 0;
    background: #fff;
    overflow: hidden;
    margin-bottom: 0.13rem;
    display: flex;
    justify-content: space-between;
    & .left{
        width: 1.07rem;
        height: 1.07rem;
        margin: 0.07rem 0.47rem;
        background: #34b9be;
        border-radius: 50%;
        line-height: 1.07rem;
        text-align: center;
        font-size: 0.6rem;
        color: #fff;
        flex-shrink: 0;
    }
    & .right{
        width: 100%;
        padding-right: 0.40rem;
        height: 1.20rem;
        & p:first-child{
            font-size: 0.43rem;
            color: #666;
            margin-bottom: 0.20rem;
            & span{
                float: right;
                font-size: 0.32rem;
                color: #999;
                &:last-child{
                    color: #ff7474;
                }
            }
        }
        & p:last-child{
            font-size: 0.32rem;
            color: #999;
        }
    }
`

