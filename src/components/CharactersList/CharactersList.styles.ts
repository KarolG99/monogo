import styled from "styled-components";

type WrapperProps = {
  isSpecific?: boolean;
};

export const Wrapper = styled.div`
  z-index: -1;
  color: ${({ theme }) => theme.colors.white};
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: ${({ isSpecific = false }: WrapperProps) =>
    isSpecific && "15vh"};

  h1 {
    font-size: 2.5rem;
    font-weight: 900;
    background: ${({ theme }) => theme.colors.secondaryGradient};
  }

  label {
    font-size: 1.3rem;
    color: ${({ theme }) => theme.colors.green};
    font-weight: 700;
    margin: 10px;
  }

  input {
    padding: 5px;
    border-radius: 5px;
    background-color: transparent;
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.secondary};
    margin-bottom: 20px;
    color: ${({ theme }) => theme.colors.green};

    &::placeholder {
      color: ${({ theme }) => theme.colors.green};
      opacity: 0.7;
      font-style: italic;
    }
  }
`;

export const DataWrapper = styled.article`
  display: flex;
  flex-flow: wrap row;
  justify-content: center;
`;

export const ButtonsWrapper = styled.div`
  width: 100%;
  max-width: 300px;
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  button {
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

export const StyledButton = styled.button`
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
