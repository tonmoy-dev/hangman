import Hangman from "./Hangman"
import { DrawingContainer, Hangingbar, Lowerbar, Middlebar, Topbar } from "./styles/Drawing.styles"

function HangmanDrawing() {
    return (
        <DrawingContainer>
            <Topbar />
            <Hangingbar />
            <Middlebar />
            <Lowerbar />
            <Hangman />
        </DrawingContainer>
    )
}

export default HangmanDrawing
