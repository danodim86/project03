import { UserDashboardInfo } from "@/interfaces/types";
import React from "react";
import PointsComponent from "../reusable/PointsComponent";
import Image from "next/image";

import paperClipIcon from "../../../public/images/paperclipIcon.png";

interface UserStatsProps {
  userDashboardInfo: UserDashboardInfo;
}

const UserStats: React.FC<UserStatsProps> = ({ userDashboardInfo }) => {
  return (
    <section className="userStatsContainer">
      <div className="leftSection">
        <div className="pointsContainer">
          <h3>Поени до следна рамка</h3>
          <div className="points">
            <PointsComponent number="50" color="lightblue" />
            <PointsComponent number="50" color="tomato" />
            <PointsComponent number="50" color="brown" />
          </div>
        </div>

        <div className="badgesContainer">
          <div className="heading">
            <h3>Најнови беџови</h3>
            <p>Види ги сите</p>
          </div>
          <div className="badges">
            <ul>
              {userDashboardInfo.badges.map((badge, index) => (
                <li key={index}>
                  <div className="badgeIcon" style={{ backgroundColor: badge.imageBackground }}>
                    <Image
                      src={badge.image}
                      alt="badge icon"
                      width={40}
                      height={30}
                    ></Image>
                  </div>
                  <div>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: `<strong>Левел ${badge.level}</strong> беџ за ${badge.type}`,
                      }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="connectionsList">
          <div className="heading">
            <h3>Листа на конекции</h3>
          </div>

          <div className="addConnection">
            <label htmlFor="addConnection">Додади конекција</label>
            <input type="text" id="addConnection" name="addConnection" placeholder="Пребарај" />
          </div>

          <div className="lastAddedContainer">
            <div className="heading">
              <h4>Последно додадени</h4>
              <p>Види ги сите</p>
            </div>

            <ul className="lastAddedList">
              {userDashboardInfo.connectionsList.map((connection, index) => (
                <li className="connectionItem" key={index}>
                  <Image
                    src={connection.image}
                    alt="connection image"
                    width={90}
                    height={90}
                  ></Image>
                  <p>{connection.name}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="rightSection">
        <div className="headingContainer">
          <h2>Купени карти</h2>
        </div>

        <div className="cardsBought">
          <ul>
            {userDashboardInfo.boughtCards.map((card, index) => (
              <li key={index}>
                <div className="cardImage">
                  <Image
                    src={card.image}
                    alt="card image"
                    width={100}
                    height={110}
                  ></Image>
                </div>
                <div className="cardContent">
                  <div className="title">
                    <strong>{card.title}</strong>{" "}
                    {card.content && `: ${card.content}`}
                  </div>
                  <div className="date">
                    {card.date} {card.location}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="discountsContainer">
          <div className="discountCard">
            <p>Освоено:</p>
            <p className="percent">{userDashboardInfo.cardDiscount}</p>
            <p>попуст за следна карта</p>
          </div>

          <div className="friendRecommendationCount">
            <p>Препорачано на:</p>
            <p className="percent">
              {userDashboardInfo.friendRecommendationCount}
            </p>
            <p>пријатели</p>
          </div>
        </div>

        <div className="feedbackContainer">
          <div className="feedbackInput">
            <textarea name="feedbackInput" id="feedbackInput" placeholder="Остави фидбек за нешто што би можеле да подобриме на страната. Кажи ни што ти смета и ние ќе се потрудиме да го подобриме."></textarea>
          </div>

          <div className="sendFeedback">
            <div className="dottedPatternFeedback"></div>
            <Image src={paperClipIcon} alt="paperclip icon" width={30} height={30}></Image>
            <button>Испрати</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserStats;
