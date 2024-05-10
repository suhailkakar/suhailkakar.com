import { DESCRIPTION, IMAGE, NAME, TWITTER } from "@/constants";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="pt-8 pb-0 px-4 sm:px-6 lg:pl-52">
      <div className="relative mx-auto max-w-xl   pb-20">
        <div className="flex items-center space-x-3">
          <Image
            src={IMAGE}
            alt={NAME}
            className="h-20 w-20 rounded-full"
            height={100}
            width={100}
          />
          <div className="flex flex-col items-start">
            <h1 className="text-2xl font-semibold  text-slate-700">{NAME}</h1>
            <p className=" text-base  text-slate-400">@{TWITTER}</p>
          </div>
        </div>
        <p className="mt-4 text-base leading-7 text-slate-600">{DESCRIPTION}</p>
      </div>
    </div>
  );
}
