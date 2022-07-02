// SingleCharacter.tsx
export type SingleCharacterProps = {
  name: string;
  birth_year: string;
  gender: string;
  hair_color?: string;
  skin_color?: string;
  eye_color?: string;
  mass?: string;
  height?: string;
  number?: unknown;
  isSpecific?: boolean;
};

// usePeople.ts
export type IPeople = {
  count?: number;
  next?: string;
  previous?: string;
  results: {
    name: string;
    birth_year: string;
    gender: string;
    hair_color?: string;
    skin_color?: string;
    eye_color?: string;
    mass?: string;
    height?: string;
    url?: string;
  }[];
};

// StatusInfo.tsx
export type StatusInfoProps = {
  isLoading?: boolean;
  isError?: boolean;
  errorMessage?: string;
};
