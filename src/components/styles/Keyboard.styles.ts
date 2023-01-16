import styled from '@emotion/styled'

type KeyProps = {
    disabled : boolean;
}

export const KeysContainer = styled('div')`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));
    gap: 10px;
    width: 100%;
`

export const Key = styled('button')<KeyProps>`
    text-transform: uppercase;
    font-size: 2.5rem;
    border: 3px solid #000;
    aspect-ratio: 1/1;
    cursor: pointer;
    color: black;

    &:hover {
        background-color: ${props => props.disabled === true ? "" : "#551a8b"};
        color: ${props => props.disabled === true ? "" : "#fff"};
    }
`