import React from "react";

export default function NavigationHeader() {
  return (
    <div className="pr-8">
      <ul className="flex flex-col mt-10  items-end space-y-4 pr-4 border-r-2">
        <li>
          <button className="pl-6 float-right ">Start</button>
        </li>
        <li>
          <button className="pl-6 float-right ">01</button>
        </li>
        <li>
          <button className="pl-6 float-right ">02</button>
        </li>
        <li>
          <button className="pl-6 float-right ">03</button>
        </li>
      </ul>
    </div>
  );
}
