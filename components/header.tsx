import React from "react";
import SocialsHeader from "./Header/socialsHeader.tsx";
import ContentHeader from "./Header/contentHeader.tsx";
import NavigationHeader from "./Header/navigationHeader.tsx";
export default function Header() {
  return (
    <div className="flex justify-between  mt-12  my-auto   px-12 py-12 ">
      <SocialsHeader />
      <ContentHeader />
      <NavigationHeader />
    </div>
  );
}
