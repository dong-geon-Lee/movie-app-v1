import Image from "next/image";
import HeroIcon from "./HeroIcon";
import {
  HomeIcon,
  UserIcon,
  PhoneIcon,
  InformationCircleIcon,
} from "@heroicons/react/solid";

export default function Header() {
  return (
    <div
      className="bg-gray-700 flex flex-col justify-between 
      items-center p-5 select-none sm:flex-row"
    >
      <div className="text-gray-200 flex space-x-8 items-center">
        <HeroIcon Icon={HomeIcon} title={"HOME"} />
        <HeroIcon Icon={UserIcon} title={"ACCOUNT"} />
        <HeroIcon Icon={PhoneIcon} title={"CONTACT"} />
        <HeroIcon Icon={InformationCircleIcon} title={"ABOUT"} />
      </div>

      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg"
        width="100"
        height="100"
        className="cursor-pointer active:brightness-110"
      />
    </div>
  );
}
