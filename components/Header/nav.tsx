import React from "react";

export default function Nav() {
  return (
    <div className="px-10 py-6 ">
      <div className="flex justify-between items-center">
        <div className="text-[1.5em]">
          <button>MNTN</button>
        </div>
        <div className="space-x-4">
          <button>Equipment</button>
          <button>About us</button>
          <button>Blog</button>
        </div>
        <div>
          <button>Account</button>
        </div>
      </div>
    </div>
  );
}
