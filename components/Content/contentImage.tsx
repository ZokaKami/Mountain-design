import React from "react";

export default function contentImage({ image }) {
  return (
    <div className="xl:mx-16 mx-8   ">
      <img className=" w-full h-full object-center" src={image} alt="" />
    </div>
  );
}
