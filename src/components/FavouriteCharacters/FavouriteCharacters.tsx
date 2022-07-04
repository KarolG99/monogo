import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeCharacter } from "../../store";
import { IFavCharacters, SingleCharacterProps } from "../../types";
import { DataWrapper, Wrapper } from "../CharactersList/CharactersList.styles";
import SingleCharacter from "../SingleCharacter/SingleCharacter";

const FavouriteCharacters = () => {
  const dispatch = useDispatch();
  const favCharacters = useSelector(
    (state: IFavCharacters) => state.favCharacters
  );

  useEffect(() => {
    console.log(favCharacters);
  }, [favCharacters]);

  const handleRemoveFormFav = (character: SingleCharacterProps) => {
    dispatch(
      removeCharacter({
        character,
      })
    );
  };

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
              handleRemoveFormFav={() => handleRemoveFormFav(character)}
            />
          ))}
      </DataWrapper>
    </Wrapper>
  );
};

export default FavouriteCharacters;
