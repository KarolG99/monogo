import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { usePeople } from "../../hooks/usePeople";
import { addCharacter } from "../../store";
import { IFavCharacters, SingleCharacterProps } from "../../types";
import { Wrapper } from "../CharactersList/CharactersList.styles";
import SingleCharacter from "../SingleCharacter/SingleCharacter";
import StatusInfo from "../StatusInfo/StatusInfo";

const CharacterDetail = () => {
  const { id } = useParams();
  const { singleCharacter, isLoading, errorMessage } = usePeople(
    `https://swapi.dev/api/people/${id}/`
  );
  const favCharacters = useSelector(
    (state: IFavCharacters) => state.favCharacters
  );
  const dispatch = useDispatch();

  const handleAddToFav = (character: SingleCharacterProps) => {
    if (
      !favCharacters.find((el: any) => el.character.name === character.name)
    ) {
      dispatch(
        addCharacter({
          character,
        })
      );
    }
  };

  return (
    <Wrapper isSpecific>
      {isLoading && !errorMessage && <StatusInfo isLoading />}
      {errorMessage && <StatusInfo isError errorMessage={errorMessage} />}

      {singleCharacter && (
        <SingleCharacter
          name={singleCharacter.name}
          birth_year={singleCharacter.birth_year}
          gender={singleCharacter.gender}
          hair_color={singleCharacter.hair_color}
          skin_color={singleCharacter.skin_color}
          eye_color={singleCharacter.eye_color}
          mass={singleCharacter.mass}
          height={singleCharacter.height}
          isSpecific
          handleAddToFav={() => handleAddToFav(singleCharacter)}
        />
      )}
    </Wrapper>
  );
};

export default CharacterDetail;
