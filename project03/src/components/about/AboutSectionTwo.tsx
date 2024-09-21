import { AboutPageSectionTwoInterface } from "@/interfaces/types";
import Image from "next/image";
import React from "react";

interface AboutSectionTwoProps {
  sectionTwoInfo: AboutPageSectionTwoInterface;
}

const AboutSectionTwo: React.FC<AboutSectionTwoProps> = ({
  sectionTwoInfo,
}) => {
  return (
    <section className="aboutSectionTwoContainer">
      <div className="imageContainer">
        <div className="imageInnerContainer">
          <Image
            src={sectionTwoInfo.sectionTwoImage}
            alt="image of president"
            layout="fill"
            objectFit="cover"
          ></Image>
        </div>

        <div className="dottedPatternAboutSectionTwo"></div>
      </div>
      <div className="contentContainer">
        <h2>{sectionTwoInfo.sectionTwoTitle}</h2>
        <h3>{sectionTwoInfo.sectionTwoSubTitle}</h3>
        <p>{sectionTwoInfo.sectionTwoParagraph1}</p>
        <p>{sectionTwoInfo.sectionTwoParagraph2}</p>
        <p>{sectionTwoInfo.sectionTwoParagraph3}</p>
        <p>{sectionTwoInfo.sectionTwoParagraph4}</p>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
