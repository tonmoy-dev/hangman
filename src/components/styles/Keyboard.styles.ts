import styled from "@emotion/styled";

type KeyProps = {
  isActive: boolean;
  isInactive: boolean;
};

export const KeysContainer = styled("div")`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
  gap: 16px;
  width: 100%;
  justify-items: center;
`;
export const KeyWrapper = styled("div")`
  border: 3px solid #000;
  text-align: center;
  width: 100%;
`;
export const Key = styled("button")<KeyProps>`
  text-transform: uppercase;
  font-size: 2.5rem;
  cursor: pointer;
  border: none;
  aspect-ratio: 1/1;
  width: 100%;

  color: ${(props) => (props.isActive ? "#fff" : "#000")};
  background-color: ${(props) => (props.isActive ? "#551a8b" : "#fff")};
  opacity: ${(props) => (props.isInactive ? 0.1 : 1)};

  &:hover {
    background-color: "#551a8b";
    color: "#fff";
  }
`;
// background-color: ${props => props.isInactive ? "" : "#551a8b"};
//     color: ${props => props.isInactive ? "" : "#fff"};
