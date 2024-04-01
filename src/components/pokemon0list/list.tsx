"use client";

import { useGetPokemons } from "~/hooks/use-get-pokemons";
import { PokemonCard } from "..";
import { CircularProgress, Pagination } from "@mui/material";
import { useEffect, useState } from "react";

export const List = () => {
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);

  const { data, isFetching } = useGetPokemons({
    page,
  });

  useEffect(() => {
    if (data?.count) {
      setCount(Math.round(data.count / 10));
    }
  }, [data?.count]);

  return (
    <div className={"flex flex-col gap-4 w-full items-center"}>
      {isFetching ? (
        <div className="flex gap-2 items-center">
          <CircularProgress size={20} />
          Loading...
        </div>
      ) : null}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
        {data?.results.map((pokemon, idx) => (
          <PokemonCard key={idx} id={page * (idx + 1)} title={pokemon.name} />
        ))}
      </div>

      <Pagination
        count={count}
        color="primary"
        variant="outlined"
        shape="circular"
        size="medium"
        className="self-center"
        onChange={(_, page) => setPage(page)}
      />
    </div>
  );
};
