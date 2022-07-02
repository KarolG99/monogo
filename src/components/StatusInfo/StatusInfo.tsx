import React from "react";
import { StatusInfoProps } from "../../types";
import { StyledStatusInfo } from "./StatusInfo.styles";

const StatusInfo = ({
  isLoading = false,
  isError = false,
  errorMessage,
}: StatusInfoProps) => {
  return (
    <>
      {isLoading && <StyledStatusInfo>Ładowanie ...</StyledStatusInfo>}
      {isError && <StyledStatusInfo isError>{errorMessage}</StyledStatusInfo>}
    </>
  );
};

export default StatusInfo;
