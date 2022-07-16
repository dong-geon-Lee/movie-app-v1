import Image from "next/image";
import { ThumbUpIcon } from "@heroicons/react/outline";

export default function Card({ result }) {
  const BASE_URL = "https://image.tmdb.org/t/p/original";

  console.log(result);

  return (
    <div className="p-3 cursor-pointer hover:text-white active:text-red-400 lg:hover:scale-105 transition-transform duration-200">
      <Image
        src={BASE_URL + result?.backdrop_path}
        width="200"
        height="100"
        layout="responsive"
      />

      <div className="p-2">
        <p className="truncate text-lg">{result.overview}</p>
        <p className="text-lg font-bold">{result.name || result.title}</p>

        <div className="flex">
          <p>{result.release_date || result.first_air_date}</p>
          <ThumbUpIcon className="h-5 ml-3 mr-1" />
          <p>{result.vote_count}</p>
        </div>
      </div>
    </div>
  );
}
