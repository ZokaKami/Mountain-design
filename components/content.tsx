import React from "react";
import ContentText from "./Content/contentText.tsx";
import ContentImage from "./Content/contentImage.tsx";
import Footer from "./Footer/footer.tsx";
import { sections } from "./content/content.js";
export default function Content() {
  return (
    <div className="space-y-24">
      {sections.map((section) => (
        <div className="grid grid-cols-8 items-center ">
          <div className="col-span-1"></div>
          <div className={`col-span-3 ${section.textorder} relative`}>
            <ContentText
              header={section.header}
              footer={section.footer}
              tittle={section.tittle}
              text={section.text}
              sectionorder={section.sectionorder}
            />
          </div>
          <div className={`col-span-3 ${section.imageorder} relative`}>
            <ContentImage image={section.image} />
          </div>
        </div>
      ))}
      <div className="pt-[20vh] pb-[10vh]">
        <Footer />
      </div>
    </div>
  );
}
