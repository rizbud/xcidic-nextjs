import { Metadata } from "next";
import { List } from "~/components";

export const metadata: Metadata = {
  title: "Pokedex API",
  description: "Pokedex API",
};

export default function Home() {
  return <List />;
}
