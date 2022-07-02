import React from "react";

import { SingleCharacterProps } from "../../types";
import { ArrowIcon } from "../ArrowIcon.styles";
import { SingleCharacterWrapper, StyledLink } from "./SingleCharacter.styles";

const SingleCharacter = ({
  name,
  birth_year,
  gender,
  number,
  skin_color,
  eye_color,
  mass,
  height,
  isSpecific,
}: SingleCharacterProps) => {
  return (
    <SingleCharacterWrapper>
      <p>
        Name: <span>{name}</span>
      </p>
      <p>
        Year or birth: <span>{birth_year}</span>
      </p>
      <p>
        Gender: <span>{gender}</span>
      </p>
      {isSpecific && (
        <>
          <p>
            Skin color: <span>{skin_color}</span>
          </p>
          <p>
            Eye color: <span>{eye_color}</span>
          </p>
          <p>
            Mass: <span>{mass}</span>
          </p>
          <p>
            Height: <span>{height}</span>
          </p>
        </>
      )}
      <StyledLink to={`/${number}`}>
        More info <ArrowIcon />
      </StyledLink>
    </SingleCharacterWrapper>
  );
};

export default SingleCharacter;
