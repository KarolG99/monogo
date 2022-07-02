import React, { useState } from "react";

import SingleCharacter from "../SingleCharacter/SingleCharacter";
import {
  ButtonsWrapper,
  DataWrapper,
  StyledNumberOfPage,
  Wrapper,
} from "./CharactersList.styles";
import { usePeople } from "../../hooks/usePeople";
import StatusInfo from "../StatusInfo/StatusInfo";
import { ArrowIcon } from "../ArrowIcon.styles";

const CharactersList = () => {
  const [counter, setCounter] = useState(1);
  let url = `https://swapi.dev/api/people/?page=${counter}`;
  const { data, isLoading, errorMessage } = usePeople(url);
  let numberOfPage = 0;

  if (data?.count) {
    numberOfPage = Math.ceil(data.count / data.results.length);
  }

  const togglePage = (action: string) => {
    if (action === "add") {
      setCounter((prev) => prev + 1);
      window.scrollTo(0, 0);
    } else if (action === "subtract") {
      setCounter((prev) => prev - 1);
      window.scrollTo(0, 0);
    }
  };

  return (
    <Wrapper>
      <h1>All Characters</h1>

      {isLoading && !errorMessage && <StatusInfo isLoading />}
      {errorMessage && <StatusInfo isError errorMessage={errorMessage} />}

      <DataWrapper>
        {data &&
          data.results.map((character) => (
            <SingleCharacter
              key={character.name}
              name={character.name}
              birth_year={character.birth_year}
              gender={character.gender}
            />
          ))}
      </DataWrapper>

      <ButtonsWrapper>
        {counter > 1 && (
          <button className="prev" onClick={() => togglePage("subtract")}>
            <ArrowIcon />
            <span>Prev</span>
          </button>
        )}

        <StyledNumberOfPage>
          {counter < 9 ? (
            <>
              <span>{counter}</span>/{numberOfPage}
            </>
          ) : (
            <>
              <span>{counter}</span>/{counter}
            </>
          )}
        </StyledNumberOfPage>

        {counter < 9 && (
          <button className="next" onClick={() => togglePage("add")}>
            <span>Next</span> <ArrowIcon />
          </button>
        )}
      </ButtonsWrapper>
    </Wrapper>
  );
};

export default CharactersList;
