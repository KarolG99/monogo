import styled from "styled-components";
import { Wrapper } from "../CharactersList/CharactersList.styles";

export const Wrapper404 = styled(Wrapper)`
  height: 100%;
  justify-content: center;
  align-items: center;
  padding-top: 20vh;

  h1 {
    font-size: 6rem;
    margin: 10px;
    font-weight: 900;
  }

  p {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.secondary};
    font-weight: 700;
    font-style: italic;
  }
`;
