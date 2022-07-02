import React from "react";
import { useParams } from "react-router-dom";
import { usePeople } from "../../hooks/usePeople";
import { Wrapper } from "../CharactersList/CharactersList.styles";
import SingleCharacter from "../SingleCharacter/SingleCharacter";
import StatusInfo from "../StatusInfo/StatusInfo";

const CharacterDetail = () => {
  const { id } = useParams();
  const { singleCharacter, isLoading, errorMessage } = usePeople(
    `https://swapi.dev/api/people/${id}/`
  );

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
        />
      )}
    </Wrapper>
  );
};

export default CharacterDetail;
