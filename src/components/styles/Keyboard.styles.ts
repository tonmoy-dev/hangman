import styled from '@emotion/styled'

type KeyProps = {
    disabled : boolean;
}

export const KeysContainer = styled('div')`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 5px;
`

export const Key = styled('button')<KeyProps>`
    text-transform: uppercase;
    font-size: 2.5rem;
    border: 3px solid #000;
    padding: 0.5rem 1rem;
    font-weight: bold;
    cursor: pointer;
    aspect-ratio: 1 / 1;

    &:hover {
        background-color: ${props => props.disabled === true ? "" : "#551a8b"};
        color: ${props => props.disabled === true ? "" : "#fff"};
    }
`