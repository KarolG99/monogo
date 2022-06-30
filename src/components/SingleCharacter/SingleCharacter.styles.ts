import styled from "styled-components";

export const SingleCharacterWrapper = styled.section`
  width: 90%;
  max-width: 300px;
  margin: 10px auto;
  padding: 5px 10px;
  color: ${({ theme }) => theme.colors.secondary};
  background-color: ${({ theme }) => theme.colors.primaryRgba};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  box-shadow: ${({ theme }) => theme.boxShadow.singleCharacter};
`;
