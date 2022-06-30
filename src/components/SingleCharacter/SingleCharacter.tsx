import React from "react";
import { SingleCharacterProps } from "../../types";
import { SingleCharacterWrapper } from "./SingleCharacter.styles";

const SingleCharacter = ({
  id,
  name,
  birthYear,
  gender,
  homeworld,
}: SingleCharacterProps) => {
  return (
    <SingleCharacterWrapper>
      <p>{name}</p>
      <p>{birthYear}</p>
      <p>{gender}</p>
      <p>{homeworld.name}</p>
    </SingleCharacterWrapper>
  );
};

export default SingleCharacter;
