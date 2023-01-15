import { KeysContainer, Key } from "./styles/Keyboard.styles"

function Keyboard() {
    return (
        <KeysContainer>
            <Key disabled={true}>A</Key>
            <Key disabled={false}>B</Key>
            <Key disabled={false}>C</Key>
        </KeysContainer>
    )
}

export default Keyboard
