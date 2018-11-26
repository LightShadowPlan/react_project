import styled from 'styled-components'

export const JobItem = styled.div`
    width: 100%;
    height: 3.00rem;
    padding: 0.53rem 0.40rem;
    box-sizing: border-box;
    background: #fff;
    border-bottom: 0.01rem solid #eee;
    color: #333;
    img{
        width: 1.89rem;
        height: 1.89rem;
        float: left;
        border-radius: 0.13rem;
        margin-right: 0.29rem;
        box-sizing: border-box;
        border: 1px solid #dedede;
    }
    .rightInfo{
        width: 7.01rem;
        height: 1.92rem;
        float: left;
        .left{
          float: left;
        }
        .right{
          float: right;
        }
        .jobName{
        max-width: 5.33rem;
          font-size: 0.47rem;
          overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
        }
        .jobTime{
          color: #ccc;
          font-size: 0.35rem;
        }
        .jobCity{
          clear: left;
          height: 0.80rem;
          line-height: 0.80rem;
          font-size: 0.4rem;
        }
        .jobClass{
          max-width: 3.33rem;
          overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
          clear: left;
          color: #ccc;
          font-size: 0.35rem;
        }
        .jobSalary{
           color: #34b9be;
           font-size: 0.42rem;
        }
    }
`
