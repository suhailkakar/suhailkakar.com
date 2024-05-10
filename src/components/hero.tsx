import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <header className="py-12 pb-0 px-4 sm:px-6 lg:pl-52">
      <div className="relative mx-auto max-w-xl pt-20  pb-20">
        <div className="flex items-center space-x-3">
          <Image
            src="/suhail.png"
            alt="suhail kakar"
            className="h-20 w-20 rounded-full"
            height={100}
            width={100}
          />
          <div className="flex flex-col items-start">
            <h1 className="text-2xl font-semibold  text-slate-700">
              suhail kakar
            </h1>
            <p className=" text-base  text-slate-400">@suhailkakar</p>
          </div>
        </div>
        <p className="mt-4 text-base leading-7 text-slate-600">
          Hey there! 👋 I&apos;m Suhail. <br />
          <br /> I&apos;e been building apps and websites, from web to mobile to
          blockchain and everything in between. Currently, I&apos;m DevRel at{" "}
          <Link href={"https://livepeer.studio"} className="text-green-600">
            Livepeer Inc.
          </Link>{" "}
          and working on building a decentralized social media platform called{" "}
          <Link
            href={"https://twitter.com/onboard_hq"}
            className="text-orange-600"
          >
            Onboard
          </Link>{" "}
          .
          <br /> <br />
          I&apos;m very active on{" "}
          <Link
            href={"https://twitter.com/suhailkakar"}
            className="text-sky-600"
          >
            Twitter
          </Link>
          . Don&apos;t be shy, say hi
        </p>
      </div>
    </header>
  );
}
