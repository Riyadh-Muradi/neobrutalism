import React from "react";

const Footer = () => {
  return (
    <footer className="m500:text-sm z-40 flex h-16 w-[90.3vw] items-center justify-center rounded-base border-2 border-black bg-main text-center font-base dark:border-white">
      The source code is available on
      <a
        target="_blank"
        href="https://github.com/ekmas/neobrutalism-components"
        className="ml-1 font-heading no-underline"
      >
        Github
      </a>
    </footer>
  );
};

export default Footer;
