"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { Pagination, Skeleton } from "@mui/material";

import { useGetPokemons } from "~/hooks/use-get-pokemons";

import { PokemonCard } from "..";

export const PokemonList = () => {
  const { push } = useRouter();
  const params = useSearchParams();

  const [count, setCount] = useState(0);

  const page = parseInt(params.get("page") || "1");

  const { data, isFetching } = useGetPokemons({
    page,
    limit: 24,
  });

  useEffect(() => {
    if (data?.count) {
      setCount(Math.round(data.count / 24));
    }
  }, [data?.count]);

  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
    push(`/?page=${value}`);
  };

  return (
    <div className={"flex flex-col gap-4 lg:gap-8 w-full items-center"}>
      {data?.results.length === 0 && !isFetching ? (
        <div className="w-full text-center items-center justify-center flex text-white text-lg min-h-72 bg-black bg-opacity-30 rounded-lg">
          No pokemons found.
        </div>
      ) : null}

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0.5 w-full">
        {isFetching
          ? [1, 2, 3, 4, 5, 6].map((_, idx) => (
              <div key={idx} className="w-full aspect-square h-auto">
                <Skeleton
                  key={idx}
                  animation="pulse"
                  variant="rectangular"
                  height={"100%"}
                  className="bg-black bg-opacity-60"
                />
              </div>
            ))
          : null}

        {data?.results.map((pokemon, idx) => {
          const id = page === 1 ? idx + 1 : idx + 1 + (page - 1) * 24;

          return <PokemonCard key={idx} id={id} title={pokemon.name} />;
        })}
      </div>

      <Pagination
        count={count}
        page={page}
        color="secondary"
        variant="text"
        shape="rounded"
        size="medium"
        className="self-center"
        onChange={handlePageChange}
      />
    </div>
  );
};
