import { cmsItems } from "@/data/data";
import React from "react";

const CMS = () => {
  return (
    <div className="relative flex w-full flex-col items-center justify-center border-2 border-black bg-white p-4 font-base">
      <div className="flex flex-col items-center justify-center gap-4 sm:flex-wrap xl:flex-row xl:gap-12">
        {cmsItems.map((item, index) => (
          <span
            key={index}
            className="text-2xl duration-300 hover:tracking-wide sm:text-3xl lg:text-4xl"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default CMS;