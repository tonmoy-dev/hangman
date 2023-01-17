import { useCallback, useEffect, useState } from "react";
import "./App.css";
import { css } from "@emotion/react";
import HangmanDrawing from "./components/HangmanDrawing";
import Keyboard from "./components/Keyboard";
import { GameContainer, GameOver } from "./components/styles/Container.styles";
import { GuessContainer } from "./components/styles/Guess.styles";
import Words from "./assets/data/words.json";
import {
  GameTitle,
  GameOverTitle,
  RestartBtn,
} from "./components/styles/Custom.styles";
import GuessWord from "./components/GuessWord";

function App() {
  const [wordToGuess, setWordToGuess] = useState(
    () => Words[Math.floor(Math.random() * Words.length)]
  );
  const [guessedLetters, setGuessedLettes] = useState<string[]>([]);

  const incorectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter)) return;

      setGuessedLettes((currentLetters) => [...currentLetters, letter]);
    },
    [guessedLetters]
  );

  useEffect(() => {
    const keyHandler = (e: KeyboardEvent) => {
      const key = e.key;

      if (!key.match(/^[a-z]$/)) return;
      e.preventDefault();

      addGuessedLetter(key);
    };

    document.addEventListener("keypress", keyHandler);

    return () => {
      document.removeEventListener("keypress", keyHandler);
    };
  }, []);

  function handleGameRestart() {
    setGuessedLettes([]);
    wordToGuess("");
  }
  return (
    <div className="App">
      <header>
        <GameTitle>Hangman Game</GameTitle>
      </header>
      <main>
        {incorectLetters.length > 5 && (
          <GameOver>
            <GameOverTitle>Game Over</GameOverTitle>
            <button css={{ border: "none" }} onClick={handleGameRestart}>
              <RestartBtn>Restart Game</RestartBtn>
            </button>
          </GameOver>
        )}
        {incorectLetters.length <= 5 && (
          <GameContainer>
            <HangmanDrawing numberOfGuesses={incorectLetters.length} />
            <GuessContainer>
              <GuessWord
                guessedLetters={guessedLetters}
                wordToGuess={wordToGuess}
              />
              <Keyboard
                activeLetters={guessedLetters.filter((letter) =>
                  wordToGuess.includes(letter)
                )}
                inactiveLetters={incorectLetters}
                addGuessedLetter={addGuessedLetter}
              />
            </GuessContainer>
          </GameContainer>
        )}
      </main>
    </div>
  );
}

export default App;
