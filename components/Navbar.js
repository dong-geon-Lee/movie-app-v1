import { useRouter } from "next/router";
import { requests } from "../utils/requests";

export default function Navbar() {
  const router = useRouter();

  return (
    <div className="flex justify-center bg-gray-600 select-none text-xl text-gray-200 lg:text-2xl">
      {Object.entries(requests).map(([key, { title, url }]) => (
        <h2
          className=" hover:text-white active:text-red-400 cursor-pointer m-6"
          key={key}
          onClick={() => router.push(`?genre=${key}`)}
        >
          {title}
        </h2>
      ))}
    </div>
  );
}
