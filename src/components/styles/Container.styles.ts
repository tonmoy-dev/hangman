import styled from "@emotion/styled";

export const GameContainer = styled("div")`
  padding: 0 50px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 50px;
  align-items: center;
  justify-items: center;

  @media (min-width: 1200px) {
    grid-template-columns: 1fr 2fr;
  }
`;

export const GameOver = styled("div")`
  display: flex;
  flex-direction: column;
  height: 400px;
  align-items: center;
  justify-content: center;
`;
