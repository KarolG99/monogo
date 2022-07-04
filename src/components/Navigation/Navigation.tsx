import React, { useRef } from "react";

import { StyledLink, StyledNavigation } from "./Navigation.styles";

const Navigation = () => {
  const NavLinkRef = useRef<HTMLAnchorElement>(null);

  return (
    <StyledNavigation>
      <StyledLink to="/" ref={NavLinkRef}>
        All
      </StyledLink>
      <StyledLink to="/favourites" ref={NavLinkRef}>
        Favourite
      </StyledLink>
    </StyledNavigation>
  );
};

export default Navigation;
