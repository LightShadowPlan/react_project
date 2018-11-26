import styled from 'styled-components'

export const NavBottomStyle = styled.div`
    width: 100%;
    height: 1.33rem;
    position: fixed;
    bottom: 0;
    background: #fff;
    display: flex;
    border-top: 0.01rem solid #eee;
    justify-content: space-between;
    .navItem{
     width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #999;
   i{
       font-size: 0.53rem;
   }
   span{
   font-size: 0.32rem;
   }
   &.active{
        color: #34b9be;
   }
    }
`

