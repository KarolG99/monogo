import React from "react";
import { StyledLink } from "../SingleCharacter/SingleCharacter.styles";
import { Wrapper404 } from "./Page404.styles";

const Page404 = () => {
  return (
    <Wrapper404>
      <h1>404</h1>
      <p>Page not found</p>
      <StyledLink to="/">Go Home</StyledLink>
    </Wrapper404>
  );
};

export default Page404;
