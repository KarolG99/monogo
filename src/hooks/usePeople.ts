import { useEffect, useState } from "react";
import { IPeople } from "../types";

export const usePeople = (url: string) => {
  const [data, setData] = useState<IPeople>();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchPeople = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
      } catch {
        setErrorMessage("Coś poszło nie tak, spróbuj odświeżyć stronę");
      }
      setIsLoading(false);
    };

    fetchPeople();
  }, [url]);

  return { data, isLoading, errorMessage };
};
