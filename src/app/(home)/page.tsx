import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PokemonList } from "~/components";

export const metadata: Metadata = {
  title: "Pokedex NextJS",
  description: "NextJS Pokedex with TanStack",
};

export default async function Home() {
  return (
    <div className="w-full p-4 md:px-8 lg:px-16 bg-gradient-to-b from-emerald-700 to-indigo-800 min-h-screen">
      <div className="mx-auto max-w-screen-xl flex flex-col gap-6">
        <Link href="/">
          <Image
            src="/pokemon.webp"
            alt="Pokemon Logo"
            width={200}
            height={200}
            className="mx-auto"
          />
        </Link>

        <PokemonList />
      </div>
    </div>
  );
}
