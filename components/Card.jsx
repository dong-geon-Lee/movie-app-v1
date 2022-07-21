import Image from "next/image";
import React from "react";
import { ThumbUpIcon } from "@heroicons/react/outline";

export default function Card({ data }) {
  console.log(data, "데이터");

  const baseUrl = "https://image.tmdb.org/t/p/original";

  return (
    <div className="group cursor-pointer mb-8 p-3">
      <div className="transition-transform duration-200 lg:hover:scale-105">
        <Image
          src={`${baseUrl}${data.backdrop_path}`}
          alt={data.link}
          width="100"
          height="50"
          objectFit="cover"
          layout="responsive"
        />

        <div className="text-gray-200 group-hover:text-white mt-1">
          <p className="truncate text-xl">{data.overview}</p>
          <p className="truncate text-xl font-medium">
            {data.title || data.original_name}
          </p>

          <div className="flex">
            <p>{data.release_date || data.first_air_date}</p>
            <ThumbUpIcon className="h-5 ml-2 mr-1" />
            <p>{data.vote_count}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
