import Link from "next/link";
import React from "react";
import OrangeBtn from "./OrangeBtn";

import linkedinIcon from "../../../public/images/heroLinkedin.png";
import facebookIcon from "../../../public/images/heroFacebook.png";
import instagramIcon from "../../../public/images/heroInstagram.png";
import youtubeIcon from "../../../public/images/heroYoutube.png";
import Image, { StaticImageData } from "next/image";
import { HeroSectionProps } from "@/interfaces/types";


const HeroSection: React.FC<HeroSectionProps> = ({
  imageOne,
  imageTwo,
  children,
}) => {
  const backgroundImageOne =
    typeof imageOne === "string" ? imageOne : imageOne?.src;
  const backgroundImageTwo =
    typeof imageTwo === "string" ? imageTwo : imageTwo?.src;

  return (
    <section className="heroSection">
      <div className="dottedPattern"></div>

      {backgroundImageOne && (
        <div
          className="heroImageOneContainer"
          style={{ backgroundImage: `url(${backgroundImageOne})` }}
        ></div>
      )}
      {backgroundImageTwo && (
        <div
          className="heroImageTwoContainer"
          style={{ backgroundImage: `url(${backgroundImageTwo})` }}
        ></div>
      )}

      <div className="heroContent">{children}</div>

      <div className="heroSocialMediaContainer">
        <p>Заследи не на социјалните медиуми</p>
        <ul>
          <li>
            <Link href="https://www.linkedin.com/in/mhumanresourceassociation/">
              <Image src={linkedinIcon} alt="linkedin icon" />
            </Link>
          </li>
          <li>
            <Link href="https://www.instagram.com/mhramk/">
              <Image src={instagramIcon} alt="instagram icon" />
            </Link>
          </li>
          <li>
            <Link href="https://www.facebook.com/mhra.mk/">
              <Image src={facebookIcon} alt="facebook icon" />
            </Link>
          </li>
          <li>
            <Link href="https://www.youtube.com/@macedonianhumanresourcesas2263">
              <Image src={youtubeIcon} alt="youtube icon" />
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default HeroSection;
