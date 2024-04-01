import { useQuery } from "@tanstack/react-query";
import { queryClient } from "~/services/query-client";
import { NameUrl } from "~/types/pokemon";

interface PokemonParams {
  limit?: number;
  page?: number;
}

type Pokemon = NameUrl;

interface PokemonResponse {
  results: Pokemon[];
  count: number;
  next: string | null;
  previous: string | null;
}

const fetchPokemons = async ({ limit = 10, page = 1 }: PokemonParams) => {
  const params = new URLSearchParams({
    limit: limit.toString(),
    offset: page === 1 ? "0" : ((page - 1) * limit).toString(),
  }).toString();

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/pokemon?${params}`
  );

  return response.json() as Promise<PokemonResponse>;
};

export const useGetPokemons = ({
  limit = 10,
  page = 1,
}: PokemonParams = {}) => {
  return useQuery({
    queryKey: ["pokemons", limit, page],
    queryFn: async () => fetchPokemons({ limit, page }),
  });
};

export const prefetchPokemons = async () => {
  return queryClient.prefetchQuery({
    queryKey: ["pokemons", 10, 1],
    queryFn: async () => fetchPokemons({ limit: 10, page: 1 }),
  });
};
