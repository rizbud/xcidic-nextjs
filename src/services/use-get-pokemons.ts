import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { BASE_URL } from "~/constants/base-url";

interface PokemonParams {
  limit?: number;
  page?: number;
}

interface Pokemon {
  name: string;
  url: string;
}

interface PokemonResponse {
  results: Pokemon[];
  count: number;
  next: string | null;
  previous: string | null;
}

export const useGetPokemons = ({
  limit = 10,
  page = 1,
}: PokemonParams = {}) => {
  const params = new URLSearchParams({
    limit: limit.toString(),
    offset: page === 1 ? "0" : ((page - 1) * limit).toString(),
  }).toString();

  return useQuery({
    queryKey: ["pokemon", limit, page],
    queryFn: async () => {
      const response = await fetch(`${BASE_URL}/pokemon?${params}`);
      return response.json() as Promise<PokemonResponse>;
    },
  });
};
