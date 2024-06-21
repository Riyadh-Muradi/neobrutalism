import React from "react";

const Footer = () => {
  return (
    <footer className="m500:text-sm relative z-40 mx-auto flex h-16 items-center justify-center border-2 border-black bg-white text-center font-base">
      The source code is available on
      <a
        target="_blank"
        href="https://github.com/ekmas/neobrutalism-components"
        className="ml-1 font-bold duration-300 hover:tracking-wide"
      >
        Github
      </a>
    </footer>
  );
};

export default Footer;
