import styled from "styled-components";

export const Wrapper = styled.div`
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

export const DataWrapper = styled.article`
  display: flex;
  flex-flow: wrap row;
  justify-content: center;
`;

export const ButtonsWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  button {
    cursor: pointer;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.secondary};
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    border-radius: ${({ theme }) => theme.borderRadius.small};
    font-size: 1rem;
    border: 1px solid ${({ theme }) => theme.colors.secondary};
    &.prev {
      span {
        margin-left: 5px;
      }

      svg {
        transform: rotate(180deg);
      }
    }
    &.next {
      span {
        margin-right: 5px;
      }
    }
  }
`;

export const StyledNumberOfPage = styled.div`
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: bold;
  letter-spacing: 1px;
  font-size: 1.3rem;
  span {
    font-size: 1.4rem;
    font-weight: 900;
  }
`;
