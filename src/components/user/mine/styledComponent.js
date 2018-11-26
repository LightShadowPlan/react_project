import styled from 'styled-components'

export const MineStyle = styled.div`
    width: 100%;
    height: 2.40rem;
    background: #fff;
    overflow: hidden;
    display: flex;
    justify-content: space-around;
    align-items: center;
    &  p{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        & i{
            font-size: 0.80rem;
            color: #5b5b5b;
        }
        & span{
            color: #999;
            font-size: 0.32rem;
        }
    }
`
