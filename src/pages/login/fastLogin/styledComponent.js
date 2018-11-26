import styled from 'styled-components'

export const FastLoginStyle = styled.div`
    width: 100%;
    height: auto;
    background: #fff;
    overflow: hidden;
    padding-bottom: 1.33rem;
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
export const FastLoginWay = styled.div`
    width: 100%;
    height: auto;
    padding: 1.87rem 0;
    overflow: hidden;
    & p{
        height: 0.80rem;
        line-height: 0.80rem;
        text-align: center;
        font-size: 0.48rem;
        color: #666;
        
    }
`
export const Way = styled.div`
    width: 6.00rem;
    height: 2.40rem;
    margin: 0.40rem auto;
    overflow: hidden;
    & a{
        float: left;
        width: 2.40rem;
        height: 2.40rem;
        margin: 0 0.27rem;
        background: #f0f0f0;
        border-radius: 50%;
        overflow: hidden;
        & i{
            display: block;
            width: 1.47rem;
            height: 1.47rem;
            margin: 0.47rem;
            border-radius: 50%;
            background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAABMCAMAAADwSaEZAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABgUExURUxpcQCv2QCv2QCv2QCv2QCv2QCv2QCv2QCv2QCv2QCv2QCv2QCv2QCv2QCv2f///wCp1gCs2OD2+xm23fT8/j/D463l8wuy21DJ5c3w+GXP6L3q9nrW7Jzg8Yrb7im832t7184AAAAOdFJOUwCsep3KY07v3B81S7QIjjAcmwAAAtdJREFUWMOtmNmygjAMhtkXlzYpUBYB3/8tDzjqnJZ0wek/XupnkyZpkiiyqC6SOKvKt6osToo6+kl1nlbsoCrNz/MKivThFWdI9zxjVmX53ftUDtQL53e6S8y8FF/crKRknioT1xXG7IRi68VeKnZKlcXUomQnVV5NrJz9oDwgy0Ar2I8iIu5i8BcivIVo8NvhFmryHhGw76Z1kVIu89Agzav0CLlR3wLsVtHyj4QceqBwNy3uSVazcE3jBEB8U8mFmnIYdIIfJRuCVtYOI2FoOSXxBKuhV/JcNGsztSdo30y4Z5S/BDdJEreQ3c2hj7BwswYwJwJ1sMHC2gwljmb0GLLRBuMdmryWErDOyuILYWdqSiSrx/bw6A1JRVYeYYe1neEKKCufrR3GJ9pOykrsXLAZSDupmgiTg0XG7VYlE6oePlwwTjktieJzqfQ9GlEnYzL8nVZu90lUoiw6+h/70Q3jRCGqomNZBB+YIE5WUjDmAaN8RsCwkR5WUjlwhEHj47E9PdEJA48YMyWBDkNXvfgfHOiAQce9tYLLzNEfdoiOUg1ae+l31aFKTSeQZ2CSoZZOsRJi4gxMaFcQKyXonJW81fIzUYqjT7mwJHuhlO0XrB1/hO3PU6rB1qb1sHAVh5qWqk/dHrJjAx5HG/dM0bqEXH2EsZePJ/hcw7qX9gGOnW36v8fA/SM9ggKfA9EeKPf5KnnuUrufSW9ur4aWCnrZnn3PM0Ozh9AM1lSYiQcgp9tQZNu928NDzPoT8G1DtXYPZ494XbQkv9KtOzKvwq3Gxc0wVHjClNdJGSqU2oGHoH2si/4HqtMS8yAG3aNV5qV+H+7mx2cma4XslJbqZhsRAZ/7XPjYJNd9ktu0/brphmme56nrUWEdRkRteP1OrP9nVnwPslpYlJdwYzW9QAg58IddRYRdkoRd34RdLIVdeQVexoVdEwZeYIZdrYZe+v60jv4DXB0HcLboQc8AAAAASUVORK5CYII=) no-repeat;
            background-size: 100% 100%;
        }
        &:last-child i{
            background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAABMCAMAAADwSaEZAAAArlBMVEUAAAD0JgrzJAn1IATzJgr0JgrzJQv1Jgv0JgvzJgr0JgvzJgv0Jgv0JQv0JQryJQr0JgvwIQ/zJgv0JQvzJgvyJQrzJgvzJgvxJwvzJQzzJQzzJgv////0KxH8x8D2WUT5k4b0Nx//9/b6rqT1RS3+7er5g3T+8fD939v4cmD2Tzn1Pyf+5uL8zcf4eWn5i3z92dT6qJ37tKv5mY33aVb7urH7vrb6o5f3YU38081zK1P6AAAAG3RSTlMA3h4I8ZRsOeisuMahhHxMRBH3j3VjLtBcUyikA13nAAADz0lEQVRYw7WY53qqQBCGxRZrYhI9KcNSBZRiN+r939hZwK2uiPL4/hEBP6ftbKkV0hi1P3ua1gHoaFqv1R41ag9Snww0kNAGk9/7lf61ux1Q0um2/90l9fLZgQKarZfSUr9DDW6gDctZVx9/QQm+xvXbWm8alER7uyHVeG1CaZqvjUIXW3AXrXpBErtwJ92raf3pw930f67Y1YQHaL4otfrwEH2FWr0LD9K9yEKjBQ/TkivkFSrwKtU9glIc10kcx4m7E95Hb4KTJceQpRMCn5fTeEfb5bRsnWM1BUabab2XrDAU82rOjuuY71RsCCUxDWO5WLqzs5zJngxpiX3AnZh/uW0hvfNBiq2gxKb+1vUjxYMwsy7hiu0cMXQt3n6cZy4ERhRF+cNMbc7imUdtciXaVqBjJANS/7z1NDXawZcn9mSSifXUYVnpDFMqDie94adXNhB6WcEqwz+nQqI3C/ewjrFxNhYWn3ykhftdWOpMjIGwrwv8meAnFrv9jcUGinC5ukiY+m3tjVli2Wm4dP0PfxxEsQH2snmpZegSR3PrnS/jNPi6bqTmi2LNRm1UrCWTy8RETAjASDHGN3ox+BUvE9vjL+Jo/5S1tvptsfnpmEnqHnB8XlTZ/JbWio4F/GUPHL2a1BYjR+eIjY3rGkkccPd8Gls8oHbC4kMWY8F31nObJWV3IOlkUbJ35JqIiau6BZGaLZCc5Pkq/xN3B2o6NXJFLM/wfKQa+iQ3hq1WE8V2Z7PO5of+3jAMiznjk1iaSjHRzXwYnVAuReNnUTsPJKCR0k2N98PJfIwuamRDY06SvQaGOpsmaRHkmrKQh4enFOvJufQQrRHGjLyyJHcUfvaE2cRiDoTkR4cw4KvLJ/cV6W6Rgc7eXFILvK010yMU8I37UOBmW2hBIRNb46gjALSKY2EWOBUkYCQ2x4C+hovE5vu3DWJajsBgzbHWlepshnKRgM+DIfXNRLWClCaUqUPKwMzag00GkCnm0pkqxL7ZhM7yGaRvogR3LsMh06TUBnzVyH2XJ2GsgUVscSaYhcSuAi3okZWepOZl4T1usqL4251Tnai05PVeHUkzLMadnlcptGpcaqe6Y6B8TSVPw4vMIINbSYVL6rOzRaBkcGWxZ1teXuWJi9mv2AwQWDao+ahfXYaiOY6XjLOZI7jGsHiBHC62+5VDArVfmqhoO/Zeo4yvr0NNTAS3GPO7sD5Uol+XtjsVQG9P2ohV3yI+Z/NafVv97A1/9aOI6ockTz6+qX6wVP3I67mHcdWPCasfYD7raPX5h77Vj6P/Az1d7PTU+TpYAAAAAElFTkSuQmCC) no-repeat;
            background-size: 100% 100%;
        }
   
    }
`
export const Login = styled.div`
    width: 100%;
    height: 1.07rem;
    line-height: 1.07rem;
    font-size: 0.4rem;
    color: #888;
    text-align: center;
    span{
        color: #34b9b4;
    }
`
