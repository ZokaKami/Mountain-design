import React from "react";

export default function ContentHeader() {
  return (
    <header className="relative flex      ">
      <div className="text-left max-w-xl">
        <div className="flex items-center">
          <hr className="border-[#FBD784] w-[70px] mr-6" />
          <p className="  font-medium text-[#FBD784] tracking-wide uppercase">
            A HIKING GUIDE
          </p>
        </div>
        <h1 className="text-[2.5vw]  leading-tight mt-2">
          Be prepared for the <br /> Mountains and beyond!
        </h1>
        <p className="pt-4">scroll down</p>
      </div>
    </header>
  );
}
