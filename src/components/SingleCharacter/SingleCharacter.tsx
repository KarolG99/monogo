import React from "react";
import { useSelector } from "react-redux";

import { IFavCharacters, SingleCharacterProps } from "../../types";
import { ArrowIcon } from "../ArrowIcon.styles";
import {
  HeartOutlineIcon,
  HeartSolidIcon,
  SingleCharacterWrapper,
  StyledLink,
} from "./SingleCharacter.styles";

const SingleCharacter = ({
  name,
  birth_year,
  gender,
  number,
  skin_color,
  eye_color,
  mass,
  height,
  isSpecific,
  onClick,
}: SingleCharacterProps) => {
  const favCharacters = useSelector(
    (state: IFavCharacters) => state.favCharacters
  );

  return (
    <SingleCharacterWrapper>
      <button>
        {!favCharacters.find((el: any) => el.character.name === name) ? (
          <HeartOutlineIcon onClick={onClick} />
        ) : (
          <HeartSolidIcon onClick={onClick} />
        )}
      </button>
      <p>
        Name: <span>{name}</span>
      </p>
      <p>
        Year or birth: <span>{birth_year}</span>
      </p>
      <p>
        Gender: <span>{gender}</span>
      </p>
      {isSpecific && (
        <>
          <p>
            Skin color: <span>{skin_color}</span>
          </p>
          <p>
            Eye color: <span>{eye_color}</span>
          </p>
          <p>
            Mass: <span>{mass}</span>
          </p>
          <p>
            Height: <span>{height}</span>
          </p>
        </>
      )}

      {!isSpecific && (
        <StyledLink to={`character/${number}`}>
          More info <ArrowIcon />
        </StyledLink>
      )}
    </SingleCharacterWrapper>
  );
};

export default SingleCharacter;
