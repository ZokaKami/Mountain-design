import React from "react";

export default function Footer() {
  return (
    <div className="grid grid-cols-8  ">
      <div className="col-span-1"></div>
      <div className="col-span-3  flex flex-col justify-between h-full">
        <div>
          <h3 className="text-[1.8vw]">M N T N </h3>
          <p className="pt-[1vw] leading-relaxed">
            Get out there & discover your next <br />
            slope, mountain & destination!
          </p>
        </div>
        <div className="pt-[1vw]">
          <p className="opacity-40 ">
            Copyright 2023 MNTN, Inc. Terms & Privacy
          </p>
        </div>
      </div>
      <div className="col-span-3 xl:mx-16 mx-8">
        <div className="flex justify-between list-none">
          <div>
            <h3 className="text-[#FBD784] pb-[1vw] text-[1.5vw]">
              More on The Blog
            </h3>
            <li className="space-y-[1vw] ">
              <ul>
                <button>About MNTN</button>
              </ul>
              <ul>
                <button>Contributors & Writers</button>
              </ul>
              <ul>
                <button>Write For Us</button>
              </ul>
              <ul>
                <button>Contact Us</button>
              </ul>
              <ul>
                <button>Privacy Policy</button>
              </ul>
            </li>
          </div>
          <div>
            <h3 className="text-[#FBD784] pb-[1vw]  text-[1.5vw]">
              More on MNTN
            </h3>
            <li className="space-y-[1vw]">
              <ul>
                <button>The Team</button>
              </ul>
              <ul>
                <button>Jobs</button>
              </ul>
              <ul>
                <button>Press</button>
              </ul>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}
