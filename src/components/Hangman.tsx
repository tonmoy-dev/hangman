import { Body, Head, LeftArm, LeftLeg, RightArm, RightLeg } from "./styles/Hangman.styles"

type HangmanDrawingProps ={
    numberOfGuesses: number;
}

const bodyParts = [<Head/>, <Body/>, <RightArm/>, <LeftArm/>, <RightLeg/>, <LeftLeg/>];

function Hangman({numberOfGuesses}:HangmanDrawingProps) {
    return (
        <>
        { 
            bodyParts.slice(0, numberOfGuesses)
        }
        </>
    )
}

export default Hangman
