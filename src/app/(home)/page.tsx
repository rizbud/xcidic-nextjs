import { Metadata } from "next";
import { PokemonList } from "~/components";

export const metadata: Metadata = {
  title: "Pokedex NextJS",
  description: "NextJS Pokedex with TanStack",
};

export default function Home() {
  return <PokemonList />;
}
