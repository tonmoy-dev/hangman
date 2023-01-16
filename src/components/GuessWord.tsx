import { WordWrapper, Letter  } from "./styles/Guess.styles"

interface WordProps{
  guessedLetters: string[];
  wordToGuess: string;
}

function GuessWord({guessedLetters, wordToGuess}:WordProps) {

  return (
    <WordWrapper>
      {
        wordToGuess.split("").map((letter:string, index:number) => (
            <Letter  key={index}>
              <span style={{visibility: guessedLetters.includes(letter) ? "visible" : "hidden"}}>{letter}</span>
            </Letter>
          
          ))
      }
    </WordWrapper>
  )
}

export default GuessWord
