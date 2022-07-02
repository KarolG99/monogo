import { useEffect, useState } from "react";
import { IPeople, SingleCharacterProps } from "../types";

export const usePeople = (url: string) => {
  const [data, setData] = useState<IPeople>();
  const [singleCharacter, setSingleCharacter] = useState<SingleCharacterProps>();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchPeople = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
        setSingleCharacter(json);
      } catch {
        setErrorMessage("Coś poszło nie tak, spróbuj odświeżyć stronę");
      }
      setIsLoading(false);
    };

    fetchPeople();
  }, [url]);

  return { data, singleCharacter, isLoading, errorMessage };
};
