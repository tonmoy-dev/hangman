import styled from '@emotion/styled'

export const Head = styled('div')`
    position: absolute;
    border: 10px solid black;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    top: 50px;
    right: -30px;
`
export const Body = styled('div')`
    position: absolute;
    width: 10px;
    height: 125px;
    background: black;
    top: 110px;
    right: 0;
`
export const LeftArm = styled('div')`
    position: absolute;
    width: 10px;
    height: 70px;
    background: black;
    top: 110px;
    right: 25px;
    transform: rotate(-55deg);
`
export const RightArm = styled('div')`
    position: absolute;
    width: 10px;
    height: 70px;
    background: black;
    top: 110px;
    right: -25px;
    transform: rotate(55deg);
`
export const LeftLeg = styled('div')`
    position: absolute;
    width: 10px;
    height: 70px;
    background: black;
    top: 220px;
    right: 19px;
    transform: rotate(-145deg);
`
export const RightLeg = styled('div')`
    position: absolute;
    width: 10px;
    height: 70px;
    background: black;
    top: 220px;
    right: -19px;
    transform: rotate(145deg);
`