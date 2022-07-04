import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as HeartOutline } from "../../assets/icons/heart-outline.svg";
import { ReactComponent as HeartSolid } from "../../assets/icons/heart-solid.svg";

export const SingleCharacterWrapper = styled.section`
  width: 90%;
  max-width: 300px;
  margin: 20px;
  padding: 5px 10px;
  color: ${({ theme }) => theme.colors.secondary};
  background-color: ${({ theme }) => theme.colors.primaryRgba};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  box-shadow: ${({ theme }) => theme.boxShadow.singleCharacter};
  position: relative;

  p {
    span {
      font-weight: 900;
      letter-spacing: 0.5px;
    }
  }

  button {
    cursor: pointer;
    position: absolute;
    right: 10px;
    top: 10px;
    background-color: transparent;
    border: none;
  }
`;

export const StyledLink = styled(Link)`
  width: fit-content;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.green};
  margin-bottom: 10px;
  font-weight: bold;
  font-style: italic;

  svg {
    margin-left: 5px;
    fill: ${({ theme }) => theme.colors.green};
  }
`;

export const HeartOutlineIcon = styled(HeartOutline)`
  fill: ${({ theme }) => theme.colors.pink};
`;

export const HeartSolidIcon = styled(HeartSolid)`
  fill: ${({ theme }) => theme.colors.pink};
`;
