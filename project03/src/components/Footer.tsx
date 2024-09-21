import React from "react";
import Image from "next/image";
import logo from "../../public/images/logoMHRA.png";
import Link from "next/link";

import linkedinIcon from "../../public/images/footerLinkedin.png";
import facebookIcon from "../../public/images/footerFacebook.png";
import instagramIcon from "../../public/images/footerInstagram.png";
import youtubeIcon from "../../public/images/footerYoutube.png";

const Footer = () => {
  return (
    <footer>
      <div className="footerLeftContainer">
        <div className="logoContainer">
          <Image src={logo} alt="footer logo"></Image>
        </div>
        <div className="footerInformationContainer">
          <div className="addressInfoContainer">
            <h3>Адреса</h3>
            <p>Бул. ВМРО бр. 7/1-7</p>
            <p>1000 Скопје, Македонија</p>
          </div>
          <div className="emailInfoContainer">
            <h3>Е-маил</h3>
            <p>contact@mhra.mk</p>
          </div>
        </div>
      </div>

      <div className="footerRightContainer">
        <div className="footerSearchContainer">
          <label htmlFor="footerEmail">Претплати се на билтен</label>
          <input type="text" placeholder="E-маил" id="footerEmail" />
        </div>
        <div className="socialMediaContainer">
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
      </div>
    </footer>
  );
};

export default Footer;
