import Image from "next/image";
import Link from "next/link";

import { capitalizeFirstLetter } from "~/utils";

interface CardProps {
  id: number;
  title: string;
}

export const PokemonCard = ({ id, title }: CardProps) => {
  return (
    <Link href={"/" + title} className="w-full">
      <div className="flex flex-col bg-white shadow-md rounded-lg w-full">
        <div className="relative w-auto h-auto aspect-square rounded-t-lg">
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}/${id}.png`}
            alt={"Random image"}
            layout="fill"
            className="object-cover rounded-t-lg"
          />
        </div>

        <div className="flex flex-col p-2">
          <span className="text-lg font-bold">
            {capitalizeFirstLetter(title)}
          </span>
        </div>
      </div>
    </Link>
  );
};
