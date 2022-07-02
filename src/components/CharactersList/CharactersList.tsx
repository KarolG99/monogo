import React, { useState } from "react";

import SingleCharacter from "../SingleCharacter/SingleCharacter";
import { ButtonsWrapper, Wrapper } from "./CharactersList.styles";
import { usePeople } from "../../hooks/usePeople";
import StatusInfo from "../StatusInfo/StatusInfo";

const CharactersList = () => {
  const [counter, setCounter] = useState(1);
  let url = `https://swapi.dev/api/people/?page=${counter}`;
  const { data, isLoading, errorMessage } = usePeople(url);

  return (
    <Wrapper>
      <h1>All Characters</h1>

      {isLoading && !errorMessage && <StatusInfo isLoading />}
      {errorMessage && <StatusInfo isError errorMessage={errorMessage} />}

      {data &&
        data.results.map((character) => (
          <SingleCharacter
            key={character.name}
            name={character.name}
            birth_year={character.birth_year}
            gender={character.gender}
          />
        ))}

      <ButtonsWrapper>
        {counter > 1 && <button>Prev</button>}
        {counter < 9 && (
          <button onClick={() => setCounter((prev) => prev + 1)}>Next</button>
        )}
      </ButtonsWrapper>
    </Wrapper>
  );
};

export default CharactersList;
