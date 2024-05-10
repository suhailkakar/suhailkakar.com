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
    between. Currently, I&apos;m DevRel at{" "}
    <Link
      href={"https://livepeer.studio"}
      target="_blank"
      className="text-green-600"
    >
      Livepeer Inc.
    </Link>{" "}
    and working on building a decentralized social media platform called{" "}
    <Link
      href={"https://twitter.com/onboard_hq"}
      target="_blank"
      className="text-orange-600"
    >
      Onboard
    </Link>{" "}
    .
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
