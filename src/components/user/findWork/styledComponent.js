import styled from 'styled-components'

export const FindWorkStyle = styled.div`
    width: 100%;
    height: auto;
    overflow: hidden;
   
`
export const Tips = styled.div`
    padding: 0.40rem;
    height: 1.07rem;
    margin-bottom: 0.27rem;
    overflow: hidden;
    background: #fff;
   & p{
       float: left;
       text-align: center;
       line-height: 1.07rem;
       &:first-child{
           box-sizing: border-box;
           width: 1.07rem;
           height: 1.07rem;
           border-radius: 0.07rem;
           border: 0.01rem solid #34b9be;
           color: #34b9be;
       }
       &:last-child{
           box-sizing: border-box;
           width: 6.53rem;
           height: 1.07rem;
           border-radius: 0 0.27rem 0.27rem 0.27rem;
           margin-left: 0.40rem;
           background: #34b9be;
           color: #fff;
           & span{
            font-size: 0.53rem;
            line-height: 1.00rem;
            color: #ffea00;
           }
       }
   }
`
export const MyJobWant = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 0 0.40rem;
    height: 1.07rem;
    margin-bottom: 0.27rem;
    background: #fff;
    line-height: 1.07rem;
    color: #999;
    font-size: 0.373rem;
    overflow: hidden;
    & span:last-child{
        float: right;
    }
`