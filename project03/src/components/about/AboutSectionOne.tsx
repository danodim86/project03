import { AboutPageSectionOneInterface } from "@/interfaces/types";
import Image from "next/image";
import React from "react";

interface AboutSectionOneProps {
  sectionOneInfo: AboutPageSectionOneInterface;
}

const AboutSectionOne: React.FC<AboutSectionOneProps> = ({
  sectionOneInfo,
}) => {
  return (
    <section className="aboutSectionOne">
      <div className="upperSection">
        <div className="imageContainer">
          <Image
            src={sectionOneInfo.sectionOneImageOne}
            alt="person image"
            layout="fill"
            objectFit="cover"
          ></Image>
        </div>
        <div className="contentContainer">
          <h2>{sectionOneInfo.sectionOneTitle}</h2>
          <h3>{sectionOneInfo.sectionOneSubTitle}</h3>
          <p>{sectionOneInfo.sectionOneParagraphOne}</p>
          <div className="missionVisionContainer">
            <p
              dangerouslySetInnerHTML={{
                __html: sectionOneInfo.sectionOneMissionContent,
              }}
            />
            <p
              dangerouslySetInnerHTML={{
                __html: sectionOneInfo.sectionOneVisionContent,
              }}
            />
          </div>
        </div>
      </div>

      <div className="lowerSection">
        <div className="contentContainer">
          <h3>{sectionOneInfo.SectionOneTitleTwo}</h3>
          <div className="goalsContainer">
            <p
              dangerouslySetInnerHTML={{
                __html: sectionOneInfo.goalsParagraphs[0],
              }}
            />
            <p
              dangerouslySetInnerHTML={{
                __html: sectionOneInfo.goalsParagraphs[1],
              }}
            />
            <p
              dangerouslySetInnerHTML={{
                __html: sectionOneInfo.goalsParagraphs[2],
              }}
            />
          </div>
        </div>
        <div className="imageContainer">
          <Image
            src={sectionOneInfo.sectionOneImageTwo}
            alt="person image"
            layout="fill"
            objectFit="cover"
          ></Image>
        </div>
      </div>

      <div className="aboutSectionOneDottedPattern"></div>
    </section>
  );
};

export default AboutSectionOne;
