"use client";

import { CircularProgress } from "@mui/material";
import { usePathname } from "next/navigation";
import { useGetPokemon } from "~/hooks/use-get-pokemon";

export const Detail = () => {
  const pathname = usePathname();
  const name = pathname.split("/")[1];
  const { data, isFetching } = useGetPokemon(name);

  return (
    <div>
      {isFetching ? (
        <div className="flex gap-2 items-center">
          <CircularProgress size={20} />
          Loading...
        </div>
      ) : null}
      <h1 className="text-2xl font-semibold">{data?.name.toUpperCase()}</h1>
    </div>
  );
};
