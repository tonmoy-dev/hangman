import styled from '@emotion/styled'

export const GuessContainer = styled('div')`
    display: grid;
    gap: 50px;
    justify-items: center;
    width: 100%;
`

export const WordWrapper = styled('div')`
    display: flex;
    gap: 16px;
    align-items: center;
`
export const Letter =  styled('div')`
    width: 36px;
    border-bottom: 5px solid black;
    font-size: 3rem;
    text-transform: uppercase;
    line-height: 1;
    text-align:center;
`