import React from "react";

const Footer = () => {
  return (
    <footer className="m500:text-sm container z-40 mt-64 flex w-[90vw] items-center justify-center border-2 border-black bg-main px-5 py-5 text-center font-base dark:border-white">
      The source code is available on
      <a
        target="_blank"
        href="https://github.com/ekmas/neobrutalism-components"
        className="ml-2 font-heading no-underline"
      >
        Github
      </a>
      .
    </footer>
  );
};

export default Footer;
