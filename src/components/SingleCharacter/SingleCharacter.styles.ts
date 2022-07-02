import { Link } from "react-router-dom";
import styled from "styled-components";

export const SingleCharacterWrapper = styled.section`
  width: 90%;
  max-width: 300px;
  margin: 20px;
  padding: 5px 10px;
  color: ${({ theme }) => theme.colors.secondary};
  background-color: ${({ theme }) => theme.colors.primaryRgba};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  box-shadow: ${({ theme }) => theme.boxShadow.singleCharacter};

  p {
    span {
      font-weight: 900;
      letter-spacing: 0.5px;
    }
  }
`;

export const StyledLink = styled(Link)`
  width: fit-content;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.green};
  margin-bottom: 5px;
  font-weight: bold;
  font-style: italic;

  svg {
    margin-left: 5px;
    fill: ${({ theme }) => theme.colors.green};
  }
`;
