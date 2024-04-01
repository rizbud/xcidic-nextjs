import { useQuery } from "@tanstack/react-query";

import { Pokemon } from "~/types/pokemon";

export const useGetPokemon = (name: string) => {
  return useQuery({
    queryKey: ["pokemon", name],
    queryFn: async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}/pokemon/${name}`
      );
      return response.json() as Promise<Pokemon>;
    },
  });
};
