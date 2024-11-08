import React from "react";

export default function contentText({
  header,
  footer,
  text,
  tittle,
  sectionorder,
}) {
  return (
    <div className=" flex flex-col justify-center px-4   ">
      <img
        src={sectionorder}
        className="absolute w-1/4 top-[-5vh] left-[-2vw]"
        alt=""
      />
      <div className="flex items-center">
        <hr className="border-[#FBD784] w-[70px] mr-6" />
        <p className="  font-medium text-[#FBD784] tracking-wide uppercase">
          {header}
        </p>
      </div>
      <div>
        <h1 className="text-[2.9vw]  leading-tight mt-2">{tittle}</h1>
      </div>
      <p className=" leading-relaxed py-[1vw]">{text}</p>
      <p className="  text-[#FBD784]">{footer}</p>
    </div>
  );
}
