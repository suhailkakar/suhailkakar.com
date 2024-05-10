import { GITHUB, TWITTER } from "@/constants";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <header>
      <nav className="relative mx-auto max-w-xl">
        <ul className="flex items-center space-x-6 text-base text-slate-400 cursor-pointer">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link target="_blank" href={`https://twitter.com/${TWITTER}`}>
              Twitter
            </Link>
          </li>
          <li>
            <Link target="_blank" href={`https://github.com/${GITHUB}`}>
              GitHub
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
