import { UserDashboardInfo } from "@/interfaces/types";
import Image from "next/image";
import React from "react";

import addIcon from "../../../public/images/UDadd.png";
import connectIcon from "../../../public/images/UDconnect.png";
import letterIcon from "../../../public/images/UDletter.png";
import paperclipIcon from "../../../public/images/UDpaperclip.png";
import recruitIcon from "../../../public/images/UDrecruit.png";
import settingsIcon from "../../../public/images/UDsettings.png";

interface StarterComponentProps {
  userDashboardInfo: UserDashboardInfo;
}

const StarterComponent: React.FC<StarterComponentProps> = ({
  userDashboardInfo,
}) => {
  return (
    <section className="starterComponentUserDashboard">
      <div className="userInfoDetailsContainer">
        <div className="userInfoContainer">
          <div className="pictureNameContainer">
            <div className="pictureNameContainerInner">
              <Image
                src={userDashboardInfo.image}
                alt="user picture"
                width={170}
                height={190}
              ></Image>
              <h2>{userDashboardInfo.name}</h2>
              <p>{userDashboardInfo.city}</p>
            </div>
          </div>

          <div className="occupationCVContainer">
            <div className="occupation">
              <Image
                src={recruitIcon}
                alt="recruit icon"
                width={20}
                height={20}
              ></Image>
              <p>{userDashboardInfo.occupation}</p>
            </div>
            <div className="CV">
              <Image
                src={paperclipIcon}
                alt="paperclip icon"
                width={20}
                height={20}
              ></Image>
              <p>CV</p>
            </div>
          </div>

          <div className="emailPhoneContainer">
            <div className="phone">
              <Image
                src={addIcon}
                alt="add icon"
                width={25}
                height={25}
              ></Image>
              <p>{userDashboardInfo.phoneNum}</p>
            </div>
            <div className="email">
              <Image
                src={letterIcon}
                alt="letter icon"
                width={20}
                height={20}
              ></Image>
              <p>{userDashboardInfo.email}</p>
            </div>
            <div className="settings">
              <Image
                src={settingsIcon}
                alt="settings icon"
                width={20}
                height={20}
              ></Image>
              <p>Поставки</p>
            </div>
          </div>
        </div>

        <div className="connectIconContainer">
          <Image
            src={connectIcon}
            alt="connect icon"
            width={35}
            height={35}
          ></Image>
        </div>
      </div>

      <div className="biographyAndRecommendationsContainer">
        <div className="biography">
          <h2>Кратка биографија</h2>
          <p>{userDashboardInfo.bio}</p>
        </div>

        <div className="recommendations">
          <h2>Препораки</h2>
          <ul>
            {userDashboardInfo.recommendations.map((recommendation, index) => (
              <li key={index}>
                <div className="recommendationUser">
                  <Image
                    src={recommendation.image}
                    alt="recommendation user picture"
                    width={50}
                    height={50}
                  ></Image>
                  <div className="recommendationName">
                    <h3>{recommendation.name}</h3>
                    <p>Пред {recommendation.minutesAgo} минути</p>
                  </div>
                </div>
                <div className="recommendationContent">
                  <p>{recommendation.recommendation}</p>
                </div>
              </li>
            ))}
          </ul>
          <button>Види ги сите</button>
        </div>
      </div>
    </section>
  );
};

export default StarterComponent;
