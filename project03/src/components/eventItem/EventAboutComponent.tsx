import { EventItem } from "@/interfaces/types";
import Image from "next/image";
import React from "react";
import LinkButton from "../reusable/LinkButton";

import chainIcon from "../../../public/images/chainIcon.png";

interface EventAboutComponentProps {
  eventInfo: EventItem;
}

const EventAboutComponent: React.FC<EventAboutComponentProps> = ({
  eventInfo,
}) => {
  return (
    <section className="eventAboutComponent">
      <div className="eventAboutContent">
        <h3>Опис:</h3>
        <p className="eventAboutText">{eventInfo.eventAbout}</p>
        <h3>Цел:</h3>
        <p>{eventInfo.eventGoal}</p>
      </div>

      <div className="eventAboutImage">
        <Image
          src={eventInfo.imageOne}
          alt="image of person"
          width={400}
          height={700}
          objectFit="cover"
        ></Image>
        <div className="linkButtonContainer">
          <LinkButton
            content="mhraconference.com"
            href="/annualConference"
            title="КУПИ КАРТА"
            image={chainIcon}
          />
        </div>
      </div>

      <div className="eventAboutDottedPattern"></div>
    </section>
  );
};

export default EventAboutComponent;
