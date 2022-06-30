import React from "react";

import SingleCharacter from "../SingleCharacter/SingleCharacter";
import { Wrapper } from "./CharactersList.styles";
import { character } from "../../helpers/characterDetail";

const CharactersList = () => {

  return (
    <Wrapper>
      sds
      <SingleCharacter
        id={character.id}
        name={character.name}
        birthYear={character.birthYear}
        gender={character.gender}
        homeworld={character.homeworld}
      />
    </Wrapper>
  );
};

export default CharactersList;