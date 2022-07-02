import styled from "styled-components";
import { theme } from "../../assets/styles/theme";
import { StatusInfoProps } from "../../types";

export const StyledStatusInfo = styled.h4`
  font-size: 1.2rem;
  text-align: center;
  color: ${({ isError }: StatusInfoProps) => isError && theme.colors.red};
`;
