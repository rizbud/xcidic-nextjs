import Image from "next/image";
import Link from "next/link";
import { BASE_IMAGE } from "~/constants/base-image";
import { capitalizeFirstLetter } from "./utils";

interface CardProps {
  id: number;
  title: string;
  description?: string;
}

export const Card = ({ id, title, description }: CardProps) => {
  return (
    <Link href={"/" + title} className="w-full">
      <div className="flex flex-col bg-white shadow-md rounded-lg w-full">
        <div className="relative w-auto h-auto aspect-square rounded-t-lg">
          <Image
            src={`${BASE_IMAGE}/${id}.png`}
            alt={"Random image"}
            layout="fill"
            className="object-cover rounded-t-lg"
          />
        </div>

        <div className="flex flex-col p-2">
          <h2 className="text-lg font-bold">{capitalizeFirstLetter(title)}</h2>
        </div>
      </div>
    </Link>
  );
};
