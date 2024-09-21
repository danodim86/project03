import { EventItem } from "@/interfaces/types";
import Image from "next/image";
import React from "react";
import LinkButton from "../reusable/LinkButton";
import OrangeBtn from "../reusable/OrangeBtn";

import chainIcon from "../../../public/images/chainIcon.png";

interface EventPricesComponentProps {
  eventInfo: EventItem;
}

const EventPricesComponent: React.FC<EventPricesComponentProps> = ({
  eventInfo,
}) => {
  return (
    <section className="eventPricesContainer">
      <div className="pricesContent">
        <div className="typePricesContainer">
          <div className="individual">Цена за поединци</div>
          <div className="company">Цена за компании</div>
        </div>
        <div className="pricesAmountContainer">
          <div className="individualPrice">{eventInfo.individualPrice}</div>
          <div className="companyPrice">{eventInfo.companyPrice}</div>
        </div>
      </div>
      <div className="imageContainer">
        <Image
          src={eventInfo.pricesImage}
          alt="image of person"
          layout="fill"
          objectFit="cover"
        ></Image>
        <div className="linkButtonContainerEvent">
          <LinkButton
            content="mhraconference.com"
            image={chainIcon}
            title="КУПИ КАРТА"
            href="/annualConference"
          />
        </div>
        <div className="orangeButtonContainerEvent">
          <OrangeBtn href="/annualConference" text="Предложи на пријател" />
        </div>
      </div>
    </section>
  );
};

export default EventPricesComponent;
