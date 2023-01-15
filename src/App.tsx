import './App.css'
import Guess from './components/Guess'
import HangmanDrawing from './components/HangmanDrawing'
import Keyboard from './components/Keyboard'
import { Container } from './components/styles/Container.styles'
import { GuessContainer } from './components/styles/Guess.styles'

function App() {
  return (
    <div className="App">
      <header>
        <h2>Hangman Game</h2>
      </header>
      <main>
        <Container>
          <HangmanDrawing />
          <GuessContainer>
            <Guess />
            <Keyboard />
          </GuessContainer>
        </Container>
      </main>
    </div>
  )
}

export default App
