import { KeysContainer, Key } from "./styles/Keyboard.styles"

function Keyboard() {
    return (
        <KeysContainer>
            {
                KEYS.map(key => {
                    return(
                        <Key key={key} disabled={false}>{key}</Key>
                    )
                })
            }
        </KeysContainer>
    )
}

export default Keyboard

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
  ]
  