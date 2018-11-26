import styled  from 'styled-components'

export const HeaderStyle = styled.div`
    width: 100%;
    height: 2.48rem;
    box-sizing: border-box;
    background: #fff;
    position: fixed;
    top: 0;
`
export  const Top = styled.div`
    width: 100%;
    height: 1.41rem;
    box-sizing: border-box;
    border-bottom: 0.01rem solid #eaeaea;
    padding: 0.23rem 0;
    display: flex;
    line-height: 0.96rem;
    p{
        width: 7.47rem;
        height: 0.96rem;
        margin: auto;
        background: #f3f3f3;
        border-radius: 0.48rem;
        box-sizing: border-box;
        padding: 0 0.40rem;
        color: #999;
        font-size: 0.39rem;
        i{
            float: right;
            font-size: 0.67rem;
            font-weight: 300;
            margin: 0.11rem;
        }
    }
`
export const Select = styled.div`
    width: 100%;
    height: 1.07rem;
    box-sizing: border-box;
    border-bottom: 0.01rem solid #eaeaea;
    display: flex;
    justify-content: space-between;
    p{
        width: 100%;
        line-height: 1.07rem;
        text-align: center;
        color: rgb(51,51,51);
        font-size: 0.43rem;
        border-right: 0.01rem solid #eaeaea;
        &:last-child{
            border-right: none;
        }
    }
    p.city1{
        color: #34b9be;
    }
    p.job2{
        color: #34b9be;
    }
    p.filter3{
        color: #34b9be;
    }
`

