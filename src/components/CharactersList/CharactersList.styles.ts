import styled from "styled-components";

export const Wrapper = styled.article`
  background-image: url("https://www.toptal.com/designers/subtlepatterns/uploads/ep_naturalblack.png");
  min-height: 95vh;
  z-index: -1;
  color: ${({ theme }) => theme.colors.white};
  padding: 15px;
`;
