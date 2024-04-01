import Image from "next/image";

import { capitalizeFirstLetter } from "~/utils";

interface CardProps {
  id: number;
  title: string;
}

export const PokemonCard = ({ id, title }: CardProps) => {
  return (
    <div className="group w-full relative">
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 z-10 items-center justify-center p-1 flex group-hover:bg-opacity-30">
        <span className="text-white text-2xl font-bold group-hover:hidden">
          {capitalizeFirstLetter(title)}
        </span>
      </div>

      <div className="relative w-auto h-auto aspect-square overflow-hidden">
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}/${id}.png`}
          alt={title}
          fill
          className="object-cover group-hover:scale-125 ease-in-out duration-300"
        />
      </div>
    </div>
  );
};
