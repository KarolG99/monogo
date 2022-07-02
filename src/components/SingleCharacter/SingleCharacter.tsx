import React from "react";
import { SingleCharacterProps } from "../../types";
import { SingleCharacterWrapper } from "./SingleCharacter.styles";

const SingleCharacter = ({
  name,
  birth_year,
  gender,
}: SingleCharacterProps) => {
  return (
    <SingleCharacterWrapper>
      <p>{name}</p>
      <p>{birth_year}</p>
      <p>{gender}</p>
    </SingleCharacterWrapper>
  );
};

export default SingleCharacter;
