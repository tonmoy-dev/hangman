import { KeysContainer, Key, KeyWrapper } from "./styles/Keyboard.styles";

interface KeyboardProps {
  activeLetters: string[];
  inactiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
}

function Keyboard({
  activeLetters,
  inactiveLetters,
  addGuessedLetter,
}: KeyboardProps) {
  return (
    <KeysContainer>
      {KEYS.map((key) => {
        const isActive: boolean = activeLetters.includes(key);
        const isInactive: boolean = inactiveLetters.includes(key);

        return (
          <KeyWrapper key={key}>
            <Key
              onClick={() => addGuessedLetter(key)}
              isActive={isActive}
              isInactive={isInactive}
              disabled={isActive ? true : false}
            >
              {key}
            </Key>
          </KeyWrapper>
        );
      })}
    </KeysContainer>
  );
}

export default Keyboard;

const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
