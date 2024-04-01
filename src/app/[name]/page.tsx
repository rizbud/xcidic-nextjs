import { Metadata } from "next";
import { Detail } from "~/components";

export const metadata: Metadata = {
  title: "Pokedex API Detail",
  description: "Pokedex API Detail",
};

const PokemonDetail = () => {
  return <Detail />;
};

export default PokemonDetail;
