import { AboutBoardUserItem } from "@/interfaces/types";
import Image from "next/image";
import React from "react";

import facebookIcon from "../../../public/images/boardFacebook.png";
import twitterIcon from "../../../public/images/boardTwitter.png";
import instagramIcon from "../../../public/images/boardInstagram.png";
import linkedinIcon from "../../../public/images/boardLinkedin.png";
import Link from "next/link";

interface AboutSectionThree {
  sectionThreeTitle: string;
  boardPeople: AboutBoardUserItem[];
}
const AboutSectionThree: React.FC<AboutSectionThree> = ({
  sectionThreeTitle,
  boardPeople,
}) => {
  return (
    <section className="aboutSectionThreeContainer">
      <h2>{sectionThreeTitle}</h2>
      <div className="dottedPatternAboutSectionThree"></div>
      <div className="boardPeopleContainer">
        {boardPeople.map((boardPerson) => (
          <div className="boardPersonContainer" key={boardPerson.id}>
            <div className="imageContainer">
              <Image
                src={boardPerson.boardImage}
                alt="board person"
                layout="fill"
                objectFit="cover"
              ></Image>
            </div>
            <h3>{boardPerson.baordName}</h3>
            <p>{boardPerson.boardDescription}</p>
            <div className="socialMediaBoard">
              <Link href={boardPerson.socialMedia[0]}>
                {" "}
                <Image
                  src={facebookIcon}
                  alt="facebook Item"
                  width={15}
                  height={15}
                ></Image>
              </Link>
              <Link href={boardPerson.socialMedia[1]}>
                <Image
                  src={twitterIcon}
                  alt="twitter Item"
                  width={15}
                  height={15}
                ></Image>
              </Link>
              <Link href={boardPerson.socialMedia[2]}>
                <Image
                  src={instagramIcon}
                  alt="instagram Item"
                  width={30}
                  height={30}
                ></Image>
              </Link>
              <Link href={boardPerson.socialMedia[3]}>
                <Image
                  src={linkedinIcon}
                  alt="linkedin Item"
                  width={15}
                  height={15}
                ></Image>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutSectionThree;
