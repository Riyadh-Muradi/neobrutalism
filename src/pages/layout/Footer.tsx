import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="flex h-full flex-wrap items-center justify-center border-2 border-black p-6 text-sm">
      <footer className="relative z-40 flex h-auto flex-col items-center justify-center space-y-2 bg-white text-center font-base md:flex-row md:space-x-2 md:space-y-0">
        <span className="text-sm md:text-base">Created and designed by</span>
        <Link
          className="ml-1 text-sm font-bold duration-300 hover:tracking-wide md:text-base"
          href={"https://github.com/Riyadh-Muradi"}
          target="_blank"
        >
          Riyadh / Diar Muradi
        </Link>
        <span className="ml-1 text-sm md:text-base">
          Source code available on
        </span>
        <Link
          className="ml-1 text-sm font-bold duration-300 hover:tracking-wide md:text-base"
          href={"https://github.com/Riyadh-Muradi/neobrutalism"}
          target="_blank"
        >
          Github
        </Link>
      </footer>
    </div>
  );
};

export default Footer;
