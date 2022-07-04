import React, { useState } from "react";

import SingleCharacter from "../SingleCharacter/SingleCharacter";
import {
  ButtonsWrapper,
  DataWrapper,
  StyledButton,
  StyledNumberOfPage,
  Wrapper,
} from "./CharactersList.styles";
import { usePeople } from "../../hooks/usePeople";
import StatusInfo from "../StatusInfo/StatusInfo";
import { ArrowIcon } from "../ArrowIcon.styles";
import { useSelector } from "react-redux";
import { IFavCharacters, SingleCharacterProps } from "../../types";
import { useDispatch } from "react-redux";
import { addCharacter, removeCharacter } from "../../store";

const CharactersList = () => {
  const [counter, setCounter] = useState(1);
  let url = `https://swapi.dev/api/people/?page=${counter}`;
  const { data, isLoading, errorMessage } = usePeople(url);
  const [searchValue, setSearchValue] = useState("");
  const favCharacters = useSelector(
    (state: IFavCharacters) => state.favCharacters
  );
  const dispatch = useDispatch();
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

  const handleToggleFavCharacters = (character: SingleCharacterProps) => {
    if (
      !favCharacters.find((el: any) => el.character.name === character.name)
    ) {
      dispatch(
        addCharacter({
          character,
        })
      );
    } else {
      dispatch(
        removeCharacter({
          character,
        })
      );
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <Wrapper>
      <h1>All Characters</h1>

      {isLoading && !errorMessage && <StatusInfo isLoading />}
      {errorMessage && <StatusInfo isError errorMessage={errorMessage} />}

      <label htmlFor="search">Search by name</label>
      <input
        type="text"
        id="search"
        value={searchValue}
        name="search"
        placeholder="e.g. Luke Skywalker"
        onChange={handleInputChange}
      />

      {searchValue &&
        data &&
        data.results.map((character) => {
          if (character.name.toLocaleLowerCase().includes(searchValue))
            return (
              <SingleCharacter
                key={character.name}
                name={character.name}
                birth_year={character.birth_year}
                gender={character.gender}
                number={character.url?.match(/(\d+)/)?.at(0)}
                onClick={() => handleToggleFavCharacters(character)}
              />
            );
        })}

      <DataWrapper>
        {data &&
          !searchValue &&
          data.results.map((character) => {
            return (
              <SingleCharacter
                key={character.name}
                name={character.name}
                birth_year={character.birth_year}
                gender={character.gender}
                number={character.url?.match(/(\d+)/)?.at(0)}
                onClick={() => handleToggleFavCharacters(character)}
              />
            );
          })}
      </DataWrapper>

      <ButtonsWrapper>
        {counter > 1 && (
          <StyledButton className="prev" onClick={() => togglePage("subtract")}>
            <ArrowIcon />
            <span>Prev</span>
          </StyledButton>
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
          <StyledButton className="next" onClick={() => togglePage("add")}>
            <span>Next</span> <ArrowIcon />
          </StyledButton>
        )}
      </ButtonsWrapper>
    </Wrapper>
  );
};

export default CharactersList;
