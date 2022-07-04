import React from "react";
import { useSelector } from "react-redux";
import { IFavCharacters } from "../../types";
import { DataWrapper, Wrapper } from "../CharactersList/CharactersList.styles";
import SingleCharacter from "../SingleCharacter/SingleCharacter";

const FavouriteCharacters = () => {
  const favCharacters = useSelector(
    (state: IFavCharacters) => state.favCharacters
  );

  console.log(favCharacters);
  return (
    <Wrapper>
      <h1>Favourites</h1>

      <DataWrapper>
        {favCharacters &&
          favCharacters.map((character: any) => (
            <SingleCharacter
              key={character.character.name}
              name={character.character.name}
              birth_year={character.character.birth_year}
              gender={character.character.gender}
              number={character.character.url?.match(/(\d+)/)?.at(0)}
            />
          ))}
      </DataWrapper>
    </Wrapper>
  );
};

export default FavouriteCharacters;
