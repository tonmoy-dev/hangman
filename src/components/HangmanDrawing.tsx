import Hangman from "./Hangman"
import { DrawingContainer, Hangingbar, Lowerbar, Middlebar, Topbar } from "./styles/Drawing.styles"

type HangmanDrawingProps ={
    numberOfGuesses: number;
}
function HangmanDrawing({numberOfGuesses}:HangmanDrawingProps) {
    return (
        <DrawingContainer>
            <Topbar />
            <Hangingbar />
            <Middlebar />
            <Lowerbar />
            <Hangman numberOfGuesses = {numberOfGuesses} />
        </DrawingContainer>
    )
}

export default HangmanDrawing
