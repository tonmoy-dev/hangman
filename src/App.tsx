import { useCallback, useEffect, useState } from 'react'
import './App.css'
import HangmanDrawing from './components/HangmanDrawing'
import Keyboard from './components/Keyboard'
import { Container } from './components/styles/Container.styles'
import { GuessContainer } from './components/styles/Guess.styles'
import Words from './assets/data/words.json'
import { Title } from './components/styles/Custom.styles'
import GuessWord from './components/GuessWord'

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => Words[Math.floor(Math.random() * Words.length)]);
  const [guessedLetters, setGuessedLettes] = useState<string[]>([]);
  
  const incorectLetters = guessedLetters.filter( letter => !wordToGuess.includes(letter));

  const addGuessedLetter = useCallback((letter: string) => {
    if(guessedLetters.includes(letter)) return;
  
    setGuessedLettes(currentLetters => [...currentLetters, letter])
  },[guessedLetters])
  
  useEffect(() => {
    const keyHandler = (e: KeyboardEvent) => {
      const key = e.key;

      if(!key.match(/^[a-z]$/)) return;
      e.preventDefault()

      addGuessedLetter(key)
    }

    document.addEventListener("keypress", keyHandler);
  
    return () => {
      document.removeEventListener("keypress", keyHandler)
    }
  }, [])
  
  return (
    <div className="App">
      <header>
        <Title>Hangman Game</Title>
        {wordToGuess}
      </header>
      <main>
        <Container>
          <HangmanDrawing numberOfGuesses={incorectLetters.length} />
          <GuessContainer>
            <GuessWord guessedLetters = {guessedLetters} wordToGuess= {wordToGuess} />
            <Keyboard />
          </GuessContainer>
        </Container>
      </main>
    </div>
  )
}

export default App
