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
            <Link href="https://twitter.com/suhailkakar" target="_blank">
              Twitter
            </Link>
          </li>
          <li>
            <Link target="_blank" href="https://github.com/suhailkakar">
              GitHub
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export const Arrow = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    className="h-5 w-5  stroke-slate-400"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path d="M7 7h10v10" />
    <path d="M7 17 17 7" />
  </svg>
);
