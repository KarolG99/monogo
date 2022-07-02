import styled from "styled-components";

export const Wrapper = styled.article`
  z-index: -1;
  color: ${({ theme }) => theme.colors.white};
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 2.5rem;
    font-weight: 900;
    ${({ theme }) => theme.colors.secondaryGradient};
  }
`;

export const ButtonsWrapper = styled.div`

`;
