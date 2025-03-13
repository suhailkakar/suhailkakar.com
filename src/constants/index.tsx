import Link from "next/link";

const NAME = "Suhail Kakar";
const BASE_URL = "https://suhailkakar.com";
const TWITTER = "suhailkakar";
const GITHUB = "suhailkakar";
const IMAGE = "/suhail.png";
const OG_IMAGE_BG = "/og-bg.png";
const HOST = "suhailkakar.hashnode.dev";
const HASHNODE_API = "https://gql.hashnode.com";

const DESCRIPTION = (
  <>
    Hey there! 👋 I&apos;m Suhail. <br />
    <br /> I work in tech, from web to mobile to blockchain and everything in
    between. Currently, i work in{" "}
    <Link
      href={"https://tac.build"}
      target="_blank"
      className="text-purple-500"
    >
      tac
    </Link>{" "}
    and we help developers to bring their evm applications to ton and access 950m+
    telegram users.
    <br /> <br />
    I&apos;m very active on{" "}
    <Link
      href={"https://twitter.com/suhailkakar"}
      target="_blank"
      className="text-sky-600"
    >
      Twitter
    </Link>
    . Don&apos;t be shy, say hi
  </>
);

export {
  NAME,
  TWITTER,
  GITHUB,
  IMAGE,
  DESCRIPTION,
  HOST,
  HASHNODE_API,
  OG_IMAGE_BG,
  BASE_URL,
};
